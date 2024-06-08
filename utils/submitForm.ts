import type { Member } from '~/types/database'
import type { FormName } from '~/types'

export type FormData<T extends FormName> = T extends 'newsletter' ? Pick<Member, 'email_address'> : Member

function encode (data: FormData<any> & { 'form-name': string }) {
  return Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key as keyof FormData<any>])}`
    )
    .join('&')
}

export default function <T extends FormName> (formName: T, formData: FormData<T>) {
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': formName,
      ...formData
    })
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
