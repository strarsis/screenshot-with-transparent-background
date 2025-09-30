# Taking screenshots of websites with transparent background

## Usage
1. Clone this repository:
`git clone https://github.com/strarsis/screenshot-with-transparent-background`
2. (cwd into it)
`cd screenshot-with-transparent-background`
3. (optional) Install + use node LTS version using `nvm`
`nvm install && nvm use`
4. Install node dependencies
`npm install`
5. Invoke the script
`node index.js` # example defaults (sample page to `screenshot.png`).
`node index.js https://www.example.com output.png`

## Engine
The script uses the `chromium` engine.
Playwright also supports `webkit` and `firefox`.
The engine can be modified easily:
[````
import { chromium as engine } from 'playwright';
```](https://github.com/strarsis/screenshot-with-transparent-background/blob/f103bce967fbf6663a55af28b9320f98a3edcdf3/index.js#L2)
