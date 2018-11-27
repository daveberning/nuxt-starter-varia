<template>
  <ul>
    <li v-for="link in links" :key="link.text">
      <a :href="link.url" target="_blank">{{ link.text }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import { Link } from '~/types';

@Component({})
export default class ButtonList extends Vue {
  @Prop(Array) links: Link[];
};
</script>

<style lang="scss">
ul {
  text-align: left;
  list-style: none;

  li {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #000;
    border-radius: 2px;
    margin: 10px;
  }

  li a {
    color: #000;
    text-decoration: none;
  }
}
</style>
