<template>
  <div>
    <div class="top-address">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="top-address-details">
              <ul>
                <li>
                  <i class="fas fa-map-marker-alt"></i>
                  <a target="_blank" href="#">Heidelberg</a>
                </li>
                <li>
                  <i class="far fa-clock"></i>
                  <span>Time : 5.00 am - 10.00 pm</span>
                </li>
                <li>
                  <i class="fas fa-phone"></i>
                  <a href="#">+41 1452345245</a>
                </li>
              </ul>
            </div>
            <div class="top-social">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-google-plus-g"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>Copyright © Crossfit Fitness Club - 2022 By: SRH UIUX Team</footer>
  </div>
</template>






<script>
export default {
  name: "Footer",
};
</script>







<style scoped>
footer {
  color: #fff;
  padding: 20px;
  text-align: center;
  background: #282828;
}

.top-address {
  text-align: left;
  position: relative;
  padding: 17px 0;
  background: #f30a46;
}
.top-address-details {
  display: inline-block;
}
.top-address-details ul li {
  display: inline-block;
  padding-left: 35px;
}

.top-address-details ul li a {
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  font-weight: 300;
  display: inline-block;
  text-decoration: none;
}
.top-address-details ul li i {
  color: #f30a46;
}
.top-address-details ul li span {
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  font-weight: 300;
  display: inline-block;
}

.top-social {
  display: inline-block;
  padding-right: 55px;
  padding-left: 100px;
}
.top-social a {
  font-size: 16px;
  color: #ffffff;
  padding: 0 5px;
  -webkit-transition: background 0.3s ease;
  -o-transition: background 0.3s ease;
  transition: background 0.3s ease;
}
.top-address::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(25%, rgba(243, 10, 70, 0)),
    to(rgba(243, 10, 70, 1))
  );
  background: -o-linear-gradient(
    left,
    rgba(243, 10, 70, 0) 25%,
    rgba(243, 10, 70, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(243, 10, 70, 0) 25%,
    rgba(243, 10, 70, 1) 100%
  );
}
</style>
