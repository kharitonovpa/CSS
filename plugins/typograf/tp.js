import Typograf from 'typograf';
const tp = new Typograf({ locale: ['ru', 'en-US'] });
tp.disableRule('ru/punctuation/ano');
tp.disableRule('common/html/quot');
tp.disableRule('common/nbsp/dpi');
tp.disableRule('common/nbsp/replaceNbsp');
tp.disableRule('common/number/fraction');
tp.disableRule('common/number/mathSigns');
tp.disableRule('common/number/times');
tp.disableRule('common/other/repeatWord');
tp.disableRule('common/punctuation/delDoublePunctuation');
tp.disableRule('common/space/delRepeatN');
tp.disableRule('common/symbols/arrow');
tp.disableRule('ru/dash/centuries');
tp.disableRule('ru/dash/daysMonth');
tp.disableRule('ru/dash/decade');
tp.disableRule('ru/dash/month');
tp.disableRule('ru/dash/surname');
tp.disableRule('ru/dash/time');
tp.disableRule('ru/dash/weekday');
tp.disableRule('ru/dash/years');
tp.disableRule('ru/date/fromISO');
tp.disableRule('ru/date/weekday');
tp.disableRule('ru/money/ruble');
tp.disableRule('ru/money/currency');
tp.disableRule('ru/other/accent');
tp.disableRule('ru/typo/switchingKeyboardLayout');

export default tp;
