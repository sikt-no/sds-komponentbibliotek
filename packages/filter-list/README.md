# `@sikt/sds-filter-list`

## Consume

```sh
npm i -s @sikt/sds-filter-list
```

### React

```js
import {
  FilterList,
  FilterListCategory,
  FilterListItem,
  FilterListSection,
} from "@sikt/sds-filter-list";
import "@sikt/sds-filter-list/dist/index.css";
```

#### Anatomy

The FilterList component is a container of elements to present a list of filter-options.

`<FilterList/>` is the header section.

`<FilterListItem />` renders an option of type checkbox or radio

`<FilterListCategory />` is a container of typeFilterListItem.

`<FilterListSection>` is a container of typeFilterListItem.

```html
<FilterList>
  <FilterListItem />
  <FilterListItem />

  <FilterListCategory>
    <FilterListItem />
    <FilterListItem />
  </FilterListCategory>

  <FilterListSection>
    <FilterListItem />
    <FilterListItem />
  </FilterListSection>

  <FilterListCategory>
    <FilterListSection>
      <FilterListItem />
      <FilterListItem />
    </FilterListSection>

    <FilterListSection>
      <FilterListItem />
      <FilterListItem />
    </FilterListSection>
  </FilterListCategory>
</FilterList>
```
