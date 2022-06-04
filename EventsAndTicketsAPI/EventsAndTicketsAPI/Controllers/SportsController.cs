using AutoMapper;
using EventsAndTicketsAPI.DTOs;
using EventsAndTicketsAPI.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.Controllers
{
    [Route("api/sports")]
    [ApiController]
    public class SportsController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private string container = "events";

        private readonly ILogger<EventsController> logger;
        public SportsController(ApplicationDbContext context, IMapper mapper, ILogger<EventsController> logger)
        {
            this.context = context;
            this.mapper = mapper;
            this.logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<List<EventDTO>>> Get()
        {
            var events = await context.Event.Where(x => x.TypeId == 1).ToListAsync();
   
            return mapper.Map<List<EventDTO>>(events);
        }
    }
}
