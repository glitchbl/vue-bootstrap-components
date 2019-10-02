<template>
    <button type="submit" :class="this.vcClass || 'btn btn-primary'" :disabled="loading" @click="$emit('click')">
        <template v-if="loading">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            {{ textLoading }}
        </template>
        <template v-else>
            {{ text }}
        </template>
    </button>
</template>
<script>
    export default {
        props: ['loading', 'text', 'textLoading', 'vcClass'],
    }
</script>
