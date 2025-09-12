# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [4.1.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@4.0.0...@sikt/sds-icons@4.1.0) (2025-09-12)

### Features

- **icons:** add ai icon ([d9d240d](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/d9d240dfcf6e87e2f5a77ad6b576cad66017d2f3))

## [4.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@3.2.0...@sikt/sds-icons@4.0.0) (2025-06-20)

### ⚠ BREAKING CHANGES

- **icons:** revert sort asc/desc

### Bug Fixes

- **icons:** revert sort asc/desc ([b814df4](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/b814df4d527ed68175efdb99751a2bb5c50b1f39))

## [3.2.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@3.1.0...@sikt/sds-icons@3.2.0) (2025-05-08)

### Features

- **icons:** add law icon ([9b9cad1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/9b9cad1ce4e9cca5ed2ced982ae256b777bf60f3))

## [3.1.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@3.0.0...@sikt/sds-icons@3.1.0) (2025-03-13)

### Features

- add book icon ([b2749a1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/b2749a118f99eda2a7ee38fd35af3269f2dee3f8))

## [3.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@2.0.1...@sikt/sds-icons@3.0.0) (2024-11-18)

### ⚠ BREAKING CHANGES

- **icons:** rename icons from visual representation to use representation

#### Migration

Search replace v2 name with updated v3 name.

