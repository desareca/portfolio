import { base } from '$app/paths';

const urlImageStatic = (file: string) => `${base}/image/${file}`;

const AssetsImage = {
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
