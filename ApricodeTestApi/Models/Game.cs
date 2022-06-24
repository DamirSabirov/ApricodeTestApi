using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ApricodeTestApi.Models
{
    public class Game
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Укажите название видеоигры")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Укажите разработчика видеоигры")]
        public string Developer { get; set; }
        [Required(ErrorMessage = "Укажите жанр видеоигры")]
        public string Genre { get; set; }
    }
}
