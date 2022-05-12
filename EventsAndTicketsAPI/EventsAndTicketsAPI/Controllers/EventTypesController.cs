using AutoMapper;
using EventsAndTicketsAPI.DTOs;
using EventsAndTicketsAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.Controllers
{
    [Route("api/eventTypes")]
    [ApiController]
    public class EventTypesController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public EventTypesController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<List<EventTypeDTO>>> Get()
        {
            var types = await context.EventType.ToListAsync(); //SportTypes naziv tablice u bazi, spremanje u varijablu types
            return mapper.Map<List<EventTypeDTO>>(types); ///mapiranje podataka iz baze u SportTypeDTO
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<EventTypeDTO>> Get(int Id)
        {
            var type = await context.EventType.FirstOrDefaultAsync(x => x.Id == Id);
            if (type == null)
            {
                return NotFound();
            }
            return mapper.Map<EventTypeDTO>(type);
        }
    }
}
