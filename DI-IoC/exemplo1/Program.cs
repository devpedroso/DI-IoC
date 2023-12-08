using System;

namespace injecao_dependencia
{
    class Program
    {
        static void Main(string[] args)
        {
            //Design Patterns - Injeção de depêndencia e inversão de controle

            //Transportadora Brasspress
            Brasspress brasspress = new Brasspress();

            Transportadora transp = new Transportadora(brasspress);

            Pacote pacote = new Pacote { codigoPacote = 1, codigoTransportadora = 1 };

            string entrega = transp.Entrega(pacote);

            Console.WriteLine(entrega);

            //Transportadora Tnt
            Tnt tnt = new Tnt();

            transp = new Transportadora(tnt);

            pacote = new Pacote { codigoPacote = 2, codigoTransportadora = 2 };

            entrega = transp.Entrega(pacote);

            Console.WriteLine(entrega);
        }
    }
}
