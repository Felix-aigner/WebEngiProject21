using System;
using AutoMapper;
using Domain.Dtos;
using Domain.Entities;

namespace Web
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            MessageMaps();
            UserMaps();
            CommentMaps();
            CategoryMaps();
            VoteMaps();
        }

        public void MessageMaps()
        {
            CreateMap<Message, MessageDto>()
                .ReverseMap()
                .ForMember(
                    entity => entity.CreatedDate,
                    opt => opt.MapFrom(x => DateTime.Now)
                    );
            CreateMap<Message, MessageCreateDto>()
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
            CreateMap<User, UserCreateDto>()
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
            CreateMap<Comment, CommentCreateDto>()
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
            CreateMap<Category, CategoryCreateDto>()
                .ReverseMap()
                .ForMember(
                    entity => entity.CreatedDate,
                    opt => opt.MapFrom(x => DateTime.Now)
                );
        }

        public void VoteMaps()
        {
            CreateMap<Vote, VoteDto>()
                .ReverseMap()
                .ForMember(
                    entity => entity.CreatedDate,
                    opt => opt.MapFrom(x => DateTime.Now)
                );
            CreateMap<Vote, VoteCreateDto>()
                .ReverseMap()
                .ForMember(
                    entity => entity.CreatedDate,
                    opt => opt.MapFrom(x => DateTime.Now)
                );
        }
    }
}