function total() {
    var monto = parseFloat(document.querySelector(".monto").value);
    var interes = parseFloat(document.querySelector(".interes").value);
    var tiempo = parseFloat(document.querySelector(".meses").value);
    var interest = (interes / 12) / 100;

    var cuota = (monto * (Math.pow(1 + interest, tiempo) * interest) /
        (Math.pow(1 + interest, tiempo) - 1));

    var totali = (cuota * tiempo) - monto;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    if (isNaN(monto) || isNaN(interes) || isNaN(tiempo) || monto <= 0 || interes < 0 || tiempo <= 0) {
        document.getElementById("alerta1").style.display = "block";
        document.getElementById("alerta1").innerHTML = "Por favor, complete todos los campos correctamente.";
    } else {
        document.getElementById("alerta1").style.display = "block";
        document.getElementById("alerta1").innerHTML = "Cuota mensual estimada: " + formatter.format(cuota) + "<br>" +
            "Total del interés pagado: " + formatter.format(totali);
    }
}