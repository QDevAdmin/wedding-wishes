import React from 'react';
import { ShoppingBagIcon } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../data/products';
import SafeImage from '../common/SafeImage';
interface ProductCardProps {
  product: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({
  product
}) => {
  const {
    addToCart
  } = useCart();
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in-down';
    notification.textContent = 'Подарок добавлен в корзину!';
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  };
  return <div className="card group">
      <div className="relative aspect-square overflow-hidden">
        <SafeImage src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <span className="tag bg-indigo-500/90 text-white inline-block mb-2">
              {product.category}
            </span>
            <p className="text-white text-sm line-clamp-2">
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg text-neutral-800 max-w-[70%]">
            {product.name}
          </h3>
          <div className="bg-gradient-to-r from-indigo-600 to-violet-500 text-white text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
            {product.price.toLocaleString()} ₽
          </div>
        </div>
        <button onClick={handleAddToCart} className="btn btn-primary w-full mt-3 py-2.5">
          <ShoppingBagIcon className="h-4 w-4 mr-2" />
          Добавить в корзину
        </button>
      </div>
    </div>;
};
export default ProductCard;