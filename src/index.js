import Vue from 'vue'

import Utils from './utils'

import BooleanRadio from './components/BooleanRadio.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import Datetime from './components/Datetime.vue'
import File from './components/File.vue'
import Quantity from './components/Quantity.vue'
import Select from './components/Select.vue'
import Data from './components/Data.vue'
import Text from './components/Text.vue'
import TextArea from './components/TextArea.vue'
import Radio from './components/Radio.vue'
import Check from './components/Check.vue'
import Switch from './components/Switch.vue'

Vue.mixin({
    filters: {
        capitalize: Utils.capitalize.bind(this),
    },
    methods: {
        getName(d) {
            return Array.isArray(d)? d[0]: String(d).charAt(0).toUpperCase() + String(d).slice(1);
        },
        getValue(d) {
            return Array.isArray(d) && d.length > 1? d[1]: d;
        },
    }
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
    Checkbox,
    Datetime,
    File,
    Quantity,
    Select,
    Data,
    Text,
    TextArea,
    Radio,
    Check,
    Switch,
}