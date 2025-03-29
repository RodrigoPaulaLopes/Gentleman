<template>
    <div class="min-h-screen bg-[#f8f8f8]">
      <div class="flex min-h-screen">
        <div class="hidden lg:block w-1/2 relative">
          <div class="absolute inset-0 bg-black/40" ></div>
          <img
            src="https://images.unsplash.com/photo-1483118714900-540cf339fd46?auto=format&fit=crop&q=80"
            alt="Fashion"
            class="h-full w-full object-cover"
          />
          <div class="absolute top-8 left-8">
            <h1 class="text-3xl font-bold text-white">GENTLEMAN</h1>
          </div>
          <div class="absolute bottom-12 left-8 right-8">
            <h2 class="text-4xl font-bold text-white mb-4">Junte-se a nós</h2>
            <p class="text-white/90 text-lg">Crie sua conta e descubra o melhor da moda masculina</p>
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
                <h2 class="text-3xl font-bold text-gray-900 mb-3">Criar conta</h2>
                <p class="text-gray-600">
                  Preencha seus dados para começar
                </p>
              </div>

              <form onSubmit={handleSubmit} class="space-y-6">
                <div class="relative">
                  <label htmlFor="name" class="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo
                  </label>
                  <div class="relative">
                    <User class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      class="pl-10 w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="João Silva"
                    />
                  </div>
                </div>

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
                  <label htmlFor="password" class="block text-sm font-medium text-gray-700 mb-2">
                    Senha
                  </label>
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

                <div class="relative">
                  <label htmlFor="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
                    Confirmar senha
                  </label>
                  <div class="relative">
                    <Lock class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      id="confirmPassword"
                      type="password"
                      required
                      value={confirmPassword}
                      class="pl-10 w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div class="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    required
                    class="h-4 w-4 border-2 border-gray-300 rounded text-black focus:ring-black"
                  />
                  <label htmlFor="terms" class="ml-2 block text-sm text-gray-700">
                    Li e aceito os
                    <a href="#" class="font-semibold text-black hover:underline">
                      termos de uso
                    </a>
                    e a
                    <a href="#" class="font-semibold text-black hover:underline">
                      política de privacidade
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  @click.prevent="handleSubmit"
                  class="w-full py-4 px-6 bg-black text-white rounded-lg hover:bg-gray-900 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Criar conta
                </button>

                <div class="text-center mt-6">
                  <p class="text-gray-600">
                    Já tem uma conta?
                    <a href="#" class="font-semibold text-black hover:underline" @click="$router.push('/login')">
                    
                      Faça login
                    </a>
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
        name: "Register",
        data() {
            return {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                errorMessage: "",
            };
        },
        methods: {
            handleSubmit() {
                // Handle form submission logic here
                if (this.password !== this.confirmPassword) {
                    this.errorMessage = "As senhas não coincidem.";
                    return;
                }
                this.$router.push("/home");
            },
        },
        mounted() {
            // Check if user is already logged in
            const isLoggedIn = false; // Replace with actual login check
            if (isLoggedIn) {
                this.$router.push("/home");
            }
        },
    }
</script>
<style>
</style>