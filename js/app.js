console.log("Hello world");
console.log("Hello again");
console.log("This is line 1.");
console.log("This is line 2");
console.log("This is line 3"); console.log("This is line 4");
console.log("This is line 5");;
;
console.log("This is line 6");

/* console.log ("natalia");
console.log ("1.oktober");
console.log ("natalim@live.se");
 */
const text = "green bottles hanging on the wall";
const text2 = "and if one green bottle, should accidentally fall, there will be";

for (let i = 10; i>= 1; i--) {
  const currentbottle = [i];
  const nextbottle = [i-1];
  console.log(currentbottle);
  console.log(text);
console.log(text2);
}


function konverteraKmhTillMs(hastighet_kmh) {
  const KONVERTERINGS_FAKTOR = 3.6;
  const hastighet_ms = hastighet_kmh / KONVERTERINGS_FAKTOR;
  return hastighet_ms;
}


const inputHastighet = 72;
const outputHastighet = konverteraKmhTillMs(inputHastighet);
console.log(`Input: ${inputHastighet}`);
console.log(`Output: ${Math.round(outputHastighet)}`);


function minuterTillSekunder(minuter) {
  return minuter * 60;
}
function divideraTal(tal1, tal2) {
  if (tal2 === 0) {
    return "Kan inte dividera med noll";
  }
  return tal1 / tal2;
}
function beraknaRest(tal1, tal2) {
  return tal1 % tal2;
}
const minuterInput = 3;
const sekunderOutput = minuterTillSekunder(minuterInput);

console.log(`Input: ${minuterInput}`);
console.log(`Output: ${sekunderOutput}`);

const divInputA = 11;
const divInputB = 4;
const divisionOutput = divideraTal(divInputA, divInputB);

console.log(`Input: ${divInputA}, ${divInputB}`);
console.log(`Output: ${divisionOutput}`);

const restInputA = 11;
const restInputB = 4;
const restOutput = beraknaRest(restInputA, restInputB);

console.log(`Input: ${restInputA}, ${restInputB}`);
console.log(`Output: ${restOutput}`);

function beraknaCirkelArea(radie) {
  // Math.PI är en inbyggd konstant för Pi (~3.14159...)
  return Math.PI * radie * radie;
}



const radieInput = 2;
const areaOutput = beraknaCirkelArea(radieInput);

console.log("Uppgift 4: Cirkelarea ");
console.log(`Input (Radie): ${radieInput}`);
// .toFixed(2) används för att begränsa decimalerna till två.
console.log(`Output (Area): ${areaOutput.toFixed(2)}`);

function negeraTal(tal) {
    return -tal;
}
const negationInput = 11; // Testa med ett positivt tal
const negationOutput = negeraTal(negationInput);

console.log("Uppgift 5: omvandla positiva tal till negativa");
console.log(`Input: ${negationInput}`);
console.log(`Output: ${negationOutput}`);

function beraknaBMI(vikt_kg, langd_m) {
  const langdKvadrat = Math.pow(langd_m, 2);
  return vikt_kg / langdKvadrat;
}
const viktInput = 70; // Vikt i kg
const langdInput = 1.82; // Längd i meter
const bmiOutput = beraknaBMI(viktInput, langdInput);

console.log("BMI-beräkning");
console.log(`Input (Vikt, Längd): ${viktInput} kg, ${langdInput} m`);
console.log(`Output (BMI): ${bmiOutput.toFixed(3)}`);


/* Funktion för att beräkna längden av hypotenusan (c) med Pythagoras sats.
 * Formel: c = sqrt(a² + b²)
 * @returns {number} Längden på hypotenusan (Output: 5).
 */
function beraknaHypotenusa(sidaA, sidaB) {
    return Math.sqrt(Math.pow(sidaA, 2) + Math.pow(sidaB, 2));
}

const sidaAInput = 3;
const sidaBInput = 4;
const hypotenusaOutput = beraknaHypotenusa(sidaAInput, sidaBInput);

console.log("Hypotenusa (Pythagoras)");
console.log(`Input (Sida A, Sida B): ${sidaAInput}, ${sidaBInput}`);
console.log(`Output (Hypotenusa): ${hypotenusaOutput}`);

function sekunderTillMinuter(totalaSekunder) {
  const SEKUNDER_I_EN_MINUT = 60;
  const minuter = Math.floor(totalaSekunder / SEKUNDER_I_EN_MINUT);
  const sekunder = totalaSekunder % SEKUNDER_I_EN_MINUT;

  return `${minuter} minuter och ${sekunder} sekunder`;
}

