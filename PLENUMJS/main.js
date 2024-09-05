
const Ej1 = (str = "")  => (!str)? console.warn("Mete una cadena") :
  console.info("La cadena tiene una long de : " + str.length)


const Ej2 = (str = "" , n) => console.info(str.slice(0,n))

function Ej3(str = "", splicer){
  var spliced_str = str.split(splicer)
  console.info(spliced_str)
}

function Ej4(str = "", n){
  for (let i = 0; i < n; i++) {
    console.log(str)
  }
}

function Ej5(str = ""){
  str = str.split("").reverse().join("");
  console.info(str);
}


function Ej6(str = "" , text = ""){
  let i = 0 , cont = 0
  while(i !== -1 ){
    i = str.indexOf(text , i)
    if(i !== -1){
      i++
      cont++
    }
  }
  console.log("Se repitio " + cont + " veces ")
}

function Ej7(str = ""){
  str = str.toLocaleLowerCase()
  inverted_str = str.split("").reverse().join("");
  (inverted_str === str)? console.log("Es palindromo") : console.log("No es palindromo")
}


function Ej8(str = "" , pattern = ""){
  console.info(str.replace(new RegExp(pattern, "ig"), ""))
} 



let str = 'xyz1, xyz2, xyz3, xyz4, xyz5, xyz6'
Ej1(str)
Ej2(str, 11)
Ej3(str , "e")
Ej5(str)
Ej6(str , "Hello")
Ej7(str)
Ej8(str , '[xyz]')