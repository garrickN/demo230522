import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translation.json';
import translationVI from '../../Assets/locales/vi/strings.json';
import translation_EN from '../../Assets/languages/en';
import translation_VI from '../../Assets/languages/vi';

import { Platform, NativeModules } from 'react-native';

const deviceLanguage =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier;

const deviceLng = deviceLanguage.split('_')[0];

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

export const resources2 = {
    en: {
      translation: translation_EN,
    },
    vi: {
      translation: translation_VI,
    },
}; //Typescript Types

export const resources = {
    en: {
        translation: translationEN,
    },
    vi: {
        translation: translationVI,
    },
}; //JSON Types

i18n.use(initReactI18next).init({
    debug: true,
    resources: resources2,
    lng: deviceLng,
    fallbackLng: 'vi',
    interpolation: {
        escapeValue: false,
    },
});
