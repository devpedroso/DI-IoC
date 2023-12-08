using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace c_
{
    public class Funcionario : IsServiceEmail
    {
        public string EnvioEmail(string descricao)
        {
            return "Funcionario: " + descricao;
        }
    }
}