<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import type { MemberType } from '~/types'

const props = defineProps<{
  freeBeds: number | null,
  formType: MemberType
}>()

const emit = defineEmits<{
  submit: [],
  error: [],
  close: []
}>()

const { t } = useI18nWithPrefix('form.gardener')
const {
  schema, state, flowerBedOptions,
  paymentOptions, handleSubmit: submitForm
} = useForm(props.formType)
type Schema = z.output<typeof schema>

const isError = ref(false)

const availableFlowerBedOptions = computed(() => flowerBedOptions.filter(option => option.value <= (props.freeBeds ?? 0)))

async function handleSubmit ({ data }: FormSubmitEvent<Schema>) {
  const target = document.getElementById(`${props.formType}-form`) as HTMLFormElement
  try {
    await submitForm(data, target)
  } catch (error) {
    isError.value = true
    isDev() && console.error(error)
    emit('error')
    return
  }

  emit('submit')
}
</script>

<template>
  <UForm
    :id="`${formType}-form`"
    :schema="schema"
    :state="state"
    method="POST"
    data-netlify
    :data-netlify-honeypot="`bot-field-${formType}`"
    @submit="handleSubmit"
  >
    <div class="grid grid-cols-8 gap-6 p-6">
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

      <template v-if="formType === 'gardener'">
        <UFormGroup :label="t('flower_beds.label')" required name="flower_beds" autocomplete="flower_beds">
          <USelect
            :model-value="state.flower_beds"
            :options="availableFlowerBedOptions"
            @update:model-value="(value) => state.flower_beds = Number(value)"
          />
        </UFormGroup>
        <UFormGroup :label="t('payment_tarif.label')" required name="payment_tarif" autocomplete="payment_tarif">
          <URadioGroup
            v-model="state.payment_tarif"
            :options="paymentOptions"
          />
        </UFormGroup>
        <UFormGroup
          :label="t('volunteer')"
          :description="t('volunteer_description')"
          name="volunteer"
          autocomplete="volunteer"
          :ui="{
            container: '-order-1 mr-2'
          }"
          class="flex flex-wrap"
        >
          <UCheckbox v-model="state.volunteer" />
        </UFormGroup>
      </template>
      <template v-else>
        <UFormGroup :label="t('soul_plant')" name="soul_plant" autocomplete="soul_plant">
          <UInput v-model="state.soul_plant" />
        </UFormGroup>
      </template>

      <UFormGroup
        :ui="{
          container: '-order-1 mr-2'
        }"
        :label="t('newsletter')"
        :description="t('newsletter_description')"
        name="newsletter"
        class="flex flex-wrap"
      >
        <UCheckbox v-model="state.newsletter" />
      </UFormGroup>

      <UFormGroup :label="t('notes_and_questions')" name="notes_and_questions">
        <UTextarea v-model="state.notes_and_questions" />
      </UFormGroup>
    </div>
    <div class="bg-primary-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="submit"
        class="inline-flex w-full justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      >
        {{ $t('form.submit') }}
      </button>
      <button
        ref="cancelButtonRef"
        type="button"
        class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        @click="$emit('close')"
      >
        {{ $t('form.back') }}
      </button>
    </div>
  </UForm>
</template>
