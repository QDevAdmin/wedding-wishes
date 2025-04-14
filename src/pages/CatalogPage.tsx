import React, { useState } from 'react';
import { FilterIcon, UploadIcon, SparklesIcon, GiftIcon, SearchIcon } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/Catalog/ProductCard';
import { useCart } from '../context/CartContext';
import { v4 as uuidv4 } from 'uuid';

const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 ${type === 'success' ? 'bg-green-500' : 'bg-rose-500'} text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down`;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
};
const CatalogPage: React.FC = () => {
  const {
    addToCart
  } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [customGift, setCustomGift] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: ''
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    if (name === 'price') {
      const numValue = Number(value);
      if (numValue < 1000 && value !== '') {
        return;
      }
    }
    setCustomGift(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setCustomGift(prev => ({
          ...prev,
          imageUrl: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleGenerateAI = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setCustomGift({
      name: 'Особенный подарок',
      description: 'Сгенерированный ИИ подарок, который идеально подходит для новой семьи',
      price: '10000',
      imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop'
    });
    setImagePreview('https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop');
    setIsGenerating(false);
  };

  const filteredProducts = products.filter(product => activeCategory === 'all' || product.category === activeCategory).filter(product => searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="container mx-auto py-16 px-6">
      <h1 className="section-title">Каталог подарков</h1>
      <p className="section-subtitle mb-4">
        Выберите подарок для вклада в наш новый дом
      </p>
      <div className="relative max-w-md mx-auto mb-8">
        <input type="text" placeholder="Поиск подарков..." className="input-field w-full" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      </div>
      <div className="mb-10">
        <div className="flex items-center justify-center mb-3">
          <FilterIcon className="h-4 w-4 mr-2 text-neutral-500" />
          <span className="text-sm text-neutral-500">Категории:</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`tag ${activeCategory === category.id ? 'tag-active' : 'tag-inactive'}`}>
              {category.name}
            </button>)}
        </div>
      </div>
      {filteredProducts.length === 0 ? <div className="text-center py-16">
          <div className="bg-neutral-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <SearchIcon className="h-8 w-8 text-neutral-400" />
          </div>
          <h3 className="text-lg font-medium text-neutral-800 mb-2">
            Ничего не найдено
          </h3>
          <p className="text-neutral-500">
            Попробуйте изменить параметры поиска или выбрать другую категорию
          </p>
        </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
        </div>}
      <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl overflow-hidden mb-16">
        <div className="md:grid md:grid-cols-5">
          <div className="col-span-2 bg-cover bg-center hidden md:block" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop')"
        }}></div>
          <div className="col-span-3 p-8 md:p-10">
            <h2 className="text-2xl font-light mb-6 text-neutral-800">
              Создайте свой подарок
            </h2>
            <p className="text-neutral-600 mb-8">
              Если ничего из перечисленного не подошло — вы можете создать свой
              собственный подарок сами или воспользоваться помощью ИИ и также
              добавить его в корзину.
            </p>
            <div className="mb-6">
              <div className="flex justify-center mb-4">
                {imagePreview ? <div className="relative w-48 h-48 rounded-xl overflow-hidden shadow-md">
                    <img src={imagePreview} alt="Предпросмотр" className="w-full h-full object-cover" />
                    <button onClick={() => {
                  setImagePreview(null);
                  setCustomGift(prev => ({
                    ...prev,
                    imageUrl: ''
                  }));
                }} className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full p-1.5 text-neutral-600 hover:text-rose-500 transition-colors" aria-label="Удалить изображение">
                      &times;
                    </button>
                  </div> : <label className="flex flex-col items-center justify-center w-48 h-48 border-2 border-dashed border-indigo-300 rounded-xl cursor-pointer hover:bg-indigo-50/50 transition-colors">
                    <UploadIcon className="w-10 h-10 text-indigo-400 mb-2" />
                    <span className="text-sm text-indigo-600 font-medium">
                      Загрузить изображение
                    </span>
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </label>}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="custom-name" className="input-label">
                Название*
              </label>
              <input type="text" id="custom-name" name="name" value={customGift.name} onChange={handleInputChange} placeholder="Например: Кофеварка мечты" className="input-field" />
            </div>
            <div className="mb-4">
              <label htmlFor="custom-description" className="input-label">
                Описание
              </label>
              <textarea id="custom-description" name="description" value={customGift.description} onChange={handleInputChange} placeholder="Расскажите, почему этот подарок особенный" className="input-field h-24 resize-none"></textarea>
            </div>
            <div className="mb-6">
              <label htmlFor="custom-price" className="input-label">
                Стоимость*
              </label>
              <input type="text" inputMode="numeric" id="custom-price" name="price" value={customGift.price} onChange={e => {
              const value = e.target.value.replace(/[^0-9]/g, '');
              setCustomGift(prev => ({
                ...prev,
                price: value
              }));
            }} placeholder="Например: 5000" className="input-field" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button onClick={handleGenerateAI} className="btn btn-secondary flex items-center justify-center" disabled={isGenerating}>
                {isGenerating ? <>
                    <svg className="animate-spin flex-shrink-0 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="truncate">Генерация...</span>
                  </> : <>
                    <SparklesIcon className="flex-shrink-0 h-5 w-5 mr-2" />
                    <span className="truncate">Сгенерировать с помощью ИИ</span>
                  </>}
              </button>
              <button onClick={() => {
              if (!customGift.name || !customGift.price || Number(customGift.price) < 1000) {
                const errorMessage = !customGift.name ? 'Укажите название подарка' : !customGift.price ? 'Укажите стоимость подарка' : 'Стоимость не должна быть меньше 1000 ₽';
                showNotification(errorMessage, 'error');
                return;
              }
              const imageToUse = customGift.imageUrl || imagePreview || 'https://via.placeholder.com/400?text=Подарок';
              addToCart({
                id: `custom-${uuidv4()}`,
                name: customGift.name,
                price: Number(customGift.price),
                description: customGift.description || 'Кастомный подарок',
                image: imageToUse,
                category: 'кастомный'
              });
              setCustomGift({
                name: '',
                description: '',
                price: '',
                imageUrl: ''
              });
              setImagePreview(null);
              showNotification('Подарок добавлен в корзину!');
            }} className="btn btn-accent flex items-center justify-center">
                <GiftIcon className="flex-shrink-0 h-5 w-5 mr-2" />
                <span className="truncate">Добавить в корзину</span>
              </button>
            </div>
            <p className="text-neutral-500 text-xs mt-4 text-center">
              * Обязательные поля
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default CatalogPage;