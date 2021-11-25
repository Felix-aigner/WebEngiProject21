using System.Text.Json.Serialization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Schmettr.ServiceConfiguration
{
    public class DefaultConfiguration : IServiceConfiguration
    {
        public void Configure(IServiceCollection services, IConfiguration configuration)
        {
            services.AddControllers();
            
            services.AddMvc().AddJsonOptions(options =>
                options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull); // Response Body - Properties omitted if null

        }
    }
}