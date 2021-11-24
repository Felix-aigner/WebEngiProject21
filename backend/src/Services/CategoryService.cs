using System.Collections.Generic;
using System.ComponentModel;
using AutoMapper;
using Domain.Dtos;
using Persistence.Interfaces;
using Services.Interfaces;

namespace Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public CategoryService(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public CategoryDto Create(CategoryDto categoryDto)
        {
            var category = _categoryRepository.Create(categoryDto);
            return _mapper.Map<CategoryDto>(category);
        }

        public List<CategoryDto> GetAll()
        {
            var allCategories = _categoryRepository.GetAll();
            return _mapper.Map<List<CategoryDto>>(allCategories);
        }
    }
}