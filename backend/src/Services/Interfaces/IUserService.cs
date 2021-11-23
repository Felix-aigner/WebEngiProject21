using System.Net;
using Data.Models;

namespace Services.Interfaces
{
    public interface IUserService
    {
        User CreateUser(User user);

        void DeleteUser(string username);

    }
}