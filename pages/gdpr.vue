<script setup lang="ts">
import { h } from 'vue'

const renderHeadline = (headline: string) => h('h2', { class: 'text-2xl pt-4 pb-3' }, headline)

</script>
<template>
  <div class="flex justify-center">
    <div class="py-8 max-w-2xl text-justify">
      Každý uživatel má právo být informován, jaké údaje jsou o něm evidovány, a je oprávněn tyto údaje měnit, případně písemně vyslovit nesouhlas s jejich zpracováváním. Každý uživatel může také požádat o okamžité vymazání veškerých svých osobních údajů. Žádost o vymazání je možné zaslat na {{ $t('info.email') }}.

      <component :is="renderHeadline('KONTAKTNÍ ÚDAJE SPRÁVCE')" />
      Správcem Vašich osobních údajů je:

      Komunitní zahrada Střelák

      E-mail:  {{ $t('info.email') }}

      (dále jen „správce“).

      <component :is="renderHeadline('Účel zpracování osobních údajů')" />
      Účelem zpracování Vašich osobních údajů je evidence Vaší rezervace truhlíku/ů v komunitní zahradě Střelák a zajištění komunikace ohledně Vaší rezervace.

      <component :is="renderHeadline('Doba uložení osobních údajů')" />
      Vaše kontaktní údaje budu včetně doprovodné komunikace evidovat za účelem uvedeným v článku 3 tohoto textu do doby 60 dní od ukončení sezóny, ve které byla rezervace provedena. Po uplynutí této doby budou Vaše osobní údaje smazány.

      <component :is="renderHeadline('Dotazy')" />
      Kontakt pro případné dotazy nebo stížnosti v souvislosti se zpracováním osobních údajů:

      <p>{{ $t('info.email') }}</p>
    </div>
  </div>
</template>
