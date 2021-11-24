using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Domain.Dtos;
using Domain.Entities;
using Persistence.Interfaces;

namespace Persistence
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DatabaseContext _dbContext;
        private readonly IMapper _mapper;

        public CategoryRepository(DatabaseContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public Category Create(CategoryCreateDto categoryDto)
        {
            var category = _mapper.Map<Category>(categoryDto);
            var createdCategory = _dbContext.Categories.Add(category).Entity;
            _dbContext.SaveChanges();
            return createdCategory;
        }

        public List<Category> GetAll()
        {
            return _dbContext.Categories.OrderBy(c => c.CreatedDate).ToList();
        }

        public List<Category> GetBy(List<Guid> categoryIds)
        {
            return _dbContext.Categories.Where(c => categoryIds.Contains(c.Id)).ToList();
        }
    }
}