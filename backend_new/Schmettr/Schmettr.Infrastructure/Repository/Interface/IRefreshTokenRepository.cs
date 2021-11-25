using System;
using Schmettr.Domain.Models.Authentication;

namespace Schmettr.Infrastructure.Repository.Interface
{
    public interface IRefreshTokenRepository : IRepository<Guid, RefreshToken>
    {
        
    }
}