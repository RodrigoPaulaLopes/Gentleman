<template>
  <div class="bg-gray-100"> 
    <h1 class="text-center sm:text-5xl text-2xl font-medium mb-6">Nossos Produtos em Destaque</h1>
    <div class="flex gap-8 flex-wrap justify-center items-center">
      <CardProductItem :products="products" :type_icone="type_icone" :toogleIcon="toogleIcon"></CardProductItem>
    </div>
  </div>
</template>

<script>
import CardProductItem from './CardProductItem.vue';
export default {
  name: "CardProducts",
  components: {
    CardProductItem
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      type_icone: "fas",
    };
  },
  methods: {
    toogleIcon() {
      this.type_icone = this.type_icone === "fas" ? "far" : "fas";
    },
  },
  computed: {
    getFullName() {
      return `${this.user.name.first} ${this.user.name.last}`;
    },
  },
};
</script>
