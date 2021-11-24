using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Schmettr.Domain.Models.Comments;
using Schmettr.Domain.Models.Users;

namespace Schmettr.Infrastructure.Repository.EntityTypeConfiguration
{
    public class CommentTypeConfiguration : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            builder.HasKey(c => c.CommentId);
            builder.HasOne<User>(c => c.User)
                .WithMany(u => u.Comments)
                .HasForeignKey(c => c.UserId)
                .IsRequired();
            builder.Property(c => c.Text);
            builder.Property(c => c.CreatedAt);
        }
    }
}