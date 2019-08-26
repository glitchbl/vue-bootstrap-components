<template>
    <div>
        <div v-if="!loading">
            <a href="#" class="text-black" @click.prevent="onDecrement"><i class="fas fa-minus-circle"></i></a>
            <span style="margin-left: 3px; margin-right: 3px">{{ quantity }}</span>
            <input v-if="name" type="hidden" :name="name" :value="quantity">
            <a href="#" class="text-black" @click.prevent="onIncrement"><i class="fas fa-plus-circle"></i></a>
        </div>
        <div v-else class="text-center">
            <div class="spinner-border spinner-border-sm text-black" role="status">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['value', 'loading', 'name'],
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