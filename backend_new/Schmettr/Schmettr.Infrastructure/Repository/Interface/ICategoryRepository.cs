using System;
using Schmettr.Domain.Models.Categories;

namespace Schmettr.Infrastructure.Repository.Interface
{
    public interface ICategoryRepository : IRepository<Guid, Category>
    {
        
    }
}