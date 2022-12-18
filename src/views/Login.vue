<!-- eslint-disable prettier/prettier -->
<template>
  <div class="login">

    <header class="about-bg">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="site-heading">
              <h1 class="text-white text-uppercase fst-italic">
                Welcome <span>here</span>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>

    <b-container>

      <b-row>
        <b-col class="text-center pt-5" cols="12">
          <h4 class="fst-italic">
            At the log you can pay your plans, see paid plans, see
            calendar and book time for your classes!
          </h4>
          <p>
            <span> (Any note here) </span>
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12">
          <div class="formlog">

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control calc" id="exampleInputEmail1" aria-describedby="emailHelp"
                v-model="username" />
              <div id="emailHelp" class="form-text text-white">
                We will not share your email with anyone.
              </div>
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control calc" id="exampleInputPassword1" v-model="password" />
              <div id="emailHelp" class="form-text text-white">
                We will not share your password with anyone.
              </div>
            </div>

            <div>

              <button @click="login" class="btn-logg cl-lo">Login</button>
              <button class="ms-2 cl-lo bt-limp">Sing Up</button>
            </div>
            <button class="btn-logg cl-lo my-4">
              Login with Google
            </button>
          </div>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>







<script>

import { mapState, mapMutations, mapGetters } from 'vuex';
import Firebase from 'firebase'
import User from '../classes/user'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapMutations(["setupUser"]),
    async login() {
      try {
        let auth = await Firebase.auth().signInWithEmailAndPassword(this.username, this.password);
        if (auth) {
          let db = Firebase.firestore();
          let query = await db.collection("usuarios").where("email", "==", this.username).get();
          if (query && !query.empty) {
            let userDB = query.docs[0].data();
            userDB.id = query.docs[0].id;
            let mappedUser = User.mapUser(userDB);
            this.setupUser(mappedUser);
            if (this.lastVisitedPage) {
              this.$router.push({ name: this.lastVisitedPage });
            } else {
              this.$router.push("/home");
            }
          }
        }
      } catch (e) {
        alert(e);
      }
    }
  },
  computed: {
    ...mapState(["lastVisitedPage"]),
    ...mapGetters(["getUserById"]),
  },
};
</script>







<style scoped>
.about-bg {
  padding: 170px 0 170px;
  position: relative;
  background-image: url("../assets/login.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.site-heading {
  text-align: center;
  padding: 75px 0 0;
}

span {
  color: #f30b47;
}

.formlog {
  width: 700px;
  margin: 10px auto 50px;
  padding: 55px;
  background: #082846;
  border-radius: 15px;
  color: #fff;
}

label {
  font-weight: bold;
}

.bt-limp {
  background: #25a547;
  color: #282828;
  padding: 15px;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  padding-right: 30px;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0px;
}

.btn-logg {
  background: #f30b47;
  padding: 15px;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  border: none;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 0px;
}

.cl-lo {
  width: auto;
}

@media (max-width: 767px) {
  .formlog {
    width: 100%;
  }

  .btn-calc {
    width: auto;
  }

  .formlog {
    padding: 20px;
  }
}
</style>
