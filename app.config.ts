export default defineAppConfig({
  ui: {
    primary: 'indigo',
    gray: 'cool',
    checkbox: {
      inner: 'test'
      // container: 'border-gray-300 text-primary-600 focus:ring-primary-500'
    },
    formGroup: {
      wrapper: 'relative col-span-8',
      description: 'text-xs text-gray-500'
    },
    input: {
      base: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm'
    },
    radio: {
      inner: 'border-gray-300 text-primary-600 focus:ring-primary-500'
    }
  }
})
