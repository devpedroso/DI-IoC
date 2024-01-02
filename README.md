# 💉 DI/IoC - Injeção de depência e Inversão de controle

***"não ligue para nós, nós chamamos você"***

Essa aplicação tem como objetivo domonstrar com exemplos reais como funciona injeção de depência e inversão de controle, e como esse design pattern soluciona problemas de forte acoplamento entre classes. 

Podemos concluir que um dos principais benefícios que esse pattern nos trás são em testes unitários, uma vez que os testes são impactados quando existe a necessidade de instanciar uma depêndencia para que a classe que necessita do teste funcione, o que é terrivel, e muitas vezes impossível de ser testada. Com essa abordagem, as instãncias das depências são feitas por quem há chama, além de termos um software de mais fácil manutenção.

## 🚀 Como executar o projeto no **Visual Studio Code**
Pré-requisitos: [Baixar .NET Core SDK](https://dotnet.microsoft.com/pt-br/download)

```bash
# instalar extenção C# no VS Code
 1. Abra o "Extensions" no VS Code (Ctrl + Shift + X)
 2. Pesquise por "C#"
 3. Clique em "Install"
```
![image](https://github.com/devpedroso/Portifolio/assets/47677411/82188c45-4140-4bf1-abbc-0753d7c603b8)

```bash 
# clonar repositório
git clone https://github.com/devpedroso/DI-IoC.git

# entrar na pasta do projeto front end
cd DI-IoC/exemplo1
  ou
cd DI-IoC/exemplo2

# executar o projeto
dotnet run .
```

### 📖 Referências

Artigos Macoratti: [C# - Injeção de dependência(DI) e Inversão de Controle(IoC)](https://www.macoratti.net/19/04/c_dioc1.htm)
