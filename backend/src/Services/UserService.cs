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

        public User Create(User user)
        {
            var userNameAlreadyExists = _userRepository.UsernameAlreadyExists(user.Username);
            if (!userNameAlreadyExists)
            {
               return _userRepository.Create(user);
            }
            throw new UsernameAlreadyExistsException($"Username {user.Username} already exists");
        }

        public User GetBy(string username)
        {
            var user = _userRepository.GetBy(username);

            if (user == null)
            {
                throw new UserNotFoundException($"User with Username {username} not found");
            }

            return user;
        }

        public void Delete(string username)
        {
            var userToDelete = GetBy(username);

            _userRepository.Delete(userToDelete);
        }
    }
}