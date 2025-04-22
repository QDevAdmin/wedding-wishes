import {Routes, Route, HashRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { CartProvider } from './context/CartContext';
export function App() {
  return <HashRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/payment" element={<PaymentPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </HashRouter>;
}