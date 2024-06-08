<script setup>

const { t } = useI18n()

useHead({
  htmlAttrs: {
    lang: 'cs'
  },
  charset: 'utf-8',
  title: t('page.title'),
  meta: [
    // {
    //   property: 'og:image',
    //   content: 'https://zahradastrelak.cz/open-graph.png'
    // }
    {
      property: 'og:title',
      content: t('og.title')
    },
    {
      property: 'og:description',
      content: t('og.description')
    },
    {
      property: 'og:url',
      content: 'https://zahradastrelak.cz/'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:image:width',
      content: '1280'
    },
    {
      property: 'og:image:height',
      content: '640'
    }
  ],
  bodyAttrs: {
    class: 'bg-background font-sans'
  }
  // link: [
  //   {
  //     rel: 'icon',
  //     type: 'image/webp',
  //     href: '/movies.webp'
  //   }
  // ]
})

</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
