<template>
  <footer class="mb-4 grid grid-cols-1 items-end space-y-6 sm:mb-6">
    <div
      class="flex items-center justify-center space-x-8 opacity-70 transition-opacity duration-300 ease-in-out hover:opacity-100"
    >
      <picture>
        <img
          src="/logo_kaufland.png"
          alt="logo Kaufland aktivismus"
          class="h-16"
          type="image/png"
        >
      </picture>
      <picture>
        <img
          src="/via_logo.png"
          alt="logo Nadace Via"
          class="h-16"
          type="image/png"
        >
      </picture>
    </div>
    <p class="mx-auto max-w-lg text-center text-sm text-gray-500">
      Zřizovatelem zahrady je Souhra, z.s a Komise místní samosprávy Pražské předměstí sever, partnerem Nadace Via
      a Kaufland.
    </p>
    <p class="mx-auto max-w-lg text-center text-sm text-gray-500">
      <NuxtLink to="/gdpr" class="underline hover:no-underline">
        Ochrana osobních údajů
      </NuxtLink>
    </p>
    <p class="text-center text-sm text-gray-500">
      Ilustrace:
      <a
        class="underline hover:no-underline"
        href="https://icons8.com/illustrations/author/zD2oqC8lLBBA"
      >Icons 8</a>
      a <a class="underline hover:no-underline" href="https://icons8.com/illustrations">Ouch!</a>
    </p>
  </footer>
</template>
