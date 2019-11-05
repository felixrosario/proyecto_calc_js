  var Calculadora ={

    //funciones para ampliar y reducir botones

   reduceimagenon:function(){
   document.getElementById('on').style="width:20%"
 },

   ampliaimagenon:function(){
   document.getElementById('on').style="width:22%"
 },

   reduceimagensign:function(){
   document.getElementById('sign').style="width:20%"
 },

   ampliaimagensign:function(){
   document.getElementById('sign').style="width:22%"
 },

   reduceimagenraiz:function(){
   document.getElementById('raiz').style="width:20%"
 },

  ampliaimagenraiz:function(){
   document.getElementById('raiz').style="width:22%"
 },

 reduceimagendividido:function(){
   document.getElementById('dividido').style="width:20%"
 },

  ampliaimagendividido:function(){
   document.getElementById('dividido').style="width:22%"
 },

 reduceimagen7:function(){
   document.getElementById('7').style="width:20%"
 },

 ampliaimagen7:function(){
   document.getElementById('7').style="width:22%"
 },

 reduceimagen8:function(){
   document.getElementById('8').style="width:20%"
 },

 ampliaimagen8:function(){
   document.getElementById('8').style="width:22%"
 },

 reduceimagen9:function(){
   document.getElementById('9').style="width:20%"
 },

 ampliaimagen9:function(){
   document.getElementById('9').style="width:22%"
 },

 reduceimagenpor:function(){
   document.getElementById('por').style="width:20%"
 },

 ampliaimagenpor:function(){
   document.getElementById('por').style="width:22%"
 },

 reduceimagen4:function(){
   document.getElementById('4').style="width:20%"
 },

 ampliaimagen4:function(){
   document.getElementById('4').style="width:22%"
 },

 reduceimagen5:function(){
   document.getElementById('5').style="width:20%"
 },

 ampliaimagen5:function(){
   document.getElementById('5').style="width:22%"
 },

 reduceimagen6:function(){
   document.getElementById('6').style="width:20%"
 },

 ampliaimagen6:function(){
   document.getElementById('6').style="width:22%"
 },

  reduceimagenmenos:function(){
   document.getElementById('menos').style="width:20%"
 },

  ampliaimagenmenos:function(){
   document.getElementById('menos').style="width:22%"
 },

  reduceimagen1:function(){
   document.getElementById('1').style="width:28%"
 },

  ampliaimagen1:function(){
   document.getElementById('1').style="width:29%"
 },

  reduceimagen2:function(){
   document.getElementById('2').style="width:28%"
 },

  ampliaimagen2:function(){
   document.getElementById('2').style="width:29%"
 },

  reduceimagen3:function(){
   document.getElementById('3').style="width:28%"
 },

  ampliaimagen3:function(){
   document.getElementById('3').style="width:29%"
 },

  reduceimagen0:function(){
   document.getElementById('0').style="width:28%"
 },

  ampliaimagen0:function(){
   document.getElementById('0').style="width:29%"
 },

  reduceimagenpunto:function(){
   document.getElementById('punto').style="width:28%"
 },

  ampliaimagenpunto:function(){
   document.getElementById('punto').style="width:29%"
 },

  reduceimagenigual:function(){
   document.getElementById('igual').style="width:28%"
 },

  ampliaimagenigual:function(){
   document.getElementById('igual').style="width:29%"
 },

  reduceimagenmas:function(){
   document.getElementById('mas').style="width:88%"
 },

  ampliaimagenmas:function(){
   document.getElementById('mas').style="width:90%"
 },








   }

//invocaciones de funcioenes para ampliar y reducir imagen

  document.getElementById('on').addEventListener("mousedown", function() {Calculadora.reduceimagenon();});
  document.getElementById('on').addEventListener("mouseup", function() {Calculadora.ampliaimagenon();});
  document.getElementById('sign').addEventListener("mousedown", function() {Calculadora.reduceimagensign();});
  document.getElementById('sign').addEventListener("mouseup", function() {Calculadora.ampliaimagensign();});
  document.getElementById('raiz').addEventListener("mousedown", function() {Calculadora.reduceimagenraiz();});
  document.getElementById('raiz').addEventListener("mouseup", function() {Calculadora.ampliaimagenraiz();});
  document.getElementById('dividido').addEventListener("mousedown", function() {Calculadora.reduceimagendividido();});
  document.getElementById('dividido').addEventListener("mouseup", function() {Calculadora.ampliaimagendividido();});
  document.getElementById('7').addEventListener("mousedown", function() {Calculadora.reduceimagen7();});
  document.getElementById('7').addEventListener("mouseup", function() {Calculadora.ampliaimagen7();});
  document.getElementById('8').addEventListener("mousedown", function() {Calculadora.reduceimagen8();});
  document.getElementById('8').addEventListener("mouseup", function() {Calculadora.ampliaimagen8();});
  document.getElementById('9').addEventListener("mousedown", function() {Calculadora.reduceimagen9();});
  document.getElementById('9').addEventListener("mouseup", function() {Calculadora.ampliaimagen9();});
  document.getElementById('por').addEventListener("mousedown", function() {Calculadora.reduceimagenpor();});
  document.getElementById('por').addEventListener("mouseup", function() {Calculadora.ampliaimagenpor();});
  document.getElementById('4').addEventListener("mousedown", function() {Calculadora.reduceimagen4();});
  document.getElementById('4').addEventListener("mouseup", function() {Calculadora.ampliaimagen4();});
  document.getElementById('5').addEventListener("mousedown", function() {Calculadora.reduceimagen5();});
  document.getElementById('5').addEventListener("mouseup", function() {Calculadora.ampliaimagen5();});
  document.getElementById('6').addEventListener("mousedown", function() {Calculadora.reduceimagen6();});
  document.getElementById('6').addEventListener("mouseup", function() {Calculadora.ampliaimagen6();});
  document.getElementById('menos').addEventListener("mousedown", function() {Calculadora.reduceimagenmenos();});
  document.getElementById('menos').addEventListener("mouseup", function() {Calculadora.ampliaimagenmenos();});
  document.getElementById('1').addEventListener("mousedown", function() {Calculadora.reduceimagen1();});
  document.getElementById('1').addEventListener("mouseup", function() {Calculadora.ampliaimagen1();});
  document.getElementById('2').addEventListener("mousedown", function() {Calculadora.reduceimagen2();});
  document.getElementById('2').addEventListener("mouseup", function() {Calculadora.ampliaimagen2();});
  document.getElementById('3').addEventListener("mousedown", function() {Calculadora.reduceimagen3();});
  document.getElementById('3').addEventListener("mouseup", function() {Calculadora.ampliaimagen3();});
  document.getElementById('0').addEventListener("mousedown", function() {Calculadora.reduceimagen0();});
  document.getElementById('0').addEventListener("mouseup", function() {Calculadora.ampliaimagen0();});
  document.getElementById('punto').addEventListener("mousedown", function() {Calculadora.reduceimagenpunto();});
  document.getElementById('punto').addEventListener("mouseup", function() {Calculadora.ampliaimagenpunto();});
  document.getElementById('igual').addEventListener("mousedown", function() {Calculadora.reduceimagenigual();});
  document.getElementById('igual').addEventListener("mouseup", function() {Calculadora.ampliaimagenigual();});
  document.getElementById('mas').addEventListener("mousedown", function() {Calculadora.reduceimagenmas();});
  document.getElementById('mas').addEventListener("mouseup", function() {Calculadora.ampliaimagenmas();});
