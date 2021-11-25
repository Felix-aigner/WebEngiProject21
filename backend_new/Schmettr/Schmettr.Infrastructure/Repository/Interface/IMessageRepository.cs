using System;
using Schmettr.Domain.Models.Messages;

namespace Schmettr.Infrastructure.Repository.Interface
{
    public interface IMessageRepository : IRepository<Guid, Message>
    {
        
    }
}