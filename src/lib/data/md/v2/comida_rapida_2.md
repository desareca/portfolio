<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src="https://tecnologiabi.com/wp-content/uploads/2023/06/pronosticos-de-ventas-con-machine-learning.jpg">
</div>
<br><br>
¿Cómo anticipar la demanda semanal en un local de comida rápida usando machine learning? En este segundo notebook de la serie, aplico modelos predictivos a datos reales de ventas de 2020 a 2022 para optimizar la planificación y maximizar las ganancias.

**Metodología:**
- Limpieza y análisis exploratorio para identificar patrones y relaciones entre variables.
- Implementación de cinco modelos: Regresión Lineal, KNN, SVM, Random Forest y Gradient Boosting.
- Entrenamiento con RepeatedKFold y búsqueda de hiperparámetros con GridSearch.

**Hallazgos clave:**
- Las ventas diarias muestran patrones de normalidad, con excepciones los sábados por días sin ventas.
- Los modelos permiten predecir la semana siguiente usando solo la información de la semana previa y la fecha.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDist}>
</div>

**Comparación de Modelos:**
- Visualización de resultados para cada modelo implementado:

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaRegL}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaKNN}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaSVM}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaRF}>
</div>

Este análisis demuestra cómo la analítica avanzada puede transformar la gestión de inventario y la toma de decisiones en negocios de comida rápida.
