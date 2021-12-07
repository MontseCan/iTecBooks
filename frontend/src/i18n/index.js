import _get from 'lodash/get';
import moment from 'moment';
import 'moment/locale/es';
import { setLocale as setYupLocale } from 'yup';
import es from '@/i18n/es';
import en from '@/i18n/en';
import elementUIEn from 'element-ui/lib/locale/lang/en';
import elementUIEs from 'element-ui/lib/locale/lang/es';

let currentLanguageCode = null;

const languages = {
  en: {
    id: 'en',
    label: 'en',
    flag: '/images/flags/24/United-States.png',
    dictionary: en,
    elementUI: elementUIEn,
  },
  'es': {
    id: 'es',
    label: 'es',
    flag: '/images/flags/24/Mexico.png',
    dictionary: es,
    elementUI: elementUIEs,
  },
};

function init() {
  currentLanguageCode =
    localStorage.getItem('language') || 'en';
  setLanguageCode(currentLanguageCode);
}

function getLanguage() {
  return languages[getLanguageCode()];
}

function format(message, args) {
  if (!message) {
    return null;
  }

  try {
    return message.replace(/{(\d+)}/g, function(
      match,
      number,
    ) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match;
    });
  } catch (error) {
    console.error(message, error);
    throw error;
  }
}

export function getLanguages() {
  return Object.keys(languages).map((language) => {
    return languages[language];
  });
}

export function getElementUILanguage() {
  return getLanguage().elementUI;
}

export function getLanguageCode() {
  if (!currentLanguageCode) {
    init();
  }

  return currentLanguageCode;
}

export function setLanguageCode(arg) {
  if (!languages[arg]) {
    throw new Error(`Invalid language ${arg}.`);
  }

  moment.locale(arg);
  localStorage.setItem('language', arg);

  if (getLanguage().dictionary.validation) {
    setYupLocale(getLanguage().dictionary.validation);
  }
}

export function i18nExists(key) {
  const message = _get(getLanguage().dictionary, key);
  return !!message;
}

export function i18n(key, ...args) {
  const message = _get(getLanguage().dictionary, key);

  if (!message) {
    return key;
  }

  return format(message, args);
}
