import { createI18n } from 'vue-i18n/index'
// 載入語言
import en from '@/lang/en.json'
import cn from '@/lang/cn.json'
import tw from '@/lang/tw.json'

const i18n = createI18n({
    locale:  en,         // 設定語言
    fallbackLocale: 'en',   // 若選擇的語言缺少翻譯則退回的語言
    messages: {
        en,
        cn,
        tw
    }
})
export default i18n