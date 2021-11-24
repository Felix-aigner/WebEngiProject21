using Domain.Dtos;
using Domain.Entities;

namespace Services.Interfaces
{
    public interface IUserService
    {
        UserDto Create(UserDto userDto);
        UserDto GetBy(string username);
        void Delete(string username);
    }
}