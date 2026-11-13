# Refleksjon: Grunnleggende JavaScript

Svar når du er ferdig med oppgavene i `oppg1_grunnleggende.js`. Skriv med egne ord, og ikke se i koden mens du svarer på del A. Korte svar er helt greit.

---

## A. Forklar med egne ord

**1. Hva er forskjellen på `let` og `const`? Når bruker du hvilken?**

_Const er en fast variabel som ikke kan endre, Let er det motsatte._

**2. Hvorfor ble `"5" + 5` til `55`, mens `5 + 5` ble `10`?**
_Jeg vil tro der er fordi det er en sting, så den setter bare sammen tallene og ikke regner de ut._


**3. Hva gjør `%`? Gi et eksempel fra oppgavene der du brukte den.**

_Det er den som gir deg rest etter deling. Så et eksempel er_ **i % 3 === 0**_ Så man kan sjekke om "i" er delelig med 3

**4. Hva er forskjellen på `=` og `===`?**

en = gir en variabel en verdi, mens === sjekker om to verdier er det samme og har samme type

**5. Forklar de tre delene i denne linja:** `for (let i = 1; i <= 5; i++)`

> dette er en for løkke som teller fra 1 til 5

**6. Når er en `while`-løkke bedre enn en `for`-løkke? Hva kan gå galt med en `while`-løkke?**

> en while løkke er bedre vist du vil gjøre noe så lenge det er sant. det som kan gå galt er at den aldri stopper vist du ikke legger til noe.

**7. Hvorfor er den første byen i lista `byer[0]` og ikke `byer[1]`?**

> det fer fordi JS starter å telle på 0, det kalles for indeks. 

---

## B. Bruk det du har lært

**8. Hva skrives ut her? Svar før du tester.**

```js
const temp = -3;
if (temp < -5) {
  console.log("Veldig kaldt");
} else if (temp < 0) {
  console.log("Kaldt");
} else {
  console.log("Mildt");
}
```

> _den skriver ut kaldt, fordi -3 er høyere en -5. vist const hadde vært noe lavere eller -5 så hadde den skrevet ut Veldig kaldr

**9. Hva skrives ut her? Svar før du tester.**

```js
const lag = ["Titans", "Ulvene", "Polarnatt"];
lag.push("Nordlys");
console.log(lag.length);
console.log(lag[1]);
```

> _Den skriver ut 4
 Ulvene_

**10. Denne koden skal skrive ut 1, 2 og 3, men gjør det ikke. Hva er feil?**

```js
for (let i = 1; i < 3; i++) {
  console.log(i);
}
```

> ._Det er fordi den stopper før den skriver ut 3 man trenger <= og ikke bare <

---

## C. Om din egen læring

**11. Hvilken oppgave var vanskeligst, og hvordan løste du den?**

> _De to siste synes jeg var vanskeligst og fikk ikke gjort de._

**12. Hvilken feilmelding fikk du oftest? Hva betydde den?**

> _Skriv svaret ditt her._

**13. Hva gjorde du når du sto fast? Hva vil du gjøre annerledes neste gang?**

> _Vist jeg sto fast så spurte jeg Benjamin som forklarte hvordan ting fungerte, vist ikke han v ar der så leste jeg på Readme eller ws3school_

**14. Hvor langt kom du?**

| Nivå | Kryss av |
|---|---|
| Grunnleggende |  x|
| Middels | x |
| Avansert |x(men ikke de to siste)  |

**15. Kryss av for det du kan nå.**

| Jeg kan... | Ja | Litt | Nei |
|---|---|---|---|
| lage variabler med `let` og `const` | x |  |  |
| bruke tekst og tall, og sette dem sammen med `${}` |  x|  |  |
| ta valg med `if`, `else if` og `else` |  | x |  |
| skrive en `for`-løkke |  |  x|
| hente, legge til og gå gjennom verdier i en array |  x|  |  |
| lese en feilmelding og finne riktig linje |  x|  |  |

**16. Hva vil du øve mer på før vi går videre til funksjoner?**

> _jeg vil øve litt mer på å skrive løkker og funksjoner_

**Liten notat**
_jeg slet litt med å vite helt hvilken av disse jeg skulle gjøre. kan hende det var jeg som ikke husker vist dere har sagt det, men jeg tror jeg har svart på hele oppgaven_