<template>
    <div>
        <Card title="Form Input Validation">
            <List title="Adding a Validator">
                <li>This is using the <code>vuelidate</code> package</li>
                <li>
                    Import <code>vuelidate</code> in <code>main.js</code><br>
                    Inject into Vue: <code>Vue.use(Vuelidate)</code><br>
                    Now you have access to the <code>validations</code> component property<br>
                    <code>vuelidate</code> now exposes the <code>$v</code> reserved word
                </li>
                <li>
                    <code>vuelidate</code> requires <code>validations</code> keys to match the bound data keys<br>
                    <code>vuelidate</code> ships with built-in validators that can be imported into the component<br>
                    <code>import { required, email } from 'vuelidate/lib/validators</code><br>
                    Within the <code>validations</code> property:<br>
                    <code>
                        &nbsp;&nbsp;validations: {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;email: {<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;required,<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;email<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                        &nbsp;&nbsp;}
                    </code><br>
                    Within the template, to whatever element is appropriate, add:<br>
                    &nbsp;&nbsp;<code>@input="$v.email.$touch()"</code><br>
                    Any valid event can be used, such as <code>@blur</code><br>
                    The <code>.$touch()</code> method tells <code>vuelidate</code> to screen the input
                </li>
            </List>
            <List title="Adding Validation UI Feedback">
                <li>
                    One method is to add a bound class to the wrapping element<br>
                    <code>&lt;div :class="{invalid: $v.email.$error}"&gt;</code><br>
                    Where <code>email</code> is the <code>validations</code> rule<br>
                    And add CSS rules for the <code>invalid</code> class
                </li>
                <li>
                    Show an error message:<br>
                    <code>&lt;p v-if="$v.email.$error"&gt;Error Message&lt;/p&gt;</code><br>
                    (Any other property of <code>$v</code> can be accessed and used)<br>
                    or<br>
                    <code>&lt;p v-if="!$v.email.email"&gt;Error Message&lt;/p&gt;</code><br>
                    (To access the specific <code>validations</code> rule)
                </li>
            </List>
            <List title="Some Other Built-in Validators">
                <li><code>numeric</code></li>
                <li><code>decimal</code></li>
                <li><code>between(min, max)</code></li>
                <li><code>min(minimum)</code></li>
                <li><code>minLength(value)</code></li>
                <li><code>minValue(minimumValue)</code></li>
                <li>Validators with values consider greater than or equal to</li>
                <hr>
                <li><code>$v.foo.$params.bar.baz</code> provides access to the passed in values</li>
            </List>
            <List title="Checking for Equality">
                <li>Equality is checked with the built-in validator <code>sameAs()</code></li>
                <li>There are two ways of using this validator</li>
                <li><code>sameAs('foo')</code> - <code>foo</code> being the name of the first comparison field</li>
                <li><code>sameAs(vm => vm.foo)</code> - <code>vm</code> being the Vue instance</li>
            </List>
            <List title="Required-Unless">
                <li><code>requiredUnless</code> is basically a "required if..." statement</li>
                <li><code>requiredUnless(vm => vm.foo === 'bar')</code></li>
            </List>
            <List title="Validating Arrays">
                <li><code>$each: { value: validators }</code> as a validator</li>
                <li>Input element -<br><code>@event="$vm.foo.$each[index].value.$touch()"</code></li>
                <li>Error classes -<br><code>:class="{invalid: $v.foo.$each[index].$error}"</code></li>
            </List>
            <List title="Controlling the Submit Button">
                <li><code>:disabled="$v.$error"</code> - when incomplete</li>
                <li><code>:disabled="$v.$invalid"</code> - disabled at the start</li>
            </List>
            <List title="Custom Validators">
                <li>Validators are functions, and custom validators can be created as such</li>
                <li><code>customValidator: val => testingCode</code></li>
                <li>
                    Asynchronous validator are created by returning a Promise<br>
                    <code>return new Promise((resolve, reject) => { resolve(testCode) }</code><br>
                    Vuelidate is already configured to handle Promises<br>
                    Another option is using similar to <code>axios</code><br>
                    Useful for things like querying a database to see if the username is already taken
                </li>
            </List>
            <List title="Resources">
                <li><a href="https://vuelidate.netlify.com/" target="_blank">Vuelidate Documentation</a></li>
                <li><a href="https://github.com/vuelidate/vuelidate" target="_blank">Vuelidate GitHub</a></li>
            </List>
        </Card>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import List from '../components/List.vue';

export default {
    components: {
        Card,
        List,
    },
}
</script>

<style>

</style>
