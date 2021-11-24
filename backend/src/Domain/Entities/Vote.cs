namespace Domain.Entities
{
    public enum VoteEnum
    {
        Up,
        Down,
    }

    public class Vote : BaseEntity
    {
        public virtual User User { get; set; }
        public virtual Message Message { get; set; }
        public VoteEnum VoteEnum { get; set; }
    }
}