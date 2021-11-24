using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Schmettr.Domain.Models.Users;
using Schmettr.Infrastructure.Repository.Interface;

namespace Schmettr.Infrastructure.Repository.Implementation
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(DatabaseContext dbContext) : base(dbContext)
        {
        }

        public User Get(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<User> GetAsync(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<User>> GetEntitiesAsync()
        {
            throw new NotImplementedException();
        }

        public User Add(User entity)
        {
            throw new NotImplementedException();
        }

        public User Remove(User entity)
        {
            throw new NotImplementedException();
        }

        public void RemoveRange(IEnumerable<User> entities)
        {
            throw new NotImplementedException();
        }
    }
}