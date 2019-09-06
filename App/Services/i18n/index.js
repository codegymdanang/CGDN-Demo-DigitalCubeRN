import en from './locale/en'
import I18N from 'react-native-i18n';

I18N.fallbacks = true;
I18N.translations = {
  'en': en
}
I18N.defaultLocale = 'en'

export default I18N;
