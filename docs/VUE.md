# Vue

## Example component (SDS)

Install package dependencies:

```sh
npm i -s @sikt/sds-core @sikt/sds-button
```

Import [@sikt/sds-core](./packages/core/) package in `main.css`:

```css
@import url("@sikt/sds-core");
```

Create Vue SFC:

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

## Example component (SD3)

Install package dependencies:

```sh
npm i -s @sikt/sd3-design-system
```

Import CSS in `main.css`:

```css
@import url("@sikt/sd3-design-system");
```

Create Vue SFC:

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
  <button
    class="sd3-button"
    data-button-theme="main"
    data-size="medium"
    data-variant="primary"
    @click="onClick"
  >
    <slot />
  </button>
</template>
```
