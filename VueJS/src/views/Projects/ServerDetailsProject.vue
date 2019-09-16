<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '../../components/ServerDetailsProject/Shared/Header.vue';
import Footer from '../../components/ServerDetailsProject/Shared/Footer.vue';
import Servers from '../../components/ServerDetailsProject/Server/Servers.vue';
import ServerDetails from '../../components/ServerDetailsProject/Server/ServerDetails.vue';

export default {
  name: 'ServerDetailsProject',
  components: {
    'app-header': Header,
    'app-servers': Servers,
    'app-server-details': ServerDetails,
    'app-footer': Footer,
  },
};
</script>
