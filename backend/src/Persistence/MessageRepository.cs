using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Domain.Dtos;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Persistence.Interfaces;

namespace Persistence
{
    public class MessageRepository : IMessageRepository
    {
        private readonly DatabaseContext _dbContext;
        private readonly IMapper _mapper;

        public MessageRepository(DatabaseContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public Message Create(MessageDto messageDto)
        {
            var owner = _dbContext.Users.FirstOrDefault(u => u.Id == messageDto.OwnerId);
            var message = _mapper.Map<Message>(messageDto);
            message.Owner = owner;
            var createdMessage = _dbContext.Messages.Add(message).Entity;
            _dbContext.SaveChanges();
            return createdMessage;
        }

        public void Delete(MessageDto messageDto)
        {
            var message = _mapper.Map<Message>(messageDto);
            _dbContext.Remove(message);
            _dbContext.SaveChanges();
        }

        public Message GetBy(Guid id)
        {
            return _dbContext.Messages
                             //.Include(m => m.Owner)
                             //.Include(m => m.Categories)
                             //.Include(m => m.Comments)
                             .SingleOrDefault(m => m.Id == id);
        }

        public List<Message> GetAll()
        {
            return _dbContext.Messages.OrderBy(m => m.CreatedDate).ToList();
        }

        public List<Message> GetByCategory(List<CategoryDto> categoriesDto)
        {
            var categories = _mapper.Map<List<Category>>(categoriesDto);
            return _dbContext.Messages.Where(m => m.Categories.Any(categories.Contains)).ToList();
        }

        //public Message AddComment(MessageDto message, CommentDto comment)
        //{
        //    _dbContext.Users.Attach(message.Owner);
        //    message.Comments.Add(comment);
        //    _dbContext.SaveChanges();
        //    return message;
        //}
    }
}