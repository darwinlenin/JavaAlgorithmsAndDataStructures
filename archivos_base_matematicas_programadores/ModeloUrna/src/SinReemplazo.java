import java.util.Random;

public class SinReemplazo {

	static int[] sorteo = new int[7];
	public static void main(String[] args) {
		Random numero = new Random();
		int temp=0;
		boolean disponible=false;
		for (int i = 0; i < sorteo.length; i++) {
			temp=numero.nextInt(49) + 1;
			for (int j = 0; j < sorteo.length; j++) {
				if(temp==sorteo[j]) {
					disponible=true;
					break;
				}
			}
			if(disponible){
				i--;
				System.out.println("Doppelt");
				disponible=false;
			}
			else{
				sorteo[i]=temp;
			}
		}
		for (int i = 0; i < sorteo.length; i++) {
			System.out.println(sorteo[i]);
		}
}

}
