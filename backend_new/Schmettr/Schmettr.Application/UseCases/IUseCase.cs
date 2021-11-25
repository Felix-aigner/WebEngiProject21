using System.Threading.Tasks;

namespace Schmettr.Application.UseCases
{
    public interface IUseCase<in TRequest, TResponse>
    {
        Task<TResponse> ExecuteAsync(TRequest request);
    }
}