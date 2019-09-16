<template>
  <div id="app">
    <ul class="menu">
      <li class="dropdown" v-on:mouseover="showDropown = !showDropdown">
        <span>Course Notes</span>
        <div class="dropdown-content">
          <router-link tag="li" to="/" class="navLinks">Vue Instance</router-link>
          <router-link tag="li" to="/basics" class="navLinks">Basics</router-link>
          <router-link tag="li" to="/workflow" class="navLinks">Workflow</router-link>
          <router-link tag="li" to="/components" class="navLinks">Components</router-link>
          <router-link tag="li" to="/forms" class="navLinks">Forms</router-link>
          <router-link tag="li" to="/directives" class="navLinks">Directives</router-link>
          <router-link tag="li" to="/filtersmixins" class="navLinks">Filters/Mixins</router-link>
          <router-link tag="li" to="/animation" class="navLinks">Animation</router-link>
          <router-link tag="li" to="/usinghttp" class="navLinks">Using HTTP</router-link>
          <router-link tag="li" to="/routing" class="navLinks">Routing</router-link>
          <router-link tag="li" to="/vuex" class="navLinks">Vuex</router-link>
          <router-link tag="li" to="/axios" class="navLinks">Axios</router-link>
          <router-link tag="li" to="/authentication" class="navLinks">Authentication</router-link>
          <router-link tag="li" to="/formvalidation" class="navLinks">Form Validation</router-link>
        </div>
      </li>
      <li class="dropdown" v-on:mouseover="showDropdown = !showDropdown">
        <span>Exercises</span>
        <div class="dropdown-content">
          <router-link tag="li" to="/exercise1" class="navLinks">Exercise #1</router-link>
          <router-link tag="li" to="/exercise2" class="navLinks">Exercise #2</router-link>
          <router-link tag="li" to="/exercise3" class="navLinks">Exercise #3</router-link>
          <router-link tag="li" to="/exercise4" class="navLinks">Exercise #4</router-link>
          <router-link tag="li" to="/exercise5" class="navLinks">Exercise #5</router-link>
          <router-link tag="li" to="/formsexercise" class="navLinks">Forms</router-link>
          <router-link tag="li" to="/directivesexercise" class="navLinks">Custom Directives</router-link>
          <router-link tag="li" to="/filtersmixinsexercise" class="navLinks">Filters &amp; Mixins</router-link>
        </div>
      </li>
      <li class="dropdown" v-on:mouseover="showDropown = !showDropdown">
        <span>Projects</span>
        <div class="dropdown-content">
          <router-link tag="li" to="/monsterslayer" class="navLinks">Monster Slayer</router-link>
          <router-link tag="li" to="/serverdetails" class="navLinks">Server Details</router-link>
          <router-link tag="li" to="/moduleproject" class="navLinks">Module Project</router-link>
          <router-link tag="li" to="/wonderfulquotes" class="navLinks">Wonderful Quotes</router-link>
          <router-link tag="li" to="/superquiz" class="navLinks">The Super Quiz</router-link>
        </div>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
      showDropdown: false,
    };
  },
};
</script>

<style lang="scss">
@import './assets/vendor/bootstrap.min.css';
@import './assets/scss/App.scss';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: 1.2em;
  font-weight: 700;
  background-color: $Green;
  color: $White;
  text-align: center;

  & li {
    display: inline-block;
  }
}

.navLinks {
  color: $White;
  text-decoration: none;
  padding: 0.5em 1em;
  width: 100%;

  &:hover {
    background-color: $White;
    color: $Green;
  }
}

.dropdown {
  position: relative;
  display: inline-block;
  padding: 0.5em 1em;
  cursor: pointer;

  &:hover {
    background-color: $White;
    color: $Green;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    bottom: 100;
    left: 0;
    z-index: 1;
    min-width: 150px;
    background-color: $Green;
    color: $White;
  }
}

.dropdown:hover .dropdown-content {
  display: block;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.dropdownIsVisible {
  display: block;
}

h1,
h3 {
  text-align: center;
}
</style>
