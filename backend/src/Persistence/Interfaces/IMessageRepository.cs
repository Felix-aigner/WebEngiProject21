using System;
using System.Collections.Generic;
using Data.Models;

namespace Persistence.Interfaces
{
    public interface IMessageRepository
    {
        Message Create(Message message);
        void Delete(Message message);
        Message GetBy(Guid id);
        List<Message> GetAll();
        List<Message> GetByCategory(List<Category> categories);
    }
}