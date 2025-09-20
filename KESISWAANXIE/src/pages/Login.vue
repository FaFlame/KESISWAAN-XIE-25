<template>
  <div
    class="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
    style="background-image: url('/img/bg-login.jpg');"
  >
    <!-- Overlay gelap opsional -->
    <div class="absolute inset-0 bg-black/30 z-0"></div>

    <!-- Box login -->
    <div class="relative z-10 bg-white/80 p-8 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <form>
        <div class="mb-4">
          <label class="block mb-1 font-semibold" for="email">Email</label>
          <input
            type="email"
            id="email"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan email"
          />
        </div>
        <div class="mb-6">
          <label class="block mb-1 font-semibold" for="password">Password</label>
          <input
            type="password"
            id="password"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Masukkan password"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
/* Tidak perlu tambahan khusus, semua sudah pakai Tailwind */
</style>