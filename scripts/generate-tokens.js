const fs = require('fs');
const path = require('path');

const proto = process.env.PROTOTYPE || 'a';
const inputPath = path.resolve(__dirname, `../design-tokens/prototype-${proto}.json`);

if (!fs.existsSync(inputPath)) {
  throw new Error(`Tokens file not found: ${inputPath}`);
}

const tokens = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

const rootVars = [];
const themeVars = [];

function walk(obj, pathParts = []) {
  for (const [key, value] of Object.entries(obj)) {
    const nextPath = [...pathParts, key];

    if (value && typeof value === 'object' && 'value' in value) {
      const name = nextPath.join('-');
      const val = value.value;

      rootVars.push(`  --${name}: ${val};`);
      themeVars.push(`  --${name}: ${val};`);
    } else if (typeof value === 'object') {
      walk(value, nextPath);
    }
  }
}

walk(tokens);

const tokensCss = `
/* AUTO-GENERATED — DO NOT EDIT */
:root {
${rootVars.join('\n')}
}
`.trim();

const themeCss = `
/* AUTO-GENERATED — DO NOT EDIT */
@theme {
${themeVars.join('\n')}
}
`.trim();
// TODO: do we need tokens.scss?
//
// fs.writeFileSync(
//   path.resolve(__dirname, '../src/app/styles/tokens.scss'),
//   tokensCss
// );
//
fs.writeFileSync(
  path.resolve(__dirname, '../src/app/styles/theme.scss'),
  themeCss
);

console.log(`✅ Tokens and theme generated for prototype "${proto}"`);
