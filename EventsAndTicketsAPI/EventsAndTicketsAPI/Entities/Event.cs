using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.Entities
{
    public class Event
    {
        public int Id { get; set; }
        [StringLength(maximumLength: 75)]
        [Required]
        public int TypeId { get; set; }
        public string Name { get; set; }
        public int TicketPrice { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public DateTime Date { get; set; }
        public string Poster { get; set; }
        public List<EventAndEventType> EventAndEventTypes { get; set; } 
        public List<EventAndCity> EventAndCities { get; set; } 
    }
}
