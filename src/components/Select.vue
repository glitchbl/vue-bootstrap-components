<template>
    <div>
        <select :name="name" class="custom-select" v-model="model" v-error="error">
            <option :value="null">{{ placeholder }}</option>
            <option v-for="d in data" :value="d" :key="d">{{ d | capitalize }}</option>
        </select>
        <Error :error="error"></Error>
    </div>
</template>
<script>
    import Error from './Error.vue';
    
    export default {
        components: {
            Error,
        },
        props: ['placeholder', 'data', 'value', 'name', 'error'],
        data() {
            return {
                model: this.data.includes(this.value)? this.value: null,
            }
        },
        watch: {
            'value': function() {
                this.model = this.data.includes(this.value)? this.value: null;
            },
            'model': function() {
                this.$emit('input', this.model);
            }
        }
    }
</script>