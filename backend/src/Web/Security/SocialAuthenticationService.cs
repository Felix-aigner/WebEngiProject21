using System.Collections.Generic;
using System.Security.Authentication;
using System.Threading.Tasks;
using Google.Apis.Auth;
using Web.Options;

namespace Web.Security
{
    public class SocialAuthenticationService : ISocialAuthenticationService
    {
        private readonly SocialAuthenticationOption option;

        public SocialAuthenticationService(SocialAuthenticationOption option)
        {
            this.option = option;
        }


        public async Task<string> VerifyGoogleCredentialAsync(string idToken)
        {
            GoogleJsonWebSignature.ValidationSettings settings = new GoogleJsonWebSignature.ValidationSettings();
            settings.Audience = new List<string>() { option.GoogleKey };
            
            GoogleJsonWebSignature.Payload payload = await GoogleJsonWebSignature.ValidateAsync(idToken, settings);

            return payload.Email;
        }
    }
}