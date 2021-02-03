<template>
  <div class="background">
    <div class="row">
      <div class="col-4">
        <img class="logomarca" src="../../assets/img/Loseaum.png" alt="Logo" />
      </div>
      <div class="col-8">
        <button class="btn">Home</button>
        <button class="btn">Album</button>
        <button class="btn">Contato</button>
      </div>
    </div>
    <div class="row" style="margin-top: 50px; background-color: #352D39;">
      <div class="col-8">
        <h1 class="title-box" style="color: #fff;">SIMPLIQUE SEU NEGÓCIO | <br /> <span style="color: #E547FF">MOKIT DIGITAL</span></h1>
      </div>
      <div class="col-4">
        <div class="button-box">
          <button class="btn btn-orc">Faça um orçamento</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
  }
}
</style>
