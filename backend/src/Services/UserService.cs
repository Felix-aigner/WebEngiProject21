using System;
using System.Security.Authentication;
using AutoMapper;
using Domain.Dtos;
using Domain.Entities;
using Persistence.Interfaces;
using Services.Exceptions;
using Services.Interfaces;

namespace Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public UserDto Create(UserCreateDto userDto)
        {
            var userNameAlreadyExists = _userRepository.UsernameAlreadyExists(userDto.Username);
            if (userNameAlreadyExists)
            {
                throw new UsernameAlreadyExistsException($"Username {userDto.Username} already exists");
            }

            userDto.Password = BCrypt.Net.BCrypt.HashPassword(userDto.Password);
            
            var createdUser = _userRepository.Create(userDto);
            return _mapper.Map<UserDto>(createdUser);
        }

        public UserDto GetBy(string username)
        {
            var user = GetUserBy(username);
            return _mapper.Map<UserDto>(user);
        }

        private User GetUserBy(string username)
        {
            var user = _userRepository.GetBy(username);

            if (user == null)
            {
                throw new UserNotFoundException($"User with Username {username} not found");
            }

            return user;
        }

        public UserDto Update(Guid userId, string username)
        {
            if (_userRepository.UsernameAlreadyExists(username))
            {
                throw new UsernameAlreadyExistsException($"Username {username} already exists");
            }
            var user = _userRepository.GetBy(userId);
            user.Username = username;
            _userRepository.Update(user);
            return _mapper.Map<UserDto>(user);
        }

        public void Delete(string username)
        {
            var userToDelete = GetUserBy(username);
            _userRepository.Delete(userToDelete);
        }

        public UserDto Authenticate(string username, string password)
        {
            var user = _userRepository.GetBy(username);
            
            if (user == null || BCrypt.Net.BCrypt.Verify(password, user.Password))
            {
                throw new AuthenticationException($"Either username or password is wrong");
            }

            return _mapper.Map<UserDto>(user);
        }

        public UserDto SocialAuthentication(string email, string username)
        {
            var user = _mapper.Map<UserDto>(_userRepository.GetByEmail(email));

            if (user == null)
            {
                user = Create(new UserCreateDto()
                {
                    Email = email,
                    Username = username,
                    Password = ""
                });
            }
            
            return user;
        }
    }
}