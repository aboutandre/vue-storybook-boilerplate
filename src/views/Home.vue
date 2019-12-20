<template>
  <div class="home">
     <IconSelector icon-name="about"/>
  </div>
</template>

<script>
// @ is an alias to /src
import IconSelector from "@/components/IconSelector/IconSelector.vue";

export default {
  name: "home",
  components: {
      IconSelector
  }
};
</script>
