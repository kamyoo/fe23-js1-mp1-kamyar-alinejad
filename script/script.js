const lines = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
console.log(lines);

for (let i = 0; i < lines.length; i++) {
  const h2El = document.createElement("div");
  document.body.append(h2El);
  h2El.innerText = lines[i];
  h2El.style.fontSize = `1em`;
  h2El.style.textAlign = "center";
  h2El.style.fontFamily = "Helvetica";
  h2El.style.color = "Yellow";
  if (lines[i] == lines[0]) {
    h2El.style.fontSize = `1.5em`;
  }
  if (lines[i] == lines[1]) {
    h2El.style.fontSize = `2em`;
  }
  if (lines[i] == lines[2]) {
    h2El.style.fontSize = `2.5em`;
  }
  if (lines[i] == lines[3]) {
    h2El.style.fontSize = `3em`;
  }
  if (lines[i] == lines[4]) {
    h2El.style.fontSize = `3.5em`;
  }
  const hue = 189 + i * 20;
  h2El.style.backgroundColor = `hsl(${hue}, 30%, 77%`;
}

const flxbox = document.createElement("div");
{
  document.body.append(flxbox);
  console.log(flxbox);
  flxbox.style.backgroundColor = "Purple";
  flxbox.style.padding = "1em";
  flxbox.style.margin = "1em";
  flxbox.style.display = "flex";
  flxbox.style.justifyContent = "space even";

  const flx1 = document.createElement("p");
  document.body.appendChild(flx1);
  const flx2 = document.createElement("p");
  document.body.appendChild(flx2);
  const flx3 = document.createElement("p");
  document.body.appendChild(flx3);

  flx1.innerText = "Hejsan svejsan!";
  flx1.style.backgroundColor = `hsl(277, 40%, 72%)`;

  flx2.innerText = "Hallå ja!";
  flx2.style.backgroundColor = `hsl(277, 40%, 72%)`;

  flx3.innerText = "Tjenare tjenare!";
  flx3.style.backgroundColor = `hsl(277, 40%, 72%)`;
}
