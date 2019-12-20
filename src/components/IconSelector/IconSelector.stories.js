import {storiesOf} from "@storybook/vue";
import {select, withKnobs} from '@storybook/addon-knobs';

import IconSelector from "./IconSelector.vue";

import {STORYBOOK_ICONS} from '../../../config/storybook/config';

const iconList = STORYBOOK_ICONS.reduce(function (result, item) {
    result[item] = item;
    return result;
}, {});

storiesOf("HelloWorld", module)
    .addDecorator(withKnobs)
    .add("default", () => {
        return {
            components: {IconSelector},
            props: {
                selectedIcon: {
                    default: select('Icons', iconList, Object.keys(iconList)[0]),
                },
            },
            template: `
                <div style="display: flex; flex-direction:column; align-items: center; padding: 5rem;">
                    <h2>{{ selectedIcon }}</h2>
                    <IconSelector :icon-name='selectedIcon'/>
                </div>

            `
        };
    });
