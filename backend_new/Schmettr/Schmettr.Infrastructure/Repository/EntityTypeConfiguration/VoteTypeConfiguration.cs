using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Schmettr.Domain.Models.Messages;
using Schmettr.Domain.Models.Users;
using Schmettr.Domain.Models.Votes;

namespace Schmettr.Infrastructure.Repository.EntityTypeConfiguration
{
    public class VoteTypeConfiguration : IEntityTypeConfiguration<Vote>
    {
        public void Configure(EntityTypeBuilder<Vote> builder)
        {
            builder.HasKey(v => v.VoteId);
            builder.HasOne<Message>(v => v.Message)
                .WithMany(m => m.Votes)
                .HasForeignKey(v => v.MessageId)
                .IsRequired();
            builder.HasOne<User>(v => v.User)
                .WithMany(u => u.Votes)
                .HasForeignKey(v => v.UserId)
                .IsRequired();
            builder.Property<VoteState>(v => v.VoteState);
        }
    }
}