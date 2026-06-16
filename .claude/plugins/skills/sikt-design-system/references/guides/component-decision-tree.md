# Component Decision Tree

Quick guide for choosing the right SDS component.

## Actions

| Situation                                     | Use                                                                                             |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Navigates to a URL (inline / standalone link) | `Link` from `@sikt/sds-core` — the default `href` component                                     |
| Link that must look like a button             | `ButtonLink` from `@sikt/sds-button` — use only when button styling is semantically appropriate |
| Triggers an action                            | `Button` from `@sikt/sds-button`                                                                |
| Icon-only action                              | `Button` with `iconVariant="only"` and `aria-label` on the button                               |
| Primary call-to-action                        | `Button variant="strong"`                                                                       |
| Secondary / supporting action                 | `Button variant="subtle"` (default)                                                             |
| Destructive action                            | `Button variant="critical"`                                                                     |
| Toolbar / compact UI                          | `Button size="small"`                                                                           |
| Grouped related actions                       | `ButtonGroup` from `@sikt/sds-button`                                                           |

## Text input

| Situation                       | Use                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------- |
| Free text (name, comment, etc.) | `TextInput` from `@sikt/sds-input`                                               |
| Email address                   | `EmailInput` from `@sikt/sds-input` (pre-wires email icon and type)              |
| Password                        | `PasswordInput` from `@sikt/sds-input`                                           |
| Phone number                    | `TelInput` from `@sikt/sds-input`                                                |
| Number                          | `NumberInput` from `@sikt/sds-input`                                             |
| Search field with submit button | `SearchInput` from `@sikt/sds-input` — pass `actionProps` and `clearActionProps` |
| Multi-line text                 | `TextArea` from `@sikt/sds-input`                                                |
| Date or date range              | `InputDatepicker` / `InputDaterangepicker` from `@sikt/sds-input-datepicker`     |
| File upload                     | `InputFile` from `@sikt/sds-input-file`                                          |

## Selection

| Situation                                                   | Use                                                                                             |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| One item from a short list (≤ ~5 options) shown all at once | `RadioFieldset` from `@sikt/sds-radio`                                                          |
| One item from a longer / dynamic list                       | `Select` from `@sikt/sds-select` (native `<select>`)                                            |
| Type-ahead / searchable dropdown                            | `Combobox` from `@sikt/sds-combobox`                                                            |
| Switch between 2–4 mutually exclusive views or filters      | `ToggleSegment` from `@sikt/sds-toggle`                                                         |
| Multiple items from a list                                  | `CheckboxInput` (multiple) from `@sikt/sds-checkbox` — wrap in `Fieldset` from `@sikt/sds-form` |
| Single yes/no toggle                                        | `CheckboxInput` from `@sikt/sds-checkbox`                                                       |
| On/off switch                                               | `ToggleSwitch` from `@sikt/sds-toggle`                                                          |

## Feedback and status

| Situation                                      | Use                                                     |
| ---------------------------------------------- | ------------------------------------------------------- |
| Blocking loading state                         | `ProgressIndicator` from `@sikt/sds-progress-indicator` |
| Step progress through a flow                   | `ProgressStep` from `@sikt/sds-progress-indicator`      |
| Info / success / warning / error message block | `Alert` from `@sikt/sds-message`                        |
| Application status panel                       | `ApplicationStatus` from `@sikt/sds-message`            |
| Form-level error summary                       | `ErrorSummary` from `@sikt/sds-message`                 |
| Informational guide / help panel               | `GuidePanel` from `@sikt/sds-message`                   |
| Inline notification                            | `Notification` from `@sikt/sds-notification`            |

## Overlays

| Situation                       | Use                                                                |
| ------------------------------- | ------------------------------------------------------------------ |
| Confirmation or blocking prompt | `Dialog` from `@sikt/sds-dialog`                                   |
| Side panel / tray               | `Dialog drawer="left"` or `drawer="right"` from `@sikt/sds-dialog` |
| Contextual info on hover/focus  | `Tooltip` from `@sikt/sds-popover`                                 |
| Rich contextual panel           | `Popover` from `@sikt/sds-popover`                                 |

## Layout and navigation

| Situation                  | Use                                                          |
| -------------------------- | ------------------------------------------------------------ |
| App-level header           | `Header` from `@sikt/sds-header`                             |
| App-level footer           | `Footer` from `@sikt/sds-footer`                             |
| Sikt logo                  | `Logo` from `@sikt/sds-logo`                                 |
| Content section wrapper    | `Section` from `@sikt/sds-section`                           |
| Horizontal scroll tabs     | `Tabs`, `TabList`, `Tab` from `@sikt/sds-tabs`               |
| Collapsible section        | `Details` from `@sikt/sds-details`                           |
| Breadcrumb navigation      | `Breadcrumbs`, `BreadcrumbItem` from `@sikt/sds-breadcrumbs` |
| Page-level pagination      | `Pagination` from `@sikt/sds-pagination`                     |
| Filterable list navigation | `FilterList` from `@sikt/sds-filter-list`                    |

## Data display

| Situation                              | Use                                                                     |
| -------------------------------------- | ----------------------------------------------------------------------- |
| Tabular data                           | `Table`, `TableHead` from `@sikt/sds-table`                             |
| Status label                           | `TagStatus` from `@sikt/sds-tag`                                        |
| Category label / chip                  | `TagCategory` from `@sikt/sds-tag`                                      |
| Toggleable filter chip                 | `ChipToggle` from `@sikt/sds-chip`                                      |
| Clickable action chip                  | `ChipButton` from `@sikt/sds-chip`                                      |
| Image with caption                     | `Figure` from `@sikt/sds-core`                                          |
| Card container                         | `Card` from `@sikt/sds-card`                                            |
| Unordered / ordered / description list | `UnorderedList`, `OrderedList`, `DescriptionList` from `@sikt/sds-list` |

## Typography

Always use SDS typography — never raw `<h1>`–`<p>`. See `references/guides/typography.md` for full usage.

| Element   | Use                                         |
| --------- | ------------------------------------------- |
| Headings  | `Heading1`–`Heading6` from `@sikt/sds-core` |
| Body text | `Paragraph` from `@sikt/sds-core`           |
