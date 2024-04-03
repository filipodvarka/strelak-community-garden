<script setup lang="ts">
// import ErrorDisplay from "./ErrorDisplay";

import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import useI18nWithPrefix from '~/utils/useI18nWithPrefix'

const {
  t
} = useI18nWithPrefix('form.gardener')

const {
  schema, state, flowerBedOptions,
  paymentOptions
} = useGardenerForm()
type Schema = z.output<typeof schema>

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data)
}
</script>

<template>
  <div class="pt-4 pb-0 sm:pb-4">
    <UForm
      :schema="schema"
      :state="state"
      class="grid grid-cols-8 gap-6"
      method="POST"
      data-netlify
      data-netlify-honeypot="bot-field-gardener"
      @submit="onSubmit"
    >
      <UFormGroup :label="t('full_name')" required name="full_name" autocomplete="full_name">
        <UInput v-model="state.full_name" />
      </UFormGroup>
      <UFormGroup
        :label="t('email_address')"
        required
        name="email_address"
        autocomplete="email"
        class="lg:col-span-5"
      >
        <UInput v-model="state.email_address" />
      </UFormGroup>
      <UFormGroup
        :label="t('phone_number')"
        name="phone_number"
        autocomplete="phone_number"
        class="lg:col-span-3"
      >
        <UInput v-model="state.phone_number" />
      </UFormGroup>
      <UFormGroup :label="t('city_part')" name="city_part" autocomplete="city_part">
        <UInput v-model="state.city_part" />
      </UFormGroup>
      <UFormGroup :label="t('flower_beds.label')" required name="flower_beds" autocomplete="flower_beds">
        <USelect
          v-model="state.flower_beds"
          :options="flowerBedOptions"
        />
      </UFormGroup>
      <UFormGroup :label="t('payment_tarif.label')" :description="t('payment_tarif.description')" required name="payment_tarif" autocomplete="payment_tarif">
        <URadioGroup
          v-model="state.payment_tarif"
          :options="paymentOptions"
        />
      </UFormGroup>
      <UFormGroup :label="t('volunteer')" :description="t('volunteer_description')" name="volunteer" autocomplete="volunteer">
        <UCheckbox v-model="state.volunteer" />
      </UFormGroup>
      <UFormGroup :label="t('newsletter')" :description="t('newsletter_description')" name="newsletter" class="flex flex-wrap items-baseline">
        <UCheckbox v-model="state.newsletter" />
      </UFormGroup>

      <UFormGroup :label="t('notes_and_questions')" name="notes_and_questions">
        <UTextarea v-model="state.notes_and_questions" />
      </UFormGroup>
    </UForm>
    <!--    <form-->
    <!--      name="gardener"-->
    <!--      method="POST"-->
    <!--      data-netlify="true"-->
    <!--      data-netlify-honeypot="bot-field-gardener"-->
    <!--    >-->
    <!--      <div class="grid grid-cols-8 gap-6">-->
    <!--        <div class="relative col-span-8">-->
    <!--          <label-->
    <!--            for="full-name"-->
    <!--            class="block text-sm font-medium text-gray-700"-->
    <!--          >Jméno a příjmení <span class="text-red-700">*</span></label>-->
    <!--          <input-->
    <!--            id="full-name"-->
    <!--            v-model="formData['full-name']"-->
    <!--            type="text"-->
    <!--            name="full-name"-->
    <!--            autocomplete="full-name"-->
    <!--            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"-->
    <!--            @blur="validations['full-name'].$touch"-->
    <!--          >-->
    <!--          <ErrorDisplay :validator="validations['full-name']" />-->
    <!--        </div>-->

    <!--        <div class="relative col-span-8">-->
    <!--          <label-->
    <!--            for="email-address"-->
    <!--            class="block text-sm font-medium text-gray-700"-->
    <!--          >E-mail <span class="text-red-700">*</span></label>-->
    <!--          <input-->
    <!--            id="email-address"-->
    <!--            v-model="formData['email-address']"-->
    <!--            type="text"-->
    <!--            name="email-address"-->
    <!--            autocomplete="email"-->
    <!--            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"-->
    <!--            @blur="validations['email-address'].$touch"-->
    <!--          >-->
    <!--          <ErrorDisplay :validator="validations['email-address']" />-->
    <!--        </div>-->

    <!--        <div class="relative col-span-8 lg:col-span-3">-->
    <!--          <label-->
    <!--            for="phone-number"-->
    <!--            class="block text-sm font-medium text-gray-700"-->
    <!--          >Telefon</label>-->
    <!--          <input-->
    <!--            id="phone-number"-->
    <!--            v-model="formData['phone-number']"-->
    <!--            type="tel"-->
    <!--            name="phone-number"-->
    <!--            autocomplete="phone-number"-->
    <!--            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"-->
    <!--            @blur="validations['phone-number'].$touch"-->
    <!--          >-->
    <!--          <ErrorDisplay :validator="validations['phone-number']" />-->
    <!--        </div>-->

    <!--        <div class="col-span-8">-->
    <!--          <label-->
    <!--            for="city-part"-->
    <!--            class="block text-sm font-medium text-gray-700"-->
    <!--          >V jaké části Hradce bydlíte?</label>-->
    <!--          <input-->
    <!--            id="city-part"-->
    <!--            v-model="formData['city-part']"-->
    <!--            type="text"-->
    <!--            name="city-part"-->
    <!--            autocomplete="city-part"-->
    <!--            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"-->
    <!--          >-->
    <!--        </div>-->

    <!--        <div class="relative col-span-8">-->
    <!--          <label-->
    <!--            for="flower-beds"-->
    <!--            class="block text-sm font-medium text-gray-700"-->
    <!--          >Kolik záhonů o rozměru 240 x 80 cm využijete?-->
    <!--            <span class="text-red-700">*</span></label>-->
    <!--          <select-->
    <!--            id="flower-beds"-->
    <!--            v-model="formData['flower-beds']"-->
    <!--            name="flower-beds"-->
    <!--            class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"-->
    <!--            @blur="validations['flower-beds'].$touch"-->
    <!--          >-->
    <!--            <option :value="0.5">-->
    <!--              Půl-->
    <!--            </option>-->
    <!--            <option :value="1">-->
    <!--              Jeden-->
    <!--            </option>-->
    <!--            <option :value="1.5">-->
    <!--              Jeden a půl-->
    <!--            </option>-->
    <!--            <option :value="2">-->
    <!--              Dva-->
    <!--            </option>-->
    <!--          </select>-->
    <!--          <ErrorDisplay :validator="validations['flower-beds']" />-->
    <!--        </div>-->

    <!--        <div class="relative col-span-8 mb-4 space-y-4">-->
    <!--          <h4 class="mb-2 text-lg">-->
    <!--            Platba <span class="text-red-700">*</span>-->
    <!--          </h4>-->
    <!--          <div class="flex items-center">-->
    <!--            <input-->
    <!--              id="payment-300"-->
    <!--              v-model="formData['payment-tarif']"-->
    <!--              name="payment-tarif"-->
    <!--              type="radio"-->
    <!--              :value="300"-->
    <!--              class="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"-->
    <!--              @blur="validations['payment-tarif'].$touch"-->
    <!--            >-->
    <!--            <label-->
    <!--              for="payment-300"-->
    <!--              class="ml-3 block text-sm font-medium text-gray-700"-->
    <!--            >-->
    <!--              Snížená - 300 Kč/sezóna-->
    <!--            </label>-->
    <!--          </div>-->
    <!--          <div class="flex items-center">-->
    <!--            <input-->
    <!--              id="payment-500"-->
    <!--              v-model="formData['payment-tarif']"-->
    <!--              name="payment-tarif"-->
    <!--              type="radio"-->
    <!--              :value="500"-->
    <!--              class="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"-->
    <!--              @blur="validations['payment-tarif'].$touch"-->
    <!--            >-->
    <!--            <label-->
    <!--              for="payment-500"-->
    <!--              class="ml-3 block text-sm font-medium text-gray-700"-->
    <!--            >-->
    <!--              Akorát - 500 Kč/sezóna-->
    <!--            </label>-->
    <!--          </div>-->
    <!--          <div class="flex items-center">-->
    <!--            <input-->
    <!--              id="payment-700"-->
    <!--              v-model="formData['payment-tarif']"-->
    <!--              name="payment-tarif"-->
    <!--              type="radio"-->
    <!--              :value="700"-->
    <!--              class="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-500"-->
    <!--              @blur="validations['payment-tarif'].$touch"-->
    <!--            >-->
    <!--            <label-->
    <!--              for="payment-700"-->
    <!--              class="ml-3 block text-sm font-medium text-gray-700"-->
    <!--            >-->
    <!--              Ideál - 700 Kč/sezóna-->
    <!--            </label>-->
    <!--          </div>-->
    <!--          <p class="mt-2 text-xs text-gray-500">-->
    <!--            Výše platby je na vás (neprokazujete se jako student/senior atp.),-->
    <!--            zvolte možnost podle vaší finanční situace. Údaje pro platbu pošleme-->
    <!--            po odeslání formuláře na váš e-mail.-->
    <!--          </p>-->
    <!--          <ErrorDisplay :validator="validations['payment-tarif']" />-->
    <!--        </div>-->

    <!--        <div class="col-span-8 flex items-start">-->
    <!--          <div class="flex h-5 items-center">-->
    <!--            <input-->
    <!--              id="volunteer"-->
    <!--              v-model="formData['volunteer']"-->
    <!--              name="volunteer"-->
    <!--              type="checkbox"-->
    <!--              class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"-->
    <!--            >-->
    <!--          </div>-->
    <!--          <div class="ml-3 text-sm">-->
    <!--            <label-->
    <!--              for="volunteer"-->
    <!--              class="font-medium text-gray-700"-->
    <!--            >Dobrovolník</label>-->
    <!--            <p class="text-gray-500">-->
    <!--              Chci se do života zahrady zapojit také jako dobrovolník.-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="col-span-8 flex items-start">-->
    <!--          <div class="flex h-5 items-center">-->
    <!--            <input-->
    <!--              id="newsletter"-->
    <!--              v-model="formData['newsletter']"-->
    <!--              name="newsletter"-->
    <!--              type="checkbox"-->
    <!--              class="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"-->
    <!--            >-->
    <!--          </div>-->
    <!--          <div class="ml-3 text-sm">-->
    <!--            <label-->
    <!--              for="newsletter"-->
    <!--              class="font-medium text-gray-700"-->
    <!--            >Novinky</label>-->
    <!--            <p class="text-gray-500">-->
    <!--              Chci dostávat informace o akcích v zahradě.-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->

    <!--        <div class="col-span-8">-->
    <!--          <label-->
    <!--            for="notes-and-questions"-->
    <!--            class="block text-sm font-medium text-gray-700"-->
    <!--          >-->
    <!--            Prostor pro vaše poznámky či dotazy-->
    <!--          </label>-->
    <!--          <div class="mt-1">-->
    <!--            <textarea-->
    <!--              id="notes-and-questions"-->
    <!--              v-model="formData['notes-and-questions']"-->
    <!--              name="notes-and-questions"-->
    <!--              rows="3"-->
    <!--              class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"-->
    <!--            />-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </form>-->
  </div>
</template>
