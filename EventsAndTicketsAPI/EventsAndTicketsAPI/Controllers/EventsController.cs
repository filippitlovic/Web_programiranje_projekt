﻿using AutoMapper;
using EventsAndTicketsAPI.DTOs;
using EventsAndTicketsAPI.Services;
using EventsAndTicketsAPI.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using System.Xml;
using Newtonsoft.Json;

namespace EventsAndTicketsAPI.Controllers
{
    [Route("api/events")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private string container = "events";

        private readonly ILogger<EventsController> logger;
        public EventsController(ApplicationDbContext context, IMapper mapper, ILogger<EventsController> logger)
        {
            this.context = context;
            this.mapper = mapper;
            this.logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<List<EventDTO>>> Get()
        {
            var events = await context.Event.ToListAsync();
            
            return mapper.Map<List<EventDTO>>(events);
        }
        [HttpGet("{Id:int}")]
        public async Task<ActionResult<EventDTO>> Get(int Id)
        {
            var events = await context.Event.FirstOrDefaultAsync(x => x.Id == Id);
            //var events = await context.Event.Include(x=>x.EventAndEventTypes).ThenInclude(x=>x.EventType).FirstOrDefaultAsync(x => x.Id == Id);
            if (events == null)
            { 
                return NotFound();
            }
            Console.WriteLine("DOGADAJjao:" + JsonConvert.SerializeObject(events, (Newtonsoft.Json.Formatting)System.Xml.Formatting.Indented));
            return mapper.Map<EventDTO>(events);
        }
        /*[HttpGet]
        
        public async Task<ActionResult<EventPostGetDTO>> PostGet()
        {
            var eventTypes = await context.EventType.ToListAsync();
            var eventTypesDTO = mapper.Map<List<EventTypeDTO>>(eventTypes);
            return new EventPostGetDTO() { Events = eventTypesDTO };
        }*/
        [HttpGet("filter")] 
        public async Task<ActionResult<List<EventDTO>>> Filter([FromQuery] FilterEventsDTO filterEventsDTO)
        {
            var eventsQueryable = context.Event.AsQueryable();
            if (!string.IsNullOrEmpty(filterEventsDTO.Title))  ///ako string nije prazan, znaci ako je unesen
            {
                eventsQueryable = eventsQueryable.Where(x => x.Name.Contains(filterEventsDTO.Title));
                Console.WriteLine("Poruka" + filterEventsDTO.Title);
            }
            //za dropdown s eventTypeovima
            if(filterEventsDTO.EventType != 0) ///ako id nije 0, znaci ako je odabrano nesta
            {
                eventsQueryable = eventsQueryable.Where(x => x.EventAndEventTypes.Select(y => y.EventTypeId).Contains(filterEventsDTO.EventType));
            }

            //za dropdown s cityType
           if (filterEventsDTO.City != 0) 
            {
                eventsQueryable = eventsQueryable.Where(x => x.EventAndCities.Select(y=>y.CityId).Contains(filterEventsDTO.City));
                Console.WriteLine("DOGADAJjao:" + JsonConvert.SerializeObject(eventsQueryable, (Newtonsoft.Json.Formatting)System.Xml.Formatting.Indented));
            }


            var events = await eventsQueryable.OrderBy(x => x.Name).ToListAsync();
            Console.WriteLine("DOGADAJ:" + JsonConvert.SerializeObject(events, (Newtonsoft.Json.Formatting)System.Xml.Formatting.Indented));
            return mapper.Map<List<EventDTO>>(events);
        }
        [HttpPost]
        public async Task<ActionResult> Post([FromForm] EventCreationDTO eventCreationDTO)
        {
            var events = mapper.Map<Event>(eventCreationDTO);
            /*if (eventCreationDTO.Poster != null)  //// za sliku uploadanu
            {
                eventCreationDTO.Poster = await fileStorageService.SaveFile(container, eventCreationDTO.Poster)
            }*/
            context.Add(events);
            await context.SaveChangesAsync();
            return NoContent();
        }
        
    }
}
