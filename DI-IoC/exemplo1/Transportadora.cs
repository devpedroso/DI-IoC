using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace injecao_dependencia
{
    public class Transportadora
    {
        public ITransportadora _transportadora { get; set; }

        public Transportadora(ITransportadora transportadora)
        {
            _transportadora = transportadora;
        }

        public string Entrega(Pacote pacote)
        {
            return _transportadora.Entrega(pacote);
        }
    }
}