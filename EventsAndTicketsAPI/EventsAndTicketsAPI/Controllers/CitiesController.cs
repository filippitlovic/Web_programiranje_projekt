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
    [Route("api/cities")]
    public class CitiesController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public CitiesController(ApplicationDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        [HttpGet]
        public async Task<ActionResult<List<CityEventDTO>>> get()
        {
            var cities = await context.CityEvent.ToListAsync();
            return mapper.Map<List<CityEventDTO>>(cities);
        }
    }
}
