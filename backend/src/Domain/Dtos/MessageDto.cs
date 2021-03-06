using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace Domain.Dtos
{ 
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public class MessageDto
    {

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [Required]
        [DataMember(Name = "id")]
        public Guid Id { get; set; }

        /// <summary>
        /// Gets or Sets Content
        /// </summary>
        [Required]
        [DataMember(Name="content")]
        public string Content { get; set; }


        /// <summary>
        /// Gets or Sets Owner
        /// </summary>
        [Required]
        [DataMember(Name = "owner")]
        public UserDto Owner { get; set; }


        /// <summary>
        /// Gets or Sets Categories
        /// </summary>
        [DataMember(Name = "categories")]
        public List<CategoryDto> Categories { get; set; }

        /// <summary>
        /// Gets or Sets Comments
        /// </summary>
        [DataMember(Name = "comments")]
        public List<CommentDto> Comments{ get; set; }

        /// <summary>
        /// Gets or Sets Votes
        /// </summary>
        [DataMember(Name = "votes")]
        public List<VoteDto> Votes { get; set; }
    }
}
