import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon, GiftIcon, HomeIcon, ArrowRightIcon, SparklesIcon } from 'lucide-react';
// import hands from '../assets/hands.png';
// import sea from '../assets/sea.png';
import top from '../assets/top.png'
import qrPayment from '../assets/qr_payment.jpg';
import bouquet from '../assets/bouquet.png';

const HomePage: React.FC = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-cover bg-center flex items-center justify-center" style={{
      backgroundImage: `url("${top}")`
    }}>
        <div className="hero-overlay"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
          <div className="inline-block animate-pulse-soft">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <HeartIcon className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
            Кирилл & Дарья
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">25 июня, 2025</p>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-pink-400 mx-auto rounded-full mb-8"></div>
          <Link to="/catalog" className="btn btn-primary inline-flex">
            <GiftIcon className="h-5 w-5 mr-2" />
            Выбрать подарок
          </Link>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="section-title">Наш фонд «Дом мечты»</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full mx-auto mb-8"></div>
          <div className="gradient-border mb-12">
            <div className="gradient-border-content">
              <p className="text-neutral-700 text-center mb-8 leading-relaxed">
                Добро пожаловать на наш сайт свадебных подарков! Если вы здесь —
                значит, как минимум не забыли, что мы женимся. А это уже
                приятно. Ваше присутствие — самый ценный подарок. Но если душа
                требует чего-то более ощутимого — мы копим на наш первый
                совместный дом. И ваш вклад в эту мечту сделает наш путь к
                гнездышку немного короче и гораздо уютнее.
              </p>
              <p className="text-neutral-700 text-center mb-8 leading-relaxed">
                Мы собрали виртуальный каталог вещей, из которых однажды
                сложится наш быт. «Покупая» что-то из списка, вы не просто
                дарите нам вещь — вы вкладываетесь в стены, где будут звучать
                смех, запах борща и споры про цвет штор.
              </p>
              <div className="flex justify-center">
                <Link to="/catalog" className="btn btn-primary">
                  <GiftIcon className="h-5 w-5 mr-2" />
                  Перейти в каталог
                </Link>
              </div>
            </div>
          </div>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="card p-8 text-center hover:translate-y-[-5px] transition-all">
              <div className="bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-5">
                <HeartIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-neutral-800">
                Значимый вклад
              </h3>
              <p className="text-neutral-600">
                Каждый подарок — это частичка нашего будущего дома
              </p>
            </div>
            <div className="card p-8 text-center hover:translate-y-[-5px] transition-all">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-5">
                <GiftIcon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-neutral-800">
                Выбирайте, что по душе
              </h3>
              <p className="text-neutral-600">
                В нашем списке — и цветы, и вещи для дома на любой вкус и бюджет
              </p>
            </div>
            <div className="card p-8 text-center hover:translate-y-[-5px] transition-all">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-5">
                <HomeIcon className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-neutral-800">
                Строим будущее вместе
              </h3>
              <p className="text-neutral-600">
                Помогите нам создать дом, наполненный любовью и теплыми
                воспоминаниями
              </p>
            </div>
          </div>
          {/* Bouquet Section */}
          <div className="mb-20">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img src={bouquet} alt="Букет цветов" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-10 flex items-center">
                  <div>
                    <h2 className="text-2xl font-light mb-4 text-neutral-800">
                      Когда без букета ну совсем никак
                    </h2>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      Если ваша душа поет «без роз не приду!» — мы вас понимаем.
                      Букет можно выбрать в нашем каталоге, легко оплатить
                      онлайн, а вручение доверить проверенной доставке. Мы
                      обещаем: невеста обнимет его почти с таким же восторгом,
                      как жениха.
                    </p>
                    <Link to="/catalog" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                      Выбрать букет
                      <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Walls First Section */}
          <div className="mb-20 bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 md:p-10">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white rounded-full p-3 shadow-sm">
                <SparklesIcon className="h-8 w-8 text-indigo-500" />
              </div>
            </div>
            <h2 className="text-2xl text-center font-light mb-4 text-neutral-800">
              Сначала стены, потом вазы
            </h2>
            <p className="text-neutral-700 text-center mb-0 leading-relaxed max-w-2xl mx-auto">
              Мы решили сначала обзавестись крышей над головой, а уже потом —
              сервизом, диваном и той самой сушилкой, о которой так мечтает
              невеста. Поэтому наш вишлист — это пока не покупки, а план на
              светлое будущее. Все, что вы выберете, попадёт в нашу копилку
              уюта: на ремонт, технику и бытовое счастье. А потом обязательно
              пригласим в гости — пить чай из подаренного сервиза и обсуждать,
              как здорово вы попали в точку.
            </p>
          </div>
          {/* QR Code Section */}
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-10 text-center">
                <h2 className="text-2xl font-light mb-4 text-neutral-800">
                  Когда не подарок, а сплошной кэшбек любви
                </h2>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  Если бегать по магазинам не ваш стиль — есть способ проще!
                  Переведите любую удобную сумму, а мы превратим ее в плитку,
                  паркет, тостер или, быть может, в шикарный диван для будущих
                  гостей (вдруг вы!). Ну, вы поняли. Сплошная польза!
                </p>
                <div className="gradient-border inline-block mb-6">
                  <div className="p-1 bg-white rounded-xl">
                    <img src={qrPayment} alt="QR-код для перевода" className="w-48 h-48" />
                  </div>
                </div>
                <p className="text-neutral-500 text-sm">
                  Отсканируйте QR-код для перевода любой суммы
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default HomePage;