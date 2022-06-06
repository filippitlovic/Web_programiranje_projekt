using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.DTOs
{
    public class FilterEventsDTO
    {
        public string Title { get; set; }
        public int EventType { get; set; } 
        public int City { get; set; }
    }
}
