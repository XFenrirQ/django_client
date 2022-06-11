<template>
  <nav class="navbar navbar-expand navbar-light fixed-top">
    <aside class="menu">
      <a href="/" class="navbar-brand">Home</a>
      <div class="dropdown">
        <button class="dropbtn">Menu</button>
        <div class="dropdown-content">
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/registration">Register</a>
          <a href="/login">Login</a>
          <a href="/contract">Contract</a>
          <a href="/contract_info">Contract_Info</a>
<!--          <a href="/contract_list">Contract_List</a>-->
        </div>
      </div>
    </aside>
  </nav>
</template>

<script>
export default {
  name: 'NawigacjaBar'
}
</script>

<style scoped>
.navbar{
  position: fixed;

}
/* Dropdown Button */
.dropbtn {
  color: #000000;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #486fea;}
</style>