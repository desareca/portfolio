<h1>Predicción de Ventas utilizando algoritmos de Machine Learning.</h1>
<br>
    <div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src="https://tecnologiabi.com/wp-content/uploads/2023/06/pronosticos-de-ventas-con-machine-learning.jpg">
</div>
<br><br>
Continuando con la serie de notebooks, tenemos datos de venta en un local de comida rápida en funcionamiento actualmente, que corresponden a los años 2020, 2021 y 2022.<br><br>
Estos datos tienen información de ventas diarias de Papas Fritas, Churrascos, Carne Mechada, Completo, SalchiPapas (ya me dió hambre 😋)....<br><br>
El objetivo es realizar una predicción de ventas de la semana siguiente si se cuentan con los datos de ventas de la semana anterior. Con esto se puede evaluar precios y planificar suministros, así ningún cliente se queda sin comer 🤤🍔🍟 y ganamos 💲💲💲.
<br><br>
<h6>Consideraciones</h6><br>
Se realiza un limpieza y análisis exploratorio que permita extraer información relevante de los datos.
\nAdemás, se implementan 5 modelos (Regresión Lineal, KNN, SVM, Random Forest y Gradient Boosting) y se evalua el mejor desempeño de acuerdo con distintas métricas.\nPor simplicidad se consideran las ventas totales de cada día de la semana anterior y la fecha de la semana a predecir.\nLos datos tienen varias semanas sin datos debido a la pandemia, por lo que se consideran solo las semanas con datos.
<br><br>

<h6>Exploración de variables</h6><br>

El siguiente gráfico muestra un resumen de las variables principales, la diagonal representa el histograma de cada variable, la zona inferior un scatter coloreado con la densidad de puntos (+oscuro -> +denso) y la zona superior la correlación de pearson entre variables coloreado según la correlación. Se consideran las variables asociadas a las ventas por día y el Total de la semana próxima. Se aprecia cierta normalidad en las variables asociadas a las ventas diarias, con exceptción del sabado, a causa de muchos días sin ventas. Además, hay cierta relación entre las variables y el total de la próxima semana.

<br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDist}>
</div>
<br><br>

<h6>Modelos</h6><br>

Para predecir las ventas totales de la semana próxima se consideran las ventas de la semana actual y la información del Mes y Año, además se utilizan los siguientes métodos:

<ul>
    <li>Regresión lineal (ElasticNet)</li>
    <li>KNN</li>
    <li>SVM</li>
    <li>Random Forest</li>
    <li>Gradient Boosting</li>
</ul>

Dado que los datos son pocos, se considera entrenar utilizando RepeatedKFold con n_splits=5 y n_repeats=5, además de GridSearch para buscar hiperparámetros.

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaRegL}>
</div>

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaKNN}>
</div>

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaSVM}>
</div>

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaRF}>
</div>

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaGB}>
</div>
<br><br>

La <strong>explained_variance</strong> muestra un mejor desempeño con <strong>Random Forest</strong>, aunque es la segunda mejor, tiene menos desviación por lo que lo hace más robusta. En el caso del <strong>MSE</strong> sucede similar, <strong>Random Forest</strong> es el segundo mejor, pero su desviación es menor al primero por lo que en este caso también es la mejor. Particularmente, el mejor <strong>MAE</strong> lo tiene el <strong>KNN</strong>. Considerando lo anterior y los gráficos de cada modelo el modelo a utilizar es <strong>Random Forest</strong>.
<br><br>
El detalle del código y un análisis más acabado se encuentran en el siguiente enlace.