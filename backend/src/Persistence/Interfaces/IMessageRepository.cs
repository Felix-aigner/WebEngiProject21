using System;
using System.Collections.Generic;
using Domain.Dtos;
using Domain.Entities;

namespace Persistence.Interfaces
{
    public interface IMessageRepository
    {
        Message Create(MessageDto messageDto);
        void Delete(MessageDto messageDto);
        Message GetBy(Guid id);
        List<Message> GetAll();
        List<Message> GetByCategory(List<CategoryDto> categoriesDto);
        //Message AddComment(MessageDto messageDto, CommentDto commentDto);
    }
}