<script setup lang="ts">

import { ref } from 'vue'

import type { Database } from '~/types/database'
import gsapAnimations from '~/utils/gsapAnimations'
import type { MemberType } from '~/types'
import NewsletterForm from '~/components/form/NewsletterForm.vue'

const client = useSupabaseClient<Database>()

const AVAILABLE_BEDS = 28

const isOpen = ref(false)
const formType = ref<MemberType>('volunteer')
const isSubmitted = ref(false)
const submitError = ref(false)

const { data: freeBeds, error: bedsError, refresh } = await useAsyncData('members', async () => {
  const { data: membersBeds, error } = await client.from('members').select('flower_beds')

  if (error) {
    throw error
  }

  return membersBeds
}, {
  transform: membersBeds => membersBeds?.reduce((acc, { flower_beds: flowerBeds }) => {
    if (!flowerBeds) { return acc }

    return acc - flowerBeds
  }, AVAILABLE_BEDS) ?? null
})

const { animateGardener, animateVolunteer } = gsapAnimations()

const openModal = (role: MemberType) => {
  if (role === 'gardener' && freeBeds.value && freeBeds.value <= 0) {
    return
  }
  formType.value = role
  isOpen.value = true
}

const doAfterClose = (fn: () => void) => {
  // so the form does nto get displayed in the modal during the closing animation
  setTimeout(() => fn(), 500)
}

const handleSubmit = () => {
  isSubmitted.value = true
  setTimeout(() => {
    isOpen.value = false
    doAfterClose(() => {
      isSubmitted.value = false
    })
  }, 5000)
  refresh()
}

const handleModalClose = () => {
  isOpen.value = false
  doAfterClose(() => {
    isSubmitted.value = false
    submitError.value = false
  })
}

</script>
<template>
  <section class="mb-16 flex-1 md:mb-24 lg:mb-32">
    <div class="grid grid-cols-1 space-y-8 sm:grid-cols-2 sm:space-y-0 sm:space-x-8">
      <a
        class="group col-span-1 block h-full cursor-pointer"
        @click.prevent="openModal('volunteer')"
        @mouseenter="animateVolunteer"
      >

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

      </a>
      <a
        :class="[
          freeBeds ? 'group cursor-pointer' : 'opacity-70',
        ]"
        class="relative col-span-1 block h-full"
        @click.prevent="() => freeBeds && openModal('gardener')"
        @mouseenter="animateGardener"
      >

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

        <div v-if="bedsError">
          <p class="absolute top-20 right-2 isolate z-30 -rotate-6 transform sm:top-24 xl:top-12 xl:-right-24">
            <span class="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800 lg:text-base">
              {{ $t('error.general.message') }}
            </span>
          </p>

        </div>

        <div
          v-if="freeBeds != null"
          class="absolute top-20 right-2 isolate z-30 -rotate-6 transform sm:top-24 xl:top-12 xl:-right-24"
        >
          <span
            v-if="freeBeds > 0"
            class="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800 lg:text-base"
          >
            Zbývá {{ freeBeds.toLocaleString().replace(".", ",") }} truhlíků!
          </span>
          <span
            v-if="freeBeds <= 0"
            class="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800 lg:text-base"
          >Máme
            plno!</span>
        </div>
      </a>
      <div class="col-span-1 pt-12 sm:col-span-2 sm:pt-20 lg:pt-24">
        <div class="relative mx-auto mb-2 sm:mr-10 sm:max-w-lg lg:mr-auto lg:max-w-xl">
          <picture>
            <img
              src="https://res.cloudinary.com/pavilionpreview/image/upload/c_scale,q_auto:eco,w_190/v1654713046/zahrada/atomic-berries_uilqlo.png"
              alt="trs jahod vyrostlých na zahradě"
              class="absolute -left-36 top-0 w-24"
              type="image/png"
              width="190"
              height="204"
            >
          </picture>
          <h3 class="text-xl font-semibold text-primary-900">
            Odebírat novinky
          </h3>
          <p class="prose prose-lg text-primary-900">
            Zatím vyčkávám ve stínu ale chci mít přehled o tom, co se děje v zahradě.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <Modal :is-open="isOpen" @close="handleModalClose">
        <template #title>
          <span v-if="submitError">{{ $t('error.general.short_message') }}</span>
          <span v-else-if="isSubmitted">{{ $t('form.success.title') }}</span>
          <div v-else class="pl-6">
            <span v-if="formType === 'volunteer'">{{ $t('form.volunteer.title') }}</span>
            <span v-else-if="formType === 'gardener'">{{ $t('form.gardener.title') }}</span>
          </div>
        </template>

        <button class="absolute right-6 top-5 h-4 w-4 sm:hidden" @click="isOpen = false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <MemberForm
          v-if="!submitError && !isSubmitted"
          :form-type="formType"
          :free-beds="freeBeds "
          @submit="handleSubmit"
          @close="isOpen = false"
          @error="submitError = true"
        />
        <div
          v-else
        >
          <div
            class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full"
            :class="{
              'bg-green-100': !submitError,
              'bg-red-100': submitError
            }"
          >
            <svg
              v-if="submitError"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div class="prose prose-lg text-center pb-6">
            <p v-if="submitError">
              {{ $t('form.error.submit') }}
            </p>
            <p v-else-if="isSubmitted">
              {{ $t('form.success.message') }}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  </section>

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
