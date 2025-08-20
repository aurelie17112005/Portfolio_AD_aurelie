import { createApp } from 'vue'
import App from './App.vue'

/* Vuetify */
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

/* ⚠️ Pas d'import MDI pour éviter l'erreur si @mdi/font n'est pas installé
   // import '@mdi/font/css/materialdesignicons.css'
*/

/* Thème aligné sur ta palette Coolors
   Light  : #FBF5F3 (background), primary #E28413, secondary #DE3C4B, onSurface #000022
   Dark   : #000022 (background), primary #E28413, secondary #DE3C4B, onSurface #FBF5F3
*/
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'brandDark',
    themes: {
      brandLight: {
        dark: false,
        colors: {
          background: '#FBF5F3',
          surface: '#FFFFFF',
          primary:  '#E28413',
          secondary:'#DE3C4B',
          error:    '#C42847',
          warning:  '#E28413',
          info:     '#5A6C90',
          onBackground: '#000022',
          onSurface:    '#000022',
        },
      },
      brandDark: {
        dark: true,
        colors: {
          background: '#000022',
          surface:    '#0A0A33',
          primary:    '#E28413',
          secondary:  '#DE3C4B',
          error:      '#C42847',
          warning:    '#E28413',
          info:       '#9AA6C6',
          onBackground: '#FBF5F3',
          onSurface:    '#FBF5F3',
        },
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
