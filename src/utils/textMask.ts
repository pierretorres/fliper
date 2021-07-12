import { useSelector } from 'react-redux';
import { RootState } from '../store';

const price = {
  USD: 5.27,
  EUR: 6.24,
  BRL: 1,
};
type Currency = 'USD' | 'BRL' | 'EUR';

const TextMask = (value?: number | string, type = 'currency'): string => {
  const currency = useSelector(
    (state: RootState) => state.preferences.currency,
  ) as Currency;

  if (!value) return '-';

  const newValue =
    type === 'currency' ? Number(value) / price[currency] : Number(value) / 100;

  return newValue.toLocaleString('pt-br', {
    style: type,
    currency,
    maximumFractionDigits: type === 'percent' ? 3 : 2,
  });
};
export default TextMask;
