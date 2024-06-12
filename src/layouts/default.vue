<template>
  <div class="min-h-screen w-screen flex flex-col">
    <TheNav class="h-9rem" />

    <main class="max-h-[calc(100vh-9rem)] w-full flex justify-center overflow-auto py-2rem">
      <section class="max-w-140ch px-8 pt-5 container">
        <router-view />
      </section>
    </main>
  </div>
</template>
