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
            uni.setStorageSync('userInfo', info)
        },
    },
})
export default store
