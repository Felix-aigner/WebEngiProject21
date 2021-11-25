using System;
using System.Linq;
using AutoMapper;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Persistence.Interfaces;

namespace Persistence
{
    public class VoteRepository : IVoteRepository
    {
        private readonly DatabaseContext _dbContext;
        private readonly IMapper _mapper;

        public VoteRepository(DatabaseContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }
        
        public Vote GetBy(Guid id)
        {
            return _dbContext.Votes.Include(x => x.Message)
                .Include(x => x.Owner)
                .FirstOrDefault(x => x.Id == id);
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}