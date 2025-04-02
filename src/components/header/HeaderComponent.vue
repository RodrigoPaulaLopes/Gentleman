<template>
  <header>
    <nav>
      <div class="navbar bg-base-100 shadow-sm px-10">
        <div class="flex-1 justify-start items-center">
          <router-link to="/home" class="flex gap-2 items-center justify-center h-[50px] w-[200px]">
            <img
              src="../../assets/img/logo.png"
              alt="Logo"
              class="rounded-full h-auto w-auto"
            />
          </router-link>
        </div>
        <div class="flex-none">
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <i class="far fa-heart text-lg"></i>
                <span class="indicator-item text-success text-sm">8</span>
              </div>
            </div>
            <div
              tabindex="0"
              class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div class="card-body">
                <span class="text-lg font-bold">8 Itens</span>
                <span class="">Total: R$ 1399,99</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block" @click="viewCart">
                    Ir para o carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <i class="fas fa-shopping-cart text-lg"></i>
                <span class="indicator-item text-success text-sm">8</span>
              </div>
            </div>
            <div
              tabindex="0"
              class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div class="card-body">
                <span class="text-lg font-bold">8 Itens</span>
                <span class="">Total: R$ 1399,99</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block" @click="viewCart">
                    Ir para o carrinho
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <router-link to="/home"> Home </router-link>
              </li>
              <li>
                <router-link to="/profile"> Perfil </router-link>
              </li>
              <li><a>Configurações</a></li>
              <li class="bg-red"><router-link to="/login">Sair</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    viewCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
.router-link-active {
  color: black
}
</style>
