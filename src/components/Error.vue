<template>
    <div v-if="error" class="d-block invalid-feedback">{{ error }}</div>
</template>
<script>
    export default {
        props: ['error'],
    }
</script>