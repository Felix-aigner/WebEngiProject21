using System;
using System.Collections.Generic;
using Domain.Dtos;

namespace Services.Interfaces
{
    public interface IMessageService
    {
        MessageDto Create(MessageDto messageDto);
        void Delete(Guid id);
        List<MessageDto> GetAll();
        List<MessageDto> GetByCategories(List<CategoryDto> categoriesDto);
        MessageDto GetBy(Guid id);
        //MessageDto AddComment(Guid messageId, CommentDto commentDto);

    }
}