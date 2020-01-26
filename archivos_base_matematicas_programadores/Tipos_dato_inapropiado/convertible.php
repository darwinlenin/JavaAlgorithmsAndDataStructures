<?php
$netto="20 EURO";
$mwst="19%";
$brutto=$netto+$netto*$mwst/100;
echo "El precio bruto para un precio neto de $netto con una tasa de IVA de $mwst es $brutto EURO.";
?>