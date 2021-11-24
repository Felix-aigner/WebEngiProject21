using System;
using AutoMapper;
using Domain.Dtos;
using Domain.Entities;

namespace Services
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            MessageMaps();
            UserMaps();
            CommentMaps();
            CategoryMaps();
        }

        public void MessageMaps()
        {
            CreateMap<Message, MessageDto>()
                .ReverseMap()
                .ForMember(
                    entity => entity.CreatedDate,
                    opt => opt.MapFrom(x => DateTime.Now)
                    );
        }

        public void UserMaps()
        {
            CreateMap<User, UserDto>()
                .ReverseMap()
                .ForMember(
                    entity => entity.CreatedDate,
                    opt => opt.MapFrom(x => DateTime.Now)
                );
        }

        public void CommentMaps()
        {
            CreateMap<Comment, CommentDto>()
                .ReverseMap()
                .ForMember(
                    entity => entity.CreatedDate,
                    opt => opt.MapFrom(x => DateTime.Now)
                );
        }

        public void CategoryMaps()
        {
            CreateMap<Category, CategoryDto>()
                .ReverseMap()
                .ForMember(
                    entity => entity.CreatedDate,
                    opt => opt.MapFrom(x => DateTime.Now)
                );
        }
    }
}