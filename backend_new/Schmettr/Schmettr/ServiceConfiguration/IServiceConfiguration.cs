using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Schmettr.ServiceConfiguration
{
    interface IServiceConfiguration
    {
        void Configure(IServiceCollection services, IConfiguration configuration);
    }
}