const totalaSekunderInput = 111;
const tidOutput = sekunderTillMinuter(totalaSekunderInput);

console.log("den sista övningen");
console.log(`Input (Totala Sekunder): ${totalaSekunderInput}`);
console.log(`Output: ${tidOutput}`);

const string = "Green bottles"
let numberbottels = 10;
console.log(numberbottels + " " + string);
numberbottels -= 1
console.log( numberbottels + string);



const birthYear = 2030;
const nuvarandear = 2025;
const resultat = AlderKontroll (birthYear, nuvarandear);
function AlderKontroll (fodelsear, nuvarandear) {
  const age = nuvarandear - fodelsear;

let isChild = (age >=0 && age <= 10);
let isTeenager = (age >=11 && age <= 17);
let isAdult =(age >= 18);

return { age, isChild, isTeenager, isAdult };


}

console.log(`Födelseår: ${birthYear}. Nuvarande år: ${nuvarandear}.`);
console.log(`Beräknad Ålder: ${resultat.age}`);

console.log(`Är barn (0-10): ${resultat.isChild}`);
console.log(`Är tonåring (11-17): ${resultat.isTeenager}`);
console.log(`Är vuxen (18+): ${resultat.isAdult}`);




function utforLogiskaKontroller(fodelsear, favoritnummer) {
  const nuvarandeAr = 2025;
  const age = nuvarandeAr - fodelsear;

   let kategori;
  if (age < 0) {
    kategori = "FEL: Födelseåret är i framtiden.";
  } else if (age >= 18) {
    kategori = "You are an adult";
  } else if (age >= 11) {
    kategori = "You are a teenager";
  } else {
    kategori = "You are a child";
  }

    const storstaNumret = (age > favoritnummer)
    ? "Åldern"
    : (favoritnummer > age ? "Favoritnumret" : "Båda är lika");

    const uddaEllerJamnt = (favoritnummer % 2 === 0) ? "Jämnt" : "Udda";

  return { age, kategori, storstaNumret, uddaEllerJamnt };
}




let birthYear1 = 2035;
let favoriteNumber1 = 73;

const resultat1 = utforLogiskaKontroller(birthYear1, favoriteNumber1);
console.log(`\n--- Test 1 (Född: ${birthYear1}, Ålder: ${resultat1.age}, Favorit: ${favoriteNumber1}) ---`);
console.log(`Ålderskategori: ${resultat1.kategori}`);
console.log(`Störst nummer: ${resultat1.storstaNumret} är störst.`);
console.log(`Favoritnummer ${favoriteNumber1} är: ${resultat1.uddaEllerJamnt}.`);


let birthYear2 = 2018;
let favoriteNumber2 = 4;

const resultat2 = utforLogiskaKontroller(birthYear2, favoriteNumber2);
console.log(`\n--- Test 2 (Född: ${birthYear2}, Ålder: ${resultat2.age}, Favorit: ${favoriteNumber2}) ---`);
console.log(`Ålderskategori: ${resultat2.kategori}`);
console.log(`Störst nummer: ${resultat2.storstaNumret} är störst.`);
console.log(`Favoritnummer ${favoriteNumber2} är: ${resultat2.uddaEllerJamnt}.`);


function makelasange () {
  console.log("Fry meat.");
  console.log("Cut onions.");
  console.log("Fry onions.");
  console.log("Add tomato sauce.");
  console.log("Add spices.");
  console.log("Boil.");
}
makelasange();
let isHungry = false;
//breakfast
if(isHungry) {
  makelasange()
}
isHungry = true;

//lunch
if(isHungry) {
  makelasange();}
//dinner
if(isHungry) {
  makelasange();}

let listExample  = [1,1,2,3,4,5,6]
listExample.forEach (char => console.log(char));

function walking () {
 console.log("Move Forward.");
 console.log("Turn Right.");

}
walking()

function Move(kommandoLista) {
  kommandoLista.forEach(kommando => {
    if (kommando === "F") {
      console.log("Move Forward.");
    } else if (kommando === "R") {
      console.log("Turn Right.");
    }

  });
}






let Kämpaigen = ["F", "F", "F", "R", "R", "F", "F", "F", "R", "R", "R", "F", "F", "F", "R", "R", "R", "F", "R", "R", "F"];
Kämpaigen.forEach(kommando => {
  if (kommando === "F") {
    console.log("Kämpa.");
  } else if (kommando === "R") {
    console.log("Kämpa på nu.");
  }
});
