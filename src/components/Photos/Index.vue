<template>
  <div class="background">
    <div class="row">
      <div class="col-md images-box">
        <img src="https://picsum.photos/400" alt="" />
      </div>
      <div class="col-md images-box">
        <img src="https://picsum.photos/400" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col-md images-box">
        <img src="https://picsum.photos/400" alt="" />
      </div>
      <div class="col-md images-box">
        <img src="https://picsum.photos/400" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col-md images-box">
        <img src="https://picsum.photos/400" alt="" />
      </div>
      <div class="col-md images-box">
        <img src="https://picsum.photos/400" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.background {
  background-color: #352D39;
  .images-box {
    padding: 40px 0;
  }
}

@media screen and (max-width: 990px) {
  img{
    width: 250px;
  }
}

@media screen and (max-width: 650px) {

}
</style>
