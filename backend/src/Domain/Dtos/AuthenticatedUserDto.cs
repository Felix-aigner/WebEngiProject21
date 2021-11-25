using System;

namespace Domain.Dtos
{
    public class AuthenticatedUserDto
    {
        public Guid Id { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }
        public string accessToken { get; set; }
    }
}