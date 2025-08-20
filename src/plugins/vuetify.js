import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

export default createVuetify({
  components, directives,
  theme: {
    defaultTheme: "brandDark",
    themes: {
      brandLight: {
        dark: false,
        colors: {
          background: "#FBF5F3",
          surface: "#FFFFFF",
          primary: "#E28413",
          secondary: "#DE3C4B",
          error: "#C42847",
          warning: "#E28413",
          info: "#5A6C90",
          onBackground: "#000022",
          onSurface: "#000022"
        }
      },
      brandDark: {
        dark: true,
        colors: {
          background: "#000022",
          surface: "#0A0A33",
          primary: "#E28413",
          secondary: "#DE3C4B",
          error: "#C42847",
          warning: "#E28413",
          info: "#9AA6C6",
          onBackground: "#FBF5F3",
          onSurface: "#FBF5F3"
        }
      }
    }
  }
})