<template>
  <header>
    <div class="container">
      <h1>A {{ framework }} Starter Template With {{ language }}</h1>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { State } from 'vuex-class';

@Component({})
export default class Header extends Vue {
  language: string = 'TypeScript';

  @State(state => state.framework) framework: string;
}
</script>

<style lang="scss">
header {
  background: #294e80;
  padding: 15px;

  h1 {
    color: #fff;
    text-align: center;
  }
}
</style>
