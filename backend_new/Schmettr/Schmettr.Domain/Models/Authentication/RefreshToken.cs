using System;
using Schmettr.Domain.Models.Users;

namespace Schmettr.Domain.Models.Authentication
{
    public class RefreshToken
    {
        public Guid RefreshTokenId { get; init; }
        public string Token { get; init; }
        public Guid JwtId { get; init; }
        public Guid UserId { get; init; }
        public User User { get; private set; }
        public DateTime CreatedAt { get; init; }
        public DateTime ExpiresAt { get; private set; }

        public RefreshToken()
        {
            
        }

        public RefreshToken(Guid refreshTokenId, string token, Guid jwtId, Guid userId, User user, DateTime createdAt, DateTime expiresAt)
        {
            RefreshTokenId = refreshTokenId;
            Token = token;
            JwtId = jwtId;
            UserId = userId;
            User = user;
            CreatedAt = createdAt;
            ExpiresAt = expiresAt;
        }
    }
}