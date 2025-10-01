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
