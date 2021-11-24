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

        public UserDto Create(UserDto userDto)
        {
            var userNameAlreadyExists = _userRepository.UsernameAlreadyExists(userDto.Username);
            if (userNameAlreadyExists)
            {
                throw new UsernameAlreadyExistsException($"Username {userDto.Username} already exists");
            }
            var createdUser = _userRepository.Create(userDto);
            return _mapper.Map<UserDto>(createdUser);
        }

        public UserDto GetBy(string username)
        {
            var user = _userRepository.GetBy(username);

            if (user == null)
            {
                throw new UserNotFoundException($"User with Username {username} not found");
            }

            return _mapper.Map<UserDto>(user);
        }

        public void Delete(string username)
        {
            var userToDelete = GetBy(username);

           // _userRepository.Delete(userToDelete);
        }
    }
}