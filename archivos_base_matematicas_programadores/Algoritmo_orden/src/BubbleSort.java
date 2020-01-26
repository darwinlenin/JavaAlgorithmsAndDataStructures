
public class BubbleSort {
	static void bubbleSort(int[] feld) {
		int temp = 0;

		for (int i = feld.length - 1; i >= 0; i--) {
			for (int j = 0; j <= i - 1; j++) {
				if (feld[j] > feld[j + 1]) {
					temp = feld[j];
					feld[j] = feld[j + 1];
					feld[j + 1] = temp;
				}
			}
		}
	}

	public static void main(String[] args) {
		// array unidimensional
		int[] numeros = { 5, 3, 42, 7, 9, 1, 10, 2, 0 };

		bubbleSort(numeros);

		System.out.println("Elementos ordenados: ");
		for (int i = 0; i < numeros.length; i++) {
			System.out.print(numeros[i] + " ");
		}

	}
}
