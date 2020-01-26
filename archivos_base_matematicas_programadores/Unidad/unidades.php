<?php
    $neto = "20 EURO";
	$IVA = "21%";
	$bruto = $neto + $neto * $IVA / 100;
	echo "El precio total de un precio neto $neto con un impuesto de $IVA es $bruto EURO.";
	?>