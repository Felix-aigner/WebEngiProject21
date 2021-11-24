using System.Collections.Generic;
using System.Threading.Tasks;

namespace Schmettr.Infrastructure.Repository
{
    public interface IRepository<TPrimaryKey, TEntity>
    {
        TEntity Get(TPrimaryKey key);
        
        Task<TEntity> GetAsync(TPrimaryKey key);

        Task<IEnumerable<TEntity>> GetEntitiesAsync();

        TEntity Add(TEntity entity);

        TEntity Remove(TEntity entity);

        void RemoveRange(IEnumerable<TEntity> entities);

    }
}