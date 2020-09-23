import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        statusBar: null,
        customBar: null,
        windowHeight: null,
        windowWidth: null,
        userInfo: uni.getStorageSync('userInfo') || null,
        historySearch: uni.getStorageSync('historySearch') || [],
    },
    mutations: {
        getSystemInfo(state, object) {
            state.statusBar = object.statusBar
            state.customBar = object.customBar
            state.windowHeight = object.windowHeight
            state.windowWidth = object.windowWidth
        },
        setUserInfo(state, info) {
            state.userInfo = info
            uni.setStorageSync('userInfo', state.userInfo)
        },
        setHistory(state, value) {
            if (state.historySearch.findIndex((ele) => ele === value) !== -1)
                return
            state.historySearch.push(value)
            uni.setStorageSync('historySearch', state.historySearch)
        },
        clearHistory(state) {
            state.historySearch = []
            uni.setStorageSync('historySearch', state.historySearch)
        },
    },
})
export default store
