<template>
  <div
    class="toast"
    :class="'toast-' + type"
    :role="role"
    :aria-live="live"
    data-animation="true"
    aria-atomic="true"
    :data-delay="delay"
    data-autohide="false"
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
        {{message}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    props: {
      type: String,
      delay: {
        type: Number,
        default: 10000
      },
      message: String,
      autoHide: {
        type: Boolean,
        default: false
      },
      id: {
        type: String,
        default: 'toast' + Date.now()
      }
    },
    data() {
      return {
        role: 'status',
        live: 'polite',
      };
    },
    watch: {

    },
    methods: {
      showToast() {
        $(this.$el).toast('show')
      },
      setRoleAndLive () {
        if (this.type === 'danger') {
          this.role = 'alert'
          this.live = 'assertive'
        }
      }
    },
    mounted () {
      this.showToast()
      this.setRoleAndLive()
    }
  };
</script>

