export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'cool',
    formGroup: {
      wrapper: 'relative col-span-8',
      description: 'text-xs text-gray-500'
    },
    input: {
      base: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm'
    },
    radio: {
      wrapper: 'items-center mb-2',
      base: 'h-4 w-4 text-primary-600 ',
      inner: 'border-gray-300 text-primary-600 focus:ring-primary-500 ring-offset-2',
      help: 'mb-1'
    }
  }
})
