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
A continuación se implementa una solución utilizando algoritmos genéticos para encontrar el punto de partida edl juego a partir de estados finales.