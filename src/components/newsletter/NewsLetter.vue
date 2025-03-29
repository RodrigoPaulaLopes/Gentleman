<template>
    <div class="bg-neutral h-[300px] flex flex-col justify-center items-center text-white p-4 mt-8">
        <h1 class="text-3xl font-bold text-center">Receba Nossas Novidades</h1>
        <p class="text-lg mt-2 text-center">Cadastre-se para receber ofertas exclusivas e lançamentos em primeira mão</p>
        <div class="flex sm:flex-row flex-col mt-4 gap-2 sm:w-[500px] w-full">
            <input type="text" placeholder="Digite seu e-mail" class="input input-bordered w-full placeholder:text-gray-500" />
            <button class="btn bg-white">Cadastrar</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "NewsLetter",
    data() {
        return {
            email: "",
        };
    },
    methods: {
        subscribe() {
            // Aqui você pode adicionar a lógica para enviar o e-mail para o backend
            console.log("Email cadastrado:", this.email);
            this.email = ""; // Limpa o campo de entrada após o envio
        },
    },
    computed: {
        isEmailValid() {
            // Validação simples de e-mail
            return this.email.includes("@") && this.email.includes(".");
        },
    },
    mounted() {
        // Aqui você pode adicionar lógica para verificar se o usuário já está cadastrado
    },
}
</script>
<style>
</style>