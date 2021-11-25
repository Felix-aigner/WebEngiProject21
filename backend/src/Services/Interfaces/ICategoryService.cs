using System.Collections.Generic;
using Domain.Dtos;

namespace Services.Interfaces
{
    public interface ICategoryService
    {
        CategoryDto Create(CategoryCreateDto categoryDto);
        List<CategoryDto> GetAll();
    }
}