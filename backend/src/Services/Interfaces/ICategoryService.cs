using System.Collections.Generic;
using Domain.Dtos;

namespace Services.Interfaces
{
    public interface ICategoryService
    {
        CategoryDto Create(CategoryDto categoryDto);
        List<CategoryDto> GetAll();
    }
}