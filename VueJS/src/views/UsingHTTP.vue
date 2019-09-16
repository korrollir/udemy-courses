<template>
  <div>
    <Card title="Using HTTP and Vue-Resource">
      <List>
        <li>
          <a href="https://github.com/pagekit/vue-resource" target="_blank">Vue-resource</a> is a package providing services for handling HTTP requests and responses
        </li>
        <li>Vue-resource uses the <code>Promise</code> library, allowing access to the Promise chain</li>
        <li>
          Syntax: <code>this.$http.method();</code>
          <br>
          <code>method()</code> is any <a href="https://www.w3schools.com/tags/ref_httpmethods.asp" target="_blank">HTTP method</a>
        </li>
        <li>
          Resources: Mapping of common tasks to HTTP requests
          <br>
          Syntax: <code>this.$resource('url', [params], [actions], [options])</code>
          <br>
          Syntax with variable url: <code>this.$resource('{foo}', ...)</code>
          <br>
          Comes with default actions: get, save, query, update, remove, delete 
          <br>
          Resources are only an alternative to using HTTP requests
        </li>
        <li>
          Vue-resource was retired as the recommended Ajax package
          <br>
          Axios is now preferred
        </li>
      </List>
    </Card>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <h2>Http</h2>
          <div class="form-group">
            <label for="username">Username</label>
            <input name="username" type="text" class="form-control" v-model="user.username">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input name="email" type="text" class="form-control" v-model="user.email">
          </div>
          <button class="btn btn-primary" @click="submit">Submit</button>
          <hr>
          <input type="text" class="form-control" v-model="node">
          <br><br>
          <button class="btn btn-primary" @click="fetchData">Get Data</button>
          <ul class="list-group">
            <li class="list-group-item" v-for="u in users" :key="u.username">{{ u.username }} - {{ u.email }}</li>
          </ul>
        </div>
      </div>
    </div>
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
  data() {
    return {
      user: {
        username: '',
        email: '',
      },
      users: [],
      node: 'data',
      resource: {},
    };
  },
  methods: {
    created() {
      const customActions = {
        saveAlt: {method: 'POST', url: 'alternative.json'},
        getData: {method: 'GET'},
      };
      // {foo} is a templating reference point
      this.resource = this.$resource('{node}.json', {}, customActions);
    },
    fetchData() {
      // Empty string is possible due to config in main.js of root URL
      // for the Firebase connection
      // this.$http.get('data.json')
      //   .then(response => {
      //     return response.json();
      //     console.log(data);
      //   })
      //   .then(data => {
      //     const resultArray = [];

      //     for (let key in data) {
      //       resultArray.push(data[key]);
      //     }

      //     this.users = resultArray;
      //   });

      // Using template URLs
      this.resource.getData({node: this.node})
        .then(response => {
          return response.json();
          console.log(data);
        })
        .then(data => {
          const resultArray = [];

          for (let key in data) {
            resultArray.push(data[key]);
          }

          this.users = resultArray;
        });
    },
    submit() {
      // Basic ajax call
      // this.$http.post('data.json', this.user)
      //   .then(response => {
      //     console.log(response);
      //   }, error => {
      //     console.log(error);
      //   });

      // Vue-resource call using a created resource
      // this.resource.save({}, this.user);

      // Using custom method
      this.resource.saveAlt(this.user);
    },
  },
};
</script>

<style>

</style>
