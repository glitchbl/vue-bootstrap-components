<template>
    <div class="row">
        <label class="col-sm-4 col-form-label pt-0">{{ label }}</label>
        <div class="col-sm-8">
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" :id="`radio-${id}-true`" :name="name" v-model="data" :value="true" class="custom-control-input">
                <label class="custom-control-label" :for="`radio-${id}-true`">{{ textTrue }}</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" :id="`radio-${id}-false`" :name="name" v-model="data" :value="false" class="custom-control-input">
                <label class="custom-control-label" :for="`radio-${id}-false`">{{ textFalse }}</label>
            </div>
        </div>
    </div>
</template>
<script>
    import Utils from '../utils';
    export default {
        props: ['label', 'textTrue', 'textFalse', 'value', 'name'],
        data() {
            return {
                id: Utils.generateId(),
                data: this.value,
            };
        },
        watch: {
            'value': function() {
                this.data = this.value;
            },
            'data': function() {
                this.$emit('input', this.data);
            }
        }
    }
</script>
