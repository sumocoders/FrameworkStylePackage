<template>
  <template v-for="message in error">
    <toast type="danger" :message="message"></toast>
  </template>
  <template v-for="message in success">
    <toast type="success" :message="message"></toast>
  </template>
  <template v-for="message in warning">
    <toast type="warning" :message="message"></toast>
  </template>
  <template v-for="message in report">
    <toast type="info" :message="message"></toast>
  </template>
</template>

<script>
import toast from './Toast.vue'

export default {
  name: 'App',
  props: {
    successMessages: String,
    errorMessages: String,
    warningMessages: String,
    reportMessages: String
  },
  components: {
    toast
  },
  data () {
    return {
      success: [],
      error: [],
      report: [],
      warning: []
    }
  },
  computed: {
  },
  mounted () {
    console.log('vue app mounted')
    this.success = this.successMessages ? JSON.parse(this.successMessages) : []
    this.warning = this.warningMessages ? JSON.parse(this.warningMessages) : []
    this.error = this.errorMessages ? JSON.parse(this.errorMessages) : []
    this.report = this.reportMessages ? JSON.parse(this.reportMessages) : []
  }
}
</script>

<style scoped>
</style>
