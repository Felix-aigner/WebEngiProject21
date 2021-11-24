using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Schmettr.Domain.Models.Categories;
using Schmettr.Domain.Models.Comments;
using Schmettr.Domain.Models.Messages;
using Schmettr.Domain.Models.Users;
using Schmettr.Domain.Models.Votes;

namespace Schmettr.Infrastructure.Repository.EntityTypeConfiguration
{
    public class MessageTypeConfiguration : IEntityTypeConfiguration<Message>
    {
        public void Configure(EntityTypeBuilder<Message> builder)
        {
            builder.HasKey(m => m.MessageId);
            builder.HasOne<User>(m => m.User)
                .WithMany(u => u.Messages)
                .HasForeignKey(m => m.UserId)
                .IsRequired();
            builder.Property<string>(m => m.Text);
            builder.HasOne<Category>()
                .WithOne()
                .HasForeignKey<Category>(m => m.CategoryId);
            builder.HasMany<Comment>(m => m.Comments);
            builder.HasMany<Vote>(m => m.Votes);
            builder.Property<DateTime>(m => m.CreatedAt);
        }
    }
}