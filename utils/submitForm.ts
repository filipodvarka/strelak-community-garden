function encode (data: object) {
  return Object.keys(data)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join('&')
}

export default function (formName: 'volunteer' | 'gardener' | 'newsletter', formData: Record<string, string>) {
  return fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': formName,
      ...formData
    })
  })
}
