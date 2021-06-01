<template>
  <h3>admin</h3>
</template>

<script>

export default {
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push("/login");
      alert('로그인이 필요합니다')
    }
  },
}
</script>
