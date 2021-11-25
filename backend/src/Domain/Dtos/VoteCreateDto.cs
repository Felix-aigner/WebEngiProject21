using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Domain.Entities;

namespace Domain.Dtos
{
    public class VoteCreateDto
    {
        /// <summary>
        /// Gets or Sets Owner
        /// </summary>
        [Required]
        [DataMember(Name = "ownerId")]
        public Guid OwnerId { get; set; }

        /// <summary>
        /// Gets or Sets Content
        /// </summary>
        [Required]
        [DataMember(Name = "voteEnum")]
        public VoteEnum VoteEnum { get; set; }
    }
}