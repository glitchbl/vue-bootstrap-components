import Vue from 'vue'

import Utils from './utils'

import BooleanRadio from './components/BooleanRadio.vue'
import Button from './components/Button.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import Datetime from './components/Datetime.vue'
import File from './components/File.vue'
import Quantity from './components/Quantity.vue'
import Select from './components/Select.vue'
import Data from './components/Data.vue'

Vue.mixin({
    filters: {
        capitalize: Utils.capitalize.bind(this),
    },
})

function validateElement(el, error) {
    el.classList.remove('is-invalid', 'is-valid')
    if (error) {
        el.classList.add('is-invalid')
    }
}

Vue.directive('error', {
    bind(el, {value}) {
        validateElement(el, value);
    },
    update(el, {value}) {
        validateElement(el, value);
    }
})

export {
    BooleanRadio,
    Button,
    CheckboxGroup,
    Datetime,
    File,
    Quantity,
    Select,
    Data,
}