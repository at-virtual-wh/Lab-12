 // Parte 1: Calcular suma y promedio con entrada de usuario
 function sumarNumeros() {
    //const entrada = document.getElementById('promedio').value;
    //const numeros = entrada.split(',').map(num => parseFloat(num.trim())); 
    let numeros=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
      if (!isNaN(numeros[i])) {  // Verifica que sea un número
        suma = suma +numeros[i];
      }
    }

    const promedio = suma / numeros.length;
    document.getElementById('salidaPromedio').innerText = `Suma total: ${suma.toFixed(1)}, Promedio: ${promedio.toFixed(1)}`;
  }

  // Parte 2: Ingreso de números hasta ingresar uno negativo
  function ingresarNumeros() {
    let numerosIngresados = [];
    let suma = 0;
    let numero;

    while (true) {
      numero = parseFloat(prompt("Ingresa un número (negativo para terminar):"));
      if (numero < 0) {
        break;
      }else{
          if (!isNaN(numero)) { 
            numerosIngresados.push(numero);
            suma = suma + numero;
          }
      }
    }

    document.getElementById('salidaNumeros').innerHTML = `
      <strong>Números ingresados:</strong> ${numerosIngresados.join(', ')}<br>
      <strong>Suma total:</strong> ${suma}`;
  }

  // Parte 3: Validación de contraseña
  function validarContrasena() {
    const contrasenaCorrecta = "1234";
    let intentos = 0;
    let contrasena;
    let contrasenasIngresadas = [];

    do {
      contrasena = prompt("Ingresa la contraseña:");
      contrasenasIngresadas.push(contrasena);
      intentos++;
      if (contrasena !== contrasenaCorrecta) {
        alert("Contraseña Incorrecta")
      }
    } while (contrasena !== contrasenaCorrecta);

    document.getElementById('salidaContrasena').innerHTML = `
      <strong>¡Contraseña correcta!</strong><br>
      <strong>Intentos fallidos:</strong> ${intentos-1}<br>
      <strong>Contraseñas ingresadas:</strong> ${contrasenasIngresadas.join(', ')}`;
  }