<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2'>
</div>
<br><br>
El objetivo de este análisis es prededir la remuneración de futbolistas a partir de estadísticas sobre sus habilidades de juego. Para ellos se filtrarán los datos de habilidades y se realizará un análisis exploratorio para identificar patrones en los datos que permitan tener información fiable e implementar una predicción mediante una regresión lineal en tensorflow.
<br><br>
El análisis muestra que los datos presentan correlación alta en varias variables, por un lado esto puede presentar una complicación a la hora de entrenar un modelo. Por otro lado podría indicar que grupos de jugadores tienen habilidades en común, lo que es coherente con los conjuntos de habilidades que deben poseer las distintas posiciones dentro del campo.
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="100%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Remuneracion-Furtbolistas/corr.png'>
</div>

El modelo resultante entrega un RMSE promedio de 4663, que representa un 25% aproximadamente del rango máximo de los datos. Algunos ejemplos de predicción:


<table style="border:1px; width: auto; margin: 2em auto 2em auto; padding: 20px"><thead>
  <colgroup>
    <col style="width: 50%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
  <tr>
    <th style="text-align: left">Name</th>
    <th>Wage</th>
    <th>Prediccion</th>
  </tr></thead>
<tbody>
  <tr>
    <td>Park Hyeong Jin</td>
    <td style="text-align: center">2000.0</td>
    <td style="text-align: center">4815.0</td>
  </tr>
  <tr>
    <td>S. Grønning</td>
    <td style="text-align: center">1000.0</td>
    <td style="text-align: center">235.0</td>
  </tr>
  <tr>
    <td>D. Diagné</td>
    <td style="text-align: center">3000.0</td>
    <td style="text-align: center">5660.0</td>
  </tr>
  <tr>
    <td>S. Janssen</td>
    <td style="text-align: center">1000.0</td>
    <td style="text-align: center">3993.0</td>
  </tr>
  <tr>
    <td>C. Wondolowski</td>
    <td style="text-align: center">4000.0</td>
    <td style="text-align: center">5159.0</td>
  </tr>
  <tr>
    <td>E. Castillo</td>
    <td style="text-align: center">6000.0</td>
    <td style="text-align: center">3207.0</td>
  </tr>
  <tr>
    <td>Ding Haifeng</td>
    <td style="text-align: center">4000.0</td>
    <td style="text-align: center">6210.0</td>
  </tr>
  <tr>
    <td>David Haro</td>
    <td style="text-align: center">2000.0</td>
    <td style="text-align: center">1540.0</td>
  </tr>
  <tr>
    <td>Escudero</td>
    <td style="text-align: center">20000.0</td>
    <td style="text-align: center">45746.0</td>
  </tr>
  <tr>
    <td>R. Morioka</td>
    <td style="text-align: center">16000.0</td>
    <td style="text-align: center">7435.0</td>
  </tr>
</tbody></table>

El detalle de la exploración de datos y desarrollo del modelo se encuentar en: