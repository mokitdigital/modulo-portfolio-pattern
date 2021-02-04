<template>
  <div class="background">
    <div class="row">
      <div class="col-md images-box-left">
        <vue-aos animation-class="fadeIn animated">
          <img src="https://picsum.photos/400" data-aos="fade-right" />
        </vue-aos>
      </div>
      <div class="col-md images-box-right">
        <img src="https://picsum.photos/400" data-aos="fade-left" />
      </div>
    </div>
    <div class="row">
      <div class="col-md images-box-left">
        <img src="https://picsum.photos/400" data-aos="fade-right" />
      </div>
      <div class="col-md images-box-right">
        <img src="https://picsum.photos/400" data-aos="fade-left" />
      </div>
    </div>
    <div class="row">
      <div class="col-md images-box-left">
        <img src="https://picsum.photos/400" data-aos="fade-right" />
      </div>
      <div class="col-md images-box-right">
        <img src="https://picsum.photos/400" data-aos="fade-left" />
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
  .images-box-right {
    padding: 150px 0;
  }
  .images-box-left {
    padding: 50px 0;
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
