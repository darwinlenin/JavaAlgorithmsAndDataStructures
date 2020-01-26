package de.rjs.math;

import java.util.Date;

public class ZufallZahlenLineareKonvergenz {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int m=12, a=13, b=2, y=new Date().getSeconds();
		while(y < 100) {
			
		y = (a * y + b) % m;
		
		System.out.println(y);
		}


		
	}

	
	

}
