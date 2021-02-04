<template>
  <div class="background">
    <form class="form-control text-center" action="/" method="POST">
      <h1>Faça seu orçamento</h1>
      <input type="text" class="form-control" /> <br />
      <input type="text" class="form-control" /> <br />
      <input type="text" class="form-control" /> <br />
      <input type="text" class="form-control" /> <br />
      <button class="btn" type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.background {
  background: url('../../assets/img/contact.png') fixed;
  background-size: 100%;
  height: 70vh;
  form{
    height: 70vh;
    background: transparent;
    input {
      width: 50%;
      margin: 10px auto;
    }
  }
}
</style>
