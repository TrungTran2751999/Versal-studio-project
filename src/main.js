import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import route from './index'
import store from './store'
import { quillEditor } from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

loadFonts()
createApp(App)
  .use(quillEditor)
  .use(vuetify)
  .use(route)
  .use(store)
  .mount('#app')
