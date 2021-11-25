using System;
using Schmettr.Domain.Models.Users;

namespace Schmettr.Infrastructure.Repository.Interface
{
    public interface IUserRepository : IRepository<Guid, User>
    {
        
    }
}