<template>
  <div class="container">
   <h3>꺄아아아아아아아앙 로그인성공!</h3>
  </div>
</template>

<script>
export default {
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
};
</script>