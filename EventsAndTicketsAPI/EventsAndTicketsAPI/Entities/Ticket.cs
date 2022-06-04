using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.Entities
{
    public class Ticket
    {
        public int TicketId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }

    }
}
