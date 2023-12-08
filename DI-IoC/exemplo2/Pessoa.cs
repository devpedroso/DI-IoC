using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace c_
{
    public class Pessoa
    {
        private IsServiceEmail _serviceEmail;

        public Pessoa(IsServiceEmail serviceEmail)
        {
            this._serviceEmail = serviceEmail;
        }

        public string EnvioEmail(string descricao) {
            return _serviceEmail.EnvioEmail(descricao);
        }
    }
}