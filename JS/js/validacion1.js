function calcular(){

    var vent1 = parseInt(document.getElementById('venta1').value);
    var vent2 =parseInt (document.getElementById('venta2').value);
    var vent3 =parseInt (document.getElementById('venta3').value);

    if(vent1 >0 && vent2 > 0 && vent3 >0){
        var comision = (vent1 + vent2 + vent3) * .10;
        alert("La comisión es: $" + comision);
    }else
    alert("Error ingreso un valor negativo")

}

function pregunta2(){

    var precio =parseInt(document.getElementById('precio').value);

    if(precio >0){
        var descuento = precio * .15;
        var total = precio - descuento;
        alert("El descuento del 15% es: $" + descuento + " Total a pagar $" + total);
    }else
    alert("Error ingreso un número negativo")
}

function pregunta3(){
    var promedio = document.getElementById('promediocali').value;
    var examen = document.getElementById('examen').value;
    var trabajo = document.getElementById('trabajo-final').value;


    if(promedio >0 && examen >0 && trabajo >0 ){
        var promediopar = promedio * .55;
        var exa = examen * .30;
        var trabajofinal = trabajo * .15;
        var total = ((promediopar/10)*10) +exa + trabajofinal;
        alert("Calificación final " + total);
    }else
    alert("Error ingreso un número negativo")
}

function pregunta4(){
    var h =parseInt (document.getElementById('Nhombres').value);
    var m =parseInt (document.getElementById('Nmujeres').value);

    if(h > 0 && m > 0){
        var tlal = h + m;
        var ta = h * 100 / tlal;
        var tm = m * 100 / tlal; 
        
        alert("Porcentaje total de hombres es: " + ta + " Porcentaje total de mujeres es: " + tm);
    }else
    alert("Error ingreso un número es negativo")
}

function pregunta5(){
    var date = parseInt(document.getElementById('aN').value);

    if(date > 1920){
        var anhio = 2023 - date;
        alert("Usted tiene "+ anhio + " años");
    }else
    alert("Error");

}

function pregunta6(){
    var numero1 =parseInt (document.getElementById('num1').value);
    var numero2 =parseInt (document.getElementById('num2').value);

    if(numero1 == numero2){
        var mul = numero1 * numero2;
        alert("La multiplicación de los dos números son: " + mul);
    }else if(numero1 > numero2){
        var res = numero1 - numero2;
        alert("La resta de los dos números son: " + res);
    }else if(numero1 < numero2){
    var sum = numero1 + numero2;
    alert("La suma de los dos números son: " + sum);
    }
}

function preguntas7(){
    var numero1 = document.getElementById("nume1").value;
    var numero2 = document.getElementById("nume2").value;
    var numero3 = document.getElementById("nume3").value;
    var num1 = ((numero1/10)*10);
    var num2 = ((numero2/10)*10);
    var num3 = ((numero3/10)*10);
    if(num1 >= num2){
        if(num1 >= num3){
            alert("El numero mayor de los tres es " + num1);
        } else{
            alert("El numero mayor de los tres es " + num3);
        }
    } else{
        if(num2 >= num3){
            alert("El numero mayor de los tres es " + num2);
        } else{
            alert("El numero mayor de los tres es " + num3);
        }
    }
}

function pregunta8(){
    var paga =parseInt (document.getElementById('pago').value);
    var tiempo =parseInt (document.getElementById('time').value);
    
    if(tiempo <= 40){
        var sueldonormal = paga * tiempo;
        alert("No trabajo horas extras y solamente gano $"+ sueldonormal);

    }
    if(tiempo > 40 && tiempo < 50){
        var sueldoduplicado = (((tiempo - 40)* paga)*2 + (40 * paga));
        alert("Trabajo horas extras y se le pago $" + sueldoduplicado);
    }
    if(tiempo >48){
        var sueldotriple = (40 * paga) + ((paga * 2)*8) + ((tiempo - 48)*((paga *3)));
        alert("Trabajo más horas extras y se le pago $" + sueldotriple);
    }
}

function pregunta9(){
    var tim = parseInt(document.getElementById('mes').value);
    var pagos = parseInt(document.getElementById('paga').value);
    
    if(tim < 12){
        var utilidad = pagos * 0.05;
        alert("La utilidad recibida por la antiguedad es: " + utilidad);
    }
    if(tim >= 12 && tim < 24){
        utilidad = pagos * 0.07;
        alert("La utilidad recibida por la antiguedad es: " + utilidad);
    }
    if(tim >= 24 && tim < 59){
        utilidad = pagos * 0.10;
        alert("La utilidad recibida por la antiguedad es: " + utilidad);
    }
    if(tim >= 60 && tim < 119){
        utilidad = pagos * 0.15;
        alert("La utilidad recibida por la antiguedad es: " + utilidad);
    }
    if(tim >= 120){
        utilidad = pagos * 0.20;
        alert("La utilidad recibida en base a su antiguedad es de: " + utilidad);
    }
}
