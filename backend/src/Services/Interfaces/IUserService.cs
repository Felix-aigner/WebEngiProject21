using System;
using Domain.Dtos;
using Domain.Entities;

namespace Services.Interfaces
{
    public interface IUserService
    {
        UserDto Create(UserCreateDto userDto);
        User GetBy(string username);
        UserDto Update(Guid userId, string username);
        void Delete(string username);
    }
}