<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://images.pexels.com/photos/1093161/pexels-photo-1093161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'>
</div>
<br><br>
Clasificación binaria para predecir en base a las variables si un paciente con un determinado número de medidas médicas es susceptible de tener enfermedad de corazón o no.
<br><br>
Para entrenar los modelos de clasifición se considera lo siguiente:
<ul>
    <li>La clasificación se considerará satisfactoria si alcanza una exactitud de 0.9.</li>
    <li>Para ello se realizará un análisis exploratorio de las variables evaluando que variables aportan a la predicción, posteriormente se dividirán los datos en conjunto de entrenamiento (80%) y conjunto de validación (20%).</li>
    <li>Con esto se realizarán diversos algoritmos de clasificación binaria mediante ternsorflow, donde el entrenamiento se realizará utilizando validación cruzada aleatoria (en cada algoritmo hay una descripción del procedimiento utilizado).</li><li>Finalmente la comparación de los algoritmos se relizará con la exactitud de cada algoritmo sobre el conjunto de validación.</li>
</ul>
<br>
Al explorar los datos se observa que no existe una relación lineal clara entre las features y el target de acuerdo con la matriz de correlación. Esto indica que un modelo no lineal podría funcionar mejor.
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Probabilidad-Infarto-Cardiaco/corr.png'>
</div>

Al entrenar y validar los modelos nos encontramos con que eL algoritmo que presenta el mejor desempeño es el SVM Radial con una exactitud de 0.98, muy por sobre el resto.

<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="50%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Probabilidad-Infarto-Cardiaco/acc.png'>
</div>

El detalle de la exploración de datos y desarrollo de los modelos se encuentar en: