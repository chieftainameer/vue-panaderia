<template>
  <v-app>
    <v-app-bar app color="success lighten-1" dark>
      <v-toolbar-title>
        <v-img
          lazy-src="require('../assets/brand.png')"
          max-height="150px"
          max-width="150px"
          src="./assets/new.png"
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="success lighten-1" elevation="0" dark>
        <v-icon left>mdi-home </v-icon>
        <router-link to="/home">Home</router-link>
      </v-btn>
      <v-btn color="success lighten-1" elevation="0" dark>
        <v-icon left>mdi-shopping </v-icon>
        <router-link to="/shop">Shop</router-link>
      </v-btn>
      <v-btn color="success lighten-1" elevation="0" dark>
        <v-icon left>mdi-information </v-icon>
        About Us
      </v-btn>
      <v-btn color="success lighten-1" elevation="0" dark>
        <v-icon left>mdi-at </v-icon>
        Contact Us
      </v-btn>
      <v-btn color="success lighten-1" elevation="0" dark>
        <v-icon left>mdi-cart </v-icon>
        Cart
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
// import Home from "./components/Home";
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
a{
  text-decoration: none !important;
  color:white !important;
}
</style>