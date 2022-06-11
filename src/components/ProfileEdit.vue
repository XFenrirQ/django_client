<template>
  <head>
<!--    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">-->
<!--    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>-->
<!--    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>-->
<!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">-->
    <title></title>
  </head>

  <div class="container emp-profile">
    <form method="post">
      <div class="row">
        <div class="col-md-4">
          <div class="profile-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
            <div class="file btn btn-lg btn-primary">
              Change Photo
              <input type="file" name="file"/>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="profile-head">
            <h5>
              Karolina Kowalski
            </h5>

            <p class="proile-rating">RANKINGS : <span>8/10</span></p>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="profile-work">

          </div>
        </div>

        <div class="col-md-8" id="data">
          <div class="tab-content profile-tab" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="row">
                <div class="col-md-6">
                  <label>UserName</label>
                </div>
                <div class="col-md-6">
                  <p>kkowalska87</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>FirstName</label>
                </div>
                <div class="col-md-6">
                  <p>Karolina</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Last Name</label>
                </div>
                <div class="col-md-6">
                  <p>Kowalski</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Email</label>
                </div>
                <div class="col-md-6">
                  <p><input type="email" class="form-control input-sm" id="inputsm" v-model="email" placeholder="kkowalski_87@gmail.com" /></p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Phone</label>
                </div>
                <div class="col-md-6">
                  <p><input type="text" class="form-control input-sm" id="inputsm" v-model="number" placeholder="123456789" /></p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Password</label>
                </div>
                <div class="col-md-6">
                  <p><input type="password" class="form-control input-sm" id="inputsm" v-model="password"/></p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Confirm Password</label>
                </div>
                <div class="col-md-6">
                  <p><input type="password" class="form-control input-sm" id="inputsm" v-model="password_confirm"/></p>
                </div>
              <div class="row">
                <div class="u-form-group u-form-message u-form-group-4">
                  <div class="col-md-6">
                  <label for="message-daf4" class="u-form-control-hidden u-label">Description</label>
                  </div>
                  <div class="col-md-6">
                  <textarea maxlength="200" rows="4" cols="50" id="message-daf4" name="message" class="u-border-2 u-border-white u-input u-input-rectangle u-radius-12 u-white" required="" v-model="Description" placeholder="Description"></textarea>
                  </div></div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <p><a href="/profile" role="button" class="btn btn-primary btn-block">Back</a></p>
                </div>
                <div class="col-md-6">
                  <p><a href="/profile" role="button" class="btn btn-primary btn-block">Confirm Changes</a></p>
                </div>

              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="row">
                <div class="col-md-6">
                  <label>Experience</label>
                </div>
                <div class="col-md-6">
                  <p>Expert</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Hourly Rate</label>
                </div>
                <div class="col-md-6">
                  <p>10$/hr</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Total Projects</label>
                </div>
                <div class="col-md-6">
                  <p>230</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>English Level</label>
                </div>
                <div class="col-md-6">
                  <p>Expert</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Availability</label>
                </div>
                <div class="col-md-6">
                  <p>6 months</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label>Your Bio</label><br/>
                  <p>Your detail description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ProfileEdit"
}
</script>

<style>
body{
  background: rgb(2,0,36);
  background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(85,122,149,1) 35%, rgba(0,212,255,1) 100%);

}
.emp-profile{
  padding: 2%;
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
/*.row{*/
/*  padding: 1%;*/
/*  text-align: left;*/
/*  align-items: center;*/
/*}*/
</style>