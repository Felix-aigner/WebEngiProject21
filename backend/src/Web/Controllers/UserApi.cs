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
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using Domain.Dtos;
using Google.Apis.Auth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Services.Exceptions;
using Services.Interfaces;
using Swashbuckle.AspNetCore.Annotations;
using Web.Attributes;
using Web.Security;

namespace Web.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    [ApiController]
    public class UserApiController : ControllerBase
    {
        private readonly IJwtService _jwtService;
        private readonly ISocialAuthenticationService _socialAuthenticationService;
        private readonly IUserService _userService;


        public UserApiController(IJwtService jwtService, ISocialAuthenticationService socialAuthenticationService, IUserService userService)
        {
            _jwtService = jwtService;
            _socialAuthenticationService = socialAuthenticationService;
            _userService = userService;
        }


        /// <summary>
        /// Create user
        /// </summary>
        /// <remarks>This can only be done by the logged in user.</remarks>
        /// <param name="body">Created user object</param>
        /// <response code="0">successful operation</response>
        [HttpPost]
        [Route("/schmettr/schmettr/1.0.0/user")]
        [ValidateModelState]
        [SwaggerOperation("CreateUser")]
        public virtual IActionResult CreateUser([FromBody]UserCreateDto body)
        {
            try
            {
                var user = _userService.Create(body);
                return Ok(user);
            }
            catch (UsernameAlreadyExistsException e)
            {
                return Conflict(e);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
            
        }

        /// <summary>
        /// Delete user
        /// </summary>
        /// <remarks>This can only be done by the logged in user.</remarks>
        /// <param name="username">The name that needs to be deleted</param>
        /// <response code="400">Invalid username supplied</response>
        /// <response code="404">User not found</response>
        [HttpDelete]
        [Route("/schmettr/schmettr/1.0.0/user/{username}")]
        [ValidateModelState]
        [SwaggerOperation("DeleteUser")]
        public virtual IActionResult DeleteUser([FromRoute][Required]string username)
        {
            try
            {
                _userService.Delete(username);
                return Ok();
            }
            catch (UserNotFoundException e)
            {
                return NotFound(e);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }

        /// <summary>
        /// Update user
        /// </summary>
        /// <remarks>This can only be done by the logged in user.</remarks>
        /// <param name="user">User with id</param>
        /// <param name="username">New name</param>
        /// <response code="400">Invalid user supplied</response>
        /// <response code="404">User not found</response>
        [HttpPut]
        [Route("/schmettr/schmettr/1.0.0/user/{username}")]
        [ValidateModelState]
        [SwaggerOperation("UpdateUser")]
        public virtual IActionResult UpdateUser([FromBody] UserUpdateDto user, [FromRoute][Required] string username)
        {
            try
            {
                var updatedUser = _userService.Update(user.Id, username);
                return Ok(updatedUser);
            }
            catch (UsernameAlreadyExistsException e)
            {
                return Conflict(e);
            }
            catch (Exception e)
            {
                return Problem(e.Message);
            }
        }

        /// <summary>
        /// Get user by user name
        /// </summary>
        /// <param name="username">The name that needs to be fetched. Use user1 for testing.</param>
        /// <response code="200">successful operation</response>
        /// <response code="400">Invalid username supplied</response>
        /// <response code="404">User not found</response>
        [HttpGet]
        [Route("/schmettr/schmettr/1.0.0/user/{username}")]
        [ValidateModelState]
        [SwaggerOperation("GetUserByName")]
        [SwaggerResponse(statusCode: 200, type: typeof(UserDto), description: "successful operation")]
        public virtual IActionResult GetUserByName([FromRoute][Required]string username)
        {
            try
            {
                var user = _userService.GetBy(username);
                return Ok(user);
            }
            catch (UserNotFoundException e)
            {
                return NotFound(e);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }
        
        [HttpPost("/schmettr/schmettr/1.0.0/user/authentication")]
        public virtual IActionResult Authentication([FromBody] AuthenticationCredentialDto authenticationCredential)
        {
            try
            {
                var user = _userService.Authenticate(authenticationCredential.Username, authenticationCredential.Password);
                var accessToken = _jwtService.GenerateAccessToken(user);
            
                return Ok(new AuthenticatedUserDto()
                {
                    Id = user.Id,
                    Username = user.Username,
                    Email = user.Email,
                    accessToken = accessToken,
                });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }
        
        [HttpPost("/schmettr/schmettr/1.0.0/user/authentication/google")]
        public virtual async Task<IActionResult> AuthenticationWithGoogle([FromBody] SocialAuthenticationCredentialDto socialAuthenticationCredential)
        {
            try
            {
                var gmail = await
                    _socialAuthenticationService.VerifyGoogleCredentialAsync(socialAuthenticationCredential.IdToken);

                var user = _userService.SocialAuthentication(gmail, socialAuthenticationCredential.Username);
                var accessToken = _jwtService.GenerateAccessToken(user);
            
                return Ok(new AuthenticatedUserDto()
                {
                    Id = user.Id,
                    Username = user.Username,
                    Email = user.Email,
                    accessToken = accessToken,
                });
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
