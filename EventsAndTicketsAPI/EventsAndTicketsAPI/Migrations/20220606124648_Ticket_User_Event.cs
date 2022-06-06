using Microsoft.EntityFrameworkCore.Migrations;

namespace EventsAndTicketsAPI.Migrations
{
    public partial class Ticket_User_Event : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserAndEvent",
                columns: table => new
                {
                    EventId = table.Column<int>(type: "int", nullable: false),
                    UserMail = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserAndEvent");
        }
    }
}
