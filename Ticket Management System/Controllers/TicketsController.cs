using Microsoft.AspNetCore.Mvc;

namespace Ticket_Management_System.Controllers
{
    public class TicketsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Create()
        {
            return View();
        }
        public IActionResult ViewTickets()
        {
            return View();
        }
    }
}
