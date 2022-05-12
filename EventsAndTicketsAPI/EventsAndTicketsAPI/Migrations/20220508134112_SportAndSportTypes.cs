using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EventsAndTicketsAPI.Migrations
{
    public partial class SportAndSportTypes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Sport",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(75)", maxLength: 75, nullable: false),
                    TicketPrice = table.Column<int>(type: "int", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Poster = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Sport", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SportAndSportTypes",
                columns: table => new
                {
                    SportId = table.Column<int>(type: "int", nullable: false),
                    SportTypeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SportAndSportTypes", x => new { x.SportTypeId, x.SportId });
                    table.ForeignKey(
                        name: "FK_SportAndSportTypes_Sport_SportId",
                        column: x => x.SportId,
                        principalTable: "Sport",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SportAndSportTypes_SportTypes_SportTypeId",
                        column: x => x.SportTypeId,
                        principalTable: "SportTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SportAndSportTypes_SportId",
                table: "SportAndSportTypes",
                column: "SportId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SportAndSportTypes");

            migrationBuilder.DropTable(
                name: "Sport");
        }
    }
}
