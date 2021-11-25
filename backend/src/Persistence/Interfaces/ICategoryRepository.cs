using System;
using System.Collections.Generic;
using Domain.Dtos;
using Domain.Entities;

namespace Persistence.Interfaces
{
    public interface ICategoryRepository
    {
        Category Create(CategoryCreateDto categoryDto);
        List<Category> GetAll();
        List<Category> GetBy(List<Guid> categoryIds);
    }
}