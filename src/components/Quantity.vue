<template>
    <div>
        <div v-if="!loading">
            <a href="#" @click.prevent="onDecrement" :class="buttonClass"><i class="fas fa-minus-circle"></i></a>
            <span style="margin-left: 3px; margin-right: 3px" :class="errorClass">{{ quantity }}</span>
            <input v-if="name" type="hidden" :name="name" :value="quantity">
            <a href="#" @click.prevent="onIncrement" :class="buttonClass"><i class="fas fa-plus-circle"></i></a>
        </div>
        <div v-else>
            <div class="spinner-border spinner-border-sm text-black" role="status">
            </div>
        </div>
        <Error :error="error"></Error>
    </div>
</template>
<script>
    import Error from './Error.vue';
    
    export default {
        components: {
            Error,
        },
        props: ['value', 'loading', 'name', 'error', 'vcClass'],
        data() {
            return {
                quantity: this.value,
            }
        },
        watch: {
            'quantity': function() {
                this.$emit('input', this.quantity);
            },
            'value': function() {
                this.quantity = this.value;
            }
        },
        computed: {
            errorClass: function() {
                return {
                    'text-danger': this.error
                };
            },
            buttonClass: function() {
                let obj = {...this.errorClass};
                obj[this.vcClass] = !this.error;
                return obj;
            }
        },
        methods: {
            onIncrement() {
                this.quantity++;
            },
            onDecrement() {
                if (this.quantity > 1) {
                    this.quantity--;
                }
            },
        }
    }
</script>