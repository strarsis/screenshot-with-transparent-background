#!/usr/bin/env node
import { chromium as engine } from 'playwright';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

async function main() {
  const argv = yargs(hideBin(process.argv))
  .usage('Usage: $0 screenshot [url] [image]')
  .command('screenshot [url] [image]', 'Take screenshot from URL to image file', (yargs) => {
    return yargs
      .positional('url', {
        describe: 'URL to take screenshot from',
        default: 'https://strarsis.github.io/screenshot-with-transparent-background/sample.html',
      })
      .positional('image', {
        describe: 'Path to write image file to',
        default: './screenshot.png',
      })
  }, async (argv) => {
    console.warn('Taking screenshot from ' + argv.url + ' to ' + argv.image + '...');
    await takeScreenshot(argv.url, argv.image);
    console.warn('Done.');
  })
  .demandCommand(1, 'You need to specify a command')
  .help()
  .parse();
}

async function takeScreenshot(url, image) {
  const browser = await engine.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(url);
  await page.screenshot({
    path: image,

    // important for transparent screenshots
    omitBackground: true,
    type: 'png',
  });
  await browser.close();
}

main();
