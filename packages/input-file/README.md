# `@sikt/sds-input-file`

## Consume

```sh
npm i -s @sikt/sds-input-file
```

### React

```js
import { InputFile, FileList, FileListItem } from "@sikt/sds-input-file";
import "@sikt/sds-input-file/dist/index.css";

<>
  <InputFile
    label="Upload documentation"
    aria-label="Upload documentation"
    accept=".doc,.docx"
    onChange={changeHandler}
  />
  <FileList figCaption="Attatchments">
    files.map((file) => {
      <FileListItem
        fileSize={file.size}
        actionProps{{ label: `Remove ${file.name}`, onClick: handleFileClick }}
      >
        {file.name}
      </FileListItem>
    })
  </FileList>
</>
```

#### Caveats

- "aria-label": Should be the text content of the label prop. This is used to override React Aria DropZone that sets it's own aria-label.
- accept: Does not currently support wildcard (for example "\*" or "image/\*")

### Stylesheets & custom markup

Import stylesheet:

```css
@import url("@sikt/sds-input-file");
```

Create custom markup:

```html
<!-- N/A -->
```
