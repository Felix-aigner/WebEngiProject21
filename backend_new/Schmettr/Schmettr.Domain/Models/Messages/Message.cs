using System;
using System.Collections;
using System.Collections.Generic;
using Schmettr.Domain.Models.Categories;
using Schmettr.Domain.Models.Comments;
using Schmettr.Domain.Models.Users;
using Schmettr.Domain.Models.Votes;

namespace Schmettr.Domain.Models.Messages
{
    public class Message
    {
        public Guid MessageId { get; set; }
        public string Text { get; set; }
        
        public Guid CategoryId { get; set; }
        public Category Category { get; set; }
        
        public ICollection<Comment> Comments { get; set; }
        
        public Guid UserId { get; set; }
        public User User { get; set; }

        public ICollection<Vote> Votes { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}