using EventsAndTicketsAPI.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.DTOs
{
    public class EventCreationDTO
    {
        public string Name { get; set; }
        public int TicketPrice { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public DateTime Date { get; set; }
        public IFormFile Poster { get; set; }
        [ModelBinder(BinderType=typeof(TypeBinder<List<int>>))]
        public List<int> TypeIds { get; set; }  
    }
}
