using System;
using System.Collections.Generic;
using Data.Models;

namespace Services.Interfaces
{
    public interface IMessageService
    {
        Message Create(Message message);
        void Delete(Guid id);
        List<Message> GetAll();
        List<Message> GetByCategories(List<Category> categories);
        Message GetBy(Guid id);

    }
}