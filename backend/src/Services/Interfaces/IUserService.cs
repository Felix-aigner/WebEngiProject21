using System;
using Domain.Dtos;
using Domain.Entities;

namespace Services.Interfaces
{
    public interface IUserService
    {
        UserDto Create(UserCreateDto userDto);
        UserDto GetBy(string username);
        UserDto Update(Guid userId, string username);
        void Delete(string username);
        UserDto Authenticate(string username, string password);
        UserDto SocialAuthentication(string email, string username);
    }
}