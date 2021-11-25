using System;

namespace Web.Options
{
    public class JwtOption
    {
        public static readonly string Name = "JwtSettings";

        public string Secret { get; init; }
        public string Issuer { get; init; }
        public TimeSpan SecurityTokenLifetime { get; init; }
        
        public int RefreshTokenDaysToLive { get; init; }
    }
}