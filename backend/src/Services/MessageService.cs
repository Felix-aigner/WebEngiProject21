using System;
using System.Collections.Generic;
using AutoMapper;
using Domain.Dtos;
using Domain.Entities;
using Persistence.Interfaces;
using Services.Exceptions;
using Services.Interfaces;

namespace Services
{
    public class MessageService : IMessageService
    {
        private readonly IMessageRepository _messageRepository;
        private readonly IMapper _mapper;

        public MessageService(IMessageRepository messageRepository, IMapper mapper)
        {
            _messageRepository = messageRepository;
            _mapper = mapper;
        }
        public MessageDto Create(MessageDto messageDto)
        {
            var createdMessage = _messageRepository.Create(messageDto);
            return _mapper.Map<MessageDto>(createdMessage);
        }

        public void Delete(Guid id)
        {
            var message = _messageRepository.GetBy(id);
            if (message == null)
            {
                throw new MessageNotFoundException($"Message with id {id} was not found");
            }

            var messageToDelete = _mapper.Map<MessageDto>(message);
            _messageRepository.Delete(messageToDelete);
        }

        public List<MessageDto> GetAll()
        {
            var allMessages = _messageRepository.GetAll();
            return _mapper.Map<List<MessageDto>>(allMessages);
        }

        public List<MessageDto> GetByCategories(List<CategoryDto> categoriesDto)
        {
            var messages= _messageRepository.GetByCategory(categoriesDto);
            return _mapper.Map<List<MessageDto>>(messages);
        }

        public MessageDto GetBy(Guid id)
        {
            var message = _messageRepository.GetBy(id);
            return _mapper.Map<MessageDto>(message);
        }

        //public MessageDto AddComment(Guid messageId, CommentDto commentDto)
        //{
        //    var message = _messageRepository.GetBy(messageId);
        //    var comment = _mapper.Map<Comment>(commentDto);
        //    var modifiedMessage = _messageRepository.AddComment(message, comment);
        //    return _mapper.Map<MessageDto>(modifiedMessage);
        //}
    }
}