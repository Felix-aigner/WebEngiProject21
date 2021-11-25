using System;
using System.Linq;
using AutoMapper;
using Domain.Dtos;
using Domain.Entities;
using Persistence.Interfaces;

namespace Persistence
{
    public class UserRepository : IUserRepository
    {
        private readonly DatabaseContext _dbContext;
        private readonly IMapper _mapper;

        public UserRepository(DatabaseContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public User GetBy(Guid id)
        {
            return _dbContext.Users.SingleOrDefault(u => u.Id == id);
        }

        public User GetBy(string username)
        {
            return _dbContext.Users.FirstOrDefault(u => u.Username == username);
        }

        public User Create(UserCreateDto userDto)
        {
            var user = _mapper.Map<User>(userDto);
            _dbContext.Add(user);
            _dbContext.SaveChanges();
            return user;
        }

        public void Update(User user)
        {
            _dbContext.SaveChanges();
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