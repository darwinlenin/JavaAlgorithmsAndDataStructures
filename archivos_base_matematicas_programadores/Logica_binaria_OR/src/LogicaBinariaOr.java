
public class LogicaBinariaOr {
	public static void main(String[] args) {
		byte numero1 = 10;  // 0000 1010
		byte numero2 = 12;  // 0000 1100 
		byte b = (byte)(numero1 | numero2);
		System.out.println("Resultado de 10 | 12: " + b);
	}
}
