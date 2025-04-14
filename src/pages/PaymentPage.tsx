import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircleIcon, CreditCardIcon, UserIcon, MailIcon, PhoneIcon, MessageSquareIcon, XIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SafeImage from '../components/common/SafeImage';
import { sendTelegramMessage, formatOrderMessage } from '../utils/telegram';
import { Link } from 'react-router-dom';
const PaymentPage: React.FC = () => {
  const {
    totalPrice,
    clearCart,
    items
  } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requiredFields = ['firstName', 'lastName', 'phone', 'email'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    if (emptyFields.length > 0) {
      const fieldNames = {
        firstName: 'Имя',
        lastName: 'Фамилия',
        phone: 'Телефон',
        email: 'Email'
      };
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-rose-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down';
      notification.textContent = `Пожалуйста, заполните обязательные поля: ${emptyFields.map(field => fieldNames[field as keyof typeof fieldNames]).join(', ')}`;
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 3000);
      return;
    }
    setIsSubmitting(true);
    try {
      const message = formatOrderMessage(formData, items, totalPrice);
      const success = await sendTelegramMessage(message);
      if (!success) {
        throw new Error('Failed to send message to Telegram');
      }
      setShowThankYou(true);
      setTimeout(() => {
        clearCart();
        navigate('/');
      }, 5000);
    } catch (error) {
      console.error('Error processing order:', error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        setIsSubmitting(false);
      }, 5000);
    }
  };
  if (showError) {
    return <div className="container mx-auto py-16 px-6 max-w-md">
        <div className="card p-10 text-center">
          <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <XIcon className="h-8 w-8 text-rose-600" />
          </div>
          <h1 className="text-2xl font-medium mb-4 text-neutral-800">
            Что-то пошло не так
          </h1>
          <p className="text-neutral-600 mb-8">
            К сожалению, произошла ошибка при оформлении заказа. Пожалуйста,
            попробуйте позже или свяжитесь с нами другим способом.
          </p>
          <div className="flex justify-center gap-4">
            <button onClick={() => {
            setShowError(false);
            setIsSubmitting(false);
          }} className="btn btn-primary">
              Попробовать снова
            </button>
            <Link to="/" className="btn btn-secondary">
              На главную
            </Link>
          </div>
        </div>
      </div>;
  }
  if (showThankYou) {
    return <div className="container mx-auto py-16 px-6 max-w-md">
        <div className="card p-10 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircleIcon className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-medium mb-4 text-neutral-800">
            Спасибо за ваш подарок!
          </h1>
          <p className="text-neutral-600 mb-8">
            Ваш вклад в наш будущий дом очень ценен для нас. Скоро мы пришлем
            ссылку на оплату.
          </p>
          <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden mb-4">
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-full w-0 animate-[grow_3s_ease-out_forwards]"></div>
          </div>
          <p className="text-neutral-500 text-sm">
            Вы будете перенаправлены на главную страницу через несколько
            секунд...
          </p>
          <style jsx>{`
            @keyframes grow {
              0% {
                width: 0;
              }
              100% {
                width: 100%;
              }
            }
          `}</style>
        </div>
      </div>;
  }
  return <div className="container mx-auto py-16 px-6 max-w-4xl">
      <h1 className="section-title">Оформление подарка</h1>
      <p className="section-subtitle">
        Заполните контактную информацию для завершения заказа
      </p>
      <div className="space-y-8">
        <div className="card p-8">
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg font-medium mb-6 text-neutral-800">
              Личные данные
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div>
                <label htmlFor="firstName" className="input-label">
                  <UserIcon className="h-4 w-4 inline-block mr-2 text-neutral-500" />
                  Имя
                </label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="input-field" />
              </div>
              <div>
                <label htmlFor="lastName" className="input-label">
                  <UserIcon className="h-4 w-4 inline-block mr-2 text-neutral-500" />
                  Фамилия
                </label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="input-field" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div>
                <label htmlFor="phone" className="input-label">
                  <PhoneIcon className="h-4 w-4 inline-block mr-2 text-neutral-500" />
                  Телефон
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="input-field" />
              </div>
              <div>
                <label htmlFor="email" className="input-label">
                  <MailIcon className="h-4 w-4 inline-block mr-2 text-neutral-500" />
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="input-label">
                <MessageSquareIcon className="h-4 w-4 inline-block mr-2 text-neutral-500" />
                Сообщение для пары (необязательно)
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="input-field resize-none" placeholder="Напишите свои пожелания или комментарии к заказу..."></textarea>
            </div>
          </form>
        </div>
        <div className="card p-6 md:p-8">
          <h3 className="text-lg font-medium text-neutral-800 mb-4">
            Ваш заказ
          </h3>
          <div className="max-h-64 overflow-y-auto mb-6 pr-2">
            {items.map(item => <div key={item.id} className="flex items-center py-3 border-b border-neutral-100">
                <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0">
                  <SafeImage src={item.image} alt={item.name} className="h-full w-full object-cover" />
                </div>
                <div className="ml-3 flex-grow">
                  <p className="text-sm font-medium text-neutral-800">
                    {item.name}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-neutral-500">
                      {item.quantity} шт.
                    </p>
                    <p className="text-sm font-medium text-indigo-600">
                      {(item.price * item.quantity).toLocaleString()} ₽
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
          <div className="space-y-3 mb-6 border-t border-neutral-200 pt-4">
            <div className="flex justify-between text-neutral-600">
              <span>Всего подарков</span>
              <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
            </div>
            <div className="pt-3 border-t border-neutral-200 flex justify-between items-center">
              <span className="font-medium text-lg">Итого</span>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                {totalPrice.toLocaleString()} ₽
              </span>
            </div>
          </div>
          <button type="submit" form="payment-form" className="btn btn-primary w-full" disabled={isSubmitting} onClick={handleSubmit}>
            {isSubmitting ? <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Обработка...
              </> : <>
                <CreditCardIcon className="h-5 w-5 mr-2" />
                Подтвердить заказ
              </>}
          </button>
          <p className="text-xs text-neutral-500 mt-4 text-center">
            Нажимая кнопку "Подтвердить", вы соглашаетесь с условиями обработки
            данных.
          </p>
        </div>
      </div>
    </div>;
};
export default PaymentPage;