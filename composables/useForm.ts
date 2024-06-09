import { z } from 'zod'
import useI18nWithPrefix from '~/utils/useI18nWithPrefix'
import type { Member } from '~/types/database'
import type { MemberType } from '~/types'

export default function (formType: MemberType | 'newsletter') {
  const client = useSupabaseClient()
  const {
    t
  } = useI18nWithPrefix('form.gardener')
  const {
    t: tError,
    tc: tcError
  } = useI18nWithPrefix('form.error')

  const requiredString = z.string({ required_error: tError('required') })
  const schema = formType === 'newsletter'
    ? z.object({
      email_address: requiredString.email(tError('email'))
    })
    : z.object({
      full_name: requiredString.min(3, tcError('min', 3)),
      email_address: requiredString.email(tError('email')),
      phone_number: z.string().default(''),
      city_part: z.string().default(''),
      flower_beds: z.number().optional(),
      payment_tarif: z.string({
        required_error: tError('required')
      }).optional(),
      newsletter: z.boolean(),
      volunteer: z.boolean(),
      notes_and_questions: z.string().default(''),
      soul_plant: z.string().default('')
    })

  const paymentOptions = [
    { value: '1000', label: t('payment_tarif.options.new_full') }
  ]

  const flowerBedOptions = [
    { value: 1, label: t('flower_beds.options.one') },
    { value: 2, label: t('flower_beds.options.two') }
  ]

  const state = reactive<Member>({
    full_name: '',
    email_address: '',
    phone_number: '',
    city_part: '',
    flower_beds: formType === 'gardener' ? 1 : undefined,
    payment_tarif: formType === 'gardener' ? paymentOptions[0].value : undefined,
    newsletter: true,
    volunteer: formType === 'volunteer',
    notes_and_questions: '',
    soul_plant: ''
  })

  const handleSubmit = async (data: z.output<typeof schema>, target: EventTarget | null) => {
    if (!target) { return }

    await submitForm(new FormData(target as HTMLFormElement))
    // @ts-ignore
    const { error } = await client.from('members').insert(data)

    if (error) {
      throw error
    }
  }

  return {
    schema,
    state,
    flowerBedOptions,
    paymentOptions,
    handleSubmit
  }
}
