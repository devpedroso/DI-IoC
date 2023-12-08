using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace c_
{
    public class Cliente : IsServiceEmail
    {
        public string EnvioEmail(string descricao)
        {
            return "Cliente: " + descricao;
        }
    }
}