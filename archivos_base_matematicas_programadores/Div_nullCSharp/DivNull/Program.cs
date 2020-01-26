using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace DivNull
{
    class Program
    {
        static void Main(string[] args)
        {
            double valor, divisor=0;
            Console.WriteLine(1/ divisor);
            Thread.Sleep(1000);
			divisor++;
            while(true)
                  {
				divisor *= 10000;
				valor = 1 / (1 / divisor);
                      Console.WriteLine(valor);
                      Thread.Sleep(100);
                if (Double.IsInfinity(valor))
                {
                    Console.WriteLine("Infinito positivo es igual a {0}.", valor.ToString());
                    break;
                }
                  }  
        }
    }
}
