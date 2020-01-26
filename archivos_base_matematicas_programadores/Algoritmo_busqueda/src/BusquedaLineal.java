
public class BusquedaLineal {
	static int findMax(int[] lista) {
		int max = 0;
		for (int i = 1; i < lista.length; i++) {
			if (lista[i] > lista[max])
				max = i;
		}
		return max;
	}

	public static void main(String[] args) {
		//  Array unidimensional
		int[] numero = { 25, 6, 2, 66, 99, 33, 97, 3, 10 };

		System.out.println("Índice del máximo: " + findMax(numero));
	}
}
