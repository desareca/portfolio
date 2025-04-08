El Juego de la vida es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. Es un juego de cero jugadores, en el que su evolución es determinada por un estado inicial, sin requerir intervención adicional.
<br><br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="50%" height="auto" src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*6wS-kXlOCBsAJciygkJtDA.gif'>
    </div>
<br><br>	
El juego se desarrolla en una cuadrícula de celdas, donde cada celda puede estar viva o muerta. En cada paso del tiempo, el estado de cada celda se determina por el estado de sus ocho vecinos (celdas adyacentes). Las reglas son las siguientes:
<ul>
    <li>Una celda viva con menos de dos vecinos vivos muere (subpoblación).
    <li>Una celda viva con dos o tres vecinos vivos permanece viva (supervivencia).
    <li>Una celda viva con más de tres vecinos vivos muere (sobrepoblación).
    <li>Una celda muerta con exactamente tres vecinos vivos se convierte en una celda viva (reproducción). 
</ul>
<br>
El objetivo de este análisis es intentar predecir el juego de la vida a la inversa utilizando algoritmos genéticos y una estrategia de zonificación de la busqueda considerando a que en la mayoría de los casos el estado final se encuentra en las cercanías del estado inicial, tal como se muestra en el siguiente ejemplo.
<br><br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="60%" height="auto" src=${AssetsImage.GLifeStartStop}>
    </div>
<br><br>
Una vez definidas las zonas de busqueda se realiza un cálculo de prueba con 50 muestras y 15 iteraciones en promedio. Esto resulta en un error medio del 10% hasta un error máximo de 33%, a continuación se muestra un ejemplo de predicción de una de las muestras, considerando el minímo, máximo y promedio.
<br><br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="60%" height="auto" src=${AssetsImage.GLifePred}>
    </div>
<br><br>
AL combinar estos resultados con el solver Z3 Constraist mejora el error medio al 8%. Para revisar en detalle este análisis ir al siguiente enlace.