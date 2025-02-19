<template>
  <div>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <slot name="sidebar">
        <TheSidebar />
      </slot>

      <!-- Main Content -->
      <div class="flex flex-col flex-1">
        <header class="bg-gray-800 text-white text-center p-4">
          <h1>Vuxt Features Tests</h1>
        </header>

        <main class="flex-1 p-8">
          <slot />
        </main>

        <footer class="bg-gray-800 text-white text-center p-4">
          <p class="text-sm">
            © 2024 Vuxt Features Tests
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>
