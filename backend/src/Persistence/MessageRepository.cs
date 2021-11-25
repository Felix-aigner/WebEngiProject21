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

        public Message Create(MessageCreateDto messageDto)
        {
            var owner = _dbContext.Users.FirstOrDefault(u => u.Id == messageDto.OwnerId);
            var categories = _dbContext.Categories.Where(c => messageDto.CategoriesId.Contains(c.Id))?.ToList();
            var message = _mapper.Map<Message>(messageDto);
            message.Owner = owner;
            message.Categories = categories;
            var createdMessage = _dbContext.Messages.Add(message).Entity;
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
            return _dbContext.Messages
                             .Include(m => m.Owner)
                             .Include(m => m.Categories)
                             .Include(m => m.Comments)
                             .ThenInclude(c => c.Owner)
                             .Include(m => m.Votes)
                             .ThenInclude(v => v.Owner)
                             .SingleOrDefault(m => m.Id == id);
        }

        public List<Message> GetAll()
        {
            return _dbContext.Messages.OrderBy(m => m.CreatedDate)
                             .Include(m => m.Owner)
                             .Include(m => m.Categories)
                             .Include(m => m.Comments)
                             .ThenInclude(c => c.Owner)
                             .Include(m => m.Votes)
                             .ThenInclude(v => v.Owner)
                             .ToList();
        }

        public List<Message> GetByCategories(List<Guid> categoryIds)
        {
            return _dbContext.Messages
                             .Include(m => m.Owner)
                             .Include(m => m.Categories)
                             .Include(m => m.Comments)
                             .ThenInclude(c => c.Owner)
                             .Include(m => m.Votes)
                             .ThenInclude(v => v.Owner)
                             .Where(m => m.Categories.Any(c => categoryIds.Contains(c.Id)))
                             .ToList();
        }

        public Message AddComment(Message message, Comment comment)
        {
            message.Comments.Add(comment);
            _dbContext.SaveChanges();
            return message;
        }

        public Message AddVote(Message message, Vote vote)
        {
            message.Votes.Add(vote);
            _dbContext.SaveChanges();
            return message;
        }

        public void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
    }
}