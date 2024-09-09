

//Ejercicios1

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

const Ej9 = () => console.log(Math.round((Math.random()*100) + 500))


function Ej10(num = 0){
  str = num.toString()
  inverted_str = str.split("").reverse().join("");
  (inverted_str === str)? console.log("Si es capicua") : console.log("No es capicua")
}

function Ej11(num = 0){
  if (num <= 1) {
    return num
  }

  return num * Ej11(num-1)

}

const Ej12 = (num = 0 ) => {
  for(let i = 2 ; i < num ; i++){
    if((num % i) === 0 ){
      console.log("No es primo")
      return 0
    }
  }
  console.log("Es primo")
}


const Ej13 = (num = 0) => (num%2)?  console.log("Es impar") :  console.log("Es par")


function Ej14(n = 0 , scale = "" ){
  if(scale.length !==1 || !/(C|F)/.test(scale)){
    console.warn("Porfavor por una unidad valida")
    return 
  }
  (scale === "C")? console.log((n*9/5)+32 + "°F") : console.log((n-32)*5/9 + "°C") 
}

const Ej15 = (n = 0 , base = 0) =>  (base === 2)?  console.log(n + " base " + base + " Es " + parseInt(n , base)  + " base 10") 
  : console.log(n + " base " + base + " Es " + n.toString(2)  + " base 2")

const Ej16 = (n = 0 , discount = 0) => console.log("El monto total " + (n - n*(discount/100)))


const Ej17 = (today_date = undefined) => {
  let date_diff = new Date().getTime() - today_date.getTime();
  let yearsMs = 1000 * 60 * 60 * 24 * 365;
  let years = Math.floor(date_diff / yearsMs);

  return (Math.sign(years) === -1)
    ? console.log("Faltan " + Math.abs(years) + " años para el " + today_date.getFullYear())
    : (Math.sign(years) === 1)
      ? console.info("Han pasado " + years + " años desde " + today_date.getFullYear())
      : console.info("Es el mismo año");
}


function Ej18(str = ""){
  str = str.toLocaleLowerCase()
  let vowels = 0 , consonants = 0


  for(let letter of str){
    if(/[aeiouáéíóú]/.test(letter)) vowels++
    if(/[bcdfghjklmnñpqrst]/.test(letter)) consonants++
  }

  console.log("Hay " + vowels + " vocales y " + consonants + " consonantes ")
}

function Ej19(str = "") {
  let isValidName = /^[A-Za-zÑñÁÉÍÓÚáéíóú\s]+$/.test(str);
  
  isValidName
    ? console.info("El nombre ingresado es válido")
    : console.info("El nombre ingresado no es válido");
}

function Ej20(str = "") {
  let RegExp = /[A-Za-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[_a-z0-9]+)*(\.[a-z]{2,15})/.test(str);
  
  RegExp
    ? console.info("El correo ingresado es válido")
    : console.info("El correo ingresado no es válido");
}


function Ej21(arr = undefined){
  for (element in arr){
    arr[element] = Math.pow(arr[element], 2)
  }
  console.log(arr)
}

function Ej22(arr = undefined){
  let max = arr[0], min = arr[0]
  for (element in arr){
    if(arr[element] > max) max = arr[element]
    if(arr[element] < min) min = arr[element]
  }
    console.log("El max es " + max + " El min es "+ min)
}

function Ej23(arr = undefined){
  let even = []
  let odd = []

  for (element in arr){
    (arr[element]%2 === 0)? even.push(arr[element]) : odd.push(arr[element])
  }
    console.log("Even " + even + " Odd " + odd)
}

function Ej24(arr = undefined){
  let desc = arr.slice(); 
  let asc = arr.slice(); 

  desc.sort((a, b) => b - a); 
  asc = desc.reverse(); 

  console.log("Descending: ", desc);
  console.log("Ascending: ", asc);
}

const Ej25 = arr => { return [...new Set(arr)]}

function Ej26(arr = undefined){
  let sum = 0
  for (element in arr){
    sum += arr[element] 
  }

  let median = sum / arr.length
    console.log("El promedio es " + median)
}

class Pelicula{
  constructor({id,title,director,premier,country,genre,note}){
    this.id = id
    this.title = title
    this.director = director
    this.premier = premier
    this.country = country
    this.genre = genre
    this.note = note
  
    this.validateIMDB(id)
    this.validatedirector(title)
  }

  validatelength(prop , value , long){
    if(value.length > long) return console.error("excedido numero caracteres")
    return true
  }

  validatString(prop , value){
    if(!value) return console.warn("el valor esta vacio")

    if(typeof valor !== "string") return console.warn("El valor ingresado no es un string")

    return true
  }

  validateIMDB(id){
    if(!(/^[a-z]{2}([0-9]){7}$/.test(id))){
      return console.error("id no valido")
    }
  }

  validatedirector(title){
    if(!(/^[A-Za-z0-9]{100}$/.test(title))){
      return console.error("nombre del titulo no valido")
    }
  }
}


let str = 'xyz1, xyz2, xyz3, xyz4, xyz5, xyz6'
let arr = [1,2,3,4,5,3,5,1,8,10,10]
Ej1(str)
Ej2(str, 11)
Ej3(str , "e")
Ej5(str)
Ej6(str , "Hello")
Ej7(str)
Ej8(str , '[xyz]')
Ej9()
Ej10(1551)
console.log(Ej11(5))
Ej12(7)
Ej13()
Ej14(32,"F")
Ej15(4, 10)
Ej16(1000,10)
Ej17(new Date(2000,4,21))
Ej18("Hola")
Ej19("Andre Francois")
Ej20("aa@f.com")
Ej21(arr.slice())
Ej22(arr.slice())
Ej23(arr.slice())
Ej24(arr.slice())
Ej26(arr.slice())

batman = new Pelicula({id:"ttt1234567" , title : "sddd111"})