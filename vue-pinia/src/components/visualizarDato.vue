<template>
  <div>
    {{ dato }}
  </div>
</template>

<script>
  export default {
    props: {
      dato: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>