using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ApricodeTestApi.Models
{
    public class GamesContext : DbContext
    {
        public DbSet<Game> Games { get; set; }
        public GamesContext(DbContextOptions<GamesContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}
