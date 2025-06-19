<h1>Predicción de Ventas con Deep Learning y Generación de Datos Sintéticos</h1>
<br><br>
¿Puede la inteligencia artificial revolucionar la predicción de ventas en un local de comida rápida? En este cuarto notebook, combino autoencoders variacionales y modelos de deep learning para llevar la predicción al siguiente nivel.

**Parte 1: Autoencoders Variacionales (VAE)**
- Los VAE permiten generar datos sintéticos que simulan el comportamiento real de las ventas, útiles para entrenar modelos robustos.
- Se explora el funcionamiento de los VAE y su aplicación en la generación de datos para escenarios con información limitada.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLVae}>
</div>

**Parte 2: Predicción de Ventas con Deep Learning**
- Entrenamiento de modelos con datos de 2020 y 2021, validando en 2022.
- Implementación de modelos: Regresión Lineal, Random Forest, redes densas y convolucionales, y CNN entrenada con datos sintéticos generados por VAE.
- Evaluación con métricas RMSE, MAE, MAPE y R2.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLReg}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLRF}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLDLRes}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLCNNRes}>
</div>
<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.ComidaDLCNNVaeRes}>
</div>

**Conclusión:**
El uso de deep learning y datos sintéticos permite obtener modelos más precisos y robustos, demostrando el potencial de la IA para transformar la gestión de ventas en negocios reales.
