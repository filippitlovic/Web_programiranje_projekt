using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.Entities
{
    public class EventAndEventType
    {
        public int EventId { get; set; }
        public int EventTypeId { get; set; }
        public Event Event { get; set; }
        public EventType EventType { get; set; }
    }
}
