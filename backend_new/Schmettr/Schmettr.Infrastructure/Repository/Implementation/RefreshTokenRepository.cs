using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Schmettr.Domain.Models.Authentication;
using Schmettr.Infrastructure.Repository.Interface;

namespace Schmettr.Infrastructure.Repository.Implementation
{
    public class RefreshTokenRepository : BaseRepository, IRefreshTokenRepository
    {
        public RefreshTokenRepository(DatabaseContext dbContext) : base(dbContext)
        {
        }

        public RefreshToken Get(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<RefreshToken> GetAsync(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<RefreshToken>> GetEntitiesAsync()
        {
            throw new NotImplementedException();
        }

        public RefreshToken Add(RefreshToken entity)
        {
            throw new NotImplementedException();
        }

        public RefreshToken Remove(RefreshToken entity)
        {
            throw new NotImplementedException();
        }

        public void RemoveRange(IEnumerable<RefreshToken> entities)
        {
            throw new NotImplementedException();
        }
    }
}