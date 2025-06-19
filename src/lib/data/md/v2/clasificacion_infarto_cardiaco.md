<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://images.pexels.com/photos/1093161/pexels-photo-1093161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'>
</div>
<br><br>
¿Es posible anticipar el riesgo de infarto cardíaco con datos médicos? En este proyecto, desarrollo un modelo de clasificación binaria para predecir la probabilidad de enfermedad cardíaca en pacientes, utilizando variables clínicas y técnicas avanzadas de machine learning.

**Metodología:**
1. Análisis exploratorio para identificar variables relevantes y relaciones no lineales.
2. División de los datos en entrenamiento (80%) y validación (20%).
3. Implementación de varios algoritmos de clasificación (incluyendo SVM radial) con validación cruzada aleatoria.
4. Comparación de exactitud en el conjunto de validación.

**Hallazgos clave:**
- No existe una relación lineal clara entre las variables y el diagnóstico, lo que sugiere la necesidad de modelos no lineales.
- El SVM Radial logra una exactitud sobresaliente de 0.98, superando ampliamente a otros métodos.

<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Probabilidad-Infarto-Cardiaco/corr.png'>
</div>

<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="50%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Probabilidad-Infarto-Cardiaco/acc.png'>
</div>

Este trabajo demuestra el potencial de la inteligencia artificial para apoyar diagnósticos médicos y mejorar la prevención de enfermedades cardiovasculares.
