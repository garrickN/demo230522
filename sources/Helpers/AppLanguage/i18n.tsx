import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translations } from '../../../languages/index';

type i18nBase =
  | 'labels'
  | 'errors'
  | 'messages'
  | 'placeholders'
  | 'actions'
  | 'languages';

export type I18nApp = Record<
  i18nBase,
  Record<string, string | Record<string, string>>
>;

const resources = {
    'en-US': {
      translation: translations.en,
    },
    'vi-VN': {
      translation: translations.vi,
    },
};

// var value = i18n.language;

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(Backend)
    .init({
        debug: true,
        lng: i18n.language,
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false,
        },
        resources,
        // Thông báo lỗi
        detection: {
            order: ['navigator'],
        },
        // KeySeparator và nsSeparator cho tệp ngôn ngữ
        keySeparator: false,
        nsSeparator: false,
    },
);

export default i18n;
