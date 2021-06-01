<template>
  <div class="container">
   <h3>로그인성공!</h3>
  </div>
</template>

<script>

export default {
  name:'Profile',
  data(){
    return{
      user: new User('',''),
      loading:false,
      message:''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
      alert('로그인이 필요합니다.')
    }
  },
};
</script>