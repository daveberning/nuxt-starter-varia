# Vue Starter Varia

This is a starter template to jump start projects using Vue.js and TypeScript. Common dependencies have already been saved and configured in the `package.json` file. All you need to do is run a few commands to install the dependencies and start the development server. You can use Yarn or NPM to install and run your local node server; it is recommended to use Yarn whenever possible.

This stack was named after the iconic Varia suit that Samus Aran wears throughout the Metroid series. This template provides a variety of front-end technologies that help with development and code quality. Much the Varia suit, technologies like Vue.js, Vuex, and TypeScript help reduce the amount of damage (errors) taken and increase the developer's speed and performance.


## Install Template and Dependencies

```bash
$ vue init daveberning/nuxt-starter-varia <project-name>
$ cd <project-name>
$ yarn
$ yarn serve
```

## Compiles and Minifies for Production

```bash
$ yarn build
# or
$ npm run build
```

## Lints and Fixes Files

```bash
$ yarn lint
# or
$ npm run lint
```

## Out of the Box

With the Varia template, the "Varia" stack is already in use and configured out-of-the-box. This project is built with Webpack and compiled with Babel.

- [Vue.js](https://vuejs.org/)
- [Vuex (State Management)](https://vuex.vuejs.org/)
- [Vue Router (Routing)](https://router.vuejs.org/)
- [Typescript (class-based)](http://www.typescriptlang.org/)
- [Bootstrap 4](https://getbootstrap.com/)
- [SCSS (SASS)](https://sass-lang.com/)
- Functioning Notification and Modal Components

## Naming Conventions and Standards

**Components** are always PascalCase and should have a short, descriptive, yet generic name. Example: `Modal.vue`.

If the component is a single, stand alone component, then the component can be placed in the root `components` directory. If the container component has two or more components, then a folder should be created and follow the convention below:

```bash
|__components/
   |__Header/
      |__Header.vue (container)
      |__HeaderMain.vue
      |__HeaderSub.vue
      |__HeaderLogo.vue
```

When importing a component into another `component` or `view`, always use absolute paths with the `@` alias. When in doubt, always follow the [Vue.js style guide.](https://vuejs.org/v2/style-guide/)

```html
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator'
  import ComponentName from '@/components/ComponentName.vue' // with alias

  @Component({
    components: {
      ComponentName,
    },
  })
  export default class SomeComponent extends Vue {
    // Props, Methods, Computed Properties, Lifecycle Methods, etc
  }
</script>
```

**Note:** The `nuxt-starter-varia` project uses the class-based syntax that Vue.js is moving towards in Vue.js version 3.x.

## Other

When working with Vuex, it is recommended to break up your `store` into namespaced modules. More information on that can be found on the [documentation website](https://vuex.vuejs.org/guide/modules.html).
