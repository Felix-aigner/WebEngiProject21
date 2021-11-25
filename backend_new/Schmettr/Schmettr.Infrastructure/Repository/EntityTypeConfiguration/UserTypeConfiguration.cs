using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Schmettr.Domain.Models.Users;

namespace Schmettr.Infrastructure.Repository.EntityTypeConfiguration
{
    public class UserTypeConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(u => u.UserUserId);
            builder.Property(u => u.Name);
            builder.HasIndex(u => u.Username).IsUnique();
            builder.Property(u => u.Password);
            builder.Property(u => u.isGoogleAccount);
        }
    }
}