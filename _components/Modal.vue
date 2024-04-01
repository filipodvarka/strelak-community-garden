<template>
  <!-- Provides access to modal controls -->
  <a
    class="group col-span-1 block h-full cursor-pointer"
    @click.prevent="openModal('volunteer')"
    @mouseenter="animateVolunteer"
  >
    <slot name="box1" />
  </a>
  <a
    :class="[freeBeds !== null && freeBeds > 0 ? 'group cursor-pointer' : 'opacity-70']"
    class="relative col-span-1 block h-full"
    @click.prevent="openModal('gardener')"
    @mouseenter="animateGardener"
  >
    <slot name="box2" />
    <div
      v-if="freeBeds != null"
      class="absolute top-20 right-2 isolate z-30 -rotate-6 transform sm:top-24 xl:top-12 xl:-right-24"
    >
      <span
        v-if="freeBeds > 0"
        class="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800 lg:text-base"
      >
        Zbývá {{ freeBeds.toString().replace(".", ",") }} truhlíků!
      </span>
      <span
        v-if="freeBeds <= 0"
        class="inline-flex items-center rounded-full bg-red-100 px-3 py-0.5 text-sm font-medium text-red-800 lg:text-base"
      >Máme plno!</span>
    </div>
  </a>
  <!-- Newsletter section -->
  <div class="col-span-1 pt-12 sm:col-span-2 sm:pt-20 lg:pt-24">
    <div class="relative mx-auto mb-2 sm:mr-10 sm:max-w-lg lg:mr-auto lg:max-w-xl">
      <slot name="newsletter" />
      <h3 class="text-xl font-semibold text-primary-900">
        Odebírat novinky
      </h3>
      <p class="prose prose-lg text-primary-900">
        Zatím vyčkávám ve stínu ale chci mít přehled o tom, co se děje v zahradě.
      </p>
      <form
        class="relative mt-8 w-full sm:flex"
        netlify
        netlify-honeypot="bot-field-newsletter"
        @submit.prevent="handleNewsletter"
      >
        <label for="email-address" class="sr-only">E-mailová adresa</label>
        <input
          id="email-address"
          v-model="forms.newsletter"
          name="email-address"
          type="email-address"
          autocomplete="email-address"
          required="true"
          class="w-full rounded-md border-gray-300 px-5 py-3 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:max-w-xs"
          placeholder="Zadejte e-mail"
        >
        <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
          <button
            type="submit"
            class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Zapsat se
          </button>
        </div>
        <ErrorDisplay :validator="v.newsletter" />
      </form>
    </div>
  </div>
  <!-- Modal window -->
  <TransitionRoot as="template" :show="open" @after-leave="resetCurrentForm">
    <Dialog as="div" class="fixed inset-0 z-30 overflow-y-auto" @close="open = false">
      <div class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            :class="{ 'animate-shake': v[formType].$error }"
            class="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
          >
            <!-- Render the modal content -->
            <div class="relative bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <button class="absolute right-4 top-5 h-4 w-4 sm:hidden" @click="open = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div class="sm:flex sm:items-start">
                <div class="sm:mt-0 sm:ml-4">
                  <!-- Checkmark icon displayed on successful submit -->
                  <div
                    v-if="formType === 'submitted'"
                    class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
                  >
                    <svg
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
                  <div
                    v-if="formType === 'unsuccessful'"
                    class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-100"
                  >
                    <svg
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
                  </div>
                  <DialogTitle
                    as="h3"
                    class="pr-4 text-left text-xl font-semibold leading-6 text-primary-900 sm:my-4 sm:pr-0 sm:text-center"
                  >
                    <span v-if="formType === 'volunteer'">Přihlaš se jako dobrovolník</span>
                    <span v-if="formType === 'gardener'">Přihlaš se jako zahradník</span>
                    <!-- <span v-if="formType === 'gardener'">Přihlaš se jako dobrovolník</span> -->
                    <span v-if="formType === 'submitted'">Děkujeme!</span>
                    <span v-if="formType === 'unsuccessful'">Chyba</span>
                  </DialogTitle>
                  <!-- First form content -->
                  <VolunteerForm
                    v-if="formType === 'volunteer'"
                    v-model="forms.volunteer"
                    :validations="v.volunteer"
                  />
                  <!-- GardenerForm -->
                  <GardenerForm
                    v-if="formType === 'gardener'"
                    v-model="forms.gardener"
                    :validations="v.gardener"
                  />
                  <!-- Thank you -->
                  <div v-if="formType === 'submitted'" class="prose prose-lg">
                    <p>Obdrželi jsme vaši registraci a brzy vám ji potvrdíme emailem.</p>
                  </div>
                  <div v-if="formType === 'unsuccessful'" class="prose prose-lg">
                    <p>
                      Odeslání formuláře se nepovedlo. Prosím, zkuste to později, nebo nám napište na adresu
                      info@zahradastrelak.cz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-primary-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                v-if="formType === 'volunteer' || formType === 'gardener'"
                type="button"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                @click.prevent="handleSubmit"
              >
                Odeslat
              </button>
              <button
                ref="cancelButtonRef"
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="open = false"
              >
                Zpět
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { createClient } from '@supabase/supabase-js'

