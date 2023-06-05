import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'

const app = createApp(App)
app.use(router)
app.mixin(mixins);
app.mount('#app')


window.Kakao.init("6e2ad7444d3de1960fb565e40bd732bb");
