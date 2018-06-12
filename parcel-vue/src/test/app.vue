<template>
    <div class="index">
        app
    </div>
</template>
<script>
export default {
  name: "index",
  mounted() {},
  data() {
    return {
      showTip: false
    };
  },
  methods: {
    showClick() {
      this.showTip = true;
    }
  }
};
</script>
<style scoped>

</style>
