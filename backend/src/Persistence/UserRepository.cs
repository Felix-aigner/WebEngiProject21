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

        public User GetUser(Guid id)
        {
            return _dbContext.Users.Single(u => u.Id == id);
        }

        public User GetUser(string username)
        {
            var bla = _dbContext.Users.FirstOrDefault(u => u.Username == username);
            return bla;
        }

        public User CreateUser(User user)
        {
            var createdUser = _dbContext.Add(user).Entity;
            _dbContext.SaveChanges();
            return createdUser;
        }

        public void DeleteUser(User user)
        {
            _dbContext.Users.Remove(user);
            _dbContext.SaveChanges();
        }

        public bool UsernameAlreadyExists(string username)
        {
            return GetUser(username) != null;
        }
    }
}