using System;
using Domain.Entities;

namespace Persistence.Interfaces
{
    public interface IVoteRepository
    {
        Vote GetBy(Guid id);
        
        void SaveChanges();
    }
}