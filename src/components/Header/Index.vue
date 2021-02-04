<template>
  <div class="background">
    <div class="row">
      <div class="col-4">
        <img class="logomarca" src="../../assets/img/Loseaum.png" alt="Logo" />
      </div>
      <div class="col-8" style="padding-right: 30px">
        <a href="#" @click="getMenu()" class="menu">&#9776;</a>
        <div id="list-menu">
          <a href="#" v-scroll-to="'#header'">
            <button class="btn btn-menu">
              Home
            </button>
          </a>
          <a href="#" v-scroll-to="'#album'">
            <button class="btn btn-menu">
                Album
            </button>
          </a>
          <a href="#" v-scroll-to="'#contact'">
            <button class="btn btn-menu">
              Contato
            </button>
          </a>
        </div>
      </div>
    </div>
    <div id="info" class="row">
      <div class="col-md-8">
        <h1 class="title-box" style="color: #fff;">SIMPLIQUE SEU NEGÓCIO | <br /> <span style="color: #E547FF">MOKIT DIGITAL</span></h1>
      </div>
      <div class="col-md-4 text-center">
        <div class="button-box">
          <a href="#" v-scroll-to="'#contact'">
            <button class="btn btn-orc">Faça um orçamento</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fecha: false
    }
  },
  methods: {
    getMenu () {
      if (this.fecha === false) {
        document.getElementById('list-menu').style.display = 'block'
        document.getElementById('info').style.display = 'none'
        this.fecha = true
      } else {
        document.getElementById('list-menu').style.display = 'none'
        document.getElementById('info').style.display = 'block'
        this.fecha = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
.background {
  background:
        linear-gradient(
          rgba(0, 0, 0, 0.397),
          rgba(0, 0, 0, 0.397)
        ),
        url('../../assets/img/header.png')
        fixed;
  height: 70vh;
  border-bottom: 3px solid #fff;

  .menu {
    display: none;
    font-size: 50px;
    font-weight: 800;
  }

  #info{
    margin: 80px 0 0 0;
    background-color: #352D39;
    padding-bottom: 50px;
  }

  #list-menu{
    display: inline-block;
  }

  .logomarca {
    padding: 30px 0 0 30px;
    width: 150px;
  }

  .title-box{
    padding: 50px 0 0 50px;
    text-align: left;
    font-size: 50px;
  }

  .button-box{
    padding: 50px 200px 0 0;
  }

  .btn {
    margin: 30px 10px 0 10px;
    font-family: 'Raleway', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    color: #FFFFFF;
    background-color: #352D39;
    width: 150px;
  }

  .btn-orc {
    background-color:#fff ;
    color: #000;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 1096px) {
  .title-box {
    font-size: 30px;
  }
}

@media screen and (max-width: 780px) {
  .background {
    height: 120vh;
    .menu {
      display: block;
      float: right;
      margin: 20px 50px 0 0;
      text-decoration: none;
      color: #000;
    }
    #list-menu {
      display: none;
      float: right;
      width: 80%;
      height: 50vh;
      margin-right: 20px;
      z-index: 1;
      background: rgba(255, 255, 255, 0.46);
      overflow: auto;
      transition-duration: 2s;
      .btn-menu {
        width: 90%;
        background-color: transparent;
      }
      .btn-menu:hover{
        background-color: rgba(0, 0, 0, 0.412);
      }
    }
    #list-menu:hover{
      width: 100%;
      transition: width 2s;
    }
  }
}
</style>
