using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Schmettr.Domain.Models.Messages;
using Schmettr.Infrastructure.Repository.Interface;

namespace Schmettr.Infrastructure.Repository.Implementation
{
    public class MessageRepository : BaseRepository, IMessageRepository
    {
        public MessageRepository(DatabaseContext dbContext) : base(dbContext)
        {
        }

        public Message Get(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<Message> GetAsync(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Message>> GetEntitiesAsync()
        {
            throw new NotImplementedException();
        }

        public Message Add(Message entity)
        {
            throw new NotImplementedException();
        }

        public Message Remove(Message entity)
        {
            throw new NotImplementedException();
        }

        public void RemoveRange(IEnumerable<Message> entities)
        {
            throw new NotImplementedException();
        }
    }
}