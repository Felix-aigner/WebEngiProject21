using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Entities
{
    public enum VoteEnum
    {
        Up,
        Down,
    }

    public class Vote : BaseEntity
    {
        [Key]
        public Guid Id { get; set; }
        public virtual User Owner { get; set; }
        public virtual Message Message { get; set; }
        public VoteEnum VoteEnum { get; set; }
    }
}