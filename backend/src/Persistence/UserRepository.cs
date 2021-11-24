using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Data.Models;
using Persistence.Interfaces;

namespace Persistence
{
    public class UserRepository : IUserRepository
    {
        private readonly DatabaseContext _dbContext;

        public UserRepository(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public User GetBy(Guid id)
        {
            return _dbContext.Users.SingleOrDefault(u => u.Id == id);
        }

        public User GetBy(string username)
        {
            return _dbContext.Users.FirstOrDefault(u => u.Username == username);
        }

        public User Create(User user)
        {
            var createdUser = _dbContext.Add(user).Entity;
            _dbContext.SaveChanges();
            return createdUser;
        }

        public void Delete(User user)
        {
            _dbContext.Remove(user);
            _dbContext.SaveChanges();
        }

        public bool UsernameAlreadyExists(string username)
        {
            return GetBy(username) != null;
        }
    }
}