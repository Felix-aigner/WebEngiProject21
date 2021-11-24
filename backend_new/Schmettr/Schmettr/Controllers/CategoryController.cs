using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Schmettr.Controllers
{
    [Route("api/categories")]
    [Consumes(MediaTypeNames.Application.Json)]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        
        [HttpGet]
        public async Task<IEnumerable<object>> GetCategories()
        {
            return null;
        }

        [HttpPost]
        public async Task CreateCategory([FromBody] object newCategoryRequest)
        {
            
        }
    }
}