<template>
    <div>
        <div v-if="!loading">
            <a href="#" @click.prevent="onDecrement" :class="textClass"><i class="fas fa-minus-circle"></i></a>
            <span style="margin-left: 3px; margin-right: 3px" :class="textClass">{{ quantity }}</span>
            <input v-if="name" type="hidden" :name="name" :value="quantity">
            <a href="#" @click.prevent="onIncrement" :class="textClass"><i class="fas fa-plus-circle"></i></a>
        </div>
        <div v-else class="text-center">
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
        props: ['value', 'loading', 'name', 'error'],
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
            textClass: function() {
                return {
                    'text-danger': this.error,
                }
            },
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