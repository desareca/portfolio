<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src="https://images.pexels.com/photos/13337517/pexels-photo-13337517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
</div>
<br><br>
¿Se puede anticipar una erupción volcánica usando inteligencia artificial? En este proyecto, aplico machine learning para predecir el momento de la próxima erupción, utilizando datos geofísicos reales y técnicas avanzadas de extracción de características.

**Contexto:**
El INGV de Italia monitorea la actividad sísmica y volcánica, buscando precursores que permitan anticipar eventos peligrosos.

**Metodología:**
- Extracción de características de series temporales con tsfeatures y wavelets.
- Selección de variables relevantes mediante algoritmos genéticos.
- Entrenamiento de un modelo XGBoost con validación bootstrap y búsqueda aleatoria de hiperparámetros.

**Resultados:**
- El modelo logra predecir con precisión el tiempo de la próxima erupción, demostrando el potencial de la IA en la gestión de riesgos naturales.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="60%" height="auto" src=${AssetsImage.INGVPred}>
</div>

Este trabajo muestra cómo la ciencia de datos puede contribuir a la seguridad y prevención de desastres naturales.
