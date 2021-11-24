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
using System.Runtime.Serialization;
using System.Text;

namespace Domain.Dtos
{ 
    /// <summary>
    /// Comment of a Message
    /// </summary>
    [DataContract]
    public class CommentDto
    {
        /// <summary>
        /// Gets or Sets Content
        /// </summary>
        [Required]
        [DataMember(Name="content")]
        public string Content { get; set; }

        /// <summary>
        /// Gets or Sets Owner
        /// </summary>
        [Required]
        [DataMember(Name = "ownerId")]
        public Guid OwnerId { get; set; }

        /// <summary>
        /// Gets or Sets Owner
        /// </summary>
        [Required]
        [DataMember(Name = "messageId")]
        public Guid MessageId { get; set; }


    }
}