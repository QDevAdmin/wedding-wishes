const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export const sendTelegramMessage = async (text: string): Promise<boolean> => {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error(`Telegram credentials are not configured`);
    return false;
  }
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: text,
        parse_mode: 'HTML'
      })
    });
    if (!response.ok) {
      throw new Error('Failed to send telegram message');
    }
    return true;
  } catch (error) {
    console.error('Error sending telegram message:', error);
    return false;
  }
};

export const formatOrderMessage = (formData: {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message?: string;
}, items: Array<{
  name: string;
  quantity: number;
  price: number;
}>, totalPrice: number) => {
  const message = `
🎁 <b>Новый заказ!</b>

👤 <b>Контактная информация:</b>
• Имя: ${formData.firstName}
• Фамилия: ${formData.lastName}
• Телефон: ${formData.phone}
• Email: ${formData.email}
${formData.message ? `\n💭 <b>Сообщение от гостя:</b>\n${formData.message}` : ''}

🛍 <b>Заказ:</b>
${items.map(item => `• ${item.name} (${item.quantity} шт.) - ${(item.price * item.quantity).toLocaleString()} ₽`).join('\n')}

💰 <b>Итого:</b> ${totalPrice.toLocaleString()} ₽
`;
  return message;
};