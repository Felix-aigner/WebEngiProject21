using System;
using Schmettr.Domain.Models.Votes;

namespace Schmettr.Infrastructure.Repository.Interface
{
    public interface IVoteRepository : IRepository<Guid, Vote>
    {
        
    }
}