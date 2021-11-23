using System;
using System.Net;
using Data.Models;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Persistence.Interfaces;
using Services.Exceptions;
using Services.Interfaces;

namespace Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public User CreateUser(User user)
        {
            var userNameAlreadyExists = _userRepository.UsernameAlreadyExists(user.Username);
            if (!userNameAlreadyExists)
            {
               return _userRepository.CreateUser(user);
            }
            throw new UsernameAlreadyExistsException($"Username {user.Username} already exists");
        }

        public void DeleteUser(string username)
        {
            var userToDelete = _userRepository.GetUser(username);
            
            if (userToDelete == null)
            {
                throw new UserNotFoundException($"User with Username {username} not found");
            }

            _userRepository.DeleteUser(userToDelete);
        }
    }
}