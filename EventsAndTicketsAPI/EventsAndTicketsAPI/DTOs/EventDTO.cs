using EventsAndTicketsAPI.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.DTOs
{
    public class EventDTO
    {
        public int Id { get; set; }
        public int TypeId { get; set; }
        public string Name { get; set; }
        public int TicketPrice { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public DateTime Date { get; set; }
        public string Poster { get; set; }
        public List<EventAndEventType> EventAndEventTypes { get; set; }
        public List<EventTypeDTO> EventTypeDto { get; set; }
    }
}
