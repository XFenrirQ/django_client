<template>
  <head>
    <!--    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">-->
    <!--    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>-->
    <!--    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>-->
    <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">-->
    <title></title>
  </head>

  <div class="container emp-profile">
    <!--    <form method="post">-->
    <div class="row">
      <div class="col-md-4">
        <div class="profile-img">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
          <!--            <div class="file btn btn-lg btn-primary">-->
          <!--              Change Photo-->
          <!--              <input type="file" name="file"/>-->
          <!--            </div>-->
        </div>
      </div>
      <div class="col-md-6">
        <div class="profile-head">
          <h5>
            Karolina Kowalski
          </h5>
          <p class="proile-rating">RANKINGS : <span>8/10</span></p>
          <div>
            <button
                v-for="tab in tabs"
                :key="tab"
                @click="selected = tab;"
                :class="['tab-btn', { active: selected === tab }]"
            >
              {{ tab }}
            </button>

            <component :is="selected" class="tab"></component>
          </div>
        </div>
      </div>
      <div class="col-md-2">
        <a href="/editprofile" role="button" class="profile-edit-btn">Edit Profile</a>

      </div>
    </div>
    <div class="row">
      <div class="col-md-4">

        <div class="tab-content profile-tab" id="myTabContent">



        </div>
      </div>
    </div>
    <!--    </form>-->
  </div>
</template>

<script>
import AboutMain from "./AboutMain";
import TimelineMain from "./TimelineMain";
import CarInfo from "@/components/CarInfo";

export default {
  name: "ProfileMain",
  data: function() {
    return {
      tabs: ["AboutMain", "TimelineMain", "CarInfo"],
      selected: "AboutMain"
    };
  },
  components: {
    AboutMain,
    TimelineMain,
    CarInfo
  }
};
</script>

<style>
body{
  background: rgb(2,0,36);
  background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(85,122,149,1) 35%, rgba(0,212,255,1) 100%);

}

img{
  width: 150px;
  height: 150px;
}

.emp-profile{
  padding: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  border-radius: 0.5rem;
  background: #fff;
}
.profile-img{
  text-align: center;
}
.profile-img img{
  width: 70%;
  height: 100%;
}
.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}
.profile-head h5{
  color: #333;
}
.profile-head h6{
  color: #0062cc;
}
.profile-edit-btn{
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  padding: 2%;
  font-weight: 600;
  color: #6c757d;
  cursor: pointer;
}
.proile-rating{
  font-size: 12px;
  color: #818182;
  margin-top: 5%;
}
.proile-rating span{
  color: #495057;
  font-size: 15px;
  font-weight: 600;
}
.profile-head .nav-tabs{
  margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
  font-weight:600;
  border: none;
}
.profile-head .nav-tabs .nav-link.active{
  border: none;
  border-bottom:2px solid #0062cc;
}
.profile-work{
  padding: 14%;
  margin-top: -15%;
}
.profile-work p{
  font-size: 12px;
  color: #818182;
  font-weight: 600;
  margin-top: 10%;
}
.profile-work a{
  text-decoration: none;
  color: #495057;
  font-weight: 600;
  font-size: 14px;
}
.profile-work ul{
  list-style: none;
}
.profile-tab label{
  font-weight: 600;
}
.profile-tab p{
  font-weight: 600;
  color: #0062cc;
}

</style>