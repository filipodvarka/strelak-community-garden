<template>
  <section id="app" class="mb-16 flex-1 md:mb-24 lg:mb-32">
    <div class="grid grid-cols-1 space-y-8 sm:grid-cols-2 sm:space-y-0 sm:space-x-8">
      <!-- Wrapper handles the click event from the button -->
      <Modal>
        <template #box1>
          <div class="relative flex flex-col items-start">
            <div
              class="absolute inset-0 isolate h-full w-full bg-gradient-radial from-white via-transparent to-transparent opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
            <h2
              class="z-20 max-w-xl pl-20 font-barrio text-4xl font-extrabold tracking-tight text-primary-500 transition-colors duration-150 ease-in group-hover:text-primary-400 sm:pl-0 md:text-5xl lg:text-6xl"
            >
              Dobrovolník
            </h2>
            <p
              class="prose prose-xl z-10 mt-2 w-full pl-20 transition-colors duration-150 ease-in group-hover:text-primary-600 sm:pl-0 lg:mt-4 lg:text-center"
            >
              Pěstuje komunitní spirit
            </p>
            <picture>
              <!--                  <source-->
              <!--                    srcset="-->
              <!--                        https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_640/v1654713050/zahrada/atomic-helper_wttsuv.webp-->
              <!--                      "-->
              <!--                    type="image/webp"-->
              <!--                    width="640"-->
              <!--                    height="640"-->
              <!--                  >-->
              <img
                class="relative z-10 mt-4 w-64 sm:mt-6 sm:w-80 lg:mt-12"
                src="https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_640/v1654713050/zahrada/atomic-helper_wttsuv.png"
                type="image/png"
                width="640"
                height="640"
                alt="zahradník dělá jarní úklid"
              >
            </picture>
            <!-- Absolutely positioned images -->
            <picture>
              <!--                  <source-->
              <!--                    srcset="-->
              <!--                        https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_180/v1654713046/zahrada/atomic-flower-3_ixpocy.webp-->
              <!--                      "-->
              <!--                    type="image/webp"-->
              <!--                    width="180"-->
              <!--                    height="348"-->
              <!--                  >-->
              <img
                id="helperFlower"
                src="https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_180/v1654713046/zahrada/atomic-flower-3_ixpocy.png"
                type="image/png"
                width="180"
                height="348"
                alt="květina pěstovaná v květináči"
                class="absolute -top-8 left-0 z-10 w-16 sm:-top-32 sm:-left-4 sm:w-20 lg:-top-40 lg:w-24"
              >
            </picture>
            <picture>
              <source
                srcset="
                        https://res.cloudinary.com/pavilionpreview/image/upload/q_auto:eco/v1654713048/zahrada/atomic-green-grass_opjech.webp
                      "
                type="image/webp"
                width="340"
                height="224"
              >
              <img
                src="https://res.cloudinary.com/pavilionpreview/image/upload/q_auto:eco/v1654713048/zahrada/atomic-green-grass_opjech.png"
                type="image/png"
                width="340"
                height="224"
                alt="zahradní porost"
                class="sm:32 absolute bottom-0 right-0 z-10 w-28 lg:w-44"
              >
            </picture>
          </div>
        </template>
        <template #box2>
          <div class="relative flex flex-col items-start sm:items-end">
            <div
              class="absolute inset-0 isolate h-full w-full bg-gradient-radial from-white via-transparent to-transparent opacity-50 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />
            <h2
              class="z-20 max-w-xl pl-24 font-barrio text-4xl font-extrabold tracking-tight text-primary-500 transition-colors duration-150 ease-in group-hover:text-primary-400 sm:pl-0 md:text-5xl lg:text-6xl"
            >
              Zahradník
            </h2>
            <p
              class="prose prose-xl z-10 mt-2 w-full pl-24 text-left transition-colors duration-150 ease-in group-hover:text-primary-600 sm:pl-0 sm:text-right lg:mt-4 lg:text-center"
            >
              Adoptuje truhlík
            </p>
            <!-- Absolutely positioned images -->
            <picture class="z-10">
              <!--                  <source-->
              <!--                    srcset="-->
              <!--                        https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_224/v1654713049/zahrada/atomic-green-leaves_rfl04s.webp-->
              <!--                      "-->
              <!--                    type="image/webp"-->
              <!--                    width="224"-->
              <!--                    height="358"-->
              <!--                  >-->
              <img
                id="gardenerFlower1"
                src="https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_224/v1654713049/zahrada/atomic-green-leaves_rfl04s.png"
                alt="tráva v zahradě"
                type="image/png"
                width="224"
                height="358"
                class="absolute right-0 bottom-12 z-10 w-20 sm:right-auto sm:left-0 sm:w-28"
              >
            </picture>
            <picture class="z-10">
              <!--                  <source-->
              <!--                    srcset="-->
              <!--                        https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_640/v1654713047/zahrada/atomic-gardener_cpmr8f.webp-->
              <!--                      "-->
              <!--                    type="image/webp"-->
              <!--                    width="640"-->
              <!--                    height="640"-->
              <!--                  >-->
              <img
                class="z-10 mt-12 w-60 sm:w-72 lg:w-80"
                src="https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_640/v1654713047/zahrada/atomic-gardener_cpmr8f.png"
                alt="zahradník zalévá truhlík na zahradě Střelák"
                type="image/png"
                width="640"
                height="640"
              >
            </picture>
            <picture class="z-10">
              <!--                  <source-->
              <!--                    srcset="-->
              <!--                        https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_160/v1654713049/zahrada/atomic-leaves_hafvql.webp-->
              <!--                      "-->
              <!--                    type="image/webp"-->
              <!--                    width="160"-->
              <!--                    height="269"-->
              <!--                  >-->
              <img
                id="gardenerFlower2"
                src="https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_160/v1654713049/zahrada/atomic-leaves_hafvql.png"
                alt="rostlina šťovíku"
                class="left:auto absolute right-6 bottom-0 z-10 w-14 sm:right-auto sm:left-20 sm:w-20"
                type="image/png"
                width="160"
                height="269"
              >
            </picture>
            <picture class="z-10">
              <!--                  <source-->
              <!--                    srcset="-->
              <!--                        https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_224/v1654713047/zahrada/atomic-black-leaves_a3byoj.webp-->
              <!--                      "-->
              <!--                    type="image/webp"-->
              <!--                    width="224"-->
              <!--                    height="364"-->
              <!--                  >-->
              <img
                src="https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_224/v1654713047/zahrada/atomic-black-leaves_a3byoj.png"
                alt="rostlina s tmavými listy"
                class="absolute left-0 -top-4 z-10 w-16 sm:right-0 sm:-top-24 sm:w-28"
                type="image/png"
                width="224"
                height="364"
              >
            </picture>
          </div>
        </template>
        <template #newsletter>
          <picture>
            <!--                <source-->
            <!--                  srcset="-->
            <!--                      https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_190/v1654713046/zahrada/atomic-berries_uilqlo.webp-->
            <!--                    "-->
            <!--                  type="image/webp"-->
            <!--                  width="190"-->
            <!--                  height="204"-->
            <!--                >-->
            <img
              src="https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_190/v1654713046/zahrada/atomic-berries_uilqlo.png"
              alt="trs jahod vyrostlých na zahradě"
              class="absolute -left-36 top-0 w-24"
              type="image/png"
              width="190"
              height="204"
            >
          </picture>
        </template>
      </Modal>
    </div>
  </section>

  <!-- Workaround for Netlify forms -->
  <form name="volunteer" netlify netlify-honeypot="bot-field-volunteer" hidden>
    <input type="text" name="full-name">
    <input type="text" name="email-address">
    <input type="text" name="phone-number">
    <input type="text" name="city-part">
    <input type="text" name="soul-plant">
    <input type="text" name="newsletter">
    <input type="text" name="volunteer">
    <input type="text" name="notes-and-questions">
  </form>

  <form name="gardener" netlify netlify-honeypot="bot-field-gardener" hidden>
    <input type="text" name="full-name">
    <input type="text" name="email-address">
    <input type="text" name="phone-number">
    <input type="text" name="city-part">
    <input type="text" name="flower-beds">
    <input type="text" name="payment-tarif">
    <input type="text" name="newsletter">
    <input type="text" name="volunteer">
    <input type="text" name="notes-and-questions">
  </form>

  <form name="newsletter" netlify netlify-honeypot="bot-field-newsletter" hidden>
    <input type="text" name="email-address">
    <input type="text" name="newsletter">
  </form>
</template>
<script setup lang="ts">
</script>
