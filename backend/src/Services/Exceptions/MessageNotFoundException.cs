using System;
using Microsoft.EntityFrameworkCore.Query.Internal;

namespace Services.Exceptions
{
    public class MessageNotFoundException : Exception
    {
        public MessageNotFoundException(string message) : base(message)
        {
            
        }

        public MessageNotFoundException() : base()
        {
            
        }
    }
}