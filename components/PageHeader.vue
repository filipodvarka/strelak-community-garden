<template>
  <div class="relative flex h-96 justify-center pt-10 pl-20 sm:pt-20 sm:pl-0">
    <nuxt-img
      src="/hk_mesto_logo.png"
      type="image/png"
      width="224"
      height="136"
      alt="logo města Hradec Králové"
      class="absolute left-[-24px] sm:top-[56px] top-[80px] w-48"
    />
    <picture>
      <nuxt-img
        src="/atomic-flower-1.png"
        type="image/png"
        width="144"
        height="240"
        alt="žlutá květina v květináči"
        class="absolute left-4 top-48 isolate w-24"
      />
    </picture>
    <picture>
      <img
        src="/fabulous-garden-bed.png"
        type="image/png"
        width="800"
        height="431"
        alt="záhon s několika květinami"
        class="absolute right-0 bottom-0 isolate w-72 sm:w-96"
        loading="lazy"
      >
    </picture>
    <h1
      class="isolate mb-40 max-w-xl text-right font-barrio text-4xl font-extrabold tracking-tight text-primary-500 sm:mb-0 sm:text-5xl lg:text-6xl"
    >
      Komunitní zahrada Střelák
    </h1>
  </div>
</template>
