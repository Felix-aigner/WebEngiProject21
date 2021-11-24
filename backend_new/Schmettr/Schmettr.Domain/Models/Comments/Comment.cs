using System;
using Schmettr.Domain.Models.Users;

namespace Schmettr.Domain.Models.Comments
{
    public class Comment
    {
        public Guid CommentId { get; set; }
        public string Text { get; set; }
        public DateTime CreatedAt { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}