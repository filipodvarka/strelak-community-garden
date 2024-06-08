<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

defineEmits<{
  afterLeave: [],
  close: [],
}>()

defineProps<{
  isOpen: boolean
}>()

</script>
<template>
  <!--  TODO: add back animation shake on error -->
  <TransitionRoot appear :show="isOpen" as="template" @after-leave="$emit('afterLeave')">
    <Dialog as="div" class="relative z-30" @close="$emit('close')">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 sm:p-8 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full md:max-w-xl transform overflow-hidden rounded-2xl bg-white pt-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-left text-xl font-semibold leading-6 text-primary-900 sm:my-4 sm:pr-0 sm:text-center"
              >
                <slot name="title" />
              </DialogTitle>

              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
