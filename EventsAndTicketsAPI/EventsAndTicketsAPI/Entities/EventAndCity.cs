using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.Entities
{
    public class EventAndCity
    {
        public int EventId { get; set; }
        public int CityId { get; set; }
        public Event Event { get; set; }
        public CityEvent CityEvent { get; set; }
    }
}
