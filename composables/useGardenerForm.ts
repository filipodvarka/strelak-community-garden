import { z } from 'zod'
import useI18nWithPrefix from '~/utils/useI18nWithPrefix'
import type { Member } from '~/types/database'

export default function () {
  const {
    t
  } = useI18nWithPrefix('form.gardener')
  const {
    t: tError,
    tc: tcError
  } = useI18nWithPrefix('form.error')

  const requiredString = z.string({ required_error: tError('required') })
  const optionalString = z.string().optional()
  const schema = z.object({
    full_name: requiredString.min(3, tcError('min', 3)),
    email_address: requiredString.email(tError('email')),
    phone_number: z.string().min(9, tcError('min', 9)).optional(),
    city_part: optionalString,
    flower_beds: z.enum(['0.5', '1', '1.5', '2']),
    payment_tarif: z.number({
      required_error: tError('required')
    }),
    newsletter: z.boolean(),
    volunteer: z.boolean(),
    soul_plant: optionalString,
    notes_and_questions: optionalString
  })

  const paymentOptions = [
    { value: 300, label: t('payment_tarif.options.reduced') },
    { value: 500, label: t('payment_tarif.options.middle') },
    { value: 700, label: t('payment_tarif.options.full') }
  ]

  const flowerBedOptions = [
    { value: 0.5, label: t('flower_beds.options.half') },
    { value: 1, label: t('flower_beds.options.one') },
    { value: 1.5, label: t('flower_beds.options.one_and_half') },
    { value: 2, label: t('flower_beds.options.two') }
  ]

  const state = reactive<Member>({
    full_name: '',
    email_address: '',
    phone_number: '',
    city_part: '',
    flower_beds: 0.5,
    payment_tarif: '500',
    newsletter: false,
    volunteer: false,
    soul_plant: '',
    notes_and_questions: ''
  })

  return {
    schema,
    state,
    flowerBedOptions,
    paymentOptions
  }
}
