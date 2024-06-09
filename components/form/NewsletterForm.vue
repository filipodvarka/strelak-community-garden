<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const { t } = useI18nWithPrefix('form.gardener')
const {
  schema, state, handleSubmit: submitForm
} = useForm('newsletter')
type Schema = z.output<typeof schema>

const isError = ref(false)
const isSubmitted = ref(false)

async function handleSubmit ({ data, target }: FormSubmitEvent<Schema>) {
  try {
    await submitForm(data, target)
  } catch (error) {
    isError.value = true
    isDev() && console.error(error)
    return
  }

  isSubmitted.value = true
  state.email_address = ''
  setTimeout(() => {
    isSubmitted.value = false
  }, 5000)
}
</script>

<template>
  <UForm
    id="newsletter-form"
    :schema="schema"
    :state="state"
    method="POST"
    data-netlify
    data-netlify-honeypot="bot-field-newsletter"
    class="relative mt-8 w-full sm:flex"
    @submit="handleSubmit"
  >
    <template v-if="!isError && !isSubmitted">
      <UInput
        v-model="state.email_address"
        :ui="{
          'wrapper': 'flex',
          'form': 'w-full rounded-md border-gray-300 px-8 py-3 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500 sm:max-w-xs mt-0'
        }"
        :placeholder="t('email_address')"
      />
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button
          type="submit"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          {{ $t('form.newsletter.submit') }}
        </button>
      </div>
    </template>
    <div v-else class="prose prose-lg text-center pb-6">
      <p v-if="isError">
        {{ $t('form.error.submit') }}
      </p>
      <p v-else-if="isSubmitted">
        {{ $t('form.newsletter.success.message') }}
      </p>
    </div>
  </UForm>
</template>
