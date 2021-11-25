using System.ComponentModel.DataAnnotations;

namespace Domain.Dtos
{
    public class SocialAuthenticationCredentialDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string IdToken { get; set; }
    }
}