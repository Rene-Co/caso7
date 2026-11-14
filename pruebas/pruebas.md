# Pruebas públicas de aceptación

Datos sintéticos del enunciado. Ejecutar abriendo `index.html`.

| Caso | Entrada | Resultado esperado |
|---|---|---|
| Estadística base | 110, 60, 20, 10 | n=200; p=30.00 %; IC Wald 23.65–36.35 %; muestra=323; adicionales=123 |
| Total cero | 0, 0, 0, 0 | Mensaje de error; no dividir entre cero |
| Conteo negativo | -1, 60, 20, 10 | Mensaje de validación |
| Conteo decimal | 110.5, 60, 20, 10 | Mensaje de validación |
| Ergonomía base | 920, 1050, 1170, offset 50 | 870, 1000 y 1120 mm; rango 870–1120 mm |
| Percentiles desordenados | 1050, 920, 1170 | Mensaje P5 ≤ P50 ≤ P95 |
| Momento base | F=20 N; d1=.45 m; d2=.25 m | 9 N·m; 5 N·m; diferencia 4 N·m |
| Distancia cero | F=20; d1=0; d2=.25 | 0 y 5 N·m |

## Registro de ejecución
Completar después de probar en navegador:
- Navegador y versión:
- Fecha:
- Persona que verifica:
- Casos ejecutados:
- Resultado observado:
- Incidencias y correcciones:

Los valores anteriores son resultados esperados; no afirmar que las pruebas se ejecutaron hasta registrar la ejecución real.
