export default function (formData: FormData) {
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    // https://github.com/microsoft/TypeScript/issues/30584
    // @ts-ignore
    body: new URLSearchParams(formData).toString()
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Request failed with status code: ' + response.status, {
        cause: response
      })
    }

    return {
      ...response
    }
  })
}
