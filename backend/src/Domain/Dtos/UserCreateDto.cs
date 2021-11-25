using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace Domain.Dtos
{ 
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public class UserCreateDto
    {
        /// <summary>
        /// Gets or Sets Username
        /// </summary>
        [Required]
        [DataMember(Name="username")]
        public string Username { get; set; }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [Required]
        [DataMember(Name="email")]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets Password
        /// </summary>
        [Required]
        [DataMember(Name="password")]
        public string Password { get; set; }

    }
}
