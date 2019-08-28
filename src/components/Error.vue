<template>
    <div v-if="errors.length" class="d-block invalid-feedback">
        <span v-for="error in errors" :key="error" class="d-block">{{ error }}</span>
    </div>
</template>
<script>
    export default {
        props: ['error'],
        computed: {
            errors: function() {
                if (!this.error) return [];
                return Array.isArray(this.error)? this.error: [this.error];
            }
        }
    }
</script>