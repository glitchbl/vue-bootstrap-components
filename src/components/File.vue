<template>
    <div class="custom-file">
        <input :name="name" type="file" class="custom-file-input" :id="`form-file-${id}`" @input="onInput">
        <label class="custom-file-label" :for="`form-file-${id}`" :data-browse="labelBrowse || 'Browse'">{{ value || label }}</label>
    </div>
</template>
<script>
    import Utils from '../utils';
    export default {
        props: ['value', 'label', 'labelBrowse', 'name'],
        data() {
            return {
                id: Utils.generateId(),
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