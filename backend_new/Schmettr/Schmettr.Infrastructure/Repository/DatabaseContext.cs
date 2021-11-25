using Microsoft.EntityFrameworkCore;
using Schmettr.Domain.Models.Authentication;
using Schmettr.Domain.Models.Categories;
using Schmettr.Domain.Models.Comments;
using Schmettr.Domain.Models.Messages;
using Schmettr.Domain.Models.Users;
using Schmettr.Domain.Models.Votes;
using Schmettr.Infrastructure.Repository.EntityTypeConfiguration;

namespace Schmettr.Infrastructure.Repository
{
    public class DatabaseContext : DbContext
    {

        public DbSet<Message> Messages { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Vote> Votes { get; set; }
        
        public DbSet<RefreshToken> RefreshTokens { get; set; }
        public DbSet<User> Users { get; set; }
        
        public DatabaseContext() { }

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ConfigureUser();
            builder.ConfigureRefreshToken();
            builder.ConfigureMessage();
            builder.ConfigureComment();
            builder.ConfigureCategory();
            builder.ConfigureVote();
        }
    }
}