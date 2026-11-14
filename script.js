const $ = id => document.getElementById(id);
const num = id => Number($(id).value);
const fmt = (x,d=2) => Number(x).toFixed(d);
const valid = values => values.every(v => Number.isFinite(v) && v >= 0);
function calculateStats(){
 const counts=[num("productive"),num("waiting"),num("searching"),num("other")],out=$("statsOutput");
 if(!valid(counts)||counts.some(v=>!Number.isInteger(v))){out.textContent="Error: los conteos deben ser enteros no negativos.";return;}
 const n=counts.reduce((a,b)=>a+b,0);if(n===0){out.textContent="Error: el total debe ser mayor que cero.";return;}
 const p=counts[1]/n,z=1.96,se=Math.sqrt(p*(1-p)/n),low=Math.max(0,p-z*se),high=Math.min(1,p+z*se);
 const required=Math.ceil(z*z*p*(1-p)/(0.05*0.05)),additional=Math.max(0,required-n);
 out.innerHTML=`<p>Total de observaciones: <strong>${n}</strong></p><p>Proporción de espera automática: <strong>${fmt(p*100)} %</strong></p><p>IC aproximado del 95 % (Wald): <strong>${fmt(low*100)} % – ${fmt(high*100)} %</strong></p><p>Muestra total requerida para error absoluto 0.05: <strong>${required}</strong></p><p>Observaciones adicionales: <strong>${additional}</strong></p><small>n = techo[z² p(1−p) / e²], z=1.96, e=0.05. Se usa la proporción observada como estimación de p.</small>`;
}
function calculateErgo(){
 const vals=[num("elbowP5"),num("elbowP50"),num("elbowP95"),num("offset")],out=$("ergoOutput");
 if(!valid(vals)){out.textContent="Error: ingresa valores válidos no negativos.";return;}
 if(vals[0]>vals[1]||vals[1]>vals[2]){out.textContent="Error: verifica P5 ≤ P50 ≤ P95.";return;}
 const [a,b,c,o]=vals;out.innerHTML=`<p>Altura P5: <strong>${fmt(a-o,0)} mm</strong></p><p>Altura P50: <strong>${fmt(b-o,0)} mm</strong></p><p>Altura P95: <strong>${fmt(c-o,0)} mm</strong></p><p>Rango propuesto: <strong>${fmt(a-o,0)}–${fmt(c-o,0)} mm</strong></p>`;
}
function calculateMoment(){
 const [f,d1,d2]=[num("force"),num("distance1"),num("distance2")],out=$("momentOutput");
 if(!valid([f,d1,d2])){out.textContent="Error: fuerza y distancias deben ser no negativas.";return;}
 const m1=f*d1,m2=f*d2;out.innerHTML=`<p>Momento a ${fmt(d1,2)} m: <strong>${fmt(m1,2)} N·m</strong></p><p>Momento a ${fmt(d2,2)} m: <strong>${fmt(m2,2)} N·m</strong></p><p>Diferencia: <strong>${fmt(Math.abs(m1-m2),2)} N·m</strong></p>`;
}
$("calculateStats").addEventListener("click",calculateStats);$("calculateErgo").addEventListener("click",calculateErgo);$("calculateMoment").addEventListener("click",calculateMoment);
calculateStats();calculateErgo();calculateMoment();