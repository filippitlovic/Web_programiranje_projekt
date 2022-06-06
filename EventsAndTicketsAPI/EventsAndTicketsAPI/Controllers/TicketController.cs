using AutoMapper;
using EventsAndTicketsAPI.BindingModels;
using EventsAndTicketsAPI.DTOs;
using EventsAndTicketsAPI.Entities;
using EventsAndTicketsAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.Controllers
{
    [ApiController]
    [Route("api/tickets")]
    public class TicketController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public TicketController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] TicketBM ticket)
        {
            var userAndEvent = new UserAndEvent
            {
                UserEmail = ticket.UserMail,
                EventId = ticket.EventId
            };
            context.Add(userAndEvent);
            await context.SaveChangesAsync();
            return NoContent();
        }
        [HttpGet]
        public async Task<ActionResult<List<EventDTO>>> GetUserEvents([FromQuery] string email)
        {

            var eventIds = context.UserAndEvent.Where(x => x.UserEmail == email).Select(x => x.EventId).ToList();
            var events = context.Event.Where(x => eventIds.Contains(x.Id));
            return mapper.Map<List<EventDTO>>(events);
        }
    }
}
