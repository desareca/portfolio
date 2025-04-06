import { base } from '$app/paths';

const urlImageStatic = (file: string) => `${base}/image/${file}`;

const AssetsImage = {
	ComidaDLVae: urlImageStatic('comida_rapida_IV_vae.png'),
	ComidaDLReg: urlImageStatic('comida_rapida_IV_reg.png'),
	ComidaDLRF: urlImageStatic('comida_rapida_IV_rf.png'),
	ComidaDLDLArq: urlImageStatic('comida_rapida_IV_dl_arq.png'),
	ComidaDLDLRes: urlImageStatic('comida_rapida_IV_dl_res.png'),
	ComidaDLCNNArq: urlImageStatic('comida_rapida_IV_cnn_arq.png'),
	ComidaDLCNNRes: urlImageStatic('comida_rapida_IV_cnn_res.png'),
	ComidaDLCNNVaeRes: urlImageStatic('comida_rapida_IV_cnn_vae_res.png'),
	ComidaDLCNNPred: urlImageStatic('comida_rapida_IV_cnn_pred.png'),

	ComidaSOM: urlImageStatic('comida_rapida_III_som.png'),
	ComidaPCAdia: urlImageStatic('comida_rapida_III_PCA_dia.png'),
	ComidaPCAprod: urlImageStatic('comida_rapida_III_PCA_producto.png'),
	ComidaPCAventa: urlImageStatic('comida_rapida_III_PCA_venta.png'),
	ComidaISOMAPdia: urlImageStatic('comida_rapida_III_ISOMAP_dia.png'),
	ComidaISOMAPprod: urlImageStatic('comida_rapida_III_ISOMAP_producto.png'),
	ComidaISOMAPventa: urlImageStatic('comida_rapida_III_ISOMAP_venta.png'),
	ComidaTSNEdia: urlImageStatic('comida_rapida_III_tSNE_dia.png'),
	ComidaTSNEprod: urlImageStatic('comida_rapida_III_tSNE_producto.png'),
	ComidaTSNEventa: urlImageStatic('comida_rapida_III_tSNE_venta.png'),
	ComidaSOMdia: urlImageStatic('comida_rapida_III_SOM_dia.png'),
	ComidaSOMprod: urlImageStatic('comida_rapida_III_SOM_producto.png'),
	ComidaSOMventa: urlImageStatic('comida_rapida_III_SOM_venta.png'),

	ComidaDist: urlImageStatic('comida_rapida_II_dist.png'),
	ComidaRegL: urlImageStatic('comida_rapida_II_reglineal.png'),
	ComidaKNN: urlImageStatic('comida_rapida_II_knn.png'),
	ComidaSVM: urlImageStatic('comida_rapida_II_svm.png'),
	ComidaRF: urlImageStatic('comida_rapida_II_rf.png'),
	ComidaGB: urlImageStatic('comida_rapida_II_gb.png'),

	ComidaAnalisis: urlImageStatic('comida_rapida_I_analisis.png'),
	ComidaProd: urlImageStatic('comida_rapida_I_productos.png'),
	ComidaMonteCarlo: urlImageStatic('comida_rapida_I_montecarlo.png'),

	INGVHiper: urlImageStatic('resultados_hiperparametros.png'),
	INGVPred: urlImageStatic('predicion_real.png'),
	INGVError: urlImageStatic('error_prediccion.png'),

	K2020Req: urlImageStatic('respuesta_pais.png'),
	K2020RankC: urlImageStatic('ranking_paises_respuestas.png'),
	K2020ReqAge: urlImageStatic('respuestas_edad_region.png'),
	K2020ComR: urlImageStatic('sueldo_region.png'),
	K2020ComA: urlImageStatic('sueldo_edad.png'),

	GLifeExample: urlImageStatic('patron_juego_vida.gif'),
	GLifeStartStop: urlImageStatic('comp_start_stop.png'),
	GLifePred: urlImageStatic('comp_prediccion.png'),

	SomGral: urlImageStatic('som.png'),
	SomDistNum: urlImageStatic('dist_clase_x_neurona_numeros.png'),
	SomMatrixNum: urlImageStatic('matriz_confusion_class_numeros.png'),
	SomDistFace: urlImageStatic('dist_clase_x_neurona_rostros.png'),
	SomMatrixFace: urlImageStatic('matriz_confusion_class_rostros.png'),

	FIFA19Age: urlImageStatic('Age-1.png'),
	FIFA19Club: urlImageStatic('Club-1.png'),
	FIFA19AgeGan: urlImageStatic('EdadHabGan-1.png'),
	FIFA19Money: urlImageStatic('MoneyIV-2.png'),
	FIFA19Pred: urlImageStatic('PredGraph-1.png'),
	
};

export default AssetsImage;
