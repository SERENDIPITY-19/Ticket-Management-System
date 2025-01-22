using Microsoft.AspNetCore.Mvc;

namespace Ticket_Management_System.Controllers
{
    public class TicketsController : Controller
    {
        public IActionResult Create()
        {
            return View();
        }
    }
}
