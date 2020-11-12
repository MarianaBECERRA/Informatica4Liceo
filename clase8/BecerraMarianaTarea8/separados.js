let grafico1 = document.querySelector("#grafico1");
let grafico2 = document.querySelector("#grafico2");
let grafico3 = document.querySelector("#grafico3");

let x = [];
let y = [];
let cambio1 = (5 + 5)/100
for (let xV = -5; xV <= 5; xV += cambio1) {
    x.push(xV);
    y.push(2*(xV) - 4);
  }
console.log(x);
console.log(y);
Plotly.newPlot(
  grafico1,
  [{ x: x, y: y },],
  {
    margin: { t: 0 },
  }
);

let z = [];
let t = [];
let cambio2 = (4 + 4)/100
for (let zV = -4; zV <= 4; zV += cambio2) {
    z.push(zV);
    t.push(6 * Math.pow(zV, 2) - 3 * (zV) - 8);
  }
console.log(z);
console.log(t);

Plotly.newPlot(
  grafico2,
  [{ x: z, y: t },],
  {
    margin: { t: 0 },
  }
);

let q = [];
let w = [];
let cambio3 = (7 + 7)/100;
for (let qV = -7; qV <= 7; qV += cambio3) {
    q.push(qV);
    w.push(Math.sin(qV));
  }
console.log(q);
console.log(w);
Plotly.newPlot(
  grafico3,
  [{ x: q, y: w },],
  {
    margin: { t: 0 },
  }
);