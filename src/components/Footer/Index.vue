<template>
  <div class="row">
    <div class="col-md">
      <p>Sobre a empresa/negócio/profissional</p>
    </div>
    <div class="col-md" id="footer-center">
      <ul>
        <a href="#" v-scroll-to="'#header'">
          <li>Home</li>
        </a>
        <a href="#" v-scroll-to="'#album'">
          <li>Album</li>
        </a>
        <a href="#" v-scroll-to="'#contact'">
          <li>Contato</li>
        </a>
      </ul>
    </div>
    <div class="col-md" id="footer-right">
      <p class="footer_right_text">Faça contato com nossas redes sociais</p>
      <div style="display: inline-block; padding: 0 15px;">
        <font-awesome-icon class="icons" :icon="facebook" style="color: #fff" />
        <p>Facebook</p>
      </div>
      <div style="display: inline-block; padding: 0 15px;">
        <font-awesome-icon class="icons" :icon="twitter" style="color: #fff" />
        <p>Twitter</p>
      </div>
      <div style="display: inline-block; padding: 0 15px;">
        <font-awesome-icon class="icons" :icon="instagram" style="color: #fff" />
        <p>Instagram</p>
      </div>
     </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default {
  data () {
    return {
      facebook: faFacebookF,
      twitter: faTwitter,
      instagram: faInstagram
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
  .row{
    background: #352D39;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
    p {
      color: #fff;
    }
    #footer-center{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90%;
      border-left:
      1px solid #fff;

      ul, li{
        color: #fff;
        padding: 10px;
      }
      li:hover, a:hover{
        color: rgba(255, 255, 255, 0.425);
        cursor: pointer;
        text-decoration: none;
      }
    }

    #footer-right {
      max-width: 500px;
      margin: 0 auto;
      display: block;
      height: 90%;
      border-left: 1px solid #fff;
      .icons{
        flex-wrap: nowrap;
        flex: 2;
      }
      .footer_right_text{
        margin-top: 50px;
      }
    }
  }
</style>
