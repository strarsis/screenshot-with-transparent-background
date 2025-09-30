# Taking screenshots of websites with transparent background

## Usage
1. Clone this repository:
`git clone https://github.com/strarsis/screenshot-with-transparent-background`
2. (cwd into it)
`cd screenshot-with-transparent-background`
3. (optional) Install + use node LTS version using `nvm`:
`nvm install && nvm use`
4. Install node dependencies:
`npm install`
5. Invoke the script:
  - `node index.js` # example defaults (sample page to `screenshot.png`).
  - `node index.js https://www.example.com output.png`

## Browser engine
The script uses the `chromium` engine.
Playwright also supports `Webkit` and `Firefox`.
The engine to be used can be modified easily, just replace `chromium` with `webkit` or `firefox`.
https://github.com/strarsis/screenshot-with-transparent-background/blob/f103bce967fbf6663a55af28b9320f98a3edcdf3/index.js#L2

## Page prerequisites
Taking a screenshot with transparent background of a web page only works of course when that web page does not epxlicitly use a background (and when it is just `white`) on its `html`, `body` or other page-covering elements.
If you still want to have a transparent background, you need to modify the styles of the page and remove the background or make it transparent.
You would add the code that modifies the page before taking the screenshot to the `takeScreenshot()` before `page.screenshot()`, see the commented out `pre-process example` in the script.
