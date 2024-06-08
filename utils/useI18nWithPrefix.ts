export default function (prefix = '') {
  const i18n = useI18n()
  return {
    ...i18n,
    t: (key: string) => i18n.t(`${prefix}.${key}`),
    tc: (key: string, count: number) => i18n.t(`${prefix}.${key}`, count)
  }
}
