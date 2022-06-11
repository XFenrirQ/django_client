<template>
  <div class="tab-pane" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
    <div class="col-md-6">
      <div class="car-image" >
        <img src="https://image.ceneostatic.pl/data/products/62207164/i-mercedes-actros-1845-euro-6-giga-space-bogaty.jpg" alt=""/>
        <!--            <div class="file btn btn-lg btn-primary">-->
        <!--              Change Photo-->
        <!--              <input type="file" name="file"/>-->
        <!--            </div>-->
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <label>Brand</label>
      </div>
      <div class="col-md-6">
        <p>Mercedes</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <label>Color</label>
      </div>
      <div class="col-md-6">
        <p>Blue</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <label>Capacity</label>
      </div>
      <div class="col-md-6">
        <p>25 000 kg</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CarInfo"
}
</script>

<style scoped>
img{
  width: 300px;
  height: 180px;
}
</style>