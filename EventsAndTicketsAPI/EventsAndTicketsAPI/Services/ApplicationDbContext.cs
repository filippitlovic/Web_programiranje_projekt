﻿using EventsAndTicketsAPI.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace EventsAndTicketsAPI.Services
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext([NotNullAttribute] DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EventAndEventType>().HasKey(x => new { x.EventId, x.EventTypeId }); //postavljam da ce SportAndSportTypes tablica imat 2 primary keya
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Event> Event { get; set; }
        public DbSet<EventType> EventType { get; set; }
        public DbSet<EventAndEventType> EventAndEventTypes { get; set; }
        public DbSet<CityEvent> CityEvent { get; set; }
    }
}
