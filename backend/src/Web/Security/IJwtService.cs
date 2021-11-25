using System;
using System.Security.Claims;
using Domain.Dtos;
using Domain.Entities;

namespace Web.Security
{
    public interface IJwtService
    {
        public string GenerateAccessToken(UserDto user);

        // public RefreshToken GenerateRefreshToken(Guid jwtId, Guid userId);
        //
        // public bool RefreshTokenContainsSecurityToken(RefreshToken refreshToken, ClaimsPrincipal securityToken);
        // public ClaimsPrincipal GetPrincipalFromToken(string token);
        //
        // public bool IsValidRefreshToken(RefreshToken refreshToken, string securityToken, out string errorMessage);
    }
}