using Microsoft.EntityFrameworkCore;
using Schmettr.Domain.Models.Authentication;
using Schmettr.Domain.Models.Categories;
using Schmettr.Domain.Models.Comments;
using Schmettr.Domain.Models.Messages;
using Schmettr.Domain.Models.Users;
using Schmettr.Domain.Models.Votes;

namespace Schmettr.Infrastructure.Repository.EntityTypeConfiguration
{
    public static class EntityTypeConfigurationExtension
    {
        public static void ConfigureUser(this ModelBuilder builder) =>
            new UserTypeConfiguration().Configure(builder.Entity<User>());

        public static void ConfigureRefreshToken(this ModelBuilder builder) =>
            new RefreshTokenTypeConfiguration().Configure(builder.Entity<RefreshToken>());

        public static void ConfigureMessage(this ModelBuilder builder) =>
            new MessageTypeConfiguration().Configure(builder.Entity<Message>());

        public static void ConfigureComment(this ModelBuilder builder) =>
            new CommentTypeConfiguration().Configure(builder.Entity<Comment>());

        public static void ConfigureCategory(this ModelBuilder builder) =>
            new CategoryTypeConfiguration().Configure(builder.Entity<Category>());

        public static void ConfigureVote(this ModelBuilder builder) =>
            new VoteTypeConfiguration().Configure(builder.Entity<Vote>());
    }
}