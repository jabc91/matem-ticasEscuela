function suma(){
  var numerouno= document.getElementById('primeraPeticion').value;
  var numerodos= document.getElementById('segundaPeticion').value;
  var resultado= parseInt(numerouno) + parseInt(numerodos);
  document.write("El resultado de la suma es " + resultado);
}

function resta(){
  var numerouno= document.getElementById('primeraPeticion').value;
  var numerodos= document.getElementById('segundaPeticion').value;
  var resultado= parseInt(numerouno)-parseInt(numerodos);
  document.write("El resultado de la resta es" + resultado)
}

function multi(){
  var numerouno= document.getElementById('primeraPeticion').value;
  var numerodos= document.getElementById('segundaPeticion').value;
  var resultado= parseInt(numerouno) * parseInt(numerodos);
  document.write("El resultado de la multiplicacion es " + resultado);
}

function divi(){
  var numerouno= document.getElementById('primeraPeticion').value;
  var numerodos= document.getElementById('segundaPeticion').value;
  var resultado= parseInt(numerouno) / parseInt(numerodos);
  document.write("El resultado de la divicion es " + resultado);
}
