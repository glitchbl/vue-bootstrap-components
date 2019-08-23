<template>
    <div id="app">
        <div class="container">
            <h1 class="text-center">@Glitchbl/vue-bootstrap-components</h1>
            <hr>
            <h3 class="mt-1">BooleanRadio</h3>
            <BooleanRadio label="True or False?" text-true="True" text-false="False" :value="true"></BooleanRadio>
            <h3 class="mt-1">Button</h3>
            <Button text="Submit" :loading="false" text-loading="Loading..."></Button> &nbsp;
            <Button text="Submit" :loading="true" text-loading="Loading..."></Button>
            <h3 class="mt-1">CheckboxGroup</h3>
            <CheckboxGroup :value="['value2', 'value3']" :data="['value1', 'value2', 'value3']"></CheckboxGroup>
            <h3 class="mt-1">Datetime</h3>
            <div class="mt-1"><Datetime placeholder="Datetime" type="datetime" value="23/08/2019 18:00"></Datetime></div>
            <div class="mt-1"><Datetime placeholder="Datetime" type="date" value="21/12/2012"></Datetime></div>
            <div class="mt-1"><Datetime placeholder="Datetime" type="time" value="15:00"></Datetime></div>
            <h3 class="mt-1">File</h3>
            <File label="Choose a file" label-browse="Browse"></File>
            <h3 class="mt-1">Quantity</h3>
            <Quantity :value="3" :loading="false" name="test"></Quantity>
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
    }
}
</script>
