<template>
    <div id="app">
        <div class="container">
            <h1 class="text-center">@Glitchbl/vue-bootstrap-components</h1>
            <VCSwitch text="Show errors ?" v-model="show_error"></VCSwitch>
            <hr>
            <h3 class="mt-1 mb-0">BooleanRadio</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ BooleanRadio }}</small>
            <BooleanRadio label="True or False?" text-true="True" text-false="False" v-model="BooleanRadio" :error="error"></BooleanRadio>
            <h3 class="mt-1">Button</h3>
            <Button text="Submit" :loading="false" text-loading="Loading..." @click="button"></Button> &nbsp;
            <Button text="Submit" :loading="true" text-loading="Loading..." @click="button"></Button>
            <h3 class="mt-1 mb-0">Checkbox</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ Checkbox }}</small>
            <Checkbox :data="['value1', 'value2', 'value3']" v-model="Checkbox" :error="error"></Checkbox>
            <h3 class="mt-1 mb-0">Datetime</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ Datetime }}</small>
            <div class="mt-1"><Datetime placeholder="Datetime" type="datetime" v-model="Datetime"></Datetime></div>
            <div class="mt-1"><Datetime placeholder="Datetime" type="date" value="21/12/2012" :error="error"></Datetime></div>
            <div class="mt-1"><Datetime placeholder="Datetime" type="time" value="15:00"></Datetime></div>
            <h3 class="mt-1">File</h3>
            <File placeholder="Choose a file" label-browse="Browse" :error="error"></File>
            <h3 class="mt-1 mb-0">Quantity</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ Quantity }}</small>
            <Quantity :loading="false" name="test" v-model="Quantity" :error="error"></Quantity>
            <h3 class="mt-1 mb-0">Select</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ Select }}</small>
            <Select placeholder="Select a value" :data="['value1', 'value2', 'value3']" v-model="Select" :error="error"></Select>
            <h3 class="mt-1 mb-0">Data</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ Data }}</small>
            <Data placeholder="Add a data" v-model="Data" :error="error"></Data>
            <h3 class="mt-1 mb-0">InputText</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ InputText }}</small>
            <VCText placeholder="Text" v-model="InputText" :error="error"></VCText>
            <h3 class="mt-1 mb-0">TextArea</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ TextArea }}</small>
            <TextArea placeholder="TextArea" v-model="TextArea" :error="error"></TextArea>
            <h3 class="mt-1 mb-0">Radio</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ Radio }}</small>
            <Radio :data="['Value1', 'Value2']" v-model="Radio" :inline="true" :error="error"></Radio>
            <h3 class="mt-1 mb-0">Check</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ Check }}</small>
            <Check text="Is this a check ?" v-model="Check" :error="error"></Check>
            <h3 class="mt-1 mb-0">Switch</h3>
            <small class="d-block mb-2 ml-1" style="color: grey">Value : {{ Switch }}</small>
            <VCSwitch text="Is this a switch ?" v-model="Switch" :error="error"></VCSwitch>
        </div>
    </div>
</template>
<script>
import {
    BooleanRadio,
    Button,
    Checkbox,
    Datetime,
    File,
    Quantity,
    Select,
    Data,
    Text,
    TextArea,
    Radio,
    Check,
    Switch,
} from './index'

export default {
    name: 'app',
    components: {
        BooleanRadio,
        Button,
        Checkbox,
        Datetime,
        File,
        Quantity,
        Select,
        Data,
        VCText: Text,
        TextArea,
        Radio,
        Check,
        VCSwitch: Switch,
    },
    data() {
        return {
            error: null,
            show_error: false,
            BooleanRadio: null,
            Checkbox: ['value2', 'value3'],
            Datetime: '23/08/2019 18:00',
            Quantity: 1,
            Select: null,
            InputText: '',
            TextArea: '',
            Radio: '',
            Check: false,
            Data: [],
            Switch: false,
        }
    },
    watch: {
        'show_error': function() {
            this.error = this.show_error? 'This field is required.': null;
        }
    },
    methods: {
        button() {
            alert('test');
        }
    }
}
</script>
