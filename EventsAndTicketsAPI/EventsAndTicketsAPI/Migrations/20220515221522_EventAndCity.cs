using Microsoft.EntityFrameworkCore.Migrations;

namespace EventsAndTicketsAPI.Migrations
{
    public partial class EventAndCity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "id",
                table: "CityEvent",
                newName: "Id");

            migrationBuilder.CreateTable(
                name: "EventAndCity",
                columns: table => new
                {
                    EventId = table.Column<int>(type: "int", nullable: false),
                    CityId = table.Column<int>(type: "int", nullable: false),
                    CityEventId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventAndCity", x => new { x.EventId, x.CityId });
                    table.ForeignKey(
                        name: "FK_EventAndCity_CityEvent_CityEventId",
                        column: x => x.CityEventId,
                        principalTable: "CityEvent",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_EventAndCity_Event_EventId",
                        column: x => x.EventId,
                        principalTable: "Event",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EventAndCity_CityEventId",
                table: "EventAndCity",
                column: "CityEventId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventAndCity");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "CityEvent",
                newName: "id");
        }
    }
}
