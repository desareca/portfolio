El Juego de la Vida de Conway: Predicción Inversa con Algoritmos Genéticos

¿Es posible predecir el estado inicial de un autómata celular a partir de su estado final? En este proyecto, exploro el famoso Juego de la Vida de Conway y aplico algoritmos genéticos para intentar resolver el problema inverso.

**Contexto:**
El Juego de la Vida es un autómata celular donde cada celda evoluciona según reglas simples, generando patrones complejos a lo largo del tiempo.

**Metodología:**
- Definición de reglas y simulación del juego en una cuadrícula.
- Implementación de una estrategia de zonificación para acotar la búsqueda del estado inicial.
- Uso de algoritmos genéticos para explorar posibles soluciones, evaluando el error medio en múltiples muestras.
- Combinación con el solver Z3 Constraint para mejorar la precisión.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="50%" height="auto" src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*6wS-kXlOCBsAJciygkJtDA.gif'>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="60%" height="auto" src=${AssetsImage.GLifeStartStop}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="60%" height="auto" src=${AssetsImage.GLifePred}>
</div>

**Resultados:**
- El error medio se reduce al 8% al combinar algoritmos genéticos con el solver Z3.
- El enfoque demuestra el potencial de la inteligencia artificial para resolver problemas complejos y no triviales en sistemas dinámicos.

Este proyecto ilustra cómo la creatividad y la ciencia de datos pueden abordar desafíos aparentemente imposibles.
