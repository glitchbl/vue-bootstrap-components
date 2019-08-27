<template>
    <div id="app">
        <div class="container">
            <h1 class="text-center">@Glitchbl/vue-bootstrap-components</h1>
            <hr>
            <h3 class="mt-1">BooleanRadio</h3>
            <BooleanRadio label="True or False?" text-true="True" text-false="False" v-model="BooleanRadio" error="This field is required."></BooleanRadio>
            <h3 class="mt-1">Button</h3>
            <Button text="Submit" :loading="false" text-loading="Loading..."></Button> &nbsp;
            <Button text="Submit" :loading="true" text-loading="Loading..."></Button>
            <h3 class="mt-1">CheckboxGroup</h3>
            <CheckboxGroup :data="['value1', 'value2', 'value3']" v-model="CheckboxGroup" error="This field is required."></CheckboxGroup>
            <h3 class="mt-1">Datetime</h3>
            <div class="mt-1"><Datetime placeholder="Datetime" type="datetime" v-model="Datetime"></Datetime></div>
            <div class="mt-1"><Datetime placeholder="Datetime" type="date" value="21/12/2012" error="This field is required."></Datetime></div>
            <div class="mt-1"><Datetime placeholder="Datetime" type="time" value="15:00"></Datetime></div>
            <h3 class="mt-1">File</h3>
            <File placeholder="Choose a file" label-browse="Browse" error="This field is required."></File>
            <h3 class="mt-1">Quantity</h3>
            <Quantity :loading="false" name="test" v-model="Quantity" error="This field is required."></Quantity>
            <h3 class="mt-1">Select</h3>
            <Select placeholder="Select a value" :data="['value1', 'value2', 'value3']" v-model="Select" error="This field is required."></Select>
            <h3 class="mt-1">Data</h3>
            <Data placeholder="Add a data" v-model="Data" error="This field is required."></Data>
        </div>
    </div>
</template>
<script>
import {
    BooleanRadio,
    Button,
    CheckboxGroup,
    Datetime,
    File,
    Quantity,
    Select,
    Data,
} from './index'

export default {
    name: 'app',
    components: {
        BooleanRadio,
        Button,
        CheckboxGroup,
        Datetime,
        File,
        Quantity,
        Select,
        Data,
    },
    data() {
        return {
            BooleanRadio: null,
            CheckboxGroup: ['value2', 'value3'],
            Datetime: '23/08/2019 18:00',
            Quantity: 1,
            Select: null,
            Data: [],
        }
    }
}
</script>
