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
    public class MessageCreateDto
    { 
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
        [DataMember(Name = "ownerId")]
        public Guid OwnerId { get; set; }


        /// <summary>
        /// Gets or Sets Categories
        /// </summary>
        [DataMember(Name = "categoriesId")]
        public List<Guid> CategoriesId { get; set; }
    }
}
