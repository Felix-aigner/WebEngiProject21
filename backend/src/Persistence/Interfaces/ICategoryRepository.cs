using System.Collections.Generic;
using Domain.Dtos;
using Domain.Entities;

namespace Persistence.Interfaces
{
    public interface ICategoryRepository
    {
        Category Create(CategoryDto categoryDto);
        List<Category> GetAll();
    }
}