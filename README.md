## Installation

```bash
npm i @levihub/pathexists
```

## Declaration
```javascript
const exists = require("@levihub/pathexists");
// or
import exists from "@levihub/pathexists";
```

## Usage/Examples
```javascript
let res = exists(fileOrFolderPath); // returns true or false

if (res) {
  console.log(`${fileOrFolderPath} exists.`);
} else {
  console.log(`${fileOrFolderPath} does not exists.`);
}
```