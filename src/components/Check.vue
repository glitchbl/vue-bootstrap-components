<template>
    <div>
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" :id="`vc-check-${id}`" :name="name" v-model="model" v-error="error">
            <label class="custom-control-label" :for="`vc-check-${id}`">{{ text }}</label>
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
        props: ['text', 'value', 'name', 'error'],
        data() {
            return {
                id: Utils.generateId(),
                model: !!this.value,
            }
        },
        watch: {
            'value': function() {
                this.model = !!this.value;
            },
            'model': function() {
                this.$emit('input', this.model);
            }
        }
    }
</script>