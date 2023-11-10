const lines = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
const fontSize = ["1.5em", "2em", "2.5em", "3em", "3.5em"];
const rowMargin = ["10px", "12.5px", "15px", "17.5px", "20px"];
for (let i = 0; i < lines.length; i++) {
  const h2El = document.createElement("div");
  document.body.append(h2El);
  h2El.style.fontSize = fontSize[i];
  h2El.style.textAlign = "center";
  h2El.style.fontFamily = "Helvetica";
  h2El.style.color = "Yellow";
  h2El.style.marginTop = rowMargin[i];
  h2El.innerText = lines[i];
  const hue = 189 + i * 20;
  h2El.style.backgroundColor = `hsl(${hue}, 30%, 77%`;
}

const flxbox = document.createElement("div");
document.body.append(flxbox);
console.log(flxbox);
flxbox.style.backgroundColor = "white";
flxbox.style.padding = "1em";
flxbox.style.marginTop = "1em";
flxbox.style.display = "flex";
flxbox.style.justifyContent = "space-evenly";
flxbox.style.border = "solid black 1px";

for (let i = 0; i < 3; i++) {
  const flx1 = document.createElement("div");
  flx1.id = "flx" + i;
  flxbox.appendChild(flx1);
  flx1.style.backgroundColor = `hsl(277, 40%, 72%)`;
  flx1.style.margin = "0px";
  flx1.style.padding = "10px";
}

const allPs = document.querySelectorAll("div div");
console.log(allPs[0]);

// Skapa divarna med 0 till 9
const ettan = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
for (let i = 0; i < ettan.length; i++) {
  const spaltEtt = document.createElement("p");
  spaltEtt.innerText = ettan[i];
  allPs[0].append(spaltEtt);
  spaltEtt.style.width = "50px";
  spaltEtt.style.margin = "0px";
  if (ettan[i] == 4) {
    spaltEtt.style.backgroundColor = `hsl(277, 40%, 72%)`;
    spaltEtt.style.color = "white";
  } else if (ettan[i] % 2 == 0) {
    spaltEtt.style.backgroundColor = "black";
    spaltEtt.style.color = "white";
  } else {
    spaltEtt.style.backgroundColor = "white";
    spaltEtt.style.color = "black";
  }
}
// Skapa divarna med 9 till 0
const tvaan = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
for (let i = 0; i < tvaan.length; i++) {
  const spaltTva = document.createElement("p");
  spaltTva.innerText = tvaan[i];
  allPs[1].append(spaltTva);
  spaltTva.style.width = "50px";
  spaltTva.style.margin = "0px";
  spaltTva.style.textAlign = "center";
  if (tvaan[i] == 8) {
    spaltTva.style.backgroundColor = `hsl(277, 40%, 72%)`;
    spaltTva.style.color = "white";
  } else if (tvaan[i] % 2 == 0) {
    spaltTva.style.backgroundColor = "black";
    spaltTva.style.color = "white";
  } else {
    spaltTva.style.backgroundColor = "white";
    spaltTva.style.color = "black";
  }
}
// skapa divarna med ett till tio
const trean = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];
for (let i = 0; i < trean.length; i++) {
  const spaltTre = document.createElement("p");
  spaltTre.innerText = trean[i];
  allPs[2].append(spaltTre);
  spaltTre.style.width = "50px";
  spaltTre.style.margin = "0px";
  spaltTre.style.textAlign = "right";
  if (trean[i] == "sex") {
    spaltTre.style.backgroundColor = `hsl(277, 40%, 72%)`;
    spaltTre.style.color = "white";
  } else if ([i] % 2 == 0) {
    spaltTre.style.backgroundColor = "black";
    spaltTre.style.color = "white";
  } else {
    spaltTre.style.backgroundColor = "white";
    spaltTre.style.color = "black";
  }
}
