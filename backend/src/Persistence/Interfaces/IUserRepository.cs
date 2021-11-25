using System;
using Domain.Dtos;
using Domain.Entities;

namespace Persistence.Interfaces
{
    public interface IUserRepository
    {
        User GetBy(Guid id);
        User GetBy(string username);
        User GetByEmail(string email);
        User Create(UserCreateDto userDto);
        void Update(User user);
        void Delete(User user);
        bool UsernameAlreadyExists(string username);
    }
}