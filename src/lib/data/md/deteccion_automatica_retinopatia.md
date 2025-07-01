¿Cómo puede la inteligencia artificial ayudar a prevenir la ceguera causada por diabetes? En este proyecto desarrollé un sistema completo de detección automática de retinopatía diabética utilizando técnicas avanzadas de computer vision y deep learning, con un enfoque iterativo que optimiza tanto la precisión diagnóstica como la eficiencia computacional.

## 🎯 Objetivo y Relevancia

La retinopatía diabética es la principal causa de ceguera en adultos en edad laboral. Este proyecto desarrolla un pipeline automatizado para detección temprana usando el dataset clínico RFMiD (3,200 imágenes reales etiquetadas por oftalmólogos expertos), con énfasis en maximizar el Recall para minimizar falsos negativos críticos en diagnóstico médico.
<br><br>

**Visualización 1: Flujo de Proceso**
- Flujo de Proceso basado en 4 etapas: Adquisición, Preprocesamiento, Procesamiento y Clasificación.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.RetinopathyFlujo}>
</div>
<br><br>

## 📊 Resultados Principales

- **F1-Score**: 0.93 (configuración óptima)
- **Recall**: 0.92 (crítico para detección médica)
- **Optimización temporal**: 15% reducción en tiempo de entrenamiento
- **Pipeline escalable**: Validado con reproducibilidad (10 iteraciones por configuración)
<br>

## 🔬 Evolución del Proyecto en 3 Fases

### **Fase I: Exploración y Preprocesamiento**
Exploración de 9 filtros de preprocesamiento especializados para imágenes de retina.
<br><br>

**Visualización 2: Comparación de Filtros de Preprocesamiento**
- Análisis visual del impacto de diferentes filtros (CLAHE, Unsharp Mask, Sobel, etc.) en la detección de lesiones retinianas.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.RetinopathyFiltersComparison}>
</div>
<br>

### **Fase II: Clasificación (Baseline)**
Establecimiento del pipeline base y evaluación sistemática de 9 filtros de preprocesamiento especializados para imágenes de retina.
<br><br>

**Visualización 3: Matriz de Performance por Filtro**
- Heatmap comparativo de F1-Score y Recall para cada filtro evaluado.
- Identificación de Gaussian Blur y Sobel como filtros óptimos.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="100%" height="auto" src=${AssetsImage.RetinopathyPerformanceMatrix}>
</div>
<br><br>

**Visualización 4: Optimización de Tiempos de Ejecución**
- Comparación de tiempos del pipeline para cada filtro.
- Análisis de escalabilidad con diferentes volúmenes de datos.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.RetinopathyTimeOptimization}>
</div>
<br><br>

**Visualización 5: Curvas de Entrenamiento Estabilizadas**
- Evolución de métricas (F1-Score, Loss, Accuracy).

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="85%" height="auto" src=${AssetsImage.RetinopathyTrainingCurves}>
</div>
<br><br>

### **Fase III: Optimización y Técnicas Avanzadas**
Reestructuración técnica completa migrando a TensorFlow nativo con optimizaciones GPU y callbacks avanzados.

Implementación de técnicas state-of-the-art: Data Augmentation, Regularización, Batch Normalization y Fine-Tuning de MobileNetV2.
<br><br>

**Visualización 6: Comparación Recall de distintas Técnicas**
- Análisis comparativo del impacto de cada técnica en las métricas finales.
- Identificación del Fine-Tuning como estrategia óptima para maximizar Recall.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="90%" height="auto" src=${AssetsImage.RetinopathyAdvancedTechniques}>
</div>
<br><br>

**Visualización 7: Comparación Tiempo de distintas Técnicas**
- Análisis comparativo del impacto de en tiempo de cada filtro y técnica.

<div style="display: flex; justify-content: center; text-align: center;">
    <img width="85%" height="auto" src=${AssetsImage.RetinopathyEvolutionTimeline}>
</div>
<br>

## 🛠️ Puntos Destacados

- **Preprocesamiento Especializado**: Pipeline optimizado para realce de lesiones diabéticas
- **Transfer Learning Avanzado**: MobileNetV2 con Fine-Tuning selectivo desde capa `block_7_expand`
- **Pipeline GPU-Optimizado**: TensorFlow Data API con cache, prefetch y paralelización automática
- **Evaluación Robusta**: Metodología con 10 iteraciones y análisis estadístico de reproducibilidad
- **Enfoque Médico**: Priorización de Recall sobre Accuracy para minimizar falsos negativos críticos
<br>

## 📈 Impacto y Aplicación

Este sistema puede ser implementado como herramienta de screening en centros de salud primaria, permitiendo:
- **Detección temprana** de retinopatía diabética antes de síntomas visibles
- **Reducción de carga** para oftalmólogos especializados  
- **Mejor acceso** a diagnóstico en zonas rurales o con recursos limitados
- **Pipeline escalable** para procesamiento masivo de imágenes médicas