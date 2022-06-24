using ApricodeTestApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApricodeTestApi.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Racing()
        {
            return View();
        }
        public IActionResult Platform()
        {
            return View();
        }
        public IActionResult Strategy()
        {
            return View();
        }
        public IActionResult Arcade()
        {
            return View();
        }
    }
}
