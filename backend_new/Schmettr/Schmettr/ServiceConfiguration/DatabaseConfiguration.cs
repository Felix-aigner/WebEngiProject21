using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Schmettr.Infrastructure.Repository;

namespace Schmettr.ServiceConfiguration
{
    public class DatabaseConfiguration : IServiceConfiguration
    {
        public void Configure(IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<DatabaseContext>(options =>
                options.UseNpgsql(configuration.GetConnectionString("Default")));
        }
    }
}