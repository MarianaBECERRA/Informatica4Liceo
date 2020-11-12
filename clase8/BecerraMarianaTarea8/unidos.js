let grafico = document.querySelector("#grafico")

let a = [];
let b = [];
let cambio = (3 + 3)/100
for (let aV = -3; aV <= 3; aV += cambio) {
    a.push(aV);
    b.push(Math.exp(aV));
  }
console.log(a);
console.log(b);

let t = [];
let w = [];
let cambio1 = (3 + 3)/100
for (let tV = -3; tV <= 3; tV += cambio1) {
    t.push(tV);
    w.push(Math.exp(-tV));
  }
console.log(t);
console.log(w);

Plotly.newPlot(
    grafico,
    [
      { x: a, y: b }, { x: t, y: w},
    ],
    {
      margin: { t: 0 },
    }
  );
  