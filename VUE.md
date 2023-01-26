# Vue

## Example component

Install package dependencies:

```sh
npm i -s @sikt/sds-core @sikt/sds-button
```

Import [@sikt/sds-core](./packages/core/) package in `main.css`:

```css
@import url("@sikt/sds-core");
```

Create Vue SFC component:

```vue
<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
  },
};
</script>

<template>
  <button class="sds-button sds-button--primary" @click="onClick">
    <span class="sds-button__label">
      <slot />
    </span>
  </button>
</template>

<style scoped>
@import url("@sikt/sds-button");
</style>
```
