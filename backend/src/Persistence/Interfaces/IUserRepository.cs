using System;
using Data.Models;

namespace Persistence.Interfaces
{
    public interface IUserRepository
    {
        User GetUser(Guid id);
        User GetUser(string username);
        User CreateUser(User user);
        void DeleteUser(User user);
        bool UsernameAlreadyExists(string username);
    }
}