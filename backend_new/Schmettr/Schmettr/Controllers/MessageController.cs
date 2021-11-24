using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Schmettr.Controllers
{
    [Route("api/[controller]s")]
    [Consumes(MediaTypeNames.Application.Json)]
    [ApiController]
    public class MessageController : ControllerBase
    {
        
        [HttpGet]
        public async Task<IEnumerable<object>> GetMessages()
        {
            return null;
        }

        [HttpGet("{id}")]
        public async Task<object> GetMessage(Guid id)
        {
            return null;
        }

        [HttpPost]
        public async Task CreateMessage([FromBody] object newMessageDto)
        {
            
        }

        [HttpPost("{id}/votes")]
        public async Task VoteMessage(Guid id, [FromBody] object messageVote)
        {
            
        }

        [HttpPost("{id}/messages")]
        public async Task CommentMessage(Guid id, [FromBody] object messageComment)
        {
            
        }

        [HttpDelete("{id}")]
        public async Task DeleteMessage(Guid id)
        {
            
        }

    }
}