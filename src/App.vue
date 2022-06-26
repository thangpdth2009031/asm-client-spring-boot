<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link to="/roads" class="navbar-brand">List Road</router-link>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/create" class="nav-link">Create Road</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" class="nav-link">List District</router-link>
      </li>
    </div>
  </nav>
  <div class="container mt-3">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
