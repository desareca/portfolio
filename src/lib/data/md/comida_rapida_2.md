<h1>Predicción de Ventas utilizando algoritmos de Machine Learning.</h1>
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src="https://tecnologiabi.com/wp-content/uploads/2023/06/pronosticos-de-ventas-con-machine-learning.jpg">
</div>
<br><br>
Continuando con la serie de notebooks, tenemos datos de venta en un local de comida rápida en funcionamiento actualmente, que corresponden a los años 2020, 2021 y 2022.<br><br>
Estos datos tienen información de ventas diarias de Papas Fritas, Churrascos, Carne Mechada, Completo, SalchiPapas (ya me dió hambre 😋)....<br><br>
El objetivo es realizar una predicción de ventas de la semana siguiente si se cuentan con los datos de ventas de la semana anterior. Con esto se puede evaluar precios y planificar suministros, así ningún cliente se queda sin comer 🤤🍔🍟 y ganamos 💲💲💲.
<br><br>
<strong>Consideraciones</strong><br>
Se realiza un limpieza y análisis exploratorio que permita extraer información relevante de los datos.
\nAdemás, se implementan 5 modelos (Regresión Lineal, KNN, SVM, Random Forest y Gradient Boosting) y se evalua el mejor desempeño de acuerdo con distintas métricas.\nPor simplicidad se consideran las ventas totales de cada día de la semana anterior y la fecha de la semana a predecir.\nLos datos tienen varias semanas sin datos debido a la pandemia, por lo que se consideran solo las semanas con datos.