// flowers
import chamomiles from '../assets/chamomiles.png';
import lilies from '../assets/lilies.png';
import orchids from '../assets/orchids.png';
import peonies from '../assets/peonies.png';
import ranunculus from '../assets/ranunculus.png';
import roses from '../assets/roses.png';

// renovation
import wallpaper from '../assets/wallpaper.png';
import toolSet from '../assets/tool-set.png';
import paintForWalls from '../assets/paint-for-walls.png';
import laminateFlooring from '../assets/laminate-flooring.png';
import door from '../assets/door.png';
import bathroomTiles from '../assets/bathroom-tiles.png';

// living room
import tv from '../assets/tv.png';
import sofa from '../assets/sofa.png';
import rug from '../assets/rug.png';
import playstation from '../assets/playstation.png';
import ottomans from '../assets/ottomans.png';
import floorLamp from '../assets/floor-lamp.png';
import curtains from '../assets/curtains.png';
import computer from '../assets/computer.png';
import acousticSystems from '../assets/acoustic-systems.png';

// kitchen
import teaSet from '../assets/tea-set.png';
import setOfPlates from '../assets/set-of-plates.png';
import potsAndPans from '../assets/pots-and-pans.png';
import kettle from '../assets/kettle.png';
import dishwasher from '../assets/dishwasher.png';
import cutlerySet from '../assets/cutlery-set.png';

// bedroom
import wardrobe from '../assets/wardrobe.png';
import mirror from '../assets/mirror.png';
import doubleBed from '../assets/double-bed.png';
import clothesHangers from '../assets/clothes-hangers.png';
import blanketAndPillows from '../assets/blanket-and-pillows.png';
import bedLinen from '../assets/bed-linen.png';

