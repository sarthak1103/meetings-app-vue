<template>
    <b-navbar toggleable="lg" type="light" variant="info">
      <b-navbar-brand to="/">Meetings App</b-navbar-brand>
  
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  
      <b-collapse id="nav-collapse" is-nav >
        <b-navbar-nav>
          <!-- We are building Single Page Application (SPA) -->
          <!-- if we use "to" instead of "href" internally Vue Bootstrap uses <router-link> instead of <a> -> This will avoid page refresh -->
          <b-nav-item to="/calendar">Calendar</b-nav-item>
          <b-nav-item to="/mettings">Meetings</b-nav-item>
          <b-nav-item to="/teams">Teams</b-nav-item>
        </b-navbar-nav>
  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Hello {{email}}</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </template>

<script>
export default {
  name:'AppMenu',
  
}
</script>

<style>
 
</style>