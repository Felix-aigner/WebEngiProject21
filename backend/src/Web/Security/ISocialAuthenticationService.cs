using System.Threading.Tasks;

namespace Web.Security
{
    public interface ISocialAuthenticationService
    {
        Task<string> VerifyGoogleCredentialAsync(string idToken);
    }
}