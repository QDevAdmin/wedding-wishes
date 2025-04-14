import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { CartItem as CartItemType, useCart } from '../../context/CartContext';
import SafeImage from '../common/SafeImage';
interface CartItemProps {
  item: CartItemType;
}
const CartItem: React.FC<CartItemProps> = ({
  item
}) => {
  const {
    updateQuantity,
    removeFromCart
  } = useCart();
  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };
  return <div className="flex flex-wrap md:flex-nowrap items-center py-6 border-b border-neutral-200">
      <div className="h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
        <SafeImage src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>
      <div className="ml-5 flex-1 my-3 md:my-0 w-full md:w-auto">
        <h3 className="font-medium text-lg text-neutral-800 mb-1">
          {item.name}
        </h3>
        <div className="flex items-center text-sm text-neutral-500">
          <span className="bg-neutral-100 px-2 py-0.5 rounded text-neutral-600">
            {item.category}
          </span>
          <span className="mx-2">•</span>
          <span className="font-medium text-indigo-600">
            {item.price.toLocaleString()} ₽
          </span>
        </div>
      </div>
      <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden mr-4 md:mr-0">
        <button onClick={handleDecrease} className="p-2 hover:bg-neutral-100 transition-colors" disabled={item.quantity <= 1}>
          <MinusIcon className={`h-4 w-4 ${item.quantity <= 1 ? 'text-neutral-300' : 'text-neutral-600'}`} />
        </button>
        <span className="w-8 text-center text-neutral-800 font-medium">
          {item.quantity}
        </span>
        <button onClick={handleIncrease} className="p-2 hover:bg-neutral-100 transition-colors">
          <PlusIcon className="h-4 w-4 text-neutral-600" />
        </button>
      </div>
      <div className="ml-auto md:ml-4 text-right">
        <div className="font-semibold text-neutral-800 whitespace-nowrap">
          {(item.price * item.quantity).toLocaleString()} ₽
        </div>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="ml-4 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-rose-500 transition-colors" aria-label="Удалить">
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>;
};
export default CartItem;