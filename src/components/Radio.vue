<template>
    <div>
        <div v-for="(d, index) in data" :key="getName(d)" class="custom-control custom-radio" :class="{'custom-control-inline': inline}">
            <input type="radio" :id="`vc-radio-${id}-${index}`" :name="name" class="custom-control-input" :value="getValue(d)" v-model="model" v-error="error">
            <label class="custom-control-label" :for="`vc-radio-${id}-${index}`">{{ getName(d) }}</label>
        </div>
        <Error :error="error"></Error>
    </div>
</template>
<script>
    import Utils from '../utils';
    import Error from './Error.vue';
    
    export default {
        components: {
            Error,
        },
        props: ['data', 'value', 'name', 'inline', 'error'],
        data() {
            return {
                id: Utils.generateId(),
                model: this.value,
            }
        },
        watch: {
            'value': function() {
                this.model = this.value;
            },
            'model': function() {
                this.$emit('input', this.model);
            }
        },
        methods: {
            getName(d) {
                return Array.isArray(d)? d[0]: d;
            },
            getValue(d) {
                return Array.isArray(d) && d.length > 1? d[1]: d;
            },
        }
    }
</script>