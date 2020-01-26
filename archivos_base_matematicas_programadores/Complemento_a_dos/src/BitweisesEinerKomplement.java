
public class BitweisesEinerKomplement {
	public static void main(String[] args) {
		byte zahl1 = 10; // 0000 1010
		byte d = (byte) ~zahl1;
		System.out.println("Der Wert von ~ 10: " + d);
	}
}
