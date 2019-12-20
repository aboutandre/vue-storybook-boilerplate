<template>
    <div :style="getSVG"/>
</template>

<script>
    export default {
        name: "IconSelector",
        props: {
            iconName: String
        },
        computed: {
            getSVG: function () {
                return {
                    width: '50px',
                    height: '50px',
                    backgroundImage: `url("./../../assets/icons/${this.iconName}.svg")`
                }
            }
        }
    };
</script>