| Svg v2               | Svg v3                       | Component v2           | Component v3                  |
| -------------------- | ---------------------------- | ---------------------- | ----------------------------- |
| archive              | archive                      | ArchiveIcon            | ArchiveIcon                   |
| arrow-circle-left    | navigate-to-previous-alt     | ArrowCircleLeftIcon    | NavigateToPreviousAltIcon     |
| arrow-circle-right   | navigate-to-next-alt         | ArrowCircleRightIcon   | NavigateToNextAltIcon         |
| arrow-clockwise      | refresh                      | ArrowClockwiseIcon     | RefreshIcon                   |
| arrow-left           | navigate-to-previous         | ArrowLeftIcon          | NavigateToPreviousIcon        |
| arrow-right          | navigate-to-next             | ArrowRightIcon         | NavigateToNextIcon            |
| arrow-square-out     | navigate-to-external         | ArrowSquareOutIcon     | NavigateToExternalIcon        |
| arrow-u-up-left      | undo                         | ArrowUUpLeftIcon       | UndoIcon                      |
| arrow-u-up-right     | redo                         | ArrowUUpRightIcon      | RedoIcon                      |
| bell                 | notification                 | BellIcon               | NotificationIcon              |
| bell-ringing         | notification                 | BellRingIcon           | NotificationIcon              |
| bookmark-simple      | bookmark-unchecked           | BookmarkSimpleIcon     | BookmarkUncheckedIcon         |
| bookmark-simple-fill | bookmark-checked             | BookmarkSimpleFillIcon | BookmarkCheckedIcon           |
| calendar-blank       | date-calendar                | CalendarBlankIcon      | DateCalendarIcon              |
| calendar-plus        | add-to-calendar              | CalendarPlusIcon       | AddToCalendarIcon             |
| caret-circle-up      | expand-show-alt              | CaretCircleUpIcon      | CollapseHideAltIcon           |
| caret-circle-down    | collapse-hide-alt            | CaretCircleDownIcon    | ExpandShowAltIcon             |
| caret-circle-left    | move-to-previous-alt         | CaretCircleLeftIcon    | MoveToPreviousAltIcon         |
| caret-circle-right   | move-to-next-alt             | CaretCircleRightIcon   | MoveToNextAltIcon             |
| caret-up             | collapse-hide                | CaretUpIcon            | CollapseHideIcon              |
| caret-down           | expand-show                  | CaretDownIcon          | ExpandShowIcon                |
| caret-left           | move-to-previous             | CaretLeftIcon          | MoveToPreviousIcon            |
| caret-right          | move-to-next                 | CaretRightIcon         | MoveToNextIcon                |
| check                | confirm                      | CheckIcon              | ConfirmIcon                   |
| check-circle         | success                      | CheckCircleIcon        | SuccessIcon                   |
| circle               | -                            | CircleIcon             | -                             |
| clock                | time                         | ClockIcon              | TimeIcon                      |
| copy                 | copy                         | CopyIcon               | CopyIcon                      |
| dots-three           | contextual-menu              | DotsThreeIcon          | ContextualMenuIcon            |
| dots-three-circle    | contextual-menu-alt          | DotsThreeCircleIcon    | ContextualMenuAltIcon         |
| dots-six-vertical    | reorder-handle               | DotsSixVerticalIcon    | ReorderHandleIcon             |
| download-simple      | download                     | DownloadSimpleIcon     | DownloadIcon                  |
| envelope             | email                        | EnvelopeIcon           | EmailIcon                     |
| export               | export                       | ExportIcon             | ExportIcon                    |
| floppy-disk          | save                         | FloppyDiskIcon         | SaveIcon                      |
| -                    | folder                       | -                      | FolderIcon                    |
| -                    | create-folder                | -                      | CreateFolderIcon              |
| funnel               | filter                       | FunnelIcon             | FilterIcon                    |
| gear                 | settings                     | GearIcon               | SettingsIcon                  |
| house                | home-landing                 | HouseIcon              | HomeLandingIcon               |
| info                 | info                         | InfoIcon               | InfoIcon                      |
| image                | image-placeholder            | ImageIcon              | ImagePlaceholderIcon          |
| link-simple          | link                         | LinkSimpleIcon         | LinkIcon                      |
| list                 | menu                         | ListIcon               | MenuIcon                      |
| lock-simple          | locked-closed                | LockSimpleIcon         | LockedClosedIcon              |
| lock-simple-open     | unlocked-open                | LockSimpleOpenIcon     | UnlockedOpenIcon              |
| magnifying-glass     | search                       | MagnifyingGlassIcon    | SearchIcon                    |
| map-pin              | location                     | MapPinIcon             | LocationIcon                  |
| megaphone            | feedback                     | MegaphoneIcon          | FeedbackIcon                  |
| minus                | subtract                     | MinusIcon              | SubtractIcon                  |
| minus-circle         | subtract-alt                 | MinusCircleIcon        | SubtractAltIcon               |
| paperclip            | attachment                   | PaperclipIcon          | AttachmentIcon                |
| password             | password                     | PasswordIcon           | PasswordIcon                  |
| pencil               | edit                         | PencilIcon             | EditIcon                      |
| plus                 | add                          | PlusIcon               | AddIcon                       |
| plus-circle          | add-alt                      | PlusCircleIcon         | AddAltIcon                    |
| phone                | phone                        | PhoneIcon              | PhoneIcon                     |
| question             | help                         | QuestionIcon           | HelpIcon                      |
| sign-in              | sign-in                      | SignInIcon             | SignInIcon                    |
| sign-out             | sign-out                     | SignOutIcon            | SignOutIcon                   |
| sliders              | adjust-settings              | SlidersIcon            | AdjustSettingsIcon            |
| shopping-cart        | shopping-cart-selected-items | ShoppingCartIcon       | ShoppingCartSelectedItemsIcon |
| sort-ascending       | sort-descending              | SortAscendingIcon      | SortDescendingIcon            |
| sort-descending      | sort-ascending               | SortDescendingIcon     | SortAscendingIcon             |
| spinner-gap          | spinner-gap                  | SpinnerIcon            | SpinnerIcon                   |
| trash                | delete                       | TrashIcon              | DeleteIcon                    |
| upload-simple        | upload                       | UploadSimpleIcon       | UploadIcon                    |
| user-circle          | user-profile                 | UserCircleIcon         | UserProfileIcon               |
| user-circle-minus    | user-remove                  | UserCircleMinusIcon    | UserRemoveIcon                |
| user-circle-plus     | user-add                     | UserCirclePlusIcon     | UserAddIcon                   |
| warning              | alert                        | WarningIcon            | AlertIcon                     |
| x                    | cancel                       | XIcon                  | CancelIcon                    |
| x-circle             | failed                       | XCircleIcon            | FailedIcon                    |

### Features

- **icons:** rename icons from visual representation to use representation ([e1d2e3f](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/e1d2e3f4efffc0388feef00b72bddd428f64a742))

## [2.0.2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@2.0.1...@sikt/sds-icons@2.0.2) (2024-11-19)

### Bug Fixes

