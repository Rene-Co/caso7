# Semana 11 — Observación del trabajo y propuesta ergonómica

**Equipo:** Ulises Ramírez, Rene Corrales y tercer integrante por confirmar.  
**Datos:** sintéticos, proporcionados en el enunciado.  
**Propósito:** herramienta didáctica; no es evaluación certificada de seguridad ni cumplimiento sanitario.

## Contenido
- `index.html`, `style.css`, `script.js`: calculadora web local.
- `datos/observaciones.csv`: conteos sintéticos.
- `pruebas/pruebas.md`: casos de prueba y resultados esperados.
- `documentacion/calculos-manuales.md`: desarrollo manual.
- `documentacion/diagrama-proceso.md`: flujo y decisión provisional.
- `documentacion/registro-prompts.md`: registro de uso de IA.
- `documentacion/roles-equipo.md`: responsabilidades.

## Cómo ejecutar
Descarga o clona el repositorio y abre `index.html` en un navegador actualizado. No requiere instalación, servidor ni conexión a internet.

## Fórmulas y unidades
- Proporción: p = x/n, donde x es el conteo de espera automática y n el total.
- Error estándar: √[p(1-p)/n].
- IC Wald aproximado al 95 %: p ± 1.96 × error estándar, limitado a [0,1].
- Tamaño de muestra: techo[1.96² p(1-p) / 0.05²].
- Altura de superficie: altura de codo menos 50 mm.
- Momento externo: M = F × d; F en N, d en m y M en N·m.

## Supuestos y limitaciones
- Se analiza “Espera del ciclo automático”.
- Se usa p=0.30 como estimación inicial para planear la muestra.
- Wald es una aproximación didáctica; puede ser menos precisa con muestras pequeñas o proporciones extremas.
- El tamaño de muestra supone observaciones independientes y muestreo aleatorio simple. Agrupamiento por turno, persona o ciclo puede requerir más observaciones.
- Los percentiles antropométricos son ficticios, no mediciones de compañeros.
- El peso de la bandeja debe verificarse físicamente y ser menor de 200 g.
- 320 mm es el alcance cómodo frontal P5 dado por el enunciado.
- Los momentos son comparaciones mecánicas hipotéticas, no límites de seguridad.
- No multiplicar nuevamente la capacidad por estas proporciones: el enunciado las define como diagnóstico complementario, no descuento adicional.

## Equipo
Rotar análisis del método, datos, construcción y verificación. Todos deben explicar el modelo, unidades, supuestos y limitaciones.
- Ulises Ramírez: método y diagrama (asignación inicial).
- Rene Corrales: datos, cálculos y documentación (asignación inicial).
- Tercer integrante: construcción y verificación (nombre pendiente).

## Privacidad
No incluir datos personales, fotos de compañeros, credenciales ni tokens. Usar datos sintéticos o públicos para las pruebas.
