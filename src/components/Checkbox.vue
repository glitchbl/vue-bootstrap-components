<template>
    <div>
        <div class="row">
            <div v-for="(d, index) in data" :key="d" class="col-sm-4">
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" :name="name" class="custom-control-input" :id="`vc-checkbox-group-${id}-${index}`" 
                            :value="d" v-model="model" v-error="error">
                    <label class="custom-control-label" :for="`vc-checkbox-group-${id}-${index}`">{{ d | capitalize }}</label>
                </div>
            </div>
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
        props: ['data', 'value', 'name', 'error'],
        data() {
            return {
                id: Utils.generateId(),
                model: this.value.slice(),
            }
        },
        watch: {
            model: function() {
                this.$emit('input', this.model);
            },
            value: function() {
                this.model = this.value;
            }
        }
    }
</script>
