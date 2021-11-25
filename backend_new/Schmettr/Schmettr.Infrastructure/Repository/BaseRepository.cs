using System.Collections.Generic;
using System.Threading.Tasks;

namespace Schmettr.Infrastructure.Repository
{
    public abstract class BaseRepository
    {
        protected DatabaseContext dbContext;

        protected BaseRepository(DatabaseContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public void AttachToContext(object entity)
        {
            dbContext.Attach(entity);
        }

        public void AttachRangeToContext(IEnumerable<object> entities)
        {
            dbContext.AttachRange(entities);
        }

        public Task SaveChangesAsync()
        {
            return dbContext.SaveChangesAsync();
        }
    }
}