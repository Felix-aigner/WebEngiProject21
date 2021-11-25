using System;
using System.Collections.Generic;
using Domain.Dtos;
using Domain.Entities;

namespace Persistence.Interfaces
{
    public interface IMessageRepository
    {
        Message Create(MessageCreateDto messageDto);
        void Delete(Message message);
        Message GetBy(Guid id);
        List<Message> GetAll();
        List<Message> GetByCategories(List<Guid> categoryIds);
        Message AddComment(Message message, Comment comment);
        Message AddVote(Message message, Vote vote);
        void SaveChanges();
    }
}