# @sikt/sds-table — HTML snippets

Rendered HTML for every Storybook story in `packages/table`. Consumers not using React can copy these snippets and apply their own event handling and state. Snippets contain two SVG placeholders: `<!-- icon: XxxIcon -->` (icon name matches `references/icons.md`) and `<!-- svg -->` (other SVGs like the Sikt logo). Render the SVG however you prefer — the wrapping element already carries the sizing/color classes.

Import `@sikt/sds-table/dist/index.css` (and its transitive SDS dependencies, listed in `references/components/table.md`) to pick up the visual styles for these classes.

## Table.stories

### Default

```html
<div class="sds-table">
  <table class="sds-table__table" aria-rowcount="248">
    <caption class="">
      <span class="sds-screen-reader-only">Table caption</span>
    </caption>
    <thead class="sds-table__head">
      <tr class="sds-table__row">
        <th class="sds-table__header">Id</th>
        <th class="sds-table__header">Navn</th>
        <th class="sds-table__header">Telefon</th>
        <th class="sds-table__header">Adresse</th>
        <th class="sds-table__header">Behandlingsstatus</th>
        <th class="sds-table__header">CTA</th>
      </tr>
    </thead>
    <tbody class="sds-table__body">
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Id">1</td>
        <td class="sds-table__cell" data-th="Navn">Ola Nordmann</td>
        <td class="sds-table__cell" data-th="Telefon">
          <a href="tel:" style="white-space: nowrap">90 90 90 90</a>
        </td>
        <td class="sds-table__cell" data-th="Adresse">
          <address>
            <span style="white-space: nowrap">Fridtjof Nansens vei 19</span>
            <br />
            <span>0369 Oslo</span>
          </address>
        </td>
        <td class="sds-table__cell" data-th="Behandlingsstatus">Behandlet</td>
        <td class="sds-table__cell" data-th="CTA">
          <button style="white-space: nowrap">Klikk meg</button>
        </td>
      </tr>
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Id">2</td>
        <td class="sds-table__cell" data-th="Navn">Kari Nordmann</td>
        <td class="sds-table__cell" data-th="Telefon">
          <a href="tel:" style="white-space: nowrap">90 90 90 90</a>
        </td>
        <td class="sds-table__cell" data-th="Adresse">
          <address>
            <span style="white-space: nowrap">Fridtjof Nansens vei 19</span>
            <br />
            <span>0369 Oslo</span>
          </address>
        </td>
        <td class="sds-table__cell" data-th="Behandlingsstatus">Ubehandlet</td>
        <td class="sds-table__cell" data-th="CTA">
          <button style="white-space: nowrap">Klikk meg</button>
        </td>
      </tr>
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Id">3</td>
        <td class="sds-table__cell" data-th="Navn">Odd Even Nordmann</td>
        <td class="sds-table__cell" data-th="Telefon">
          <a href="tel:" style="white-space: nowrap">90 90 90 90</a>
        </td>
        <td class="sds-table__cell" data-th="Adresse">
          <address>
            <span style="white-space: nowrap">Fridtjof Nansens vei 19</span>
            <br />
            <span>0369 Oslo</span>
          </address>
        </td>
        <td class="sds-table__cell" data-th="Behandlingsstatus">Ubehandlet</td>
        <td class="sds-table__cell" data-th="CTA">
          <button style="white-space: nowrap">Klikk meg</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

### WithFooter

```html
<div class="sds-table">
  <table class="sds-table__table" aria-rowcount="248">
    <caption class="">
      <span class="sds-screen-reader-only">Table caption</span>
    </caption>
    <thead class="sds-table__head">
      <tr class="sds-table__row">
        <th class="sds-table__header">Header</th>
        <th class="sds-table__header">Header</th>
      </tr>
    </thead>
    <tbody class="sds-table__body">
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Header">A</td>
        <td class="sds-table__cell" data-th="Header">B</td>
      </tr>
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Header">C</td>
        <td class="sds-table__cell" data-th="Header">D</td>
      </tr>
    </tbody>
    <tfoot class="sds-table__foot">
      <tr class="sds-table__row">
        <td class="sds-table__cell" data-th="Header">E456</td>
        <td class="sds-table__cell" data-th="Header">F789</td>
      </tr>
    </tfoot>
  </table>
</div>
```

### WithVerticalHeader

```html
<div class="sds-table">
  <table class="sds-table__table" aria-rowcount="248">
    <caption class="">
      <span class="sds-screen-reader-only">Table caption</span>
    </caption>
    <tbody class="sds-table__body">
      <tr class="sds-table__row">
        <th class="sds-table__header" scope="row">A0023-35</th>
        <td class="sds-table__cell" data-th="A0023-35">0035</td>
        <td class="sds-table__cell" data-th="A0023-35">Ola Nordmann</td>
      </tr>
      <tr class="sds-table__row">
        <th class="sds-table__header" scope="row">A0023-39</th>
        <td class="sds-table__cell" data-th="A0023-39">0039</td>
        <td class="sds-table__cell" data-th="A0023-39">
          Fornavn Mellomnavn Etternavn
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
