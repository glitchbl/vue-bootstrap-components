<template>
    <div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" :id="`vc-boolean-radio-${id}-true`" :name="name" v-model="model" :value="true" class="custom-control-input" v-error="error">
            <label class="custom-control-label" :for="`vc-boolean-radio-${id}-true`">{{ textTrue }}</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" :id="`vc-boolean-radio-${id}-false`" :name="name" v-model="model" :value="false" class="custom-control-input" v-error="error">
            <label class="custom-control-label" :for="`vc-boolean-radio-${id}-false`">{{ textFalse }}</label>
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
        props: ['textTrue', 'textFalse', 'value', 'name', 'error'],
        data() {
            return {
                id: Utils.generateId(),
                model: this.value,
            };
        },
        watch: {
            'value': function() {
                this.model = this.value;
            },
            'model': function() {
                this.$emit('input', this.model);
            }
        }
    }
</script>
