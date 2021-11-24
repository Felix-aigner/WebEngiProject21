using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Schmettr.Domain.Models.Votes;
using Schmettr.Infrastructure.Repository.Interface;

namespace Schmettr.Infrastructure.Repository.Implementation
{
    public class VoteRepository : BaseRepository, IVoteRepository
    {
        public VoteRepository(DatabaseContext dbContext) : base(dbContext)
        {
        }

        public Vote Get(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<Vote> GetAsync(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Vote>> GetEntitiesAsync()
        {
            throw new NotImplementedException();
        }

        public Vote Add(Vote entity)
        {
            throw new NotImplementedException();
        }

        public Vote Remove(Vote entity)
        {
            throw new NotImplementedException();
        }

        public void RemoveRange(IEnumerable<Vote> entities)
        {
            throw new NotImplementedException();
        }
    }
}