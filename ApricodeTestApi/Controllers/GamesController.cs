using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using ApricodeTestApi.Models;
using System.Threading.Tasks;

namespace ApricodeTestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        readonly GamesContext db;
        public GamesController(GamesContext context)    //добавление контекста базы данных
        {
            db = context;
        }

        [HttpGet]   //GET-запрос для получения всех игр     (реализация READ)
        public async Task<ActionResult<IEnumerable<Game>>> Get()
        {
            return await db.Games.ToListAsync();
        }

        [HttpGet("{id}")]   //GET-запрос для получения игр по id    (реализация READ)
        public async Task<ActionResult<IEnumerable<Game>>> Get(int id)
        {
            Game game = await db.Games.FirstOrDefaultAsync(x => x.Id == id);
            if (game == null)
                return NotFound();
            return new ObjectResult(game);
        }

        [HttpGet("search/{genre}")]        //GET-запрос для получения игр по жанру    (реализация READ)
        public async Task<ActionResult<IEnumerable<Game>>> Get(string genre)
        {
            var searchresult = db.Games.Where(x => x.Genre.Contains(genre));

            return await searchresult.ToListAsync();
        }

        [HttpGet("search/{genre}/{id}")]        //GET-запрос для получения игр по жанру и по id    (реализация READ)
        public async Task<ActionResult<IEnumerable<Game>>> Get(string genre, int id)
        {
            var searchresult = db.Games.Where(x => x.Genre.Contains(genre));
            var search = await searchresult.FirstOrDefaultAsync(x => x.Id == id);

            return new ObjectResult(search);
        }

        [HttpPost]  //POST-запрос для добавления видеоигр     (реализация CREATE)
        public async Task<ActionResult<IEnumerable<Game>>> Post(Game game)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            db.Games.Add(game);
            await db.SaveChangesAsync();
            return Ok(game);
        }

        [HttpPut]   //PUT-запрос для изменения видеоигр     (реализация UPDATE)
        public async Task<ActionResult<Game>> Put(Game game)
        {
            if (game == null)
            {
                return BadRequest();
            }
            if (!db.Games.Any(x => x.Id == game.Id))
            {
                return NotFound();
            }

            db.Update(game);
            await db.SaveChangesAsync();
            return Ok(game);
        }

        [HttpDelete("{id}")]    //DELETE-запрос для удаления видеоигр   (реализация DELETE)
        public async Task<ActionResult<IEnumerable<Game>>> Delete(int id)
        {
            Game game = db.Games.FirstOrDefault(x => x.Id == id);
            if (game == null)
            {
                return NotFound();
            }
            db.Games.Remove(game);
            await db.SaveChangesAsync();
            return Ok(game);
        }
    }
}