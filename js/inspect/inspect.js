// converters from https://css-tricks.com/converting-color-spaces-in-javascript/
// eslint-disable-next-line no-underscore-dangle
const _rgb2hex = (rgb) => {
  const ex = /^rgb\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){2}|((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s)){2})((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]))|((((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){2}|((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){2})(([1-9]?\d(\.\d+)?)|100|(\.\d+))%))\)$/i;
  if (ex.test(rgb)) {
    // choose correct separator
    const sep = rgb.indexOf(',') > -1 ? ',' : ' ';
    // turn "rgb(r,g,b)" into [r,g,b]
    // eslint-disable-next-line no-param-reassign
    rgb = rgb.substr(4).split(')')[0].split(sep);

    // convert %s to 0–255
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const R in rgb) {
      const r = rgb[R];
      if (r.indexOf('%') > -1) rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
      /* Example:
          75% -> 191
          75/100 = 0.75, * 255 = 191.25 -> 191
          */
    }

    let r = (+rgb[0]).toString(16);
    let g = (+rgb[1]).toString(16);
    let b = (+rgb[2]).toString(16);

    if (r.length === 1) r = `0${r}`;
    if (g.length === 1) g = `0${g}`;
    if (b.length === 1) b = `0${b}`;

    return `#${r}${g}${b}`;
  }
  return 'Invalid input color';
};

// eslint-disable-next-line no-underscore-dangle
const _rgba2hex = (rgba) => {
  const ex = /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
  if (ex.test(rgba)) {
    const sep = rgba.indexOf(',') > -1 ? ',' : ' ';
    // eslint-disable-next-line no-param-reassign
    rgba = rgba.substr(5).split(')')[0].split(sep);

    // strip the slash if using space-separated syntax
    if (rgba.indexOf('/') > -1) rgba.splice(3, 1);

    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const R in rgba) {
      const r = rgba[R];
      if (r.indexOf('%') > -1) {
        const p = r.substr(0, r.length - 1) / 100;

        if (R < 3) {
          rgba[R] = Math.round(p * 255);
        } else {
          rgba[R] = p;
        }
      }
    }

    let r = (+rgba[0]).toString(16);
    let g = (+rgba[1]).toString(16);
    let b = (+rgba[2]).toString(16);
    let a = Math.round(+rgba[3] * 255).toString(16);

    if (r.length === 1) r = `0${r}`;
    if (g.length === 1) g = `0${g}`;
    if (b.length === 1) b = `0${b}`;
    if (a.length === 1) a = `0${a}`;

    return `#${r}${g}${b}${a}`;
  }
  return 'Invalid input color';
};

const rgb2hex = (rgb) => {
  if (rgb.includes('rgba')) return _rgba2hex(rgb);
  return _rgb2hex(rgb);
};

const drop = (document) => {
  const x = document.documentElement.clientWidth / 2;
  const y = document.documentElement.clientHeight / 2;

  let center = document.elementFromPoint(x, y);
  if (!center) {
    // try h2
    center = document.querySelector('h2');
  }

  const div = document.createElement('div');
  // XSS review - no problem here
  div.innerHTML = '<h1>H1</h1><h2>H2</h2><h3></h3><h4></h4><h5></h5><h6></h6><a href="#">Link</a><p>Some text</p>';

  if (center && center.parentElement) {
    center.parentElement.insertBefore(div, center);
  } else {
    // fallback to document body
    document.body.prepend(div);
  }

  const styles = {};

  // font sizes
  const sizes = ['xxl', 'xl', 'l', 'm', 's', 'xs', 'xxs'];

  for (let i = 1; i < 7; i += 1) {
    const h = div.querySelector(`h${i}`);
    const hstyle = window.getComputedStyle(h);
    styles[`heading-font-size-${sizes[i - 1]}`] = hstyle.getPropertyValue('font-size');
  }

  const psizes = {};
  document.querySelectorAll('p').forEach((p) => {
    const pstyle = window.getComputedStyle(p);
    const size = pstyle.getPropertyValue('font-size');
    psizes[size] = psizes[size] ? psizes[size] + 1 : 1;
  });

  const pskeys = Object.keys(psizes);
  // const max = Math.max(...pskeys.map((k) => psizes[k]));
  const sizeM = +pskeys.find((k) => psizes[k]).replace('px', '');
  let numSizes = pskeys.map((s) => +s.replace('px', '')).sort((a, b) => b - a);
  let offset = numSizes.indexOf(sizeM);
  if (offset > 3) {
    numSizes = numSizes.slice(offset - 3);
    offset = 3;
  }

  const sizeNames = sizes.slice(3 - offset);
  numSizes.forEach((size, i) => {
    styles[`body-font-size-${sizeNames[i]}`] = `${size}px`;
  });

  // fonts
  const h1 = div.querySelector('h1');
  const h1style = window.getComputedStyle(h1);
  styles['heading-font-family'] = h1style.getPropertyValue('font-family');

  const p = div.querySelector('p');
  const pstyle = window.getComputedStyle(p);
  styles['body-font-family'] = pstyle.getPropertyValue('font-family');

  styles['fixed-font-family'] = '"Roboto Mono", menlo, consolas, "Liberation Mono", monospace';

  // colors
  styles['text-color'] = rgb2hex(pstyle.getPropertyValue('color'));

  const link = div.querySelector('a');
  const linkStyle = window.getComputedStyle(link);
  styles['link-color'] = rgb2hex(linkStyle.getPropertyValue('color'));
  const linkHoverStyle = window.getComputedStyle(link, ':hover');
  styles['link-hover-color'] = rgb2hex(linkHoverStyle.getPropertyValue('color'));

  styles['background-color'] = '#ffffff';
  styles['overlay-background-color'] = '#eeeeee';
  styles['highlight-background-color'] = '#cccccc';

  const imgs = Array.from(document.querySelectorAll('img'));
  let logo;
  for (let i = 0; i < imgs.length; i += 1) {
    const img = imgs[i];
    if (img.className.includes('logo')) {
      logo = img.src;
      break;
    }
  }

  return {
    logo,
    styles,
  };
};

const generateCSS = (styles) => {
  const sorted = {
    color: [],
    size: [],
    family: [],
  };

  let css = '';
  Object.keys(styles).forEach((key) => {
    if (key.includes('color')) {
      sorted.color.push(key);
    } else if (key.includes('size')) {
      sorted.size.push(key);
    } else if (key.includes('family')) {
      sorted.family.push(key);
    } else {
      // eslint-disable-next-line no-console
      console.warn(`Unable to classify ${key}`);
    }
  });

  css += '/* fonts */\n';
  sorted.family.forEach((key) => {
    css += `--${key}: ${styles[key]};\n`;
  });

  css += '\n';
  css += '/* colors */\n';
  sorted.color.forEach((key) => {
    css += `--${key}: ${styles[key]};\n`;
  });

  css += '\n';
  css += '/* sizes */\n';
  sorted.size.forEach((key) => {
    css += `--${key}: ${styles[key]};\n`;
  });

  return css;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  drop,
  generateCSS,
  rgb2hex,
};