- **deps:** change peer deps clsx to ^2.1.0 ([9eb76f1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/9eb76f1207a2ec8d19fda646c9bc26d5922b1839))
- **deps:** peer deps react@19.0.0 ([17352e2](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/17352e291153f79c66a9de317ca42820159aee8a))
- package json exports ([b62fed7](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/b62fed7bfa459c618c016f39c960dffda037155f))

## [2.0.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@2.0.0...@sikt/sds-icons@2.0.1) (2024-04-10)

### Bug Fixes

- **icons:** make install work again for consumers ([18ef8fb](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/18ef8fbbd1ad876ed843987065315562f83030fd))

## [2.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@1.2.1...@sikt/sds-icons@2.0.0) (2024-04-01)

### ⚠ BREAKING CHANGES

- **icons:** remove x logo icon

### Features

- **icons:** remove x logo icon ([aa81c70](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/aa81c701e59f847b8841eb4fe9e61a74e2449012))

### Bug Fixes

- **deps:** update dependency @phosphor-icons/core to ^2.1.1 ([025e50b](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/025e50bac95008ae70302789fec62529e6884b52))

### [1.2.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@1.2.0...@sikt/sds-icons@1.2.1) (2023-11-28)

### Bug Fixes

- **icons-logo:** set correct logo color based on preferred color scheme ([bbdeb57](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/bbdeb57aec9ccd133c30a2d5862a64ea2c87a104))
- **icons-logo:** make it possible to override all props ([358ad2b](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/358ad2b7eb8ae6e2c58c84480968e4296aa29bcf))

## [1.2.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@1.1.0...@sikt/sds-icons@1.2.0) (2023-08-24)

### Features

- **icons:** add LinkedinLogo and XLogo ([cd237dd](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/cd237ddc35eb438312178438140c7784f57e5bd6))

## [1.1.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@1.0.1...@sikt/sds-icons@1.1.0) (2023-08-15)

### Features

- **icons:** add new icons ([fe08edc](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/fe08edc2490a0c9b532fbbb0536baad7bb683419))

### [1.0.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@1.0.0...@sikt/sds-icons@1.0.1) (2023-05-14)

## [1.0.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@0.2.1...@sikt/sds-icons@1.0.0) (2023-04-11)

### ⚠ BREAKING CHANGES

- **icons:** remove & add icons
- **icons:** move from svg sprite to single icons

### Features

- **breadcrumbs:** add breadcrumbs component ([b40cd29](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/b40cd2933f04c631d36c0206d49847c01f1dd93d))
- **content-block:** add inline content block and featured component ([fd8fc7f](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/fd8fc7f1ee712e12aafba21704f335da3e2f0b68))
- **icons:** add password icon ([5ee7e40](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/5ee7e40fab552661ce2c275ff8258324975acbcd))
- **icons:** add spinner component ([7b3a857](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/7b3a857536282349a0dc19bf48eb6cc1f4703b52))
- **icons:** move from svg sprite to single icons ([0790c29](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/0790c295fbe89b34412c291e5b0913570f09905b)), closes [#77](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/issues/77)
- **icons:** remove & add icons ([b9d185f](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/b9d185fc6578518d4e18d1fb2e99c99899b335aa))

### Bug Fixes

- **icons:** export icon type ([4fe899a](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/4fe899a13aba4e51672ebfde9533ffdfc685b050)), closes [#71](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/issues/71)

### [0.2.1](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@0.2.0...@sikt/sds-icons@0.2.1) (2023-03-07)

## [0.2.0](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/compare/@sikt/sds-icons@0.1.0...@sikt/sds-icons@0.2.0) (2023-03-06)

### ⚠ BREAKING CHANGES

- **icons:** change to base icon set

### Features

- **icons:** add support for filled icons ([3e0d30d](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/3e0d30d40620e4aadf2540a32431fddcedc9afaf))
- **icons:** change to base icon set ([7ece27c](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/7ece27cb9c13fa41badf04014d725d8420e53011))

### Bug Fixes

- **icons:** smiley icons ([721f053](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/721f05385bfee6bfa26bdc1ee5944df3b30f9e75))
- update deps ([2b611c9](https://gitlab.sikt.no/designsystem/sds-komponentbibliotek/commit/2b611c9c6ec159128563c42b2445110b884c5d1f))

## 0.1.0 (2023-02-09)
