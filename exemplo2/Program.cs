using System;

namespace c_
{
    class Program
    {
        static void Main(string[] args)
        {
            // Invertendo o controle, Pessoa recebe a dependencia Cliente para o envio de Email ao Cliente.
            Pessoa retorno = new Pessoa(new Cliente());
            Console.WriteLine(retorno.EnvioEmail("Teste envio de email"));

            // Também pode ser enviado aos funcionários e fornecedores.
            retorno = new Pessoa(new Fornecedor());
            Console.WriteLine(retorno.EnvioEmail("Teste envio de email"));

            retorno = new Pessoa(new Funcionario());
            Console.WriteLine(retorno.EnvioEmail("Teste envio de email"));

            // Código com menos linhas possiveis
            Console.WriteLine(new Pessoa(new Cliente()).EnvioEmail("Teste envio de email"));
        }
    }
}