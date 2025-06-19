<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://images.pexels.com/photos/54581/escalator-stairs-metal-segments-architecture-54581.jpeg'>
</div>
<br><br>
¿Alguna vez te has preguntado cómo los centros comerciales pueden anticipar el comportamiento de sus clientes? En este proyecto, exploro cómo predecir el puntaje de satisfacción de los consumidores de un mall utilizando técnicas modernas de ciencia de datos.

**Descripción del Dataset:**
- CustomerID: Identificador único de cada cliente.
- Gender: Género (Masculino/Femenino).
- Age: Edad del cliente.
- Annual Income (k$): Ingresos anuales.
- Spending Score (1-100): Puntaje de gasto asignado por el mall.

**Metodología:**
1. Análisis exploratorio para entender patrones y relaciones en los datos.
2. División de los datos en entrenamiento y validación (80%-20%).
3. Implementación de varios algoritmos de regresión (incluyendo KNN y redes neuronales) usando TensorFlow, con validación cruzada aleatoria.
4. Comparación de desempeño usando RMSE en el conjunto de validación.

**Hallazgos clave:**
- Los modelos KNN y Red Neuronal superan a los métodos lineales, reflejando la naturaleza no lineal de los datos.
- KNN logra el menor error, aunque su capacidad de mejora es limitada.
- Las redes neuronales, aunque inicialmente menos precisas, pueden optimizarse ajustando hiperparámetros.

**Comparación de Modelos:**
<table style="border:1px; width: auto; margin: 2em auto 0 auto; padding: 20px">
  <colgroup>
    <col style="width: 15%;">
    <col style="width: 75%;">
    <col style="width: 10%;">
  </colgroup>
  <tr>
    <td style='text-align: right; width: 10%'>Regresión Lineal</td>
    <td>
        <div style="display: flex; justify-content: center; text-align: center; margin: 1em 0;">
            <img width="90%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Analisis-Consmidores/loss_elasticnet.png'>
        </div>
    </td>
    <td>RMSE: 23.94</td>
  </tr>
  <tr>
    <td style='text-align: right'>SVM-Lineal</td>
    <td>
        <div style="display: flex; justify-content: center; text-align: center; margin: 1em 0;">
            <img width="90%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Analisis-Consmidores/loss_svm_lineal.png'>
        </div>
    </td>
    <td>RMSE: 24.77</td>
  </tr>
  <tr>
    <td style='text-align: right'>KNN (k=7)</td>
    <td>
        <div style="display: flex; justify-content: center; text-align: center; margin: 1em 0;">
            <img width="90%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Analisis-Consmidores/loss_red_neuronal.png'>
        </div>
    </td>
    <td>RMSE: 20.91</td>
  </tr>
  <tr>
    <td style='text-align: right'>Red Neuronal</td>
    <td>
        <div style="display: flex; justify-content: center; text-align: center; margin: 1em 0;">
            <img width="90%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Analisis-Consmidores/loss_red_neuronal.png'>
        </div>
    </td>
    <td>RMSE: 21.35</td>
  </tr>
</table>

Este análisis demuestra el valor de aplicar modelos avanzados para entender y anticipar el comportamiento de los consumidores en entornos comerciales reales.
