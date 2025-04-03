import { base } from '$app/paths';

const urlImageStatic = (file: string) => `${base}/image/${file}`;

const AssetsImage = {
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
