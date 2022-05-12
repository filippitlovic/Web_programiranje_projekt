using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.DTOs
{
    public class EventPostGetDTO
    {
        public List<EventTypeDTO> Events { get; set; }
    }
}
