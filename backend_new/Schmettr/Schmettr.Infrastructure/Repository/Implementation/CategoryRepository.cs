using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Schmettr.Domain.Models.Categories;
using Schmettr.Infrastructure.Repository.Interface;

namespace Schmettr.Infrastructure.Repository.Implementation
{
    public class CategoryRepository : BaseRepository, ICategoryRepository
    {
        public CategoryRepository(DatabaseContext dbContext) : base(dbContext)
        {
        }

        public Category Get(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<Category> GetAsync(Guid key)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Category>> GetEntitiesAsync()
        {
            throw new NotImplementedException();
        }

        public Category Add(Category entity)
        {
            throw new NotImplementedException();
        }

        public Category Remove(Category entity)
        {
            throw new NotImplementedException();
        }

        public void RemoveRange(IEnumerable<Category> entities)
        {
            throw new NotImplementedException();
        }
    }
}