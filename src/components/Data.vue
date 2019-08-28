<template>
    <div>
        <div class="row align-items-center">
            <div class="col-sm-5">
                <input type="text" :name="name" class="form-control" @keyup.enter.prevent="onAdd" :placeholder="placeholder" v-error="error">
            </div>
            <div class="col-sm-7">
                <a href="" @click.prevent="onDelete(d)" v-for="d in data" :key="d"><span class="badge mr-1" :class="badgeClass">{{ d }}</span></a>
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
        props: ['name', 'value', 'placeholder', 'regexp', 'error'],
        data() {
            return {
                data: this.value,
            }
        },
        computed: {
            badgeClass: function() {
                return {
                    'badge-primary': !this.error,
                    'badge-danger': this.error,
                }
            }
        },
        watch: {
            'data': function(v) {
                this.$emit('input', v);
            },
            'value': function(v) {
                this.data = v;
            }
        },
        methods: {
            onAdd(event) {
                let value = event.target.value;
                if (this.regexp instanceof RegExp && !this.regexp.test(value)) {
                    alert("La valeur renseignée n'est pas valide");
                } else if (this.data.indexOf(value) !== -1) {
                    alert("La valeur est déjà présente");
                } else {
                    this.data.push(value);
                }
                event.target.value = '';
            },
            onDelete(d) {
                this.data.splice(this.data.indexOf(d), 1);
            },
        }
    }
</script>