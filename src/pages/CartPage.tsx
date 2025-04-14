import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ShoppingCartIcon, CreditCardIcon } from 'lucide-react';
import CartItem from '../components/Cart/CartItem';
import { useCart } from '../context/CartContext';
const CartPage: React.FC = () => {
  const {
    items,
    totalPrice,
    totalItems
  } = useCart();
  const navigate = useNavigate();
  return <div className="container mx-auto py-16 px-6 max-w-5xl">
      <h1 className="section-title">Ваша корзина</h1>
      {items.length === 0 ? <div className="card p-12 text-center">
          <div className="bg-neutral-100 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <ShoppingCartIcon className="h-10 w-10 text-neutral-400" />
          </div>
          <h3 className="text-xl font-medium text-neutral-800 mb-4">
            Ваша корзина пуста
          </h3>
          <p className="text-neutral-500 mb-8 max-w-md mx-auto">
            Выберите подарки из нашего каталога или создайте собственный подарок
          </p>
          <Link to="/catalog" className="btn btn-primary inline-flex">
            Перейти в каталог
          </Link>
        </div> : <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="card p-6 md:p-8 mb-6">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
                <h2 className="text-xl font-medium text-neutral-800">
                  Выбранные подарки ({totalItems})
                </h2>
                <span className="text-neutral-500 hidden md:block">Цена</span>
              </div>
              <div className="space-y-1">
                {items.map(item => <CartItem key={item.id} item={item} />)}
              </div>
            </div>
            <Link to="/catalog" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Продолжить покупки
            </Link>
          </div>
          <div className="lg:col-span-1 flex flex-col">
            <div className="card p-6 md:p-8 lg:sticky lg:top-24 lg:self-end">
              <h3 className="text-lg font-medium text-neutral-800 mb-4">
                Сумма заказа
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-neutral-600">
                  <span>Количество подарков</span>
                  <span>{totalItems}</span>
                </div>
                <div className="pt-3 border-t border-neutral-200 flex justify-between items-center">
                  <span className="font-medium text-lg">Итого</span>
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                    {totalPrice.toLocaleString()} ₽
                  </span>
                </div>
              </div>
              <button onClick={() => navigate('/payment')} className="btn btn-primary w-full">
                <CreditCardIcon className="h-5 w-5 mr-2" />
                Перейти к оплате
              </button>
            </div>
          </div>
        </div>}
    </div>;
};
export default CartPage;