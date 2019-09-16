<template>
    <Card title="Handling Inputs">
      <List title="Form Binding">
        <li>
          Created by using <code>v-model</code> and template tags connected
          to a data property
        </li>
        <li>Provides two-way binding for inputs</li>
        <li>
          Vue watches for the source of the editing to determine what to overwrite
        </li>
        <li>Default behavior is to update for each keystroke (input event)</li>
        <li>
          Modifiers:
          <br/>
          <code>.lazy</code> - listen to the change event (focus change, submit, etc)
          <br/>
          <code>.trim</code> - trims whitespace from the beginning and end
          <br/>
          <code>.number</code> - force the input to be converted to a number
        </li>
        <li>
          <code>textarea</code> is similar to <code>input</code>, but
          it requires the data property to set a default
          <br/>
          Ensure multi-line formatting with <code>style="white-space: pre;"</code>
          in the tag
        </li>
        <li>
          Checkboxes:
          <br/>
          Vue will automatically merge all the values into a desginated data property array
          <br/>
          Accomplished by using the same <code>v-model</code> for the group
        </li>
        <li>
          Radio buttons:
          <br/>
          Uses the same <code>v-model</code> for the group
          <br/>
          Vue automatically detects the input is a radio button and assign the value of the selected one
        </li>
        <li>
          Select inputs:
          <br/>
          Populate the option tags dynamically by iterating over a data property array or object
          <br/>
          Bound with <code>v-model</code> on the <code>select</code> tag
          <br/>
          Set default by placing <code>:selected="foo == bar"</code> in the option tag
        </li>
      </List>
      <FormsExample />
      <List title="Custom Controls">
        <li>Custom controls are useful when you want to build your own input components</li>
        <li>
          Requires two things:
          <br />
          1. Takes a prop of <code>value</code>
          <br />
          2. Emits an <code>input</code> event
        </li>
      </List>
      <List title="Resources">
        <li>
          <a href="http://vuejs.org/guide/forms.html" target="_blank">
            Offical Docs on Forms
          </a>
        </li>
      </List>
    </Card>
</template>

<script>
  import Card from '../components/Card.vue';
  import List from '../components/List.vue';
  import FormsExample from '../components/Examples/FormsExample.vue';

  export default {
    components: {
      Card,
      List,
      FormsExample,
    },
  };
</script>
