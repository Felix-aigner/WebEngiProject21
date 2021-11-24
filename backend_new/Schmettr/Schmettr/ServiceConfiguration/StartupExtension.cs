using System;
using System.Linq;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Schmettr.ServiceConfiguration
{
    public static class StartupExtension
    {
        public static void ConfigureServices(this IServiceCollection services, IConfiguration configuration)
        {
            var serviceConfigurations = typeof(Startup).Assembly.DefinedTypes
                .Where(t => typeof(IServiceConfiguration).IsAssignableFrom(t) && !t.IsInterface && !t.IsAbstract)
                .Select(Activator.CreateInstance)
                .Cast<IServiceConfiguration>()
                .ToList();

            serviceConfigurations.ForEach(service => service.Configure(services, configuration));
        }
    }
}