<template>
    <div>
        <div class="d-flex align-items-center">
            <div class="position-relative flex-grow-1">
                <input type="text" class="form-control d-inline-block" :name="name" :value="date" ref="input" @click="onClick" :placeholder="placeholder" v-error="error">
            </div>
            &nbsp;&nbsp;
            <a href="#" @click.prevent="onClear"><i class="fas fa-trash-alt fa-2x text-danger" aria-hidden="true"></i></a>
        </div>
        <Error :error="error"></Error>
    </div>
</template>
<script>
    const $ = window.$ = window.jQuery = require('jquery');

    const moment = window.moment = require('moment');
    require('moment/locale/fr.js');

    require('tempusdominus-bootstrap-4');
    require('tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css');

    import Error from './Error.vue';
    
    export default {
        components: {
            Error,
        },
        props: ['name', 'value', 'type', 'min', 'placeholder', 'error'],
        data() {
            let format = 'DD/MM/YYYY';
            if (this.type == 'time') format = 'HH:mm';
            if (this.type == 'datetime') format = 'DD/MM/YYYY HH:mm';
            return {
                date: this.value? moment(this.value, format).format(format): null,
            }
        },
		mounted() {
            let el = $(this.$refs.input);

            let options = {
                locale: 'fr',
                stepping: 30,
                debug: true,
            };

            if (this.type == 'date') {
                Object.assign(options, {
                    format: 'DD/MM/YYYY',
                    sideBySide: false
                });
            } else if (this.type == 'time') {
                Object.assign(options, {
                    format: 'LT',
                });
            } else {
                Object.assign(options, {
                    sideBySide: true
                });
            }
            
            if (this.min) {
                let date;
                if (this.min == 'today') {
                    date = moment();
                } else {
                    date = moment(this.min, 'DD/MM/YYYY');
                }
                Object.assign(options, {
                    minDate: date.millisecond(0).second(0).minute(0).hour(0),
                });
            }

			el.datetimepicker(options);

            el.on('change.datetimepicker', () => {
                this.$emit('input', el.val());
            });

            el.blur(() => el.datetimepicker('hide'));
        },
        watch: {
            'value': function(value) {
                if (!value)
                    this.date = null;
                else {
                    let format = 'DD/MM/YYYY';
                    if (this.type == 'time') format = 'HH:mm';
                    if (this.type == 'datetime') format = 'DD/MM/YYYY HH:mm';
                    this.date = moment(value, format).format(format);
                }
            }
        },
        methods: {
            onClear() {
                // $(this.$refs.input).val('');
                $(this.$refs.input).datetimepicker('clear');
                this.$emit('input', '');
            },
            onClick() {
                $(this.$refs.input).datetimepicker('show');
            }
        }
	}
</script>