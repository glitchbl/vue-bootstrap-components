<template>
    <div>
        <input :type="vcType" :class="this.vcClass || 'form-control'" :name="name" :placeholder="placeholder" v-model="model" v-error="error">
        <Error :error="error"></Error>
    </div>
</template>
<script>
    import Error from './Error.vue';
    
    const types = ['text', 'hidden', 'tel', 'url', 'search', 'range', 'number', 'email', 'password', 'color'];
    export default {
        components: {
            Error,
        },
        props: ['placeholder', 'value', 'name', 'error', 'type', 'vcClass'],
        data() {
            let vcType = 'text';
            let type = String(this.type);
            if (types.includes(type.toLowerCase()))
                vcType = type.toLowerCase();
            return {
                model: this.value,
                vcType,
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