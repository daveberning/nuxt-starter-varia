<template>
  <section class="container">
    <div>
      <a href="https://nuxtjs.org/" target="_blank"><img src="~/assets/nuxt-logo.png" alt="Nuxt.js Logo"></a>
      <span>+</span>
      <a href="http://www.typescriptlang.org/" target="_blank"><img src="~/assets/ts-logo.png" alt="TypeScript Logo"></a>

      <h1 class="title">Nuxt Starter {{ lang }}</h1>
      <p>A Nuxt 2.0+ class-based template with {{ lang }} integration</p>

      <div class="links">
        <p>Template created by: <a href="https://daveberning.io" target="_blank" class="button--grey">Dave Berning</a> (<a href="https://twitter.com/daveberning" target="_blank" class="button--grey">daveberning.io</a>)</p>
      </div>

      <hr>

      <h2>Technolgies Used</h2>
      <ButtonList :links="links" />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { Action, State, Getter } from 'vuex-class';
import { Link } from '~/types';
import ButtonList from '~/components/ButtonList.vue';

@Component({
  components: {
    ButtonList,
  }
})
export default class Index extends Vue {
  @State(state => state.language) lang: string;
  @Action updateLanguage;
  @Getter developer: string;

  links: Link[] = [
    { text: 'Vue.js', url: 'https://vuejs.org/', },
    { text: 'TypeScript', url: 'http://www.typescriptlang.org/', },
    { text: 'Vuex', url: 'https://vuex.vuejs.org/', },
    { text: 'Vue Class Component', url: 'https://github.com/vuejs/vue-class-component', },
    { text: 'Nuxt Property Decorators', url: 'https://github.com/nuxt-community/nuxt-property-decorator', },
    { text: 'Vuex Property Decorators', url: 'https://github.com/ktsn/vuex-class', }
  ];

  mounted(): void {
    this.updateLanguage('TypeScript');
  }
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 2rem;
  text-align: center;

  h1 {
    margin: 1rem 0;
    font-size: 3rem;
  }
}

img {
  max-width: 200px;
  vertical-align: bottom;
}

p {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.links p {
  display: inline;
  font-size: 1rem;
}

span {
  font-size: 5rem;
  margin: 2rem;
  display: inline-block;
  color: darken(#ccc, 50%);
}

hr {
  margin: 1rem 0;
}
</style>

