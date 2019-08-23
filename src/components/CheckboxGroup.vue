<template>
    <div class="row">
        <div v-for="(d, index) in data" :key="d" class="col-sm-4">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" :name="name" class="custom-control-input" :id="`data-${id}-${index}`" 
                        :value="d" v-model="model">
                <label class="custom-control-label" :for="`data-${id}-${index}`">{{ d | capitalize }}</label>
            </div>
        </div>
    </div>
</template>
<script>
    import Utils from '../utils';
    export default {
        props: ['data', 'value', 'name'],
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
