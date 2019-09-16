<template>
    <div>
        <Card title="Using Axios">
            <List title="Basics">
                <li>Axios is a popular package for making HTTP request in JS applications</li>
                <li>It's a solid replacement for vue-resource</li>
                <li>Install with <code>npm install --save axios</code></li>
                <li>
                    Axios does not need to be registered with the Vue app<br>
                    Instead, import Axios in the component<br>
                </li>
                <li>
                    Axios can be configured with a base URL in the main JS file<br>
                    &nbsp;&nbsp;<code>axios.defaults.baseURL = 'url'</code><br>
                    Refer to the documentation for other default configs
                </li>
            </List>
            <List title="Making Requests">
                <li>
                    It's important to note that Axios returns a Promise and will need to be handled as such<br>
                    Be sure to build the component/app to handle the asynchronous request
                </li>
                <li>
                    Syntax:<br>
                    Axios has access to RESTful methods<br>
                    <code>axios.get('url', data, {configOptions}).then()</code><br>
                    <code>axios.post('url', data, {configOptions}).then()</code><br>
                    <code>axios.put('url', data, {configOptions}).then()</code><br>
                    <code>axios.delete('url', data, {configOptions}).then()</code><br>
                    <code>axios.patch('url', data, {configOptions}).then()</code><br>
                    See the documentation for more methods
                </li>
                <li>
                    Axios returns a response object<br>
                    Only process the response data in the Promise callback in <code>.then()</code><br>
                    Otherwise, operations on the data may be called before it's available
                </li>
            </List>
            <List title="Interceptors">
                <li>Interceptors are functions that "catch" every request or response before they are processed</li>
                <li>
                    They are configured by accessing the <code>axios.interceptors</code> object<br>
                    <code>const reqInterceptor = axios.interceptors.request.use(config => { code; return config; });</code><br>
                    <code>const resInterceptor = axios.interceptors.response.use(res => { code; return res; });</code>
                </li>
                <li>
                    Interceptors are removed by:<br>
                    <code>axios.interceptors.request.eject(reqInterceptor);</code><br>
                    <code>axios.interceptors.response.eject(resInterceptor);</code>
                </li>
            </List>
            <List title="Resources">
                <li><a href="https://github.com/axios/axios" target="_blank">Axios documentation</a></li>
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
