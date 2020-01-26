
public class QuickSort {
	 void quickSort (int[] lista, int izquierdo, int derecho)
	  {
	    if (derecho > izquierdo)
	    {
	      int p = divideAndSort (lista, izquierdo, derecho);
	      //recursivo parte izquierda de la lista
	      quickSort(lista, izquierdo, p -1);
	      //recursivo parte derecha de la lista
	      quickSort(lista, p + 1, derecho);
	    }
	  }

	  int divideAndSort(int[] lista,int izquierdo, int derecho)
	  {
	    int pivote = lista[izquierdo];
	    int i = izquierdo + 1;
	    int j = derecho;
	    boolean isFinished = false;
	    int temp = 0;

	    while (!isFinished)
	    {
	      while ((lista[i] <= pivote) && (i < derecho))
	    	  //movemos el cursor a la derecha mientras sea menor que el pivote
	        i++;

	      while ((lista[j] >= pivote) && (j > izquierdo))
	    	  //movemos el cursor a la izquierda mientras sea mayor que el pivote
	        j--;

	      if (i >= j)
	    	  //los cursores coinciden. Fin
	        isFinished =true;
	      else
	      {
	    	  //intercambio el elemento i por el j
	    	  //almaceno el valor de la posición i en un temp
	        temp = lista[i];
	        //meto meto en la posición i el j
	        lista[i] = lista[j];
	        // y meto el j en el i
	        lista[j] = temp;
	      }
	    }
	    //al terminar los bucles, intercambio el valor izquierdo por el j y devuelvo la j
	    temp = lista[j];
	    lista[j] = lista[izquierdo];
	    lista[izquierdo] = temp;
	    return j;
	  }

	  public static void main(String[] args)
	  {
	    //Array unidimensional 
	    int[] numeros = {20, 3, 1, 10, 2, 22};
	    QuickSort qs = new QuickSort();

	  
	    qs.quickSort (numeros,0, 5);

	    System.out.println("Elementos ordenados: ");
	    for (int i = 0; i < numeros.length; i++)
	    {
	      System.out.print(numeros[i]+" ");
	    }

	  }
}
