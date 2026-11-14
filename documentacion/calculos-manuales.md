# Cálculos manuales — Semana 11

## Conteos y proporción
Total: n = 110 + 60 + 20 + 10 = 200. Espera automática: x = 60.  
p = x/n = 60/200 = 0.30 = 30 %.

## Intervalo aproximado del 95 %
Error estándar = √[p(1-p)/n] = √[(0.30×0.70)/200] = 0.03240.  
Margen = 1.96×0.03240 = 0.06350.  
IC = 0.30 ± 0.06350 = [0.2365, 0.3635], aproximadamente 23.65 % a 36.35 %.

## Tamaño de muestra
n = techo[1.96²×0.30×0.70/0.05²] = techo[322.6944] = 323.  
Adicionales = 323 − 200 = 123.

## Altura de superficie
Altura propuesta = altura de codo − 50 mm:
- P5: 920 − 50 = 870 mm.
- P50: 1050 − 50 = 1000 mm.
- P95: 1170 − 50 = 1120 mm.
Rango: 870–1120 mm. Alcance frecuente dentro de 320 mm (P5).

## Momentos externos
M = F×d:
- M1 = 20 N×0.45 m = 9 N·m.
- M2 = 20 N×0.25 m = 5 N·m.
- Diferencia = 4 N·m.

## Nota metodológica
El tamaño de muestra usa p=0.30 estimado con la muestra inicial. El intervalo es Wald aproximado. No multiplicar nuevamente la capacidad calculada por estas proporciones: el enunciado indica que la observación instantánea es diagnóstico complementario, no descuento adicional.
