<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=640&h=427&dpr=2'>
</div>
<br><br>
¿Puede la ciencia de datos estimar el salario de un futbolista a partir de sus habilidades? En este proyecto, desarrollo un modelo de regresión para predecir la remuneración de jugadores usando estadísticas de desempeño y machine learning.

**Metodología:**
- Análisis exploratorio para identificar correlaciones y patrones en las habilidades de los jugadores.
- Implementación de regresión lineal en TensorFlow, evaluando el desempeño con RMSE.

**Hallazgos clave:**
- Existen grupos de jugadores con habilidades similares, lo que se refleja en la alta correlación entre variables.
- El modelo logra un RMSE promedio de 4663, equivalente al 25% del rango máximo de los datos.

**Ejemplo de predicciones:**
<table style="border:1px; width: auto; margin: 2em auto 2em auto; padding: 20px"><thead>
  <colgroup>
    <col style="width: 50%;">
    <col style="width: 25%;">
    <col style="width: 25%;">
  </colgroup>
  <tr>
    <th style="text-align: left">Name</th>
    <th>Wage</th>
    <th>Predicción</th>
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
</tbody></table>

Este análisis muestra cómo los datos y la inteligencia artificial pueden transformar la gestión y valoración de talento en el fútbol profesional.
