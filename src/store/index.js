import { createStore } from 'vuex';
import i18n from '@/plugins/i18n';
const i18nState = {
    state: {
        lang: 'en',
    },
    mutations: {
        changeLang(state, { lang }) {
            state.lang = lang;
            i18n.global.locale = lang;
        },
    },
}

export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        i18nState
    }
})
