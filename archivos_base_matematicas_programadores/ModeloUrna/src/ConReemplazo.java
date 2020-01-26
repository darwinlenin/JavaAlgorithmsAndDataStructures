import java.util.Random;
public class ConReemplazo {

	static int[] sorteo = new int[7];
	public static void main(String[] args) {
		Random numero = new Random();
		int temp=0;
		for (int i = 0; i < sorteo.length; i++) {
			temp=numero.nextInt(49) + 1;
			sorteo[i]=temp;
		}
		for (int i = 0; i < sorteo.length; i++) {
			System.out.println(sorteo[i]);
		}


	}

}
