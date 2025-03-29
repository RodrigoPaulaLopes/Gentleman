<template>
  <div class="flex gap-8 flex-wrap justify-center items-center">
    <div v-for="n in 20" :key="n" class="card bg-base-100 w-96 shadow-sm">
      <figure>
        <div class="skeleton w-full h-72"></div>
      </figure>

      <div class="card-body">
        <h2 class="skeleton w-3/4 h-6"></h2>
        <p class="skeleton w-full h-4"></p>
        <p class="skeleton w-5/6 h-4"></p>

        <div class="card-actions justify-end">
          <button class="btn skeleton w-24 h-10"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsSkeleton",
};
</script>
