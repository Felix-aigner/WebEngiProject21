using System;
using System.Collections.Generic;
using Domain.Dtos;

namespace Services.Interfaces
{
    public interface IMessageService
    {
        MessageDto Create(MessageCreateDto messageDto);
        void Delete(Guid id);
        List<MessageDto> GetAll();
        List<MessageDto> GetByCategories(List<Guid> categoryIds);
        MessageDto GetBy(Guid id);
        MessageDto AddComment(Guid messageId, CommentCreateDto commentDto);

        MessageDto AddVote(Guid messageId, VoteCreateDto voteDto);
    }
}