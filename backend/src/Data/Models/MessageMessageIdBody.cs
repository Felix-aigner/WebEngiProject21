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
using System.Runtime.Serialization;
using System.Text;

namespace Data.Models
{ 
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class MessageMessageIdBody
    { 
        /// <summary>
        /// Updated name of the pet
        /// </summary>
        /// <value>Updated name of the pet</value>

        [DataMember(Name="name")]
        public string Name { get; set; }

        /// <summary>
        /// Updated status of the pet
        /// </summary>
        /// <value>Updated status of the pet</value>

        [DataMember(Name="status")]
        public string Status { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MessageMessageIdBody {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

    }
}
