using System;
using Data.Models;

namespace Persistence.Interfaces
{
    public interface IUserRepository
    {
        User GetBy(Guid id);
        User GetBy(string username);
        User Create(User user);
        void Delete(User user);
        bool UsernameAlreadyExists(string username);
    }
}