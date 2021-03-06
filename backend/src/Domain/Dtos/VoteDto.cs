using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Domain.Entities;

namespace Domain.Dtos
{
    public class VoteDto
    {
        /// <summary>
        /// Gets or Sets Owner
        /// </summary>
        [Required]
        [DataMember(Name = "id")]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets Owner
        /// </summary>
        [Required]
        [DataMember(Name = "owner")]
        public UserDto Owner { get; set; }

        /// <summary>
        /// Gets or Sets Content
        /// </summary>
        [Required]
        [DataMember(Name = "voteEnum")]
        public VoteEnum VoteEnum { get; set; }
    }
}