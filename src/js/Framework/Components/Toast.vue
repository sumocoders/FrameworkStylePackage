<template>
  <div
    class="toast"
    :class="'toast-' + type"
    :role="role"
    :aria-live="live"
    data-bs-animation="true"
    aria-atomic="true"
    :data-bs-delay="delay"
    :data-bs-autohide="autoHideState"
    :id="id">
    <div class="toast-body">
      <div class="d-flex flex-row align-items-center">
        <div class="toast-icon-wrapper me-3">
          <i
              :class="[
            type ? 'success' : '','fas fa-check',
            type ? 'danger' : '','fas fa-exclamation-triangle',
            type ? 'info' : '','fas fa-info-circle',
            type ? 'warning' : '','fas fa-exclamation',
          ]"
              class="toast-icon"></i>
        </div>
        <span v-html="message"></span>
      </div>
      <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-progress" v-if="autoHideState === 'true'">
      <div class="toast-progress--inner" :style="`animation-duration:${delay}ms`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  props: {
    type: {
      type: String,
      default: 'success'
    },
    delay: {
      type: Number,
      default: 10000
    },
    message: String,
    autoHide: {
      type: String,
      default: 'null'
    },
    id: {
      type: String,
      default: 'toast' + Date.now()
    }
  },
  methods: {
    showToast () {
      const toast = new window.bootstrap.Toast(this.$el)
      toast.show()
    },
  },
  computed: {
    role: function () {
      if (this.type === 'danger') {
        return 'alert'
      }
      return 'status'
    },
    live: function () {
      if (this.type === 'danger') {
        return 'assertive'
      }
      return 'polite'
    },
    autoHideState: function () {
      if (this.autoHide !== 'null') {
        return this.autoHide
      }
      if (this.type === 'danger') {
        return 'false'
      }
      return 'true'
    }
  },
  mounted () {
    this.showToast()
  }
}
</script>
