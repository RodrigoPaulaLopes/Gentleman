<template>
  <div class="grid grid-flow-col grid-rows-3 sm:grid-rows-2 gap-2 sm:gap-8 mb-8">
    <div class="mx-5 sm:row-span-2  rounded-2xl bg-white shadow-2xl">
      <div class="flex flex-col items-center h-full rounded-2xl py-10">
        <div class="avatar">
          <div class="w-24 rounded-full cursor-pointer">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div>
          <h1 class="text-2xl text-center font-bold">Rodrigo Lopes</h1>
          <h2 class="text-lg text-center">Cliente desde 2025</h2>
        </div>
        <nav class="w-full mt-10 px-5">
          <ul class="menu menu-vertical p-0 w-full gap-2">
            <li>
              <a href="#" class="text-lg">
                <i class="fas fa-user"></i>
                Dados Pessoais
              </a>
            </li>
            <li>
              <a href="#" class="text-lg">
                <i class="fas fa-box"></i>
                Meus Pedidos
              </a>
            </li>
            <li>
              <a href="#" class="text-lg">
                <i class="fas fa-map-marker"></i>
                Endereços
              </a>
            </li>
            <li>
              <a href="#" class="text-lg">
                <i class="fas fa-heart"></i>
                Lista de Desejos
              </a>
            </li>
            <li>
              <a href="#" class="text-lg">
                <i class="fas fa-cog"></i>
                Configurações
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="mx-5 sm:col-span-8   rounded-2xl bg-white shadow-2xl">
      <div class="px-10 mt-10">
        <h1 class="text-lg font-semibold">Dados Pessoais</h1>
      </div>
      <div class="grid sm:grid-cols-2 gap-4 p-10">
        <div class="flex flex-col gap-2">
          <label for="">Nome Completo</label>
          <input
            type="text"
            placeholder="Nome Completo"
            class="input input-bordered w-full rounded-2xl"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="">E-mail</label>
          <input
            type="text"
            placeholder="E-mail"
            class="input input-bordered w-full rounded-2xl"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="">CPF</label>
          <input
            type="text"
            placeholder="123.456.789-00"
            class="input input-bordered w-full rounded-2xl"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="">Telefone</label>
          <input
            type="text"
            placeholder="(11) 91234-5678"
            class="input input-bordered w-full rounded-2xl"
          />
        </div>
        <div>
          <button class="btn btn-secondary w-full sm:w-auto">Salvar Alterações</button>
        </div>
      </div>
    </div>
    <div class="mx-5 sm:col-span-8  rounded-2xl bg-white shadow-2xl">
      <div class="px-10 mt-10">
        <h1 class="text-lg font-semibold">Ultimos Pedidos</h1>
      </div>
      <div class="px-5">
        <ul class="list rounded-box shadow-md">
          <li class="list-row">
            <div class="flex items-center gap-2">
              <i class="fas fa-box text-2xl"></i>
            </div>
            <div>
              <div>Pedido #001</div>
              <div class="text-xs uppercase font-semibold opacity-60">
                Realizado em 01/01/2025
              </div>
            </div>
            <div>
              <div  class="text-end">R$ 299,99</div>
              <div class="text-xs italic font-semibold opacity-60 text-info">
                Em andamento
              </div>
            </div>
          </li>
          <li class="list-row">
            <div class="flex items-center gap-2">
              <i class="fas fa-box text-2xl"></i>
            </div>
            <div>
              <div>Pedido #001</div>
              <div class="text-xs uppercase font-semibold opacity-60 ">
                Realizado em 01/01/2025
              </div>
            </div>
            <div>
              <div class="text-end">R$ 299,99</div>
              <div class="text-xs italic font-semibold opacity-60 text-info">
                Em andamento
              </div>
            </div>
          </li>
          <li class="list-row">
            <div class="flex items-center gap-2">
              <i class="fas fa-box text-2xl"></i>
            </div>
            <div>
              <div >Pedido #001</div>
              <div class="text-xs uppercase font-semibold opacity-60">
                Realizado em 01/01/2025
              </div>
            </div>
            <div>
              <div  class="text-end">R$ 299,99</div>
              <div class="text-xs italic font-semibold opacity-60 text-end text-error">
                Cancelado
              </div>
            </div>
          </li>
          <li class="list-row">
            <div class="flex items-center gap-2">
              <i class="fas fa-box text-2xl"></i>
            </div>
            <div>
              <div>Pedido #001</div>
              <div class="text-xs uppercase font-semibold opacity-60">
                Realizado em 01/01/2025
              </div>
            </div>
            <div>
              <div>R$ 299,99</div>
              <div class="text-xs italic font-semibold opacity-60 text-end text-success">
                Entregue
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Perfil",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
    .card-border {
        border: 0.1px solid #e5e7eb;
    }
</style>
