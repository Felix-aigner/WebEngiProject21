/*
 * Swagger Schmettr
 *
 * This is the schmettr server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.ComponentModel.DataAnnotations;
using Domain.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Services.Exceptions;
using Services.Interfaces;
using Swashbuckle.AspNetCore.Annotations;
using Web.Attributes;

namespace Web.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    [Authorize]
    [ApiController]
    public class CommentApiController : ControllerBase
    {
        private readonly IMessageService _messageService;

        public CommentApiController(IMessageService messageService)
        {
            _messageService = messageService;
        }
        /// <summary>
        /// Add a new comment
        /// </summary>
        /// <param name="body">Comment object that needs to be added to the message</param>
        /// <param name="messageId">ID of message to return</param>
        /// <response code="405">Invalid input</response>
        [HttpPost]
        [Route("/schmettr/schmettr/1.0.0/message/addComment{messageId}")]
        [ValidateModelState]
        [SwaggerOperation("AddComment")]
        public virtual IActionResult AddComment([FromBody]CommentDto body, [FromRoute][Required]Guid messageId)
        {
            try
            {
                //var message = _messageService.AddComment(messageId, body);
                //return Ok(message);
                return Ok();
            }
            catch (MessageNotFoundException e)
            {
                return NotFound(e);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }
    }
}
