using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Interfaces
{
    public interface IDatabaseContext
    {
        DbSet<User> Users { get; set; }
        DbSet<Message> Messages { get; set; }
        DbSet<Comment> Comments { get; set; }
        DbSet<Category> Categories { get; set; }
        DbSet<Vote> Votes { get; set; }
    }

}