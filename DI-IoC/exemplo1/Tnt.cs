using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace injecao_dependencia
{
    public class Tnt : ITransportadora
    {
        public string Entrega(Pacote pacote)
        {
            return "Pacote: " + pacote.codigoPacote + ". Transportadora: " + pacote.codigoTransportadora + "-Tnt";
        }
    }
}