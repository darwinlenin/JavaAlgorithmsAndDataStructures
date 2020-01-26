
public class AlgoritmoRecursivo {
	 static int getFact(int x)
	  {
	   if (x > 0)
	     return x * getFact(x-1);
	   else
	     return 1;
	  }
	  public static void main(String args[])
	  {
	    int x = 4;

	    int fx = getFact(x);  
	    System.out.println("El factorial de "+x+" es "+fx);
	  }
}
