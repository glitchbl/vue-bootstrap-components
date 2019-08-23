export default {
    generateId: function() {
        let i = 0
        return () => i++
    }(),
    capitalize (value) {
        value = String(value)
        return value.charAt(0).toUpperCase() + value.slice(1)
    }
}