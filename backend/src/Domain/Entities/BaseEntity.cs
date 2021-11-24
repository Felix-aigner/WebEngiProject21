using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public class BaseEntity
    {
        [Required]
        [Key]
        public Guid Id { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}