import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import useVuelidate from '@vuelidate/core'
import GardenerForm from '../components/GardenerForm.vue'
import VolunteerForm from './VolunteerForm'
import ErrorDisplay from './ErrorDisplay'
import { rules } from './validationRules'
import { formGardenerDefault, formVolunteerDefault } from './defaultFormData'
import initAnimations from './gsapAnimations'

// initialize supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLIC_KEY)

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    VolunteerForm,
    GardenerForm,
    ErrorDisplay
  },
  setup () {
    const AVAILABLE_BEDS = 29
    const open = ref(false)
    const formType = ref('volunteer')
    const freeBeds = ref(null)

    onMounted(async () => {
      // get data about flower beds
      const { data: members, error } = await supabase.from('Members').select('flower-beds')
      if (members && members.length) {
        const takenBeds = members.reduce((acc, member) => {
          if (member['flower-beds']) {
            let bedNumber = 0
            try {
              bedNumber = parseFloat(member['flower-beds'])
            } catch {
              bedNumber = 0
            }
            return acc + bedNumber
          } else {
            return acc
          }
        }, 0)

        freeBeds.value = AVAILABLE_BEDS - takenBeds
      }
    })

    const forms = reactive({
      volunteer: formVolunteerDefault,
      gardener: formGardenerDefault,
      newsletter: ''
    })
    const v = useVuelidate(rules, forms)

    const { animateGardener, animateVolunteer } = initAnimations()

    function openModal (role) {
      if (role === 'gardener' && freeBeds.value <= 0) {
        return
      }
      formType.value = role
      open.value = true
    }

    function resetCurrentForm () {
      v.value[formType.value].$reset()
    }

    function encodeData (data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
    }

    async function handleSubmit () {
      v.value[formType.value].$touch()
      if (v.value[formType.value].$error) {
        return
      }
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      const response = await axios.post(
        '/',
        encodeData({
          'form-name': formType.value,
          ...forms[formType.value]
        }),
        axiosConfig
      )
      if (response.status === 200) {
        // Save data to Supabase
        const { data, error } = await supabase.from('Members').insert([forms[formType.value]])

        // Reset form by looping over properties
        Object.keys(forms[formType.value]).forEach((key) => {
          forms[formType.value][key] = formVolunteerDefault[key]
        })
        // Display confirmation
        formType.value = 'submitted'
      } else {
        formType.value = 'unsuccessful'
      }
    }

    async function handleNewsletter () {
      v.value.newsletter.$touch()
      if (v.value.newsletter.$error) {
        return
      }
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      const response = await axios.post(
        '/',
        encodeData({
          'form-name': 'newsletter',
          'email-address': forms.newsletter
        }),
        axiosConfig
      )
      if (response.status === 200) {
        formType.value = 'submitted'
        open.value = true
        // Save data to Supabase
        const { data, error } = await supabase
          .from('Members')
          .insert([{ 'email-address': forms.newsletter, newsletter: true }])
        forms.newsletter = ''
        v.value.newsletter.$reset()
      } else {
        formType.value = 'unsuccessful'
        open.value = true
      }
    }

    return {
      open,
      forms,
      formType,
      v,
      freeBeds,
      openModal,
      handleSubmit,
      handleNewsletter,
      animateGardener,
      animateVolunteer,
      resetCurrentForm
    }
  }
}
</script>
