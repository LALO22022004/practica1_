functiongetimc(){
  var peso=parsefloat(document.getElementByid(peso).value);
  var altura=parsefloat(document.getElementByid(altura).value);
  var imc=peso/(altura*altura);
  document.getElementByid(imc).inner html=imc;
                    
