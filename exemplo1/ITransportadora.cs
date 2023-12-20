using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace injecao_dependencia
{
    public interface ITransportadora
    {
        public string Entrega(Pacote pacote);
    }
}