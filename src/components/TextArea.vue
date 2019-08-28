<template>
    <div>
        <textarea class="form-control" :name="name" :placeholder="placeholder" v-model="model" v-error="error"></textarea>
        <Error :error="error"></Error>
    </div>
</template>
<script>
    import Error from './Error.vue';
    
    export default {
        components: {
            Error,
        },
        props: ['placeholder', 'value', 'name', 'error'],
        data() {
            return {
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
        }
    }
</script>