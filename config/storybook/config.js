/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "@storybook/vue";

import "@/main.scss";

export const STORYBOOK_ICONS = require
    .context('../../src/assets/icons', true, /^.*\.svg$/)
    .keys()
    .toString()
    .match(/\b(?!svg)\b[^,./].+?(?=\.)/g)
;
const req = require.context("../../src/components", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
