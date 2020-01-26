
public class AlgoritmoIterativo {

	static int getpFact(int x) {
		int result = 1;
		while (x > 1) {
			result = result * x;
			x = x - 1;
		}
		return result;
	}

	public static void main(String args[]) {
		int x = 4;
		int fx = 0;

		fx = getpFact(x);
		System.out.println("El factorial de " + x + " es " + fx);
	}

}
