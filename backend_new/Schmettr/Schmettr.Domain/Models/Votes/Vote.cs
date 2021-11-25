using System;
using Schmettr.Domain.Models.Messages;
using Schmettr.Domain.Models.Users;

namespace Schmettr.Domain.Models.Votes
{
    public class Vote
    {
        public Guid VoteId { get; set; }
        public Guid MessageId { get; set; }
        public Message Message { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
        public VoteState VoteState { get; set; }
    }
}