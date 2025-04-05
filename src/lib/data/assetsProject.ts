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

const AssetsProject = {
	ComidaIII: comidaIII.replace(/\$\{AssetsImage\.ComidaSOM\}/g, AssetsImage.ComidaSOM),
	ComidaII: comidaII,
	ComidaI: comidaI.replace(/\$\{AssetsImage\.ComidaAnalisis\}/g, AssetsImage.ComidaAnalisis),
	Volcanic: volcanic,
	Kaggle2020: kaggle2020.replace(/\$\{AssetsImage\.K2020Req\}/g, AssetsImage.K2020Req),
	GameLife: gameLife,
	SomClassify: somClassify,
	Fifa19: fifa19,
	RemFut: remFut,
	InfCardiaco: infCardiaco,
	ConsumMall: consumMall,
	NoticiaChile: noticiaChile,
	PortfolioSvelte: portfolioSvelte,

};

export default AssetsProject;
