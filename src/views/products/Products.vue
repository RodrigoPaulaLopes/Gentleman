<template>
  <div
    class="flex flex-col justify-center items-center sm:justify-start sm:flex-row sm:px-5 lg:px-20 py-8 gap-2"
  >
    <div class="flex justify-end items-baseline w-full pr-7 sm:hidden">
      <button class="" @click="toogleHide">
        <i class="fas" :class="hide_class"></i>
      </button>
    </div>
    <div :hidden="hide" class="flex flex-col sm:flex-row sm:w-full justify-center items-center sm:justify-start gap-4">
      <select class="select">
        <option selected>Todos</option>
        <option>Camisas</option>
        <option>Calças</option>
        <option>Acessorios</option>
      </select>
      <label class="input">
        <svg
          class="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" class="grow" placeholder="Search" />
      </label>
      <button>
        <i class="fas fa-"></i>
      </button>
      <button class="btn btn-neutral w-[320px] sm:w-[100px]">Procurar</button>
    </div>
  </div>
  <CardsSkeleton v-if="loading"> </CardsSkeleton>

  <div
    v-else
    class="grid grid-cols-1 pb-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-8 px-4 lg:px-20"
  >
    <CardProductItem
      :products="products"
      :toogleIcon="toogleIcon"
      :type_icone="type_icone"
    ></CardProductItem>
  </div>
</template>
<script>
import CardsSkeleton from "../../components/cards/CardsSkeleton.vue";
import CardProducts from "../../components/cards/CardProducts.vue";
import CardProductItem from "../../components/cards/CardProductItem.vue";
export default {
  name: "Products",
  components: {
    CardProducts,
    CardsSkeleton,
    CardProductItem,
  },
  data() {
    return {
      products: [],
      loading: true,
      hide: false,
      hide_class: "fa-chevron-down",
      type_icone: "fas",
    };
  },
  methods: {
    getFullName(user) {
      return `${user.name.first} ${user.name.last}`;
    },
    toogleIcon() {
      this.type_icone = this.type_icone === "fas" ? "far" : "fas";
    },
    fetchPoducts() {
      this.loading = true;
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.products = json;
          this.loading = false;
        })
        .catch(() => {
          this.loading = true;
        });
    },
    toogleHide() {
      this.hide = !this.hide;
      this.hide_class = this.hide ? "fa-chevron-down" : "fa-chevron-up";
    },
  },
  created() {
    this.fetchPoducts();
  },
};
</script>
<style></style>
