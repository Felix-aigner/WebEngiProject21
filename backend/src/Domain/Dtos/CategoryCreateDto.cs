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
    public class CategoryCreateDto
    {

        /// <summary>
        /// Gets or Sets Name
        /// </summary>
        [Required]
        [DataMember(Name="name")]
        public string Name { get; set; }
        
    }
}
