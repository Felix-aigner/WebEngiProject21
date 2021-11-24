using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Schmettr.Controllers
{
    [Route("api/[controller]s")]
    [Consumes(MediaTypeNames.Application.Json)]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<object>> GetUsers()
        {
            return null;
        }

        [HttpGet("{id}")]
        public async Task<object> GetUser(Guid id)
        {
            return null;
        }

        [HttpPost("authentication")]
        public async Task<object> AuthenticateUser([FromBody] object authenticationCredentials)
        {
            return null;
        }

        [HttpPost("registration")]
        public async Task RegistrateUser([FromBody] object registrationInformation)
        {
            
        }

        [HttpPost("refresh")]
        public async Task<object> RenewAccessToken([FromBody] object renewAccessTokenInformation)
        {
            return null;
        }

        [HttpPost("logout")]
        public async Task RevokeToken([FromBody] object logoutInformation)
        {
            
        }
        
    }
}