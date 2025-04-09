import AssetsImage  from './assetsImage';
import portfolioSvelte from './md/slick_portfolio_svelte.md?raw';
import noticiaChile from './md/analisis_sentimientos_noticieros_chilenos.md?raw';
import consumMall from './md/analisis_consumidores_mall.md?raw';
import infCardiaco from './md/clasificacion_infarto_cardiaco.md?raw';
import remFut from './md/prediccion_remuneracion_futbolistas.md?raw';
import fifa19 from './md/fifa19_analisis_prediccion.md?raw';
import somClassify from './md/som_clasificacion_imagenes.md?raw';
import gameLife from './md/game_life_genetic_algorithm.md?raw';
import kaggle2020 from './md/kaggle_survey_2020.md?raw';
import volcanic from './md/prediccion_erupcion_volcanica.md?raw';
import comidaI from './md/comida_rapida_1.md?raw';
import comidaII from './md/comida_rapida_2.md?raw';
import comidaIII from './md/comida_rapida_3.md?raw';
import comidaIV from './md/comida_rapida_4.md?raw';

// Function to replace image path variables in the markdown content
function replaceImagePathVars(obj: string, imgs: string[], assetsImage: any = AssetsImage): string {
	imgs.forEach(img => {
	  const regex = new RegExp(`\\$\\{AssetsImage\\.${img}\\}`, 'g');
	  obj = obj.replace(regex, assetsImage[img]);
	});
	return obj;
  }

const AssetsProject = {
	ComidaIV: replaceImagePathVars(comidaIV, ['ComidaDLVae', 'ComidaDLReg', 'ComidaDLRF', 'ComidaDLDLArq', 'ComidaDLDLRes', 'ComidaDLCNNArq', 'ComidaDLCNNRes', 'ComidaDLCNNVaeRes', 'ComidaDLCNNPred']),
	ComidaIII: replaceImagePathVars(comidaIII, ['ComidaSOM']),
	ComidaII: replaceImagePathVars(comidaII, ['ComidaDist', 'ComidaRegL', 'ComidaKNN', 'ComidaSVM', 'ComidaRF', 'ComidaGB']),
	ComidaI: replaceImagePathVars(comidaI, ['ComidaAnalisis']),
	Volcanic: replaceImagePathVars(volcanic, ['INGVPred']),
	Kaggle2020: replaceImagePathVars(kaggle2020, ['K2020Req', 'K2020RankC', 'K2020ReqAge', 'K2020ComR', 'K2020ComA']),
	GameLife: replaceImagePathVars(gameLife, ['GLifeStartStop', 'GLifePred']),
	SomClassify: replaceImagePathVars(somClassify, 
		['SomGral', 'SomMNIST', 'SomDistNum', 'SomMatrixNum', 'SomFace', 'SomDistFace', 'SomMatrixFace']),
	Fifa19: replaceImagePathVars(fifa19, ['FIFA19Age', 'FIFA19Club', 'FIFA19AgeGan', 'FIFA19Money', 'FIFA19Pred']),
	RemFut: remFut,
	InfCardiaco: infCardiaco,
	ConsumMall: consumMall,
	NoticiaChile: noticiaChile,
	PortfolioSvelte: portfolioSvelte,
};

export default AssetsProject;
