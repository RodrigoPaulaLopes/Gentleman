<template>

  <BannerComponent></BannerComponent>
  <CardsSkeleton v-if="loading"> </CardsSkeleton>
  <CardProducts v-else :products="products"></CardProducts>
  <CardsCategoria></CardsCategoria>
  <NewsLetter></NewsLetter>
</template>

<script>
import BannerComponent from "../../components/banner/Banner.vue";
import CardProducts from "../../components/cards/CardProducts.vue";
import CardsSkeleton from "../../components/cards/CardsSkeleton.vue";
import NewsLetter from "../../components/newsletter/NewsLetter.vue";
import CardsCategoria from "../../components/cards/CardsCategoria.vue";
export default {
  name: "HomeComponent",
  components: {
    CardsSkeleton,
    CardProducts,
    BannerComponent,
    NewsLetter, 
    CardsCategoria
  },
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  methods: {
    getFullName(user) {
      return `${user.name.first} ${user.name.last}`;
    },
    fetchPoducts() {
      this.loading = true;
      fetch("https://fakestoreapi.com/products?limit=8")
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          this.products = json;
          this.loading = false;
        })
        .catch(() => {
          this.loading = true;
        });
    },
  },
  created() {
    this.fetchPoducts();
  },
};
</script>
