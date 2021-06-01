<template>
  <div class="col-md-12">
    <div class="card card-container container" style="padding: 10% 0 10% 0; border: none;">
      <img
          id="profile-img"
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          class="profile-img-card"
          style="width: 100%; max-width: 200px; border-radius: 400px; margin:0 auto;"
      />
      <Form @submit="handleLogin" :validation-schema="schema" style="width: 100%; max-width: 400px; margin: 0 auto;">
        <div class="form-group">
          <label for="username">Username</label>
          <Field name="username" type="text" class="form-control" />
          <ErrorMessage name="username" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field name="password" type="password" class="form-control" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>

        <div class="form-group" style="margin-top: 20px; width: 100%;">
          <button class="btn btn-primary btn-block" :disabled="loading" style="width: 100%;">
            <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
                style="margin-top: 20px"
            ></span>
            <span>Login</span>
          </button>
        </div>

        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
//유효성검사 = vee-validate
//입력검증 = yup 
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  components: {
    //yub사용을 위해 컴포넌트로 등록
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      //입력검증
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  //로그인 상태 조사 및 반환
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  //현재 로그인 상태정보를 loggedIn으로 받아들임
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
          () => {
            this.$router.push("/Profile");
          },
          (error) => {
            this.loading = false;
            this.message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
          }
      );
    },
  },
};
</script>

<style scoped>

</style>