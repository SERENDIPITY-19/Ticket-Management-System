using Microsoft.AspNetCore.Mvc;

namespace Ticket_Management_System.Controllers
{
    public class UsersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Details()
        {
            return View();
        }
    }
}
