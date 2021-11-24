using System;
using System.Collections.Generic;
using Data.Models;
using Persistence.Interfaces;
using Services.Exceptions;
using Services.Interfaces;

namespace Services
{
    public class MessageService : IMessageService
    {
        private readonly IMessageRepository _messageRepository;

        public MessageService(IMessageRepository messageRepository)
        {
            _messageRepository = messageRepository;
        }
        public Message Create(Message message)
        {
            return _messageRepository.Create(message);
        }

        public void Delete(Guid id)
        {
            var message = _messageRepository.GetBy(id);
            if (message == null)
            {
                throw new MessageNotFoundException($"Message with id {id} was not found");
            }
            _messageRepository.Delete(message);
        }

        public List<Message> GetAll()
        {
            return _messageRepository.GetAll();
        }

        public List<Message> GetByCategories(List<Category> categories)
        {
            return _messageRepository.GetByCategory(categories);
        }

        public Message GetBy(Guid id)
        {
            return _messageRepository.GetBy(id);
        }
    }
}