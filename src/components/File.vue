<template>
    <div>
        <div class="custom-file">
            <input :name="name" type="file" class="custom-file-input" :id="`vc-file-${id}`" @input="onInput" v-error="error">
            <label class="custom-file-label" :for="`vc-file-${id}`" :data-browse="labelBrowse || 'Browse'">{{ label }}</label>
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
        props: ['placeholder', 'labelBrowse', 'name', 'error'],
        data() {
            return {
                id: Utils.generateId(),
                label: this.placeholder,
            }
        },
        methods: {
            onInput(event) {
                let file = event.target.files[0];
                this.label = event.target.value.split('\\').slice(-1)[0];
                this.$emit('input', file);
            }
        }
    }
</script>