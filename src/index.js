import Vue from 'vue'

import Utils from './utils'

import BooleanRadio from './components/BooleanRadio.vue'
import Button from './components/Button.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import Datetime from './components/Datetime.vue'
import File from './components/File.vue'
import Quantity from './components/Quantity.vue'

Vue.mixin({
    filters: {
        capitalize: value => Utils.capitalize(value),
    },
})

export {
    BooleanRadio,
    Button,
    CheckboxGroup,
    Datetime,
    File,
    Quantity,
}