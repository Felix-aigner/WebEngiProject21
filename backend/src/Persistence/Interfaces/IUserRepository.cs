using System;
using Domain.Dtos;
using Domain.Entities;

namespace Persistence.Interfaces
{
    public interface IUserRepository
    {
        User GetBy(Guid id);
        User GetBy(string username);
        User Create(UserDto userDto);
        void Delete(UserDto userDto);
        bool UsernameAlreadyExists(string username);
    }
}