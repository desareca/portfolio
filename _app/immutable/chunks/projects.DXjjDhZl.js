import{A as a}from"./assets.B-4qPeeD.js";import{b as c}from"./paths.iBHtYh3P.js";import{a as i}from"./skills.BzS2AC7G.js";const e=o=>`${c}/image/${o}`,m={VizDemreTer:e("ternario.png"),VizDemreScatter:e("scatter.png"),VizDemreTerSvelte:e("ternario-svelte.png"),ComidaDLVae:e("comida_rapida_IV_vae.png"),ComidaDLReg:e("comida_rapida_IV_reg.png"),ComidaDLRF:e("comida_rapida_IV_rf.png"),ComidaDLDLArq:e("comida_rapida_IV_dl_arq.png"),ComidaDLDLRes:e("comida_rapida_IV_dl_res.png"),ComidaDLCNNArq:e("comida_rapida_IV_cnn_arq.png"),ComidaDLCNNRes:e("comida_rapida_IV_cnn_res.png"),ComidaDLCNNVaeRes:e("comida_rapida_IV_cnn_vae_res.png"),ComidaDLCNNPred:e("comida_rapida_IV_cnn_pred.png"),ComidaPCA:e("comida_rapida_III_PCA.png"),ComidaISOMAP:e("comida_rapida_III_ISOMAP.png"),ComidaTSNE:e("comida_rapida_III_tSNE.png"),ComidaSOMcom:e("comida_rapida_III_SOM_comida.png"),ComidaDist:e("comida_rapida_II_dist.png"),ComidaRegL:e("comida_rapida_II_reglineal.png"),ComidaKNN:e("comida_rapida_II_knn.png"),ComidaSVM:e("comida_rapida_II_svm.png"),ComidaRF:e("comida_rapida_II_rf.png"),ComidaGB:e("comida_rapida_II_gb.png"),ComidaAnalisis:e("comida_rapida_I_analisis.png"),INGVPred:e("predicion_real.png"),K2020Req:e("respuesta_pais.png"),K2020RankC:e("ranking_paises_respuestas.png"),K2020ReqAge:e("respuestas_edad_region.png"),K2020ComR:e("sueldo_region.png"),K2020ComA:e("sueldo_edad.png"),GLifeStartStop:e("comp_start_stop.png"),GLifePred:e("comp_prediccion.png"),SomGral:e("som.png"),SomMNIST:e("mnist.png"),SomDistNum:e("dist_clase_x_neurona_numeros.png"),SomMatrixNum:e("matriz_confusion_class_numeros.png"),SomFace:e("face_expression.png"),SomDistFace:e("dist_clase_x_neurona_rostros.png"),SomMatrixFace:e("matriz_confusion_class_rostros.png"),FIFA19Age:e("Age-1.png"),FIFA19Club:e("Club-1.png"),FIFA19AgeGan:e("EdadHabGan-1.png"),FIFA19Money:e("MoneyIV-2.png"),FIFA19Pred:e("PredGraph-1.png")},p=`A Vercel-like developer portfolio website template made with Typescript and SvelteKit.

**Versión Mejorada:**

¿Buscas una plantilla moderna y eficiente para tu portafolio de desarrollador? Este proyecto es una plantilla inspirada en Vercel, construida con Typescript y SvelteKit, ideal para mostrar tus proyectos, habilidades y experiencia de manera profesional y atractiva. Incluye integración sencilla, diseño responsivo y componentes reutilizables para acelerar la creación de tu presencia online.
`,g=`<div style="display: flex; justify-content: center; text-align: center;">
    <img width="50%" height="auto" src='https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_2012_logo.svg'>
</div>

¿Puede Twitter revelar el pulso emocional de los noticieros chilenos? En este proyecto, analizo los sentimientos transmitidos por los principales noticieros de Chile a través de sus tweets entre abril y junio de 2019.

**¿Por qué Twitter?**
Twitter es una plataforma clave para la difusión de noticias y opiniones, donde los medios tradicionales amplifican su alcance y conectan con la audiencia en tiempo real.

**Metodología:**
- Recolección de tweets de @CNNChile, @ahoranoticiasAN, @24HorasTVN, @T13 y @CHVNoticias.
- Análisis temporal de la actividad y distribución de tweets.
- Evaluación de emociones predominantes usando técnicas de análisis de sentimientos.

**Hallazgos principales:**
- El volumen de tweets se incrementa en junio, aunque algunos noticieros mantienen actividad constante en meses previos.
- Las emociones más frecuentes son confianza, miedo y anticipación, con menor presencia de alegría, sorpresa o tristeza.

<div style="display: flex; justify-content: center; text-align: center; margin-top: 2em;">
    <img width="70%" height="auto" src='https://raw.githubusercontent.com/desareca/Analisis-Sentimientos-Noticieros/master/Distribucion%20tweets%20tiempo.png'>
</div>

<div style="display: flex; justify-content: center; text-align: center; margin-top: 2em;">
    <img width="70%" height="auto" src='https://raw.githubusercontent.com/desareca/Analisis-Sentimientos-Noticieros/master/Analisis%20sentimientos%20tweets%20tiempo.png'>
</div>

Este análisis permite comprender cómo los medios informan y transmiten emociones a través de las redes sociales, aportando una visión sobre el impacto de la comunicación digital en la percepción pública.
`,u=`<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://images.pexels.com/photos/54581/escalator-stairs-metal-segments-architecture-54581.jpeg'>
</div>
<br><br>
¿Alguna vez te has preguntado cómo los centros comerciales pueden anticipar el comportamiento de sus clientes? En este proyecto, exploro cómo predecir el puntaje de satisfacción de los consumidores de un mall utilizando técnicas modernas de ciencia de datos.

**Descripción del Dataset:**
- CustomerID: Identificador único de cada cliente.
- Gender: Género (Masculino/Femenino).
- Age: Edad del cliente.
- Annual Income (k$): Ingresos anuales.
- Spending Score (1-100): Puntaje de gasto asignado por el mall.

**Metodología:**
1. Análisis exploratorio para entender patrones y relaciones en los datos.
2. División de los datos en entrenamiento y validación (80%-20%).
3. Implementación de varios algoritmos de regresión (incluyendo KNN y redes neuronales) usando TensorFlow, con validación cruzada aleatoria.
4. Comparación de desempeño usando RMSE en el conjunto de validación.

**Hallazgos clave:**
- Los modelos KNN y Red Neuronal superan a los métodos lineales, reflejando la naturaleza no lineal de los datos.
- KNN logra el menor error, aunque su capacidad de mejora es limitada.
- Las redes neuronales, aunque inicialmente menos precisas, pueden optimizarse ajustando hiperparámetros.

**Comparación de Modelos:**
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
            <img width="90%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Analisis-Consmidores/loss_red_neuronal.png'>
        </div>
    </td>
    <td>RMSE: 21.35</td>
  </tr>
</table>

Este análisis demuestra el valor de aplicar modelos avanzados para entender y anticipar el comportamiento de los consumidores en entornos comerciales reales.
`,y=`<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://images.pexels.com/photos/1093161/pexels-photo-1093161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'>
</div>
<br><br>
¿Es posible anticipar el riesgo de infarto cardíaco con datos médicos? En este proyecto, desarrollo un modelo de clasificación binaria para predecir la probabilidad de enfermedad cardíaca en pacientes, utilizando variables clínicas y técnicas avanzadas de machine learning.

**Metodología:**
1. Análisis exploratorio para identificar variables relevantes y relaciones no lineales.
2. División de los datos en entrenamiento (80%) y validación (20%).
3. Implementación de varios algoritmos de clasificación (incluyendo SVM radial) con validación cruzada aleatoria.
4. Comparación de exactitud en el conjunto de validación.

**Hallazgos clave:**
- No existe una relación lineal clara entre las variables y el diagnóstico, lo que sugiere la necesidad de modelos no lineales.
- El SVM Radial logra una exactitud sobresaliente de 0.98, superando ampliamente a otros métodos.

<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Probabilidad-Infarto-Cardiaco/corr.png'>
</div>

<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="50%" height="auto" src='https://github.com/desareca/Proyectos_tensorflow/raw/master/Probabilidad-Infarto-Cardiaco/acc.png'>
</div>

Este trabajo demuestra el potencial de la inteligencia artificial para apoyar diagnósticos médicos y mejorar la prevención de enfermedades cardiovasculares.
`,h=`<div style="display: flex; justify-content: center; text-align: center;">
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
`,f=`<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://cdn.resfu.com/media/img_news/montaje-de-las-portadas-de-fifa-19-de-ilustrador-fred-illustrations--montaje-fred-illustrations.png?size=1000x&lossy=1&ext=jpeg'>
</div>
<br><br>
¿Puede la ciencia de datos predecir el valor y la remuneración de los futbolistas en FIFA 19? En este proyecto, exploro el análisis de datos y la predicción de salarios de jugadores utilizando machine learning y AutoML.

**Contexto:**
FIFA 19 es un videojuego icónico de simulación de fútbol, donde los datos de jugadores y equipos reflejan tendencias reales del deporte profesional.

**Metodología:**
- Análisis exploratorio de la distribución de edad, clubes y salarios de los jugadores.
- Uso de h2o.automl para automatizar la selección y optimización de modelos predictivos.
- División de datos en entrenamiento y test, con validación cruzada y optimización de RMSLE.

**Hallazgos clave:**
- La mayoría de los jugadores tienen entre 20 y 30 años, y los clubes suelen tener alrededor de 25 jugadores.
- Existe una relación clara entre reputación y remuneración, aunque hay excepciones notables.
- El modelo predice con alta precisión, aunque el error aumenta para salarios muy altos debido a la escasez de datos en ese rango.

<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=\${AssetsImage.FIFA19Age}>
</div>
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=\${AssetsImage.FIFA19Club}>
</div>
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=\${AssetsImage.FIFA19AgeGan}>
</div>
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=\${AssetsImage.FIFA19Money}>
</div>
<div style="display: flex; justify-content: center; text-align: center; margin: 2em;">
    <img width="60%" height="80%" src=\${AssetsImage.FIFA19Pred}>
</div>

Este análisis muestra cómo la analítica avanzada puede aportar valor en la industria deportiva y en la toma de decisiones basada en datos.
`,v=`<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src='https://www.mdpi.com/cleantechnol/cleantechnol-02-00011/article_deploy/html/images/cleantechnol-02-00011-g001.png'>
</div>
<br><br>
¿Se pueden descubrir patrones y clasificar imágenes complejas usando mapas autoorganizados? En este proyecto, exploro el uso de SOM (Self-Organizing Maps) para reducción dimensional, visualización y clasificación de imágenes, aplicando el método a datasets de dígitos manuscritos (MNIST) y expresiones faciales.

**Metodología:**
- Entrenamiento de SOM para agrupar y visualizar datos de alta dimensión.
- Análisis de la distribución de clases y precisión de clasificación en MNIST y un dataset de rostros.

**Resultados:**
- En MNIST, el SOM separa eficazmente los diferentes dígitos, logrando una precisión del 84.9%.
- En el dataset de rostros, el SOM alcanza una precisión del 97.5%, identificando correctamente a la mayoría de los sujetos.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.SomMNIST}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.SomDistNum}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="50%" height="auto" src=\${AssetsImage.SomMatrixNum}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.SomFace}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.SomDistFace}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="42%" height="auto" src=\${AssetsImage.SomMatrixFace}>
</div>

Este trabajo demuestra el poder de los SOM para visualizar y clasificar datos complejos, facilitando la interpretación y el descubrimiento de patrones ocultos.
`,b=`El Juego de la Vida de Conway: Predicción Inversa con Algoritmos Genéticos

¿Es posible predecir el estado inicial de un autómata celular a partir de su estado final? En este proyecto, exploro el famoso Juego de la Vida de Conway y aplico algoritmos genéticos para intentar resolver el problema inverso.

**Contexto:**
El Juego de la Vida es un autómata celular donde cada celda evoluciona según reglas simples, generando patrones complejos a lo largo del tiempo.

**Metodología:**
- Definición de reglas y simulación del juego en una cuadrícula.
- Implementación de una estrategia de zonificación para acotar la búsqueda del estado inicial.
- Uso de algoritmos genéticos para explorar posibles soluciones, evaluando el error medio en múltiples muestras.
- Combinación con el solver Z3 Constraint para mejorar la precisión.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="50%" height="auto" src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*6wS-kXlOCBsAJciygkJtDA.gif'>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="60%" height="auto" src=\${AssetsImage.GLifeStartStop}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="60%" height="auto" src=\${AssetsImage.GLifePred}>
</div>

**Resultados:**
- El error medio se reduce al 8% al combinar algoritmos genéticos con el solver Z3.
- El enfoque demuestra el potencial de la inteligencia artificial para resolver problemas complejos y no triviales en sistemas dinámicos.

Este proyecto ilustra cómo la creatividad y la ciencia de datos pueden abordar desafíos aparentemente imposibles.
`,x=`<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.K2020Req}>
</div>
<br><br>
¿Qué nos revela la mayor encuesta global de ciencia de datos? En este proyecto, analizo los resultados de la encuesta Kaggle 2020, que recoge la visión de más de 20.000 profesionales y entusiastas del machine learning en todo el mundo.

**Metodología:**
- Análisis de la distribución geográfica, edad y remuneración de los participantes.
- Visualización de diferencias regionales y tendencias demográficas.

**Hallazgos clave:**
- India y EE.UU. lideran en número de participantes, mientras que regiones como Latinoamérica y África están subrepresentadas.
- La mayoría de los kagglers son jóvenes, especialmente en Asia y África.
- América del Norte y Europa concentran los salarios más altos, aunque en todas las regiones hay una gran proporción de profesionales con ingresos bajos.
- Existe una relación creciente entre edad y remuneración.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.K2020RankC}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.K2020ReqAge}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.K2020ComR}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.K2020ComA}>
</div>

Este análisis ofrece una radiografía global de la comunidad de ciencia de datos y sus desafíos, aportando información valiosa para quienes buscan entender el estado actual y futuro del sector.
`,I=`<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src="https://images.pexels.com/photos/13337517/pexels-photo-13337517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
</div>
<br><br>
¿Se puede anticipar una erupción volcánica usando inteligencia artificial? En este proyecto, aplico machine learning para predecir el momento de la próxima erupción, utilizando datos geofísicos reales y técnicas avanzadas de extracción de características.

**Contexto:**
El INGV de Italia monitorea la actividad sísmica y volcánica, buscando precursores que permitan anticipar eventos peligrosos.

**Metodología:**
- Extracción de características de series temporales con tsfeatures y wavelets.
- Selección de variables relevantes mediante algoritmos genéticos.
- Entrenamiento de un modelo XGBoost con validación bootstrap y búsqueda aleatoria de hiperparámetros.

**Resultados:**
- El modelo logra predecir con precisión el tiempo de la próxima erupción, demostrando el potencial de la IA en la gestión de riesgos naturales.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="60%" height="auto" src=\${AssetsImage.INGVPred}>
</div>

Este trabajo muestra cómo la ciencia de datos puede contribuir a la seguridad y prevención de desastres naturales.
`,C=`<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src=\${AssetsImage.ComidaAnalisis}>
</div>
<br><br>
¿Puede la ciencia de datos ayudar a un local de comida rápida a anticipar la demanda y optimizar sus recursos? Este proyecto es el primero de una serie dedicada a analizar y predecir ventas en un entorno real, utilizando datos diarios de ventas de 2021 y 2022.

**Objetivo:**
Estimar las ventas de los principales productos para las próximas dos semanas, permitiendo una mejor planificación de compras y evitando quiebres de stock mediante simulación Monte Carlo.

**Metodología:**
- Análisis exploratorio automatizado con SweetViz para descubrir patrones y tendencias en los datos.
- Uso de datos reales de ventas diarias para construir una base sólida de predicción.

Este enfoque permite transformar datos históricos en decisiones estratégicas, asegurando que ningún cliente se quede sin su producto favorito y optimizando la gestión del negocio.
`,w=`<div style="display: flex; justify-content: center; text-align: center;">
<img width="70%" height="auto" src="https://tecnologiabi.com/wp-content/uploads/2023/06/pronosticos-de-ventas-con-machine-learning.jpg">
</div>
<br><br>
¿Cómo anticipar la demanda semanal en un local de comida rápida usando machine learning? En este segundo notebook de la serie, aplico modelos predictivos a datos reales de ventas de 2020 a 2022 para optimizar la planificación y maximizar las ganancias.

**Metodología:**
- Limpieza y análisis exploratorio para identificar patrones y relaciones entre variables.
- Implementación de cinco modelos: Regresión Lineal, KNN, SVM, Random Forest y Gradient Boosting.
- Entrenamiento con RepeatedKFold y búsqueda de hiperparámetros con GridSearch.

**Hallazgos clave:**
- Las ventas diarias muestran patrones de normalidad, con excepciones los sábados por días sin ventas.
- Los modelos permiten predecir la semana siguiente usando solo la información de la semana previa y la fecha.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDist}>
</div>

**Comparación de Modelos:**
- Visualización de resultados para cada modelo implementado:

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaRegL}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaKNN}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaSVM}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaRF}>
</div>

Este análisis demuestra cómo la analítica avanzada puede transformar la gestión de inventario y la toma de decisiones en negocios de comida rápida.
`,A=`<h1>Búsqueda de Patrones en Ventas de Comida Rápida: Explorando lo Invisible</h1>
<br><br>
¿Existen patrones ocultos en las ventas diarias de un local de comida rápida? En este tercer notebook, exploro el dataset utilizando técnicas de aprendizaje no supervisado para descubrir relaciones entre días, productos y niveles de venta.

**Metodología:**
- Aplicación de PCA, ISOMAP, t-SNE y SOM para visualizar y agrupar los datos.
- Análisis de la separación entre días de la semana y productos, identificando similitudes y diferencias.

**Hallazgos clave:**
- PCA e ISOMAP logran separar algunos días y productos, aunque con limitaciones.
- t-SNE revela divisiones interesantes entre días y productos.
- SOM permite agrupar ventas por día y producto, mostrando patrones de ventas bajas los sábados.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaPCA}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaISOMAP}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaTSNE}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaSOMcom}>
</div>

Este análisis permite descubrir patrones que no son evidentes a simple vista, aportando valor estratégico a la gestión del negocio.
`,D=`<h1>Predicción de Ventas con Deep Learning y Generación de Datos Sintéticos</h1>
<br><br>
¿Puede la inteligencia artificial revolucionar la predicción de ventas en un local de comida rápida? En este cuarto notebook, combino autoencoders variacionales y modelos de deep learning para llevar la predicción al siguiente nivel.

**Parte 1: Autoencoders Variacionales (VAE)**
- Los VAE permiten generar datos sintéticos que simulan el comportamiento real de las ventas, útiles para entrenar modelos robustos.
- Se explora el funcionamiento de los VAE y su aplicación en la generación de datos para escenarios con información limitada.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLVae}>
</div>

**Parte 2: Predicción de Ventas con Deep Learning**
- Entrenamiento de modelos con datos de 2020 y 2021, validando en 2022.
- Implementación de modelos: Regresión Lineal, Random Forest, redes densas y convolucionales, y CNN entrenada con datos sintéticos generados por VAE.
- Evaluación con métricas RMSE, MAE, MAPE y R2.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLReg}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLRF}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLDLRes}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLCNNRes}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.ComidaDLCNNVaeRes}>
</div>

**Conclusión:**
El uso de deep learning y datos sintéticos permite obtener modelos más precisos y robustos, demostrando el potencial de la IA para transformar la gestión de ventas en negocios reales.
`,M=`¿Cómo ha cambiado la distribución socioeconómica de los estudiantes universitarios en Chile en la última década? En este proyecto, utilizo datos del DEMRE para crear visualizaciones que exploran el origen escolar y el rendimiento académico de los estudiantes.

**Visualización 1: Distribución de Alumnos por Establecimiento**
- Gráfico ternario que muestra la proporción de estudiantes provenientes de colegios particulares pagados, subvencionados y públicos, por universidad y año.
- El tamaño de cada círculo representa el promedio de notas de ingreso.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.VizDemreTer}>
</div>

**Visualización 2: Evolución de Notas de Ingreso**
- Scatter plot que analiza la evolución de las notas promedio de ingreso por universidad entre 2014 y 2024, incluyendo el periodo de pandemia.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=\${AssetsImage.VizDemreScatter}>
</div>

**Visualización 3: Distribución Interactiva**
- Gráfico interactivo en Svelte que permite explorar la proporción de estudiantes por tipo de establecimiento y universidad, con filtros y herramientas de búsqueda.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="70%" height="auto" src=\${AssetsImage.VizDemreTerSvelte}>
</div>

Este análisis visual ayuda a comprender la diversidad y evolución del acceso a la educación superior en Chile.
`;function t(o,r,l=m){return r.forEach(s=>{const d=new RegExp(`\\$\\{AssetsImage\\.${s}\\}`,"g");o=o.replace(d,l[s])}),o}const n={VizDemre:t(M,["VizDemreTer","VizDemreScatter","VizDemreTerSvelte"]),ComidaIV:t(D,["ComidaDLVae","ComidaDLReg","ComidaDLRF","ComidaDLDLArq","ComidaDLDLRes","ComidaDLCNNArq","ComidaDLCNNRes","ComidaDLCNNVaeRes","ComidaDLCNNPred"]),ComidaIII:t(A,["ComidaPCA","ComidaISOMAP","ComidaTSNE","ComidaSOMcom"]),ComidaII:t(w,["ComidaDist","ComidaRegL","ComidaKNN","ComidaSVM","ComidaRF","ComidaGB"]),ComidaI:t(C,["ComidaAnalisis"]),Volcanic:t(I,["INGVPred"]),Kaggle2020:t(x,["K2020Req","K2020RankC","K2020ReqAge","K2020ComR","K2020ComA"]),GameLife:t(b,["GLifeStartStop","GLifePred"]),SomClassify:t(v,["SomGral","SomMNIST","SomDistNum","SomMatrixNum","SomFace","SomDistFace","SomMatrixFace"]),Fifa19:t(f,["FIFA19Age","FIFA19Club","FIFA19AgeGan","FIFA19Money","FIFA19Pred"]),RemFut:h,InfCardiaco:y,ConsumMall:u,NoticiaChile:g,PortfolioSvelte:p},j=[{slug:"dataviz-matricula-demre",color:"steelblue",description:n.VizDemre,shortDescription:"Utilizando datos de ingreso y matrícula del DEMRE se realizan 2 visualizaciones que permiten analizar el estado en estos últimos 10 años de la distribución socioecónomoica de los estudiantes.",links:[{to:"https://github.com/desareca/DataViz-Matricula-Demre",label:"Repositorio"},{to:"https://desareca.github.io/DataViz-Matricula-Demre/",label:"Grafico Interactivo"}],logo:a.Python,name:"Visualización Matricula en Universidades del DEMRE entre 2014-2024",period:{from:new Date(2025,1,5),to:new Date(2025,3,30)},skills:i("python","pandas","numpy","matplotlib","svelte","d3js"),type:"Análisis de Datos",screenshots:[]},{slug:"venta-comida-rapida-4",color:"steelblue",description:n.ComidaIV,shortDescription:"Busqueda de Patrones utilizando herramientas de deep learning",links:[{to:"https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C",label:"Ventas Local de Comida Rápida (Parte I)"},{to:"https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3",label:"Ventas Local de Comida Rápida (Parte II)"},{to:"https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih",label:"Ventas Local de Comida Rápida (Parte III)"},{to:"https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms",label:"Ventas Local de Comida Rápida (Parte IV)"}],logo:a.Python,name:"Ventas Local de Comida Rápida (Parte IV)",period:{from:new Date(2022,1,5),to:new Date(2022,4,30)},skills:i("python","pandas","numpy","matplotlib","seaborn","sklearn","keras","tensorflow"),type:"Machine Learning",screenshots:[]},{slug:"venta-comida-rapida-3",color:"steelblue",description:n.ComidaIII,shortDescription:"Busqueda de Patrones utilizando herramientas de aprendizaje no supervisado",links:[{to:"https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C",label:"Ventas Local de Comida Rápida (Parte I)"},{to:"https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3",label:"Ventas Local de Comida Rápida (Parte II)"},{to:"https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih",label:"Ventas Local de Comida Rápida (Parte III)"},{to:"https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms",label:"Ventas Local de Comida Rápida (Parte IV)"}],logo:a.Python,name:"Ventas Local de Comida Rápida (Parte III)",period:{from:new Date(2022,1,5),to:new Date(2022,4,30)},skills:i("python","pandas","numpy","matplotlib","seaborn","sklearn"),type:"Machine Learning",screenshots:[]},{slug:"venta-comida-rapida-2",color:"steelblue",description:n.ComidaII,shortDescription:"Predicción de Ventas utilizando algoritmos de Machine Learning",links:[{to:"https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C",label:"Ventas Local de Comida Rápida (Parte I)"},{to:"https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3",label:"Ventas Local de Comida Rápida (Parte II)"},{to:"https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih",label:"Ventas Local de Comida Rápida (Parte III)"},{to:"https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms",label:"Ventas Local de Comida Rápida (Parte IV)"}],logo:a.Python,name:"Ventas Local de Comida Rápida (Parte II)",period:{from:new Date(2022,1,5),to:new Date(2022,4,30)},skills:i("python","pandas","numpy","matplotlib","seaborn","sklearn"),type:"Machine Learning",screenshots:[]},{slug:"venta-comida-rapida-1",color:"steelblue",description:n.ComidaI,shortDescription:"Análisis Exploratorio e Inferencia para determinar estacionalidad en las ventas",links:[{to:"https://colab.research.google.com/drive/18JFP09N0xWcBOtIUZYPHgAdcuKqQk4yo#scrollTo=D1J1UYzNW67C",label:"Ventas Local de Comida Rápida (Parte I)"},{to:"https://colab.research.google.com/drive/1hZTWo7pMp7SQ4lD3nCYMmZHfiXkb3TFB#scrollTo=A8NGJQD5uqn3",label:"Ventas Local de Comida Rápida (Parte II)"},{to:"https://colab.research.google.com/drive/1jHPntGoAqJ3b6CeffmmgDpeHlv-NS0TQ#scrollTo=dTFGMi0MIXih",label:"Ventas Local de Comida Rápida (Parte III)"},{to:"https://colab.research.google.com/drive/12WJaWLLVgmc-jrzu4ibFcjx3C_i0d_hy#scrollTo=G6XKIhQSV6Ms",label:"Ventas Local de Comida Rápida (Parte IV)"}],logo:a.Python,name:"Ventas Local de Comida Rápida (Parte I)",period:{from:new Date(2022,1,5),to:new Date(2022,4,30)},skills:i("python","pandas","numpy","matplotlib"),type:"Análisis de Datos",screenshots:[]},{slug:"prediccion-erupcion-volcanica",color:"royalblue",description:n.Volcanic,shortDescription:"Predicción de erupciones volcánicas con XGBoost",links:[{to:"https://www.kaggle.com/code/desareca/automl-volcanic-eruption-prediction",label:"Kaggle"}],logo:a.R,name:"INGV - Predicción de Erupción Volcánica",period:{from:new Date(2020,10,11),to:new Date(2021,0,5)},skills:i("r","tidyverse","ggplot2"),type:"Series de Tiempo",screenshots:[]},{slug:"kaggle-survey-2020",color:"royalblue",description:n.Kaggle2020,shortDescription:"Visualización de datos de la encuesta Kaggle 2020 sobre ciencia de datos y aprendizaje automático.",links:[{to:"https://www.kaggle.com/code/desareca/kaggle-survey-2020-analisys-by-region",label:"Kaggle"}],logo:a.R,name:"Encuesta Kaggle 2020: Análisis por región",period:{from:new Date(2020,10,19),to:new Date(2021,0,5)},skills:i("r","tidyverse","ggplot2","plotly"),type:"Visualización de Datos",screenshots:[]},{slug:"game-life-genetic-algorithm",color:"royalblue",description:n.GameLife,shortDescription:"Optimización mediante algoritmos genéticos para resolver el juego de la vida inverso.",links:[{to:"https://www.kaggle.com/code/desareca/game-of-life-genetic-algorithm-spanish",label:"Kaggle"}],logo:a.R,name:"Game of Life - Genetic Algorithm",period:{from:new Date(2020,9,3),to:new Date(2020,9,31)},skills:i("r","tidyverse","ggplot2"),type:"Optimización - Algoritmos Genéticos",screenshots:[]},{slug:"som-clasificacion-imagenes",color:"royalblue",description:n.SomClassify,shortDescription:"Clasificación de imágenes mediante mapas autorganizados de Kohonen.",links:[{to:"https://rpubs.com/desareca/SOM_clasificacion_imagenes",label:"RPubs"}],logo:a.R,name:"SOM, visualización y clasificación de imágenes",period:{from:new Date(2019,9,1),to:new Date(2019,9,31)},skills:i("r","tidyverse","ggplot2"),type:"Análisis de Datos",screenshots:[]},{slug:"fifa19-analisis-prediccion",color:"royalblue",description:n.Fifa19,shortDescription:"FIFA 19 (de la saga FIFA) es un videojuego de simulación de fútbol desarrollado por EA Vancouver como parte de la serie FIFA de Electronic Arts.",links:[{to:"https://www.kaggle.com/code/desareca/fifa-19-analisis-de-caracteristicas-y-prediccion",label:"Kaggle"},{to:"https://rpubs.com/desareca/Analisis-estadisticas-FIFA19",label:"RPubs"}],logo:a.R,name:"FIFA 19 - Analisis de caracteristicas y predicción",period:{from:new Date(2019,9,1),to:new Date(2019,9,31)},skills:i("r","tidyverse","ggplot2","h2o"),type:"Análisis de Datos",screenshots:[]},{slug:"prediccion-remuneracion-futbolistas",color:"steelblue",description:n.RemFut,shortDescription:"Predicción de remuneraciones de futbolistas a partir de estadísticas sobre sus habilidades de juego.",links:[{to:"https://github.com/desareca/Proyectos_tensorflow/tree/master/Remuneracion-Furtbolistas",label:"Repositorio"},{to:"https://rpubs.com/desareca/Prediccion-Sueldos-Futbolistas",label:"RPubs"}],logo:a.Python,name:"Predicción de remuneración de futbolistas ",period:{from:new Date(2019,9,1),to:new Date(2019,9,31)},skills:i("python","pandas","numpy","matplotlib","seaborn","sklearn","tensorflow"),type:"Regresión",screenshots:[]},{slug:"clasificacion-infarto-cardiaco",color:"steelblue",description:n.InfCardiaco,shortDescription:"Clasificación binaria para predecir en base a las variables si un paciente con un determinado número de medidas médicas es susceptible de tener enfermedad de corazón o no.",links:[{to:"https://github.com/desareca/Proyectos_tensorflow/tree/master/Probabilidad-Infarto-Cardiaco",label:"Repositorio"},{to:"https://rpubs.com/desareca/Clasificacion-infarto-cardiaco",label:"RPubs"}],logo:a.Python,name:"Clasificación de infarto cardíaco",period:{from:new Date(2019,9,1),to:new Date(2019,9,31)},skills:i("python","pandas","numpy","matplotlib","sklearn","tensorflow"),type:"Clasificación",screenshots:[]},{slug:"analisis-consumidores-mall",color:"steelblue",description:n.ConsumMall,shortDescription:"Regresión para predecir el puntaje de los clientes en un mall.",links:[{to:"https://github.com/desareca/Proyectos_tensorflow/tree/master/Analisis-Consmidores",label:"Repositorio"},{to:"https://rpubs.com/desareca/Analisis_Consumidores",label:"RPubs"}],logo:a.Python,name:"Análisis de Consumidores de un Mall",period:{from:new Date(2019,9,1),to:new Date(2019,9,31)},skills:i("python","pandas","numpy","matplotlib","sklearn","tensorflow"),type:"Análisis de Datos",screenshots:[]},{slug:"analisis-sentimientos-noticieros-chilenos",color:"royalblue",description:n.NoticiaChile,shortDescription:"Twitter es actualmente una dinámica fuente de contenidos que, dada su popularidad e impacto, se ha convertido en uno de los principales medios de difusión de los principales medios de comunicación tradicionales (radio y televisión).",links:[{to:"https://github.com/desareca/Analisis-Sentimientos-Noticieros",label:"Repositorio"},{to:"https://rpubs.com/desareca/Analisis_Sentimientos_Noticieros",label:"RPubs"}],logo:a.R,name:"Análisis de Sentimientos Noticieros Chilenos",period:{from:new Date(2019,5,1),to:new Date(2019,5,31)},skills:i("r"),type:"Análisis de Datos",screenshots:[]},{slug:"slick-portfolio-svelte",color:"#ff3e00",description:n.PortfolioSvelte,shortDescription:"A Vercel-like developer portfolio website template made with Typescript and SvelteKit.",links:[{to:"https://github.com/RiadhAdrani/slick-portfolio-svelte",label:"GitHub"}],logo:a.Svelte,name:"Slick Portfolio",period:{from:new Date},skills:i("svelte","ts","tailwind","sass"),type:"Website Template",screenshots:[{label:"screen 1",src:"https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"2",src:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},{label:"3",src:"https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"4",src:"https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"5",src:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"},{label:"6",src:"https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"}]}],_="Proyectos",z={title:_,items:j};export{z as P};
