<template>
  <section class="register">
    <div class="user-register">
      <div class="user-logo">
        <img src="@/assets/img/logo.png" alt />
      </div>
      <div class="user-cotent">
        <BasicGroupInput placeholder="昵称" :tips="tips.nickname" v-model="nickname" />
        <BasicGroupInput placeholder="账号" :tips="tips.appid" v-model="appid" />
        <BasicGroupInput type="password" placeholder="密码" :tips="tips.password" v-model="password" />
        <BasicGroupInput placeholder="密保手机" :tips="tips.phone" v-model="phone" />
      </div>
      <div class="user-service">
        <div class="service">
          <input type="checkbox" name id />
          同意
          <span>《用户服务协议》</span>
        </div>
        <router-link class="user-more" to="/login">去登录 >></router-link>
      </div>
      <div class="user-btn">
        <BasicGroupButton width="70" height="35" bgc="150" value="注册" @click="register" />
      </div>
    </div>
  </section>
</template>
<script>
import BasicGroupButton from "../basic/BasicGroupButton";
import BasicGroupInput from "../basic/BasicGroupInput";
export default {
  name: "register",
  components: {
    BasicGroupButton,
    BasicGroupInput
  },
  data: () => ({
    appid: "",
    password: "",
    phone: "",
    nickname: "",
    tips: {
      appid: "",
      password: "",
      phone: "",
      nickname: ""
    }
  }),
  watch: {},
  filters: {},
  created() {},
  methods: {
    register() {
      console.log(this.$data);
    }
  }
};
</script>
<style lang="less" scoped>
.register {
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right 10% green,
    30% blue,
    60% white,
    90% orange
  );

  .user-register {
    margin-top: -20%;
    width: 350px;
    background-color: #fff;
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