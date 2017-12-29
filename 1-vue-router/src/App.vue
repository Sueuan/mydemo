<template>
  <div id="app">
   <ul>
   <router-link to="./page1" tag="li">
      <a href="javascript:;">页面一</a>
   </router-link>
   <router-link to="./page2" tag="li">
      <a href="javascript:;">页面二</a>
   </router-link>
    
   </ul>
  <router-view ></router-view>
    
  </div>
</template>

<script>
export default {
 
}
</script>

<style>


</style>
