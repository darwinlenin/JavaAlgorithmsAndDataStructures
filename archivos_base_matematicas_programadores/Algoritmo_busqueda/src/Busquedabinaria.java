
public class Busquedabinaria {
	static int findElement(int[] lista, int element) {
		int izquierda = 0;
		int derecha = lista.length - 1;
		int centro = 0;
		boolean isFound = false;

		while (!isFound && (izquierda <= derecha)) {
			centro = (izquierda + derecha) / 2;

			if (lista[centro] == element)
				isFound = true;
			else {
				if (lista[centro] > element)
					derecha = centro - 1;
				else
					izquierda = centro + 1;
			}
		}

		if (isFound)
			return centro;
		else
			return -1;
	}

	public static void main(String[] args) {
		// eindimsensionales Array
		int[] numeros = { 2, 3, 6, 10, 11, 13, 16, 18, 22, 23, 25, 27, 29, 30, 34, 35, 36, 38, 39, 42, 44, 45, 47, 49 };
		System.out.println("Índice del elemento deseado: " + findElement(numeros, 42));
	}
}
