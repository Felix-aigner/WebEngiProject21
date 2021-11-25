using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Domain.Dtos;
using Domain.Entities;
using Microsoft.IdentityModel.Tokens;
using Persistence.Interfaces;
using Web.Options;

namespace Web.Security
{
    public class JwtService : IJwtService
    {
        private readonly JwtOption option;

        public JwtService(JwtOption option)
        {
            this.option = option;
        }

        public string GenerateAccessToken(UserDto user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(option.Secret));
            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: option.Issuer,
                claims: new Claim[]
                {
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.NameIdentifier, user.Username),
                },
                expires: DateTime.UtcNow.Add(option.SecurityTokenLifetime),
                signingCredentials: signingCredentials
            );
            
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}