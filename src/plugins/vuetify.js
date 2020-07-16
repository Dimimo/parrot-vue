/* let's export only what we need so don't forget to update this list while expanding */

import Vue from 'vue'
import Vuetify, {
    VPagination,
} from 'vuetify/lib'
//  import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    components: {
        VPagination,
    },
    directives: {},
})

const opts = {}

export default new Vuetify(opts)
