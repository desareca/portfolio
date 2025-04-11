import { base } from '$app/paths';

const urlImageStatic = (file: string) => `${base}/image/${file}`;

const AssetsImage = {
	VizDemreTer: urlImageStatic('ternario.png'),
	VizDemreScatter: urlImageStatic('scatter.png'),
	VizDemreTerSvelte: urlImageStatic('ternario-svelte.png'),

	ComidaDLVae: urlImageStatic('comida_rapida_IV_vae.png'),
	ComidaDLReg: urlImageStatic('comida_rapida_IV_reg.png'),
	ComidaDLRF: urlImageStatic('comida_rapida_IV_rf.png'),
	ComidaDLDLArq: urlImageStatic('comida_rapida_IV_dl_arq.png'),
	ComidaDLDLRes: urlImageStatic('comida_rapida_IV_dl_res.png'),
	ComidaDLCNNArq: urlImageStatic('comida_rapida_IV_cnn_arq.png'),
	ComidaDLCNNRes: urlImageStatic('comida_rapida_IV_cnn_res.png'),
	ComidaDLCNNVaeRes: urlImageStatic('comida_rapida_IV_cnn_vae_res.png'),
	ComidaDLCNNPred: urlImageStatic('comida_rapida_IV_cnn_pred.png'),

	ComidaPCA: urlImageStatic('comida_rapida_III_PCA.png'),
	ComidaISOMAP: urlImageStatic('comida_rapida_III_ISOMAP.png'),
	ComidaTSNE: urlImageStatic('comida_rapida_III_tSNE.png'),
	ComidaSOMcom: urlImageStatic('comida_rapida_III_SOM_comida.png'),

	ComidaDist: urlImageStatic('comida_rapida_II_dist.png'),
	ComidaRegL: urlImageStatic('comida_rapida_II_reglineal.png'),
	ComidaKNN: urlImageStatic('comida_rapida_II_knn.png'),
	ComidaSVM: urlImageStatic('comida_rapida_II_svm.png'),
	ComidaRF: urlImageStatic('comida_rapida_II_rf.png'),
	ComidaGB: urlImageStatic('comida_rapida_II_gb.png'),

	ComidaAnalisis: urlImageStatic('comida_rapida_I_analisis.png'),

	INGVPred: urlImageStatic('predicion_real.png'),

	K2020Req: urlImageStatic('respuesta_pais.png'),
	K2020RankC: urlImageStatic('ranking_paises_respuestas.png'),
	K2020ReqAge: urlImageStatic('respuestas_edad_region.png'),
	K2020ComR: urlImageStatic('sueldo_region.png'),
	K2020ComA: urlImageStatic('sueldo_edad.png'),
	
	GLifeStartStop: urlImageStatic('comp_start_stop.png'),
	GLifePred: urlImageStatic('comp_prediccion.png'),

	SomGral: urlImageStatic('som.png'),
	SomMNIST: urlImageStatic('mnist.png'),
	SomDistNum: urlImageStatic('dist_clase_x_neurona_numeros.png'),
	SomMatrixNum: urlImageStatic('matriz_confusion_class_numeros.png'),
	SomFace: urlImageStatic('face_expression.png'),
	SomDistFace: urlImageStatic('dist_clase_x_neurona_rostros.png'),
	SomMatrixFace: urlImageStatic('matriz_confusion_class_rostros.png'),

	FIFA19Age: urlImageStatic('Age-1.png'),
	FIFA19Club: urlImageStatic('Club-1.png'),
	FIFA19AgeGan: urlImageStatic('EdadHabGan-1.png'),
	FIFA19Money: urlImageStatic('MoneyIV-2.png'),
	FIFA19Pred: urlImageStatic('PredGraph-1.png'),
	
};

export default AssetsImage;
