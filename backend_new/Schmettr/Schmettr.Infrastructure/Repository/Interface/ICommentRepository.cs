using System;
using Schmettr.Domain.Models.Comments;

namespace Schmettr.Infrastructure.Repository.Interface
{
    public interface ICommentRepository : IRepository<Guid, Comment>
    {
        
    }
}