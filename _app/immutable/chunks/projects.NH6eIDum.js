import{A as a}from"./assets.PEMe4vRl.js";import{b as c}from"./paths.FZTRAS5O.js";import{a as n}from"./skills.CKQLiqQf.js";const e=s=>`${c}/image/${s}`,m={VizDemreTer:e("ternario.png"),VizDemreScatter:e("scatter.png"),VizDemreTerSvelte:e("ternario-svelte.png"),ComidaDLVae:e("comida_rapida_IV_vae.png"),ComidaDLReg:e("comida_rapida_IV_reg.png"),ComidaDLRF:e("comida_rapida_IV_rf.png"),ComidaDLDLArq:e("comida_rapida_IV_dl_arq.png"),ComidaDLDLRes:e("comida_rapida_IV_dl_res.png"),ComidaDLCNNArq:e("comida_rapida_IV_cnn_arq.png"),ComidaDLCNNRes:e("comida_rapida_IV_cnn_res.png"),ComidaDLCNNVaeRes:e("comida_rapida_IV_cnn_vae_res.png"),ComidaDLCNNPred:e("comida_rapida_IV_cnn_pred.png"),ComidaPCA:e("comida_rapida_III_PCA.png"),ComidaISOMAP:e("comida_rapida_III_ISOMAP.png"),ComidaTSNE:e("comida_rapida_III_tSNE.png"),ComidaSOMcom:e("comida_rapida_III_SOM_comida.png"),ComidaDist:e("comida_rapida_II_dist.png"),ComidaRegL:e("comida_rapida_II_reglineal.png"),ComidaKNN:e("comida_rapida_II_knn.png"),ComidaSVM:e("comida_rapida_II_svm.png"),ComidaRF:e("comida_rapida_II_rf.png"),ComidaGB:e("comida_rapida_II_gb.png"),ComidaAnalisis:e("comida_rapida_I_analisis.png"),INGVPred:e("predicion_real.png"),K2020Req:e("respuesta_pais.png"),K2020RankC:e("ranking_paises_respuestas.png"),K2020ReqAge:e("respuestas_edad_region.png"),K2020ComR:e("sueldo_region.png"),K2020ComA:e("sueldo_edad.png"),GLifeStartStop:e("comp_start_stop.png"),GLifePred:e("comp_prediccion.png"),SomGral:e("som.png"),SomMNIST:e("mnist.png"),SomDistNum:e("dist_clase_x_neurona_numeros.png"),SomMatrixNum:e("matriz_confusion_class_numeros.png"),SomFace:e("face_expression.png"),SomDistFace:e("dist_clase_x_neurona_rostros.png"),SomMatrixFace:e("matriz_confusion_class_rostros.png"),FIFA19Age:e("Age-1.png"),FIFA19Club:e("Club-1.png"),FIFA19AgeGan:e("EdadHabGan-1.png"),FIFA19Money:e("MoneyIV-2.png"),FIFA19Pred:e("PredGraph-1.png")},u="A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",p=`<div style="display: flex; justify-content: center; text-align: center;">
    <img width="50%" height="auto" src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_2012_logo.svg'>
</div>

Twitter es actualmente una dinámica fuente de contenidos que, dada su popularidad e impacto, se ha convertido en uno de los principales medios de difusión de los principales medios de comunicación tradicionales (radio y televisión).

<br><br>
El análisis de sentimientos considera los tweets de distintos noticieros chilenos durante el periodo de abril a junio ed 2019 e intenta encontrar algún patrón entre los sentimientos evocados por los tweets de los noticieros. Para ello, se analizan las publicaciones que han hecho en Twitter los noticieros de @CNNChile, @ahoranoticiasAN, @24HorasTVN, @T13 y @CHVNoticias.

<br><br>
La mayor cantidad de tweets se realizaron en junio por las cuentas, aunque @CNNChile y @CHVNoticias presentan varios tweets los meses anterioes, tal como se mestra en la distribución:

<div style="display: flex; justify-content: center; text-align: center; margin-top: 2em;">
    <img width="70%" height="auto" src='https://raw.githubusercontent.com/desareca/Analisis-Sentimientos-Noticieros/master/Distribucion%20tweets%20tiempo.png'>
</div>

<br><br>
Una vez realizado el análisis observamos que las emociones predominantes en los tweets son confianza, miedo y anticipación. Además, en menor medida existen tweets con emoción de alegría. Los tweets presentan un bajo nivel de sorpresa, tristeza, ira y aversión, tal como se muestra en la siguiente distribución temporal: 

<div style="display: flex; justify-content: center; text-align: center; margin-top: 2em;">
    <img width="70%" height="auto" src='https://raw.githubusercontent.com/desareca/Analisis-Sentimientos-Noticieros/master/Analisis%20sentimientos%20tweets%20tiempo.png'>
</div>

<br><br>
Para mayor detalle revisar los enlaces.
`,g=`<div style="display: flex; justify-content: center; text-align: center;">
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

`,b=`<div style="display: flex; justify-content: center; text-align: center;">
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

El detalle de la exploración de datos y desarrollo de los modelos se encuentar en:`,h=`<div style="display: flex; justify-content: center; text-align: center;">
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

El detalle de la exploración de datos y desarrollo del modelo se encuentar en:`,y=`<div style="display: flex; justify-content: center; text-align: center;">
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
    <img width="60%" height="80%" src=\${AssetsImage.FIFA19Age}>
</div>
Por otro lado la mayoría de los equipos tienen en torno a 25 jugadores y además la distribució de jugadores por club parece ser normal.<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=\${AssetsImage.FIFA19Club}>
</div>
Algo peculiar es que aunque los jugadores tienen su punto máximo en valor de contrato en torno a lo 27 años y después comienza a baja, no sucede de la misma forma con la remuneración donde punto máximo es en torno a los 30 años y baja más lentamente.
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=\${AssetsImage.FIFA19AgeGan}>
</div>
También existe una clara relación entre reputación del jugador y su remuneración, tal como se observa en la imagen. Aunque existen ciertas excepciones, tal como es el caso de Z. Ibrahimovic, que tiene reputación 5 y su valor es de 14M€, esto se puede deber a su edad (tiene 36 años), su estado físico y/o al equipo en que juega.
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=\${AssetsImage.FIFA19Money}>
</div>
Para hacer la predicción se utiliza la función h2o.automl de la librería h2o. H2O AutoML es una plataforma de inteligencia artificial que automatiza el proceso de creación, selección y optimización de un gran número de modelos de aprendizaje automático mediante el metodo de Stacked Ensembles.
<br><br>
En esta predicción no se consideran las variables Wage ni Release.Clause. Los datos se dividen en conjunto de entrenamiento y test (70% y 30%). Se utiliza validación cruzada con 10 folds, y la métrica a optimizar es el RMSLE.
<br><br>
La comparación entre predicción y valor real muestra un muy buen resultado, logrando resultados muy cercanos al real. Para remuneraciones muy altas el error aumenta, esto se puede deber a que hay pocos jugadores con remuneraciones muy altas y el elgoritmo tiene poca información de estos durante su entrenamiento.
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=\${AssetsImage.FIFA19Pred}>
</div>
El detalle de la exploración de datos y desarrollo del modelo se encuentar en:`,v=`<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://www.mdpi.com/cleantechnol/cleantechnol-02-00011/article_deploy/html/images/cleantechnol-02-00011-g001.png'>
</div>
<br><br>			
Los mapas autorganizados de Kohonen son un algoritmo que a partir de un proceso iterativo de comparacion con un conjunto de datos y cambios para aproximarse a los mismos, crea un modelo de esos mismos datos que puede servir para agruparlos por criterios de similitud; adicionalmente, este agrupamiento se produce de forma que la proyeccion de estos datos sobre el mapa distribuya sus caracteristicas de una forma gradual. El Mapa de Kohonen, SOM se usa para diferentes aplicaciones:
<ul>			
<li>Clustering: se pueden agrupar datos del conjunto de entrada, atendiendo a diferentes criterios.
<li>Visualizacion: este agrupamiento, como se realiza de una forma ordenada, permite visualizar al conjunto de entrada y descubrir caracteristicas nuevas o relaciones que no se habian previsto de antemano. Tambien permite visualizar la evolucion temporal de un conjunto de datos: proyectando un vector en etapas sucesivas sobre un mapa entrenado se ve como se va moviendo de una zona con unas caracteristicas determinadas a otra.
<li>Clasificacion: aunque el entrenamiento del mapa no tiene en cuenta la etiqueta de clase o el tipo de cada uno de los vectores de entrada, una vez terminado el entrenamiento se puede asignar algun tipo de etiqueta a cada nodo, y se puede usar para clasificar datos desconocidos.
<li>Interpolacion de una funcion: asignando valores numericos a cada uno de los nodos de la red de Kohonen, se pueden asignar esos valores numericos a los vectores de entrada: a cada vector (dato) de entrada le correspondera el numero o vector asignados a la salida mas cercana.
<li>Cuantizacion vectorial: corresponde a la aplicacion de una entrada continua a una salida que esta discretizada, obteniendo a partir de un vector cualquiera el vector mas cercano de un conjunto previamente establecido.
</ul>
A continuacion se implementan mapas autorganizados para la reduccion dimensional, visualizacion de caracteristicas y clasificacion de imágenes, considerando dataset de números y de rostros.

<h2>dataset MNIST</h2>
MNIST (Instituto Nacional Modificado de Estandares y Tecnologia) es el conjunto de datos de facto de vision mundial de la vision de computadora. Desde su lanzamiento en 1999, este clasico conjunto de dato de imagenes manuscritas ha servido como base para los algoritmos de clasificacion de referencia. A medida que surgen nuevas tecnicas de aprendizaje automatico, MNIST sigue siendo un recurso confiable para investigadores y estudiantes por igual.
<br><br>			
El conjunto de datos mixto de Instituto Nacional de estandares y tecnologia (MNIST) es una coleccion de 70.000 imagenes de digitos escritos a mano. Los datos fue creados para actuar como un referente para los algoritmos de reconocimiento de imagen.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.SomMNIST}>
</div>
<br><br>
Al entrenar un SOM con los datos del MNIST la información de cada tipo de número se ubica en zonas relativamente diferentes del resto de los demás números, esto indica que el modelo separa las caracteristicas que diferencian a cada clase.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.SomDistNum}>
</div>
<br><br>
Utilizando la representación de los números en el SOM tenemos una clasificación con un accuraccy de 84.9%. Como se observa en la matriz de confusión, los numeros 4 y 7 con el núemro 9 presentan algunos problemas, asi como el 3 y el 8 con el numero 5.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="50%" height="auto" src=\${AssetsImage.SomMatrixNum}>
</div>
<br><br>
<h2>Face Expression</h2>
Base de datos del <strong>Advanced Multimedia Processing (AMP) Lab</strong> de la <strong>Cornell University</strong>, consta de 13 sujetos con 75 imágenes cada sujeto, de 64x64 píxeles en escala de grises, que muestran diferentes expresiones faciales. Estas imágenes faciales se recopilaron bajo la misma condicion de iluminación utilizando una camara CCD. Las imágenes de los rostros fueron registradas por la ubicación de los ojos.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.SomFace}>
</div>
<br><br>
El SOM resultante de los datos de la base de datos Face Expression genera que cada rostrose ubique en zonas relativamente diferentes del resto.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.SomDistFace}>
</div>
<br><br>
Utilizando la representación de los rostros en el SOM tenemos una clasificación con un accuraccy de 97.5%. Este resultado es muy bueno y reconoce a cada sujeto en su mayoría.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="42%" height="auto" src=\${AssetsImage.SomMatrixFace}>
</div>
<br><br>
Para revisar con más profundidad el análisis ir a los enlaces.`,f=`El Juego de la vida es un autómata celular diseñado por el matemático británico John Horton Conway en 1970. Es un juego de cero jugadores, en el que su evolución es determinada por un estado inicial, sin requerir intervención adicional.
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
        <img width="60%" height="auto" src=\${AssetsImage.GLifeStartStop}>
    </div>
<br><br>
Una vez definidas las zonas de busqueda se realiza un cálculo de prueba con 50 muestras y 15 iteraciones en promedio. Esto resulta en un error medio del 10% hasta un error máximo de 33%, a continuación se muestra un ejemplo de predicción de una de las muestras, considerando el minímo, máximo y promedio.
<br><br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="60%" height="auto" src=\${AssetsImage.GLifePred}>
    </div>
<br><br>
AL combinar estos resultados con el solver Z3 Constraist mejora el error medio al 8%. Para revisar en detalle este análisis ir al siguiente enlace.`,x=`<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.K2020Req}>
</div>
<br><br>
El año 2020 Kaggle realizó una encuesta a nivel de toda la industria que presenta una visión verdaderamente completa del estado de la ciencia de datos y el aprendizaje automático. La encuesta estuvo activa durante 3,5 semanas en octubre y, tras depurar los datos se obtuvieron 20.036 respuestas.
<br><br>
Los resultados incluyen cifras sin procesar sobre quién trabaja con datos, qué está sucediendo con el aprendizaje automático en diferentes industrias y las mejores maneras para que los nuevos científicos de datos se adentren en este campo. 
<br><br>
Desde un punto de vista general, solo viendo el mapa anterior nos damos cuenta que hay dos países que destacan sobre el resto India y EEUU. Al revisar los países con mayor número de respuestas, observamos que todos tienen una población superior a los 65 millones. Además, Latinoamérica, Asia, África y Europa del Este están subrepresentados, lo que indica que Kaggle tiene menor influencia.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.K2020RankC}>
</div>
<br><br>
Para comprender mejor la distribución mundial de los kagglers, revisaremos la distribución por edad por región. Del gráfico siguiente, lo más destacable es la juventud de la región del sur de Asia: alrededor del 80 % de los kagglers en esta región son menores de 30 años. En el caso de África subsahariana y Asia Oriental y el Pacífico, el 80 % de los kagglers tienen entre 18 y 34 años, concentrándose en el grupo de edad de 25 a 29 años. En Oriente Medio y Norte de África, más del 80 % de los kagglers tienen menos de 40 años, concentrándose en el grupo de edad de 22 a 24 años. El 80% de los kagglers de América Latina y el Caribe, y de Europa y Asia Central se encuentran en este mismo grupo de menores de 40 años, aunque en estos casos, el rango de edad de los 25 a los 29 años concentra la mayor parte de los kagglers. Finalmente, en América del Norte, la distribución de edad de los kagglers es más uniforme: el 80% son menores de 50 años y su población se concentra entre los 25 y los 34 años.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.K2020ReqAge}>
</div>
<br><br>
A continuación, se observa un gráfico con grandes diferencias entre regiones, destacando América del Norte y Europa y Asia Central como los kagglers mejor remunerados. Además, hay un alto porcentaje de kagglers que ganan entre $0 y $999 en todas las regiones.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.K2020ComR}>
</div>
<br><br>
Al relacionar la edad con la remuneración se observa una relación creciente; es decir, a mayor nivel de remuneración, la distribución tiende a concentrarse en las edades más avanzadas. 
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.K2020ComA}>
</div>
<br><br>
Para profundizar en el análisis con gráficos interactivos revisar el siguiente enlace.`,A=`<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src="https://images.pexels.com/photos/13337517/pexels-photo-13337517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
</div>
<br><br>
El Instituto Nacional de Geofísica y Vulcanología (INGV) de Italia se centra en la geofísica y la vulcanología. Su principal objetivo es contribuir a la comprensión del sistema terrestre y, al mismo tiempo, mitigar los riesgos asociados. Encargado de monitorear la sismicidad y la actividad volcánica activa las 24 horas del día en todo el país, el INGV busca encontrar los precursores detectables más tempranos que proporcionen información sobre la cronología de futuras erupciones volcánicas.
<br><br>
El objetivo es predecir cuándo ocurrirá la próxima erupción de un volcán, para ello se analiza un amplio conjunto de datos geofísicos recopilados por sensores instalados en volcanes activos, calculando features de las series temporales para entrenar un modelo XGBoost que prediga cuando será la próxima erupción.

<h2>Extracción de Características</h2>
Para la extracción de carácterísticas de utiliza el siguiente pipeline:
<ul>
    <li>Para extraer características típicas de series temporales, como por ejemplo media movil, autocorrelación, etc., se utiliza la librería <strong>tsfeatures</strong>.</li>
    <li>Además, se complementa con la transformada wavelet de cada serie temporal utilizando la librería <strong>biwavelet</strong>.</li>
    <li>Para seleccionar las características más relevantes se utilzan algoritmos genéticos.</li>
</ul>
<h2>Modelo</h2>
Para el modelo, se utiliza XGBoost con los siguientes hiperparámetros:
<ul>
    <li>Validación: Bootstrap adaptativo.</li>
    <li>N.° de folds: 7.</li>
    <li>Búsqueda: aleatoria.</li>
    <li>Longitud de búsqueda: 70.</li>
    <li>Algoritmo: XGBTree.</li>
</ul>
Obteniendo un buen desempeño estimando el tiempo de la próxima erupción, tal como se muestra en el gráfico de comparación de predicción vs real.
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="60%" height="auto" src=\${AssetsImage.INGVPred}>
</div>
<br><br>
Para revisar el código y profundizar en el modelo ir al siguiente enlace.`,I=`<h1>Análisis Exploratorio e Inferencia para determinar estacionalidad en las ventas.</h1>
<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src=\${AssetsImage.ComidaAnalisis}>
</div>
<br><br>
Este es el primero de un conjunto de 4 notebooks para aplicar distintas herramientas de Data Science a las ventas de un local de comida rápida.
<br><br>
Para el desarrollo de este y demás notebooks se consideran los datos reales de venta. En este caso, tenemos el archivo Ventas 2021-2022.xlsx, que contiene las ventas diarias del 2021/2022 del local. Cada fila representa la venta diaria de un producto.
<br><br>
El objetivo principal es realizar una estimación de venta (2 semanas) de los principales productos del local para poder planificar la compra de suministros mediante una simulación Monte Carlo y así ningún cliente quede sin comer 🤤🍔🍟.
Además, se realiza un análisis exploratorio utilizando la librería <strong>SweetViz</strong> que entrega de manera automática e interactiva las principales estadísticas y visualizaciones de un análsiis exploratorio típico.
<br><br>
Para revisar el detalle del notebook ir al siguiente enlace.`,C=`<h1>Predicción de Ventas utilizando algoritmos de Machine Learning.</h1>
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
\\nAdemás, se implementan 5 modelos (Regresión Lineal, KNN, SVM, Random Forest y Gradient Boosting) y se evalua el mejor desempeño de acuerdo con distintas métricas.\\nPor simplicidad se consideran las ventas totales de cada día de la semana anterior y la fecha de la semana a predecir.\\nLos datos tienen varias semanas sin datos debido a la pandemia, por lo que se consideran solo las semanas con datos.
<br><br>

<h6>Exploración de variables</h6><br>

El siguiente gráfico muestra un resumen de las variables principales, la diagonal representa el histograma de cada variable, la zona inferior un scatter coloreado con la densidad de puntos (+oscuro -> +denso) y la zona superior la correlación de pearson entre variables coloreado según la correlación. Se consideran las variables asociadas a las ventas por día y el Total de la semana próxima. Se aprecia cierta normalidad en las variables asociadas a las ventas diarias, con exceptción del sabado, a causa de muchos días sin ventas. Además, hay cierta relación entre las variables y el total de la próxima semana.

<br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDist}>
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
    <img width="90%" height="auto" src=\${AssetsImage.ComidaRegL}>
</div>

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaKNN}>
</div>

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaSVM}>
</div>

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaRF}>
</div>

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaGB}>
</div>
<br><br>

La <strong>explained_variance</strong> muestra un mejor desempeño con <strong>Random Forest</strong>, aunque es la segunda mejor, tiene menos desviación por lo que lo hace más robusta. En el caso del <strong>MSE</strong> sucede similar, <strong>Random Forest</strong> es el segundo mejor, pero su desviación es menor al primero por lo que en este caso también es la mejor. Particularmente, el mejor <strong>MAE</strong> lo tiene el <strong>KNN</strong>. Considerando lo anterior y los gráficos de cada modelo el modelo a utilizar es <strong>Random Forest</strong>.
<br><br>
El detalle del código y un análisis más acabado se encuentran en el siguiente enlace.`,j=`<h1>Busqueda de Patrones utilizando herramientas de aprendizaje no supervisado.</h1><br>
A continuación se explora el dataset visualmente utilizando <strong>PCA</strong>, <strong>ISOMAP</strong>, <strong>t-SNE</strong> y <strong>SOM</strong>. Se considera encontrar relaciones entre días de la semana, productos y nivel de ventas.
<br><br>
<strong>PCA</strong> no funciona muy bien, aunque logra diferenciar claramente los días. Además, relaciona ciertos días entre sí, como el jueves y miércoles o lunes viernes y sábado. Por otro lado, genera una direrenciación entre las papas fritas y el resto de productos, aunque no es muy claro con el resto de productos y los niveles de ventas diarias son indistinguibles.

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaPCA}>
</div>
<br><br>

En el caso de <strong>ISOMAP</strong> se observa un poco más de variación, también logra separar los días, estando algunos muy cercanos como viernes y sábado o lunes y miércoles (practicamente indistinguibles). En el caso de los productos nuevamente sólo logra una separación entre papas fritas con el resto de los productos.

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaISOMAP}>
</div>
<br><br>

Al aplicar <strong>t-SNE</strong> se generan patrones interesantes, por un lado al hacer divisiones parcialmente horizontales tenemos la separación de los días y al hacer divisiones parcialmente verticales tenemos la separación de los productos. No hay división clara para los niveles de venta diaria.

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaTSNE}>
</div>
<br><br>

El <strong>SOM</strong> separa claramente las ventas por día y por productos en grupos distinguibles. Además entrega una relación clara entre productos/días considerando que las celulas contiguas indican semejanza. Por otro lado, tampoco muestra relaciones claras eb los niveles de venta, aunque se aprecia un cierto patrón de ventas malas a regulares los días sábados.

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaSOMcom}>
</div>
<br><br>

Más detalle sobre este análisis en el siguiente enlace:

`,w=`<h1>Predicción de Venta utilizando herramientas de deep learning.</h1>
Este análisis considera 2 partes, primero la implementación de un <strong>Autoencoder variacional</strong>, el objetivo es revisar el funcionamiento del algoritmo y generar datos sintéticos en caso de ser necesario. Luego una predicción de ventas de un local de comida rápida utilizando varios algoritmos de <strong>machine learnig</strong> y <strong>deep learning</strong>.
<br><br>

<h4>Autoencoders Variacionales (VAE)</h4><br>
Un <strong>AutoEncoder (AE)</strong> es un tipo de red neuronal que se utiliza para aprender codificaciones eficientes de datos no etiquetados ( aprendizaje no supervisado ), normalmente se utiliza para reducción de la dimensionalidad. 
<br><br>

Los <strong>Variational AutoEncoders (VAE)</strong> son modelos una combinación de <strong>AE´s</strong> con distribuciones de probabilidad. Su principal uso es el de construir modelos generativos que son capaces de producir datos sintéticos que siguen los mismos patrones que los grandes conjuntos de datos de los que se alimentan. Normalmente, se han usado para generar imágenes que asemejan, por ejemplo, características conocidas tales como caras, vehículos, habitáculos, etc. aunque en teoría podrían usarse para la generación de cualquier tipo de dato.

<br><br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="90%" height="auto" src=\${AssetsImage.ComidaDLVae}>
    </div>
<br><br>

<h4>Predicción de Ventas con Deep Learning.</h4><br>
Se utilizan los años 2020 y 2021 para entrenamiento y 2022 para validación. Se eliminan las variables asociadas a años de los modelos para no introducir información del conjunto de validación.Además, considerando las métricas <strong>RMSE</strong> (principal), <strong>MAE</strong>, <strong>MAPE</strong> y <strong>R2</strong>. <strong>R2</strong> se utiliza particularmente para evaluar el ajuste de los modelos en entrenamiento y validación.

Con estos datos se entrenan 4 modelos diferentes y un modelo adicional considerando una <strong>CNN</strong> con datos sintéticos a partir de un <strong>VAE</strong>:
<ul>
    <li>Regresión Lineal (línea base)</li>
    <li>Random Forest (mejor modelo del caso de uso de aprendizaje supervisado)</li>
    <li>Depp Learning:</li>
    <ul>
        <li>Red de una capa densa.</li>
        <li>Red con 3 capas convolucionales en paralelo / una capa densa.</li>
        <li>Red con 3 capas convolucionales en paralelo / una capa densa, entrenada a partir de datos sintéticos generados con un <strong>VAE</strong>.</li>
    </ul>
</ul>

<br><br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLReg}>
</div>
<br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLRF}>
</div>
<br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLDLRes}>
</div>
<br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLCNNRes}>
</div>
<br>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLCNNVaeRes}>
</div>
<br><br>

Observando los resultados se tiene que el mejor desempeño lo obtiene el modelo que utiliza redes convolucionales sin y con datos sintéticos. Este modelo presenta un buen desempeño manteniendo un nivel de error similar de entrenamiento y validación lo que indica que no existe overfitting.

Para mayor detalle en los modelos revisar los enlaces:`,D=`

Utilizando datos de ingreso y matrícula del [DEMRE](https://demre.cl/portales/portal-bases-datos) se realizan 2 visualizaciones que permiten analizar el estado en estos últimos años de la distribución socioecónomoica de los estudiantes.
<br><br>
Además, para complementar se realiza una visualización interactiva del primer gráfico en Svelte que permite visualizar la distribucuón de cada universidad en detalle.
<br><br>

<h4>Distribución de Alumnos por Establecimiento</h4><br>

Gráfico ternario que muestra la proporción de los estudiantes que provienen de cada tipo de establecimiento (particular pagado, particular subvencionado o público) por univerisidad y año.<br><br>

Cada círculo representa una universidad dado un año y su tamaño está dado por el promedio de notas de estudiantes que ingresaron a dicha institución. Su ubicación está determinada por el porcentaje del alumnado que proviene de tres distintos tipos de establecimientos: Públicos, Particulares Subvencionados y Particulares Pagados.

<br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="90%" height="auto" src=\${AssetsImage.VizDemreTer}>
    </div>
<br><br>

<h4>Evolución de Notas de Ingreso</h4><br>

Scatter plot asociado a las notas promedios de cada universidad en el periodo 2014-2024, considerando el periodo de pandemia.

<br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="90%" height="auto" src=\${AssetsImage.VizDemreScatter}>
    </div>
<br><br>

<h4>Distribución de Alumnos por Establecimiento (Interactivo)</h4><br>

Esta gráfico permite visualizar de manera dinámica la proporción de estudiantes de colegios particulares pagados, particulares subvencionados y públicos en todas las universidades del Demre. Cuenta con un slider para seleccionar el año específico, y al hacer doble click en este, se muestran todos los años disponibles. Además, incluye un buscador para localizar universidades rápidamente y tooltips que ofrecen resúmenes detallados de cada dato. Un clic sobre un dato específico filtra la universidad seleccionada en el gráfico, y un segundo clic revierte este filtro, permitiendo una exploración flexible y detallada de la información.

<br><br>
    <div style="display: flex; justify-content: center; text-align: center;">
        <img width="70%" height="auto" src=\${AssetsImage.VizDemreTerSvelte}>
    </div>
<br><br>

El repositorio con el código y el gráfico interactivo se encuentran en los siguientes enlaces:`;function o(s,r,l=m){return r.forEach(t=>{const d=new RegExp(`\\$\\{AssetsImage\\.${t}\\}`,"g");s=s.replace(d,l[t])}),s}const i={VizDemre:o(D,["VizDemreTer","VizDemreScatter","VizDemreTerSvelte"]),ComidaIV:o(w,["ComidaDLVae","ComidaDLReg","ComidaDLRF","ComidaDLDLArq","ComidaDLDLRes","ComidaDLCNNArq","ComidaDLCNNRes","ComidaDLCNNVaeRes","ComidaDLCNNPred"]),ComidaIII:o(j,["ComidaPCA","ComidaISOMAP","ComidaTSNE","ComidaSOMcom"]),ComidaII:o(C,["ComidaDist","ComidaRegL","ComidaKNN","ComidaSVM","ComidaRF","ComidaGB"]),ComidaI:o(I,["ComidaAnalisis"]),Volcanic:o(A,["INGVPred"]),Kaggle2020:o(x,["K2020Req","K2020RankC","K2020ReqAge","K2020ComR","K2020ComA"]),GameLife:o(f,["GLifeStartStop","GLifePred"]),SomClassify:o(v,["SomGral","SomMNIST","SomDistNum","SomMatrixNum","SomFace","SomDistFace","SomMatrixFace"]),Fifa19:o(y,["FIFA19Age","FIFA19Club","FIFA19AgeGan","FIFA19Money","FIFA19Pred"]),RemFut:h,InfCardiaco:b,ConsumMall:g,NoticiaChile:p,PortfolioSvelte:u},z=[{slug:"dataviz-matricula-demre",color:"steelblue",description:i.VizDemre,shortDescription:"Utilizando datos de ingreso y matrícula del DEMRE se realizan 2 visualizaciones que permiten analizar el estado en estos últimos 10 años de la distribución socioecónomoica de los estudiantes.",links:[{to:"https://github.com/desareca/DataViz-Matricula-Demre",label:"Repositorio"},{to:"https://desareca.github.io/DataViz-Matricula-Demre/",label:"Grafico Interactivo"}],logo:a.Python,name:"Visualización Notas de Estudiantes entre 2014-2024",period:{from:new Date(2025,1,5),to:new Date(2025,3,30)},skills:n("python","pandas","numpy","matplotlib","svelte","d3js"),type:"Análisis de Datos",screenshots:[]},{slug:"venta-comida-rapida-4",color:"steelblue",description:i.ComidaIV,shortDescription:"Busqueda de Patrones utilizando herramientas de deep learning",links:[{to:"https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C",label:"Ventas Local de Comida Rápida (Parte I)"},{to:"https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3",label:"Ventas Local de Comida Rápida (Parte II)"},{to:"https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih",label:"Ventas Local de Comida Rápida (Parte III)"},{to:"https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms",label:"Ventas Local de Comida Rápida (Parte IV)"}],logo:a.Python,name:"Ventas Local de Comida Rápida (Parte IV)",period:{from:new Date(2022,1,5),to:new Date(2022,4,30)},skills:n("python","pandas","numpy","matplotlib","seaborn","sklearn","keras","tensorflow"),type:"Machine Learning",screenshots:[]},{slug:"venta-comida-rapida-3",color:"steelblue",description:i.ComidaIII,shortDescription:"Busqueda de Patrones utilizando herramientas de aprendizaje no supervisado",links:[{to:"https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C",label:"Ventas Local de Comida Rápida (Parte I)"},{to:"https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3",label:"Ventas Local de Comida Rápida (Parte II)"},{to:"https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih",label:"Ventas Local de Comida Rápida (Parte III)"},{to:"https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms",label:"Ventas Local de Comida Rápida (Parte IV)"}],logo:a.Python,name:"Ventas Local de Comida Rápida (Parte III)",period:{from:new Date(2022,1,5),to:new Date(2022,4,30)},skills:n("python","pandas","numpy","matplotlib","seaborn","sklearn"),type:"Machine Learning",screenshots:[]},{slug:"venta-comida-rapida-2",color:"steelblue",description:i.ComidaII,shortDescription:"Predicción de Ventas utilizando algoritmos de Machine Learning",links:[{to:"https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C",label:"Ventas Local de Comida Rápida (Parte I)"},{to:"https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3",label:"Ventas Local de Comida Rápida (Parte II)"},{to:"https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih",label:"Ventas Local de Comida Rápida (Parte III)"},{to:"https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms",label:"Ventas Local de Comida Rápida (Parte IV)"}],logo:a.Python,name:"Ventas Local de Comida Rápida (Parte II)",period:{from:new Date(2022,1,5),to:new Date(2022,4,30)},skills:n("python","pandas","numpy","matplotlib","seaborn","sklearn"),type:"Machine Learning",screenshots:[]},{slug:"venta-comida-rapida-1",color:"steelblue",description:i.ComidaI,shortDescription:"Análisis Exploratorio e Inferencia para determinar estacionalidad en las ventas",links:[{to:"https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C",label:"Ventas Local de Comida Rápida (Parte I)"},{to:"https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3",label:"Ventas Local de Comida Rápida (Parte II)"},{to:"https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih",label:"Ventas Local de Comida Rápida (Parte III)"},{to:"https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms",label:"Ventas Local de Comida Rápida (Parte IV)"}],logo:a.Python,name:"Ventas Local de Comida Rápida (Parte I)",period:{from:new Date(2022,1,5),to:new Date(2022,4,30)},skills:n("python","pandas","numpy","matplotlib"),type:"Análisis de Datos",screenshots:[]},{slug:"prediccion-erupcion-volcanica",color:"royalblue",description:i.Volcanic,shortDescription:"Predicción de erupciones volcánicas con XGBoost",links:[{to:"https://www.kaggle.com/code/desareca/automl-volcanic-eruption-prediction",label:"Kaggle"}],logo:a.R,name:"INGV - Predicción de Erupción Volcánica",period:{from:new Date(2020,10,11),to:new Date(2021,0,5)},skills:n("r","tidyverse","ggplot2"),type:"Series de Tiempo",screenshots:[]},{slug:"kaggle-survey-2020",color:"royalblue",description:i.Kaggle2020,shortDescription:"Visualización de datos de la encuesta Kaggle 2020 sobre ciencia de datos y aprendizaje automático.",links:[{to:"https://www.kaggle.com/code/desareca/kaggle-survey-2020-analisys-by-region",label:"Kaggle"}],logo:a.R,name:"Encuesta Kaggle 2020: Análisis por región",period:{from:new Date(2020,10,19),to:new Date(2021,0,5)},skills:n("r","tidyverse","ggplot2","plotly"),type:"Visualización de Datos",screenshots:[]},{slug:"game-life-genetic-algorithm",color:"royalblue",description:i.GameLife,shortDescription:"Optimización mediante algoritmos genéticos para resolver el juego de la vida inverso.",links:[{to:"https://www.kaggle.com/code/desareca/game-of-life-genetic-algorithm-spanish",label:"Kaggle"}],logo:a.R,name:"Game of Life - Genetic Algorithm",period:{from:new Date(2020,9,3),to:new Date(2020,9,31)},skills:n("r","tidyverse","ggplot2"),type:"Optimización - Algoritmos Genéticos",screenshots:[]},{slug:"som-clasificacion-imagenes",color:"royalblue",description:i.SomClassify,shortDescription:"Clasificación de imágenes mediante mapas autorganizados de Kohonen.",links:[{to:"https://rpubs.com/desareca/SOM_clasificacion_imagenes",label:"RPubs"}],logo:a.R,name:"SOM, visualización y clasificación de imágenes",period:{from:new Date(2019,9,1),to:new Date(2019,9,31)},skills:n("r","tidyverse","ggplot2"),type:"Análisis de Datos",screenshots:[]},{slug:"fifa19-analisis-prediccion",color:"royalblue",description:i.Fifa19,shortDescription:"FIFA 19 (de la saga FIFA) es un videojuego de simulación de fútbol desarrollado por EA Vancouver como parte de la serie FIFA de Electronic Arts.",links:[{to:"https://www.kaggle.com/code/desareca/fifa-19-analisis-de-caracteristicas-y-prediccion",label:"Kaggle"},{to:"https://rpubs.com/desareca/Analisis-estadisticas-FIFA19",label:"RPubs"}],logo:a.R,name:"FIFA 19 - Analisis de caracteristicas y predicción",period:{from:new Date(2019,9,1),to:new Date(2019,9,31)},skills:n("r","tidyverse","ggplot2","h2o"),type:"Análisis de Datos",screenshots:[]},{slug:"prediccion-remuneracion-futbolistas",color:"steelblue",description:i.RemFut,shortDescription:"Predicción de remuneraciones de futbolistas a partir de estadísticas sobre sus habilidades de juego.",links:[{to:"https://github.com/desareca/Proyectos_tensorflow/tree/master/Remuneracion-Furtbolistas",label:"Repositorio"},{to:"https://rpubs.com/desareca/Prediccion-Sueldos-Futbolistas",label:"RPubs"}],logo:a.Python,name:"Predicción de remuneración de futbolistas ",period:{from:new Date(2019,9,1),to:new Date(2019,9,31)},skills:n("python","pandas","numpy","matplotlib","seaborn","sklearn","tensorflow"),type:"Regresión",screenshots:[]},{slug:"clasificacion-infarto-cardiaco",color:"steelblue",description:i.InfCardiaco,shortDescription:"Clasificación binaria para predecir en base a las variables si un paciente con un determinado número de medidas médicas es susceptible de tener enfermedad de corazón o no.",links:[{to:"https://github.com/desareca/Proyectos_tensorflow/tree/master/Probabilidad-Infarto-Cardiaco",label:"Repositorio"},{to:"https://rpubs.com/desareca/Clasificacion-infarto-cardiaco",label:"RPubs"}],logo:a.Python,name:"Clasificación de infarto cardíaco",period:{from:new Date(2019,9,1),to:new Date(2019,9,31)},skills:n("python","pandas","numpy","matplotlib","sklearn","tensorflow"),type:"Clasificación",screenshots:[]},{slug:"analisis-consumidores-mall",color:"steelblue",description:i.ConsumMall,shortDescription:"Regresión para predecir el puntaje de los clientes en un mall.",links:[{to:"https://github.com/desareca/Proyectos_tensorflow/tree/master/Analisis-Consmidores",label:"Repositorio"},{to:"https://rpubs.com/desareca/Analisis_Consumidores",label:"RPubs"}],logo:a.Python,name:"Análisis de Consumidores de un Mall",period:{from:new Date(2019,9,1),to:new Date(2019,9,31)},skills:n("python","pandas","numpy","matplotlib","sklearn","tensorflow"),type:"Análisis de Datos",screenshots:[]},{slug:"analisis-sentimientos-noticieros-chilenos",color:"royalblue",description:i.NoticiaChile,shortDescription:"Twitter es actualmente una dinámica fuente de contenidos que, dada su popularidad e impacto, se ha convertido en uno de los principales medios de difusión de los principales medios de comunicación tradicionales (radio y televisión).",links:[{to:"https://github.com/desareca/Analisis-Sentimientos-Noticieros",label:"Repositorio"},{to:"https://rpubs.com/desareca/Analisis_Sentimientos_Noticieros",label:"RPubs"}],logo:a.R,name:"Análisis de Sentimientos Noticieros Chilenos",period:{from:new Date(2019,5,1),to:new Date(2019,5,31)},skills:n("r"),type:"Análisis de Datos",screenshots:[]},{slug:"slick-portfolio-svelte",color:"#ff3e00",description:i.PortfolioSvelte,shortDescription:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:a.Svelte,name:"Slick Portfolio",period:{from:new Date},skills:n("svelte","ts","tailwind","sass"),type:"Website Template",screenshots:[{label:"screen 1",src:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"2",src:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"3",src:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"4",src:"https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"5",src:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"6",src:"https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}]}],q="Proyectos",_={title:q,items:z};export{_ as P};
