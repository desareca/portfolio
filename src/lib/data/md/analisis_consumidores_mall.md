<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://images.pexels.com/photos/54581/escalator-stairs-metal-segments-architecture-54581.jpeg'>
</div>
<br><br>
El objetivo del análsis es predecir el puntaje de los clientes en un mall considerando indicadores de cada consumidor. El dataset contiene la siguiente información:
<ul>
    <li>CustomerID: Identificador único para cada cliente.</li>
    <li>Gender: Género de cada cliente (Másculino/Femenino).</li>
    <li>Age: Edad del cliente.</li>
    <li>Annual Income (k$): Ingresos anuales del cliente.</li>
    <li>Spending Score (1-100): Puntaje asignado por el centro comercial en función del comportamiento y gasto del cliente.</li>
</ul>
<br>

El siguiente análisis considera:<br>
<ul>
    <li>Un breve análisis exploratorio de los datos.</li>
    <li>Dividir los datos en conjunto de entrenamiento y validación (80%-20%).</li>
    <li>Con esto se realizarán diversos algoritmos de regresión mediante ternsorflow, donde el entrenamiento se realizará utilizando validación cruzada aleatoria (en cada algoritmo hay una descripción del procedimiento utilizado).</li>
    <li>El conjunto de validación se utilizará para comparar el RMSE de cada método.</li>
</ul>
<br>
Los resultados (ver figura más abajo) indican que los algortimos con mejor desempeño son KNN y Red Neuronal. Esto se debe a que la relación entre los datos es no-lineal. El mejor resultado lo entrega KNN, pero tiene la desventaja que depende de los datos selecionados y no es mejorable, ya que toma el promedio de los datos con menores distancias. Por otro lado la red neuronal, aunque presenta un resultado levemente peor, se puede mejorar optimizando los hiperparámetros (learning_rate y configuración de la red).

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
            <img width="90%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Analisis-Consmidores/loss_elasticnet.png'>
        </div>
    </td>
    <td>RMSE: 20.91</td>
  </tr>
</table>

El desarrollo y código codigo asociado se encuantra en:

