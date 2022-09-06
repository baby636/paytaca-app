import { boot } from 'quasar/wrappers'
import VueClipboard from 'vue-clipboard2'

export default boot(({ app }) => {
    app.use(VueClipboard)
})