// appliances
import washingMachine from '../assets/washing-machine.png';
import oven from '../assets/oven.png';
import fridge from '../assets/fridge.png';
import dryingMachine from '../assets/drying-machine.png';
import coffeemaker from '../assets/coffeemaker.png';
import airConditioner from '../assets/air-conditioner.png';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
};
export const products: Product[] = [
// Гостиная
{
  id: 'living-tv',
  name: 'Телевизор',
  category: 'гостиная',
  price: 30000,
  description: 'Для фильмов, сериалов и «еще одной серии перед сном»',
  image: tv
}, {
  id: 'living-sofa',
  name: 'Диван',
  category: 'гостиная',
  price: 15000,
  description: 'Для киновечеров, попкорна и «давай обнимемся под пледом»',
  image: sofa
}, {
  id: 'living-lamp',
  name: 'Торшер',
  category: 'гостиная',
  price: 6000,
  description: 'Мягкий свет, уют и душевные разговоры',
  image: floorLamp
}, {
  id: 'living-carpet',
  name: 'Ковер',
  category: 'гостиная',
  price: 10000,
  description: 'Ходить босиком и играть в «горячую лаву»',
  image: rug
}, {
  id: 'living-curtains',
  name: 'Шторы',
  category: 'гостиная',
  price: 15000,
  description: 'Спасают от солнца и посторонних глаз',
  image: curtains
}, {
  id: 'living-audio',
  name: 'Акустическая система',
  category: 'гостиная',
  price: 20000,
  description: 'Включаем громко, танцуем неловко, поем от души',
  image: acousticSystems
}, {
  id: 'living-console',
  name: 'Игровая приставка',
  category: 'гостиная',
  price: 50000,
  description: 'Для совместных приключений, где можно умереть, но перезапуститься',
  image: playstation
}, {
  id: 'living-computer',
  name: 'Компьютер',
  category: 'гостиная',
  price: 100000,
  description: 'Для рабочих побед и вечернего «посмотри, что я нашел в интернете»',
  image: computer
}, {
  id: 'living-poufs',
  name: 'Пуфики',
  category: 'гостиная',
  price: 3000,
  description: 'Мебель, которая говорит: «да расслабься уже!»',
  image: ottomans
},
// Спальня
{
  id: 'bedroom-bed',
  name: 'Кровать',
  category: 'спальня',
  price: 15000,
  description: 'Тут будут сны, объятия и, возможно, еще один член семьи через пару лет',
  image: doubleBed
}, {
  id: 'bedroom-bedding',
  name: 'Постельное белье',
  category: 'спальня',
  price: 7000,
  description: 'Для сладких снов, утренних объятий и «давай ещё 5 минуточек»',
  image: bedLinen
}, {
  id: 'bedroom-blanket',
  name: 'Одеяло и подушки',
  category: 'спальня',
  price: 7000,
  description: 'Зарыться, обняться и отложить все важные дела до завтра',
  image: blanketAndPillows
}, {
  id: 'bedroom-wardrobe',
  name: 'Шкаф',
  category: 'спальня',
  price: 35000,
  description: 'Для одежды и фраз «мне вообще нечего надеть»',
  image: wardrobe
}, {
  id: 'bedroom-hangers',
  name: 'Вешалки',
  category: 'спальня',
  price: 3000,
  description: 'Чтобы одежда не жила на стуле (мы хотя бы попытаемся)',
  image: clothesHangers
}, {
  id: 'bedroom-mirror',
  name: 'Зеркало',
  category: 'спальня',
  price: 5000,
  description: 'Для любования собой и друг другом',
  image: mirror
},
// Кухня
{
  id: 'kitchen-dishwasher',
  name: 'Посудомоечная машина',
  category: 'кухня',
  price: 30000,
  description: 'Чтобы не спорить «чья сегодня очередь»',
  image: dishwasher
}, {
  id: 'kitchen-cookware',
  name: 'Набор кастрюль и сковородок',
  category: 'кухня',
  price: 8000,
  description: 'Борщ, блины и семейные традиции',
  image: potsAndPans
}, {
  id: 'kitchen-tea-set',
  name: 'Чайный сервиз',
  category: 'кухня',
  price: 10000,
  description: 'Когда вы в гостях, чай наливаем из него',
  image: teaSet
}, {
  id: 'kitchen-cutlery',
  name: 'Набор столовых приборов',
  category: 'кухня',
  price: 3000,
  description: 'Вилка, ложка, любовь',
  image: cutlerySet
}, {
  id: 'kitchen-kettle',
  name: 'Электрический чайник',
  category: 'кухня',
  price: 4000,
  description: 'Греет воду, пока мы греем друг друга',
  image: kettle
}, {
  id: 'kitchen-plates',
  name: 'Набор тарелок',
  category: 'кухня',
  price: 5000,
  description: 'Пусть даже доширак выглядит как из Pinterest',
  image: setOfPlates
},
// Бытовая техника
{
  id: 'appliance-fridge',
  name: 'Холодильник',
  category: 'бытовая техника',
  price: 50000,
  description: 'Где будут жить полуночные перекусы',
  image: fridge
}, {
  id: 'appliance-washer',
  name: 'Стиральная машина',
  category: 'бытовая техника',
  price: 20000,
  description: 'Чтобы все стиралось, кроме хороших воспоминаний',
  image: washingMachine
}, {
  id: 'appliance-dryer',
  name: 'Сушильная машина',
  category: 'бытовая техника',
  price: 30000,
  description: 'Для сушки и понтов',
  image: dryingMachine
}, {
  id: 'appliance-oven',
  name: 'Духовка',
  category: 'бытовая техника',
  price: 20000,
  description: 'Пироги, запеканки и аромат уюта',
  image: oven
}, {
  id: 'appliance-ac',
  name: 'Кондиционер',
  category: 'бытовая техника',
  price: 25000,
  description: 'Охлаждает воздух, но не чувства',
  image: airConditioner
}, {
  id: 'appliance-coffee',
  name: 'Кофемашина',
  category: 'бытовая техника',
  price: 10000,
  description: 'Потому что без кофе никто не мил',
  image: coffeemaker
},
// Ремонт
{
  id: 'renovation-laminate',
  name: 'Ламинат',
  category: 'ремонт',
  price: 50000,
  description: 'Чтобы топать по жизни красиво и без скрипа',
  image: laminateFlooring
}, {
  id: 'renovation-tiles',
  name: 'Плитка',
  category: 'ремонт',
  price: 30000,
  description: 'Выдержит воду, пену и даже танцы с шампунем',
  image: bathroomTiles
}, {
  id: 'renovation-wallpaper',
  name: 'Обои',
  category: 'ремонт',
  price: 5000,
  description: 'Чтобы стены не были такими же голыми, как счет после ремонта',
  image: wallpaper
}, {
  id: 'renovation-paint',
  name: 'Краска для стен, кисти и валики',
  category: 'ремонт',
  price: 4000,
  description: 'Закрасим старое, начнем жизнь с чистого листа',
  image: paintForWalls
}, {
  id: 'renovation-doors',
  name: 'Двери',
  category: 'ремонт',
  price: 10000,
  description: 'Пусть закрываются с любовью, а хлопаются - только от сквозняка',
  image: door
}, {
  id: 'renovation-tools',
  name: 'Набор инструментов',
  category: 'ремонт',
  price: 5000,
  description: 'Чинить, собирать, крутить и чувствовать, что «мы все можем»',
  image: toolSet
},
// Цветы
{
  id: 'flowers-ranunculus',
  name: 'Ранункулюсы',
  category: 'цветы',
  price: 12000,
  description: 'Яркий и нежный букет, символизирующий искренность и преданность',
  image: ranunculus
}, {
  id: 'flowers-roses',
  name: 'Розы',
  category: 'цветы',
  price: 6000,
  description: 'Классический букет, олицетворяющий любовь, страсть и вечную привязанность',
  image: roses
}, {
  id: 'flowers-orchids',
  name: 'Орхидеи',
  category: 'цветы',
  price: 8000,
  description: 'Элегантный букет, подчеркивающий утонченность и уникальность невесты',
  image: orchids
}, {
  id: 'flowers-lilies',
  name: 'Лилии',
  category: 'цветы',
  price: 7000,
  description: 'Чистота и совершенство в каждом цветке, символ гармонии и благородства',
  image: lilies
}, {
  id: 'flowers-daisies',
  name: 'Ромашки',
  category: 'цветы',
  price: 5000,
  description: 'Искренняя любовь и простота, воплощенные в белоснежных ромашках',
  image: chamomiles
}, {
  id: 'flowers-peonies',
  name: 'Пионы',
  category: 'цветы',
  price: 7000,
  description: 'Цветы счастья и удачи, приносящие долгие годы гармонии и любви',
  image: peonies
}];
export const categories = [{
  id: 'all',
  name: 'Все'
}, {
  id: 'гостиная',
  name: 'Гостиная'
}, {
  id: 'спальня',
  name: 'Спальня'
}, {
  id: 'кухня',
  name: 'Кухня'
}, {
  id: 'бытовая техника',
  name: 'Бытовая техника'
}, {
  id: 'ремонт',
  name: 'Ремонт'
}, {
  id: 'цветы',
  name: 'Цветы'
}];