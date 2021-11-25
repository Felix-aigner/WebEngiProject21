using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Schmettr.Domain.Models.Comments;
using Schmettr.Infrastructure.Repository.Interface;

namespace Schmettr.Infrastructure.Repository.Implementation
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(DatabaseContext dbContext) : base(dbContext)
        {
        }

        public Comment Get(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<Comment> GetAsync(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Comment>> GetEntitiesAsync()
        {
            throw new NotImplementedException();
        }

        public Comment Add(Comment entity)
        {
            throw new NotImplementedException();
        }

        public Comment Remove(Comment entity)
        {
            throw new NotImplementedException();
        }

        public void RemoveRange(IEnumerable<Comment> entities)
        {
            throw new NotImplementedException();
        }
    }
}