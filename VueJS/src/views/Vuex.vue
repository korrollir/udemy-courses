<template>
    <div>
        <Card title="Vuex - App State Management">
            <List title="Introduction">
                <li>Vuex provides a whole app state management pattern</li>
                <li>This is highly useful for larger applications</li>
                <li>State - source of truth for the app</li>
            </List>
            <List title="Use Cases">
                <li>Reduction of passing props up and down the parent-child tree</li>
                <li>When multiple views depend upon the same piece of states</li>
                <li>Actions from different views may need to mutate the same piece of state</li>
            </List>
            <List title="Common Patterns">
                <li>Maintain the store in a <code>store.js</code> file</li>
            </List>
            <List title="Store Instance Properties">
                <li><code>store</code> - The centralized data</li>
                <li><code>getters</code> - Computed properties for the store</li>
                <li><code>mutations</code> - Events to call a change in state</li>
                <li><code>actions</code> - Commit mutations to state and may contain async operations</li>
                <li><code>modules</code> - Allows for breaking state into multiple modules</li>
            </List>
            <List title="Getters">
                <li>Getters are used to perform calculations based on state data</li>
                <li><code>getters: { state => { code } }</code></li>
                <li>
                    <code>mapGetters</code> is a helper function to reduce getter declarations in the component<br>
                    Make sure to <code>import { mapGetters } from 'vuex'</code><br>
                    Syntax:<br>
                    &nbsp;&nbsp;<code>computed: { mapGetters(['foo', 'bar']) }</code><br>
                    &nbsp;&nbsp;<code>computed: { ...mapGetters({ propertyName: 'foo' }) }</code><br>
                    The spread (<code>...</code>) operator allows creation of other computed properties<br>
                    <code>npm install --save-dev babel-preset-stage-2</code> to add support for the rest and spread operators<br>
                    Add <code>["stage-2"]</code> to <code>.babelrc</code>
                </li>
            </List>
            <List title="Mutations">
                <li>Mutations are reponsible for changing state</li>
                <li>When a mutation is "committed", state is updated, and all components listening are informed</li>
                <li>
                    Mutations are configured much like getters<br>
                    The difference is in calling them.<br>
                    <code>this.$store.commit('foo', payload)</code>
                </li>
                <li><code>mapMutations(['foo', 'bar'])</code> is the helper function for a component</li>
                <li>Mutations have access to <code>payload</code>, the passed in value</li>
                <li>
                    Mutations have one restriction: They must be synchronous<br>
                    Async operations in mutations changes the actual order of state mutations<br>
                </li>
            </List>
            <List title="Actions">
                <li>Actions help to solve the problem of async operations in mutations</li>
                <li><code>actions: { foo: () => { code } }</code></li>
                <li>
                    It is good practice to commit mutations through actions<br>
                    <code>actions: { foo: ({ commit }) => { commit('bar') }</code>
                </li>
                <li>
                    Actions are the place to perform async operations<br>
                    <code>setTimeout</code><br>
                    API calls
                </li>
                <li>
                    <code>mapActions</code> is the component helper function<br>
                    In <code>store.js</code>:<br>
                    <code>
                        foo: ({ commit }, payload) => {<br>
                        &nbsp;&nbsp;commit('bar', payload);<br>
                        }
                    </code>
                </li>
                <li><code>payload</code> is limited to one argument, but using an object gets around the limited</li>
            </List>
            <List title="v-model and Vuex">
                <li>Using <code>v-model</code> directly on a store value will not work</li>
                <li>
                    To solve this problem:<br>
                    <code>this.$store.dispatch('foo', event.target.value)</code> in a method<br>
                    or<br>
                    Turn a computed property into an object and use the <code>get()</code> and <code>set()</code> methods<br>
                    The second option is rarely used, and it is preferred to use the first
                </li>
            </List>
            <List title="Structure and Modularizing">
                <li>Modules are used to break the store into more manageable parts</li>
                <li>The recommended pattern is to break up the store by related state, getters, mutations, and actions</li>
                <li>See Resources below for other options</li>
                <li>There is still only ONE central store</li>
                <li>To accmplish modularization, Vuex provides the <code>modules</code> object</li>
                <li>getters, mutations, and actions follow the <code>export const foo</code> / <code>import * as actions from './path'</code> pattern</li>
                <li>
                    Common namespacing pattern:<br>
                    Separate <code>types.js</code> file setting constants<br>
                    <code>export const DOUBLE_COUNTER = 'counter/DOUBLE_COUNTER'</code><br>
                    Importing into store <code>import * as types from './path'</code><br>
                    Using as <code>[types.DOUBLE_COUNTER]: state => { code }</code><br>
                    Importing into the component as above and converting the map helper (<code>mapGetters</code>, etc) to an object
                    and declaring <code>doubleCounter: types.DOUBLE_COUNTER</code><br>
                    The <code>types</code> file will prevent duplication of method names
                </li>                
            </List>
            <List title="Resources">
                <li><a href="https://github.com/vuejs/vuex" target="_blank">Vuex Github</a></li>
                <li><a href="https://vuex.vuejs.org/en/" target="_blank">Vuex Documentation</a></li>
                <li><a href="https://github.com/vuejs/vuex/releases/tag/v2.1.0" target="_blank">Vuex 2.1+ Module Namespacing</a></li>
                <li><a href="https://medium.com/3yourmind/large-scale-vuex-application-structures-651e44863e2f" target="_blank">Scaling a Vuex App</a></li>
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
