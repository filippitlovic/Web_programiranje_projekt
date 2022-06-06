using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.Entities
{
    public class UserAndEvent
    {
        [Key]
        public int EventId { get; set; }
        public string UserEmail { get; set; }
    }
}
