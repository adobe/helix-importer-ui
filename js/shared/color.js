/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
function valueToHex(c) {
  return c.toString(16);
}

function rgbaToHex(r, g, b, a) {
  return (valueToHex(r) + valueToHex(g) + valueToHex(b) + valueToHex(a));
}

class Color {
  constructor({
    r, g, b, a = 1, name = '',
  }) {
    this.name = name;
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  toHex() {
    return rgbaToHex(this.r, this.g, this.b, this.a);
  }

  static fromRGBA(rgbaStr) {
    const rgba = rgbaStr.replace('rgba(', '').replace(')', '').split(',').map((v) => parseInt(v.trim(), 10));
    return new Color({
      r: rgba[0], g: rgba[1], b: rgba[2], a: rgba[3],
    });
  }

  toRGBA() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  withAlpha(a) {
    return new Color({
      ...this,
      a,
    });
  }

  static random(withAlpha = false) {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const a = withAlpha ? Math.random() : 1;
    return new Color({
      name: `rand-${r}-${g}-${b}-${a}`, r, g, b, a,
    });
  }

  static fromHex(hex) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const a = parseInt(hex.substring(6, 8), 16);
    return new Color({
      name: `hex-${r}-${g}-${b}-${a}`, r, g, b, a,
    });
  }
}

// Default UI mapping colors.
const DEFAULT_COLORS = [
  new Color({
    name: 'violet', r: 148, g: 0, b: 211,
  }),
  new Color({
    name: 'indigo', r: 75, g: 0, b: 130,
  }),
  new Color({
    name: 'blue', r: 0, g: 0, b: 255,
  }),
  new Color({
    name: 'green', r: 0, g: 255, b: 0,
  }),
  new Color({
    name: 'yellow', r: 255, g: 255, b: 0,
  }),
  new Color({
    name: 'orange', r: 255, g: 127, b: 0,
  }),
  new Color({
    name: 'red', r: 255, g: 0, b: 0,
  }),
];

export {
  Color,
  DEFAULT_COLORS,
};
