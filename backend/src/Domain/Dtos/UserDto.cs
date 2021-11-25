using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace Domain.Dtos
{ 
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public class UserDto
    {

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [Required]
        [DataMember(Name = "id")]
        public Guid Id { get; set; }

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

    }
}
