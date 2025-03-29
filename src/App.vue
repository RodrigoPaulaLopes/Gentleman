<template>
    <div>
      <HeaderComponent v-if="!isLoginPage" />
  
      <div class="max-w-[2040px] mx-auto justify-center items-center bg-gray-100">
        <router-view></router-view>
      </div>
      <FooterComponent v-if="!isLoginPage" />
    </div>
  </template>
  
  <script>
  import FooterComponent from "./components/footer/FooterComponent.vue";
  import HeaderComponent from "./components/header/HeaderComponent.vue";
  
  export default {
    name: "App",
    components: {
      HeaderComponent,
      FooterComponent,
    },
    computed: {
      isLoginPage() {
        return this.$route.path === "/login" || this.$route.path === "/register";
      },
    },
  };
  </script>
  