using System.Net;
using Data.Models;

namespace Services.Interfaces
{
    public interface IUserService
    {
        User Create(User user);
        User GetBy(string username);
        void Delete(string username);
    }
}