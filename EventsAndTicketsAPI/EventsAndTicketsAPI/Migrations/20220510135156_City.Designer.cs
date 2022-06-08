﻿// <auto-generated />
using System;
using EventsAndTicketsAPI.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EventsAndTicketsAPI.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220510135156_City")]
    partial class City
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("EventsAndTicketsAPI.Entities.CityEvent", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.ToTable("CityEvent");
                });

            modelBuilder.Entity("EventsAndTicketsAPI.Entities.Event", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(75)
                        .HasColumnType("nvarchar(75)");

                    b.Property<string>("Poster")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("TicketPrice")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Event");
                });

            modelBuilder.Entity("EventsAndTicketsAPI.Entities.EventAndEventType", b =>
                {
                    b.Property<int>("EventId")
                        .HasColumnType("int");

                    b.Property<int>("EventTypeId")
                        .HasColumnType("int");

                    b.HasKey("EventId", "EventTypeId");

                    b.HasIndex("EventTypeId");

                    b.ToTable("EventAndEventTypes");
                });

            modelBuilder.Entity("EventsAndTicketsAPI.Entities.EventType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("EventType");
                });

            modelBuilder.Entity("EventsAndTicketsAPI.Entities.EventAndEventType", b =>
                {
                    b.HasOne("EventsAndTicketsAPI.Entities.Event", "Event")
                        .WithMany("EventAndEventTypes")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("EventsAndTicketsAPI.Entities.EventType", "EventType")
                        .WithMany()
                        .HasForeignKey("EventTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Event");

                    b.Navigation("EventType");
                });

            modelBuilder.Entity("EventsAndTicketsAPI.Entities.Event", b =>
                {
                    b.Navigation("EventAndEventTypes");
                });
#pragma warning restore 612, 618
        }
    }
}