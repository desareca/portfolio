<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://cdn.resfu.com/media/img_news/montaje-de-las-portadas-de-fifa-19-de-ilustrador-fred-illustrations--montaje-fred-illustrations.png?size=1000x&lossy=1&ext=jpeg'>
</div>
<br><br>
FIFA 19 (de la saga FIFA) es un videojuego de simulación de fútbol desarrollado por EA Vancouver como parte de la serie FIFA de Electronic Arts.
<br><br>
El primer juego de la saga se caracterizaba por su perspectiva isométrica o de tres cuartos, que se diferenciaba de los otros títulos que ofrecían una vista desde arriba o vista de pájaro. Un aspecto importante era el sonido del público en el estadio, que estaba basado en grabaciones en vivo y que le proporcionaban un mayor realismo al desarrollo del juego con cánticos de los aficionados. El juego presentaba representativos nacionales, y un equipo especial formado por un selectivo de jugadores, este equipo se llama EA Sports.
<br><br>
A pesar de todos los defectos que presentaba no hay duda que en su época fue todo un éxito, la gente de EA Sports año tras año continuaba mejorando sus juegos FIFA. La nueva generación de FIFA cambio mucho, la inteligencia artificial (IA) de los jugadores es ahora más desarrollada.
<br><br>
Al revisar los datos, no encontramos con que la mayoría de jugadores tienen entre 20 y 30 años. con una cola hacia la derecha que llega hasta casi los 40 años.
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=${AssetsImage.FIFA19Age}>
</div>
Por otro lado la mayoría de los equipos tienen en torno a 25 jugadores y además la distribució de jugadores por club parece ser normal.<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=${AssetsImage.FIFA19Club}>
</div>
Algo peculiar es que aunque los jugadores tienen su punto máximo en valor de contrato en torno a lo 27 años y después comienza a baja, no sucede de la misma forma con la remuneración donde punto máximo es en torno a los 30 años y baja más lentamente.
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=${AssetsImage.FIFA19AgeGan}>
</div>
También existe una clara relación entre reputación del jugador y su remuneración, tal como se observa en la imagen. Aunque existen ciertas excepciones, tal como es el caso de Z. Ibrahimovic, que tiene reputación 5 y su valor es de 14M€, esto se puede deber a su edad (tiene 36 años), su estado físico y/o al equipo en que juega.
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=${AssetsImage.FIFA19Money}>
</div>
Para hacer la predicción se utiliza la función h2o.automl de la librería h2o. H2O AutoML es una plataforma de inteligencia artificial que automatiza el proceso de creación, selección y optimización de un gran número de modelos de aprendizaje automático mediante el metodo de Stacked Ensembles.
<br><br>
En esta predicción no se consideran las variables Wage ni Release.Clause. Los datos se dividen en conjunto de entrenamiento y test (70% y 30%). Se utiliza validación cruzada con 10 folds, y la métrica a optimizar es el RMSLE.
<br><br>
La comparación entre predicción y valor real muestra un muy buen resultado, logrando resultados muy cercanos al real. Para remuneraciones muy altas el error aumenta, esto se puede deber a que hay pocos jugadores con remuneraciones muy altas y el elgoritmo tiene poca información de estos durante su entrenamiento.
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=${AssetsImage.FIFA19Pred}>
</div>
El detalle de la exploración de datos y desarrollo del modelo se encuentar en: