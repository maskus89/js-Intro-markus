console.log("oppgave 6")
let hp = 70;
let firstname = "Markus";
console.log(hp);
console.log(firstname);

console.log("oppgave 7")
console.log(`${firstname} har ${hp} HP`);

console.log("oppgave 8")
console.log(5+5);
console.log("5"+5);
console.log("5")+5;

console.log("oppgave 9")
let perlag = Math.floor(17/4)
let tilover = 17 % 4
console.log(`${perlag} per lag`)
console.log(`${tilover} til over`)

console.log("oppgave 10")
let temp = -8
if (temp < 0 ){
    console.log("Kuldegrader")
} else {
    console.log("Varmegrader")
}

console.log("Oppgave 11")
if (hp < 0) {
 console.log("Game over")
} else {
  console.log("Spillet fortsetter")
}

/*funker for 8 og for 21 */
console.log("oppgave 12")
const klokka = 21
if (klokka < 10) {
  console.log("God morgen")
} else if (klokka < 18) {
  console.log("God dag")
} else {
  console.log("God kveld")
}

/*Begge funker*/
console.log("oppgave 13")
const skydekke = 20;
const time = 22;
if (skydekke < 30 && time >= 18) {
  console.log("Gode sjanser for Nordlys")
} else {
  console.log("dårlige sjanser ikveld")
}

/*Alle tre gir riktig resultat */
console.log("oppgave 14")
let alder = 8;
let pris;
if (alder < 12) {
  pris = 50;
} else if (alder >= 67) {
  pris = 60;
} else {
  pris = 100;
}
console.log(`${pris} kr`);

console.log("oppgave 15")
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("oppgave 16")
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Liftoff!")

console.log("oppgave 17")
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

console.log("oppgave 18")
let bosshp = 100;
let slag = 0;
while (bosshp > 0) {
  bosshp -= 15
  slag++;
}
console.log(`${slag} slag`);

console.log("oppgave 19")
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Nordlys");
  } else if (i % 3 === 0) {
    console.log("Nord");
  } else if (i % 5 === 0) {
    console.log("lys");
  } else {
    console.log(i);
  }
}

console.log("repitisjon")
const fag = ["Utvikling", "Driftstøtte", "Brukerstøtte"];
console.log(fag[0]);
console.log(fag.length);
fag.push("YFF");
for (let i = 0; i < fag.length; i++) {
  console.log(fag[i]);
}

console.log("oppgave 20")
const byer = ["Tromsø", "Bodø", "Alta", "Harstad", "Narvik"];
console.log(byer[0]);
console.log(byer.length);

console.log("oppgave 21")
byer.push("Hammerfest")
console.log(byer[byer.length - 1]);
console.log(byer.length);

console.log("oppgave 22")
for (let i = 0; i < byer.length; i++) {
  console.log(byer[i]);
}

console.log("oppgave 23")
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];
let kaldedager = 0;
for (let i = 0; i < temperaturer.length; i++) {
  if (temperaturer[i] < -5) {
    kaldedager++;
  }
}
console.log(kaldedager);
