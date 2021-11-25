using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Persistence.Interfaces;

namespace Persistence
{
    public class DatabaseContext : DbContext, IDatabaseContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
            
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>()
                        .HasMany(u => u.Votes);
            modelBuilder.Entity<User>()
                        .HasMany(u => u.Comments);
            modelBuilder.Entity<User>()
                        .HasMany(u => u.Messages);
            modelBuilder.Entity<Message>()
                        .HasMany(m => m.Categories);
            modelBuilder.Entity<Comment>();
            modelBuilder.Entity<Category>();
            modelBuilder.Entity<Vote>();
        }
    }
}
