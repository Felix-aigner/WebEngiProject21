using System;
using System.Collections.Generic;
using System.Linq;
using Data.Models;
using Microsoft.EntityFrameworkCore;
using Persistence.Interfaces;

namespace Persistence
{
    public class MessageRepository : IMessageRepository
    {
        private readonly DatabaseContext _dbContext;

        public MessageRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }
        public Message Create(Message message)
        {
            message.CreatedOn = DateTime.Now;
            _dbContext.Users.Attach(message.Owner);
            var createdMessage = _dbContext.Messages.Add(message).Entity;
            //_dbContext.Entry(message.Owner).State = EntityState.Detached;
            _dbContext.SaveChanges();
            return createdMessage;
        }

        public void Delete(Message message)
        {
            _dbContext.Remove(message);
            _dbContext.SaveChanges();
        }

        public Message GetBy(Guid id)
        {
            return _dbContext.Messages.SingleOrDefault(m => m.Id == id);
        }

        public List<Message> GetAll()
        {
            return _dbContext.Messages.ToList();
        }

        public List<Message> GetByCategory(List<Category> categories)
        {
            return _dbContext.Messages.Where(m => m.Categories.Any(categories.Contains)).ToList();
        }
    }
}