using EventsAndTicketsAPI.Entities;
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
            modelBuilder.Entity<EventAndEventType>().HasKey(x => new { x.EventId, x.EventTypeId }); //postavljam da ce EventAndCity tablica imat 2 primary keya

            modelBuilder.Entity<EventAndCity>().HasKey(x => new { x.EventId, x.CityId });
            base.OnModelCreating(modelBuilder);


        }
        public DbSet<Event> Event { get; set; }
        public DbSet<EventType> EventType { get; set; }
        public DbSet<EventAndEventType> EventAndEventTypes { get; set; }
        public DbSet<CityEvent> CityEvent { get; set; }
        public DbSet<EventAndCity> EventAndCity { get; set; }
    }
}
