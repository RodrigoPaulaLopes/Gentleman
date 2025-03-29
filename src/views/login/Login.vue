<template>
    <div class="h-screen bg-[#f8f8f8]">
      <div class="flex h-screen">
        <div class="hidden lg:block w-1/2 relative">
          <div class="absolute inset-0 bg-black/40"></div>
          <img
            src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80"
            alt="Fashion"
            class="h-full w-full object-cover"
          />
          <div class="absolute top-8 left-8">
            <h1 class="text-3xl font-bold text-white">GENTLEMAN</h1>
          </div>
          <div class="absolute bottom-12 left-8 right-8">
            <h2 class="text-4xl font-bold text-white mb-4">Bem-vindo de volta</h2>
            <p class="text-white/90 text-lg">Entre para descobrir as últimas tendências em moda masculina</p>
          </div>
        </div>

        <div class="w-full lg:w-1/2 flex flex-col">
          <div class="flex justify-between items-center p-8">
            <a href="/" class="flex items-center text-gray-600 hover:text-black">
              <ArrowLeft class="h-5 w-5 mr-2" />
              Voltar para a loja
            </a>
            <div class="lg:hidden">
              <h1 class="text-2xl font-bold">GENTLEMAN</h1>
            </div>
          </div>

          <div class="flex-1 flex items-center justify-center px-8 sm:px-12 lg:px-16">
            <div class="w-full max-w-md">
              <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 mb-3">Entre em sua conta</h2>
                <p class="text-gray-600">
                  Acesse sua conta para uma experiência personalizada
                </p>
              </div>

              <form onSubmit={handleSubmit} class="space-y-6">
                <div class="relative">
                  <label htmlFor="email" class="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <div class="relative">
                    <Mail class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      class="pl-10 w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div class="relative">
                  <div class="flex items-center justify-between mb-2">
                    <label htmlFor="password" class="block text-sm font-medium text-gray-700">
                      Senha
                    </label>
                    <a href="#" class="text-sm font-medium text-black hover:underline">
                      Esqueceu a senha?
                    </a>
                  </div>
                  <div class="relative">
                    <Lock class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="password"
                      type="password"
                      required
                      value={password}
                      class="pl-10 w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div class="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    class="h-4 w-4 border-2 border-gray-300 rounded text-black focus:ring-black"
                  />
                  <label htmlFor="remember" class="ml-2 block text-sm text-gray-700">
                    Lembrar de mim
                  </label>
                </div>

                <button
                  type="submit"
                  @click.prevent="handleSubmit"
                  class="w-full py-4 px-6 bg-black text-white rounded-lg hover:bg-gray-900 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Entrar
                </button>

                <div class="text-center mt-6">
                  <p class="text-gray-600">
                    Ainda não tem uma conta?
                    <router-link to="/register" class="font-semibold text-black hover:underline" >
                      Cadastre-se
                    </router-link >
                  </p>
                </div>
              </form>
            </div>
          </div>

          <div class="p-8 text-center text-sm text-gray-500">
            &copy; 2025 GENTLEMAN. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
                errorMessage: "",
            };
        },
        methods: {
            handleSubmit() {
                // Aqui você pode adicionar a lógica de autenticação
                // Por exemplo, enviar os dados para uma API
                this.$router.push("/home");
            },
            viewCart() {
                this.$router.push("/cart");
            },
        },
    }
</script>

<style scoped>
</style>