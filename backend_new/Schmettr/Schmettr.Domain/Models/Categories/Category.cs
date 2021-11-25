using System;

namespace Schmettr.Domain.Models.Categories
{
    public class Category
    {
        public Guid CategoryId { get; init; }
        public string Name { get; private set; }

        public Category()
        {
        }

        public Category(Guid categoryId, string name)
        {
            CategoryId = categoryId;
            Name = name;
        }
    }
}