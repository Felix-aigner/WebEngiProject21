using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Schmettr.Domain.Models.Authentication;

namespace Schmettr.Infrastructure.Repository.EntityTypeConfiguration
{
    public class RefreshTokenTypeConfiguration : IEntityTypeConfiguration<RefreshToken>
    {
        public void Configure(EntityTypeBuilder<RefreshToken> builder)
        {
            builder.HasKey(token => token.RefreshTokenId);
            builder.HasOne(token => token.User);
        }
    }
}