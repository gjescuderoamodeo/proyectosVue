<template>
  <div>
    <select :value="initialLanguage" @change="updateLanguage">
      <option v-for="language in languages" :key="language" :value="language">
        {{ language}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    initialLanguage: {
      type: String,
      default: 'es'
    },
    languages: {
      type: Array,
      default: () => ['es', 'en']
    },
  },
  data() {
    return {
      currentLanguage: '',
    }
  },
  beforeMount() {
    this.currentLanguage = this.initialLanguage;
  },
  methods: {
    updateLanguage(e) {
      this.currentLanguage = e.target.value;
      this.$i18n.locale = this.currentLanguage;
    }
  }
}
</script>