<template>
  <section class="login">
    <div class="user-login">
      <div class="user-logo">
        <img src="@/assets/img/logo.png" alt />
      </div>
      <div class="user-cotent">
        <BasicGroupInput placeholder="账号" :tips="tips.appid" v-model="appid" />
        <BasicGroupInput type="password" placeholder="密码" :tips="tips.password" v-model="password" />
      </div>
      <div class="user-service">
        <div class="service">
          <input type="checkbox" name id />
          同意
          <span>《用户服务协议》</span>
        </div>
        <router-link class="user-more" to="/">去注册 >></router-link>
      </div>
      <div class="user-btn">
        <BasicGroupButton width="70" height="35" bgc="150" value="登录" @click="login" />
      </div>
    </div>
  </section>
</template>
<script>
import BasicGroupButton from "../basic/BasicGroupButton";
import BasicGroupInput from "../basic/BasicGroupInput";
export default {
  name: "login",
  components: {
    BasicGroupButton,
    BasicGroupInput
  },
  data: () => ({
    appid: "",
    password: "",
    tips: {
      appid: "",
      password: ""
    }
  }),
  watch: {},
  filters: {},
  created() {},
  methods: {
    login() {
      console.log(this.$data);
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  .user-login {
    margin-top: -20%;
    width: 350px;
    .user-logo {
      height: 80px;
      text-align: center;
      img {
        height: 100%;
      }
    }
    .user-cotent {
      margin: 15px auto;
    }
    .user-service {
      box-sizing: border-box;
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      font-size: 14px;
      .service {
        span {
          color: #41b881;
        }
      }
      .user-more {
        color: #41b881;
      }
    }
    .user-btn {
      text-align: center;
    }
  }
}
</style>