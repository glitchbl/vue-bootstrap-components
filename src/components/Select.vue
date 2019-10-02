<template>
    <div>
        <select :name="name" class="custom-select" v-model="model" v-error="error">
            <option v-if="placeholder != undefined" :value="null">{{ placeholder }}</option>
            <option v-for="d in data" :value="getValue(d)" :key="getName(d)">{{ getName(d) }}</option>
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
                model: this.data.map(this.getValue).includes(this.value)? this.value: null,
            }
        },
        watch: {
            'value': function() {
                this.model = this.data.map(this.getValue).includes(this.value)? this.value: null;
            },
            'model': function() {
                this.$emit('input', this.model);
            }
        }
    }
</script>