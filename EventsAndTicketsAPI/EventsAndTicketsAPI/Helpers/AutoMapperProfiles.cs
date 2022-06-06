using AutoMapper;
using EventsAndTicketsAPI.DTOs;
using EventsAndTicketsAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<EventTypeDTO, EventType>().ReverseMap();
            CreateMap<EventDTO, Event>().ReverseMap();
           

        }

       
        private List<EventTypeDTO> MapEventTypes(Event eventt,EventDTO eventDto)
        {
            var result = new List<EventTypeDTO>();
            return result;
        }

        private List<EventAndEventType> MapEventsAndTypes(EventCreationDTO eventCreationDTO, Event events)
        {

            var result = new List<EventAndEventType>();
            if (eventCreationDTO.TypeIds == null)
            {
                return result;
            }
            foreach( var Id in eventCreationDTO.TypeIds)
            {
                result.Add(new EventAndEventType() { EventTypeId = Id });
            }
            return result;
        }

    }
}
