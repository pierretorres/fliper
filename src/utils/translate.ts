// import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const dictionary = {
  english: {
    'your summary': 'Your summary',
    'amount invested': 'Amount invested',
    'profitability month': 'Profitability/month',
    'earning month': 'Earning/month',
    'view more': 'VIEW MORE',
    about: 'About',
    investment: 'Investment',
    language: 'Language',
    currency: 'Currency',
    'dark mode': 'Dark mode',
    portuguese: 'Portuguese',
    english: 'English',
    spanish: 'Spanish',
    'brazilian real': 'Brazilian real',
    euro: 'Euro',
    'american dollar': 'American dollar',
    'error message':
      'oops, there was an error looking up the information, try again later',
    'to fliper': 'from Pierre to Fliper',
  },
  portuguese: {
    'your summary': 'Seu resumo',
    'amount invested': 'Valor investido',
    'profitability month': 'Rentabilidade/mês',
    'earning month': 'Ganho/mês',
    'view more': 'VER MAIS',
    about: 'Sobre',
    investment: 'Investimento',
    language: 'Idioma',
    currency: 'Moeda',
    'dark mode': 'Modo escuro',
    portuguese: 'Português',
    english: 'Inglês',
    spanish: 'Espanhol',
    'brazilian real': 'Real',
    euro: 'Euro',
    'american dollar': 'Dólar americano',
    'error message':
      'Oops, houve um erro ao consultar as informações, tente novamente mais tarde',
    'to fliper': 'De Pierre para Fliper',
  },
  spanish: {
    'your summary': 'Tu resumen',
    'amount invested': 'Monto invertido',
    'profitability month': 'Rentabilidad/mes',
    'earning month': 'Ganancia/mes',
    'view more': 'VER MÁS',
    about: 'Acerca de',
    investment: 'Inversión',
    language: 'Idioma',
    currency: 'Moneda',
    'dark mode': 'Podo oscuro',
    portuguese: 'Portugués',
    english: 'Inglés',
    spanish: 'Español',
    'brazilian real': 'Real',
    euro: 'Euro',
    'american dollar': 'Dólar americano',
    'error message':
      'Vaya, se produjo un error al consultar la información. Vuelve a intentarlo más tarde.',
    'to fliper': 'de Pierre a Fliper',
  },
};
type Language = 'english' | 'portuguese' | 'spanish';

type Dictionary =
  | 'your summary'
  | 'amount invested'
  | 'profitability month'
  | 'earning month'
  | 'view more'
  | 'investment'
  | 'language'
  | 'currency'
  | 'dark mode'
  | 'portuguese'
  | 'english'
  | 'spanish'
  | 'brazilian real'
  | 'euro'
  | 'american dollar'
  | 'error message'
  | 'to fliper'
  | 'about';

const Translate = (text: Dictionary): string => {
  const language = useSelector(
    (state: RootState) => state.preferences.language,
  ) as Language;
  return dictionary[language][text];
};
export default Translate;
