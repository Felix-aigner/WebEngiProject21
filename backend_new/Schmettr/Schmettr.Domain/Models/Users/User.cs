using System;
using System.Collections;
using System.Collections.Generic;
using Schmettr.Domain.Models.Authentication;
using Schmettr.Domain.Models.Comments;
using Schmettr.Domain.Models.Messages;
using Schmettr.Domain.Models.Votes;

namespace Schmettr.Domain.Models.Users
{
    public class User
    {
        public Guid UserUserId { get; init; }
        public string Name { get; private set; }
        public string Username { get; private set; }
        public string Password { get; private set; }
        public bool isGoogleAccount { get; set; }

        public DateTime CreatedAt { get; init; }
        public DateTime UpdatedAt { get; private set; }
        
        public ICollection<Vote> Votes { get; set; }
        public ICollection<Message> Messages { get; set; }
        public ICollection<Comment> Comments { get; set; }
        
        public ICollection<RefreshToken> RefreshTokens { get; set; }

        public User()
        {
            
        }

        public User(Guid userId, string name, string username, string password, DateTime createdAt, DateTime updatedAt)
        {
            UserUserId = userId;
            Name = name;
            Username = username;
            Password = password;
            CreatedAt = createdAt;
            UpdatedAt = updatedAt;
        }
    }
}