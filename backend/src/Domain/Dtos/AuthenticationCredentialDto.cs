using System.ComponentModel.DataAnnotations;

namespace Domain.Dtos
{
    public class AuthenticationCredentialDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}