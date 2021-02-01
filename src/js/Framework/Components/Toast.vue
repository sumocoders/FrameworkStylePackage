<template>
  <div
    class="toast"
    :class="'toast-' + type"
    :role="role"
    :aria-live="live"
    data-animation="true"
    aria-atomic="true"
    :data-delay="delay"
    :data-autohide="autoHideState"
    :id="id">
    <div class="toast-body">
      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      <div class="d-flex flex-row">
        <i
          :class="[
            type ? 'success' : '','fas fa-check',
            type ? 'danger' : '','fas fa-exclamation-triangle',
            type ? 'info' : '','fas fa-info-circle',
            type ? 'warning' : '','fas fa-exclamation',
          ]"
          class="mr-3 mt-1 toast-icon"></i>
        <span v-html="message"></span>
      </div>
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
      showToast() {
        $(this.$el).toast('show')
      },
    },
    computed: {
      role: function() {
        if (this.type === 'danger') {
          return 'alert';
        }
        return 'status'
      },
      live: function() {
        if (this.type === 'danger') {
          return 'assertive';
        }
        return 'polite'
      },
      autoHideState: function() {
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
  };
</script>

