<template>
    <div>
        <Card title="Authentication">
            <List title="Authentication in SPAs">
                <li>Comprised of a server and client</li>
                <li>Auth request is sent to server</li>
                <li>Server responds back with yes or no</li>
                <li>However, SPAs are not session-based</li>
                <li>Instead, a token (long, unique string) is kept on the server</li>
                <li>The token is created by the server in order to validate it is genuine</li>
                <li>Tokens are limited in their lifespan</li>
                <li>Tokens are normally stored in <code>localStorage</code> on the client side</li>
                <li>When a request is made, the token is passed along with it</li>
                <li><code>axios.post()</code> is one way to submit auth to a server</li>
            </List>
            <List title="Resources">
                <li><a href="https://jwt.io" target="_blank">JSON Web Token Documentation</a></li>
                <li><a href="https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex" target="_blank">Authenticaiton with Vuex</a></li>
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
