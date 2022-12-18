<!-- eslint-disable prettier/prettier -->

<template>
  <div class="schedule">

    <header class="about-bg">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="site-heading">
              <h1
                v-if="actualUser && actualUser.role === 'admin'"
                class="text-white text-uppercase fst-italic"
              >
                Welcome Admin
              </h1>
              <h1 v-else class="text-white text-uppercase fst-italic">
                Schedule your <span>Classes</span>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>

    <b-container class="py-5" v-if="actualUser">
      <b-row>
        <b-col>
          <div class="card mb-4">
            <div
              class="row g-0 d-flex justify-content-center align-items-center"
            >

              <div class="col-md-4">
                <img
                  class="muscles"
                  src="../assets/ejercicio.png"
                  alt="Icon"
                />
              </div>

              <div v-if="actualUser.plan" class="col-md-4">
                <div class="card-body">
                  <h3 class="card-title">
                    <span>Hello, {{ infoUsers.name }}</span>
                  </h3>
                  <h4 class="card-text color-car">
                    You plan is:{{ infoUsers.plan.name }}
                  </h4>
                  <h4 class="card-text color-car">
                    Classes per week: {{ infoUsers.plan.cant }}
                  </h4>
                </div>
              </div>

              <div v-else-if="actualUser.role === 'admin'" class="col-md-4">
                <div class="card-body">
                  <h3 class="card-title">
                    <b-button @click="verPlanes" variant="outline-success" class="me-3 w-100 mb-2">See plans</b-button>
                    <b-button @click="verAgregarPlanes" variant="success" class="w-100">Schedule Planes</b-button
                    >
                  </h3>
                </div>
              </div>

              <div v-else class="col-md-4">
                <div class="card-body">
                  <h3 class="card-title">
                    <span>Hello you currently do not have choose a plan</span>
                  </h3>
                </div>
              </div>

              <div v-if="actualUser.role !== 'admin'" class="col-md-4">
                <p class="bin">
                  Remember that there are only 12 quotas per classes!
                </p>
              </div>

            </div>
          </div>
        </b-col>
      </b-row>

      <b-row v-if="actualUser.role === 'admin'">
        <b-col sm="12">
          <Table v-if="activarTablaPlanes" :editarData="()=> {activaEditar = true; }" :filas="planes" :encabezados="titulos" />
        </b-col>
        <b-col sm="12">
          <Editor :resultado="() => { activaEditar = false;}" v-if="activaEditar"/>
        </b-col>
      </b-row>

      <b-row v-if="actualUser.role === 'admin'">
        <b-col sm="12">
          <Add  v-if="verTablaPlanes" :guardarData="guardarData"/>
        </b-col>
         <b-col cols="12" v-if="alertaAgreado">
          <div class="alert alert-success" role="alert">
            Ready, added plan, check your plans in the table!
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="12">
          <div class="training-schedule-cover">
            <h3 class="training-schedule-top">{{ rangeDateToShow }}</h3>
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div class="training-schedule-cover">
            <div class="training-schedule-table table-responsive">
          <b-table ref="table"  bordered  small  :items="tableItems" :fields="tableFields">

            <template #cell(hours)="data">
              <h4 class="disabled">{{data.item.hour}}</h4>
            </template>

            <template #cell(monday)="data">
              <div v-if="actualUser && actualUser.role==='user'"  class="role_user">
                <div v-if="data.item.getCantReservesByDay(1) < cantMaxReserv">
                  <h4>{{data.item.getCantReservesByDay(1)}}/{{cantMaxReserv}}</h4>
                  <button v-if="!data.item.getAtLeastOneReservationMatch(1,getActualUserReservation)" class = "btn-reser" @click="reserve(data.item.id,data.field.key)">Reserve</button>
                  <button v-else @click="cancel(data.item.id,data.field.key)" class="btn-disa">Cancel</button>
                </div>
                <div v-else>
                  <h4 class="disabled">No quotas</h4>
                </div>
              </div>
              <div v-else-if="actualUser && actualUser.role==='admin'">
                  <h4>{{data.item.getCantReservesByDay(1)}}/{{cantMaxReserv}}</h4>
                  <b-button class="btn-resers" :id="data.item.id+data.field.key">
                        Reservations
                  </b-button>
                  <b-popover :target="data.item.id+data.field.key" triggers="hover" placement="top">
                    <template #title>Users with reservation</template>
                        <ul v-if="data.item.getUsersReservByDay(1).length > 0">
                          <li v-for="(user,idx) in data.item.getUsersReservByDay(1)" :key="idx">{{user}}</li>
                        </ul>
                        <h4 v-else class="disabled">Without reservations</h4>
                  </b-popover>
              </div>
            </template>

            <template #cell(tuesday)="data">
              <div v-if="actualUser && actualUser.role==='user'"  class="role_user">
                <div v-if="data.item.getCantReservesByDay(2) < cantMaxReserv">
                  <h4>{{data.item.getCantReservesByDay(2)}}/{{cantMaxReserv}}</h4>
                  <button v-if="!data.item.getAtLeastOneReservationMatch(2,getActualUserReservation)" class = "btn-reser" @click="reserve(data.item.id,data.field.key)">Reserve</button>
                  <button v-else @click="cancel(data.item.id,data.field.key)" class="btn-disa">Cancel</button>
                </div>
                <div v-else>
                  <h4 class="disabled">No quotas</h4>
                </div>
              </div>
              <div v-else-if="actualUser && actualUser.role==='admin'">
                  <h4>{{data.item.getCantReservesByDay(2)}}/{{cantMaxReserv}}</h4>
                  <b-button class="btn-resers" :id="data.item.id+data.field.key">
                        Reservations
                  </b-button>
                  <b-popover :target="data.item.id+data.field.key" triggers="hover" placement="top">
                    <template #title>Users with reservation</template>
                        <ul v-if="data.item.getUsersReservByDay(2).length > 0">
                          <li v-for="(user,idx) in data.item.getUsersReservByDay(2)" :key="idx">{{user}}</li>
                        </ul>
                        <h4 v-else class="disabled">Without reservations</h4>
                  </b-popover>
              </div>
            </template>

            <template #cell(wednesday)="data">
               <div v-if="actualUser && actualUser.role==='user'"  class="role_user">
                <div v-if="data.item.getCantReservesByDay(3) < cantMaxReserv">
                  <h4>{{data.item.getCantReservesByDay(3)}}/{{cantMaxReserv}}</h4>
                  <button v-if="!data.item.getAtLeastOneReservationMatch(3,getActualUserReservation)"  class = "btn-reser" @click="reserve(data.item.id,data.field.key)">Reserve</button>
                  <button v-else @click="cancel(data.item.id,data.field.key)" class="btn-disa">Cancel</button>
                </div>
                <div v-else>
                  <h4 class="disabled">No quotas</h4>
                </div>
              </div>
              <div v-else-if="actualUser && actualUser.role==='admin'">
                  <h4>{{data.item.getCantReservesByDay(3)}}/{{cantMaxReserv}}</h4>
                  <b-button class="btn-resers" :id="data.item.id+data.field.key">
                        Reservations
                  </b-button>
                  <b-popover :target="data.item.id+data.field.key" triggers="hover" placement="top">
                    <template #title>Users with reservation</template>
                        <ul v-if="data.item.getUsersReservByDay(3).length > 0">
                          <li v-for="(user,idx) in data.item.getUsersReservByDay(3)" :key="idx">{{user}}</li>
                        </ul>
                        <h4 v-else class="disabled">Without reservations</h4>
                  </b-popover>
              </div>
            </template>
            
            <template #cell(thursday)="data">
               <div v-if="actualUser && actualUser.role==='user'"  class="role_user">
                <div v-if="data.item.getCantReservesByDay(4) < cantMaxReserv">
                  <h4>{{data.item.getCantReservesByDay(4)}}/{{cantMaxReserv}}</h4>
                  <button v-if="!data.item.getAtLeastOneReservationMatch(4,getActualUserReservation)" class = "btn-reser" @click="reserve(data.item.id,data.field.key)">Reserve</button>
                  <button v-else @click="cancel(data.item.id,data.field.key)" class="btn-disa">Cancel</button>
                </div>
                <div v-else>
                  <h4 class="disabled">No quotas</h4>
                </div>
              </div>
              <div v-else-if="actualUser && actualUser.role==='admin'">
                  <h4>{{data.item.getCantReservesByDay(4)}}/{{cantMaxReserv}}</h4>
                  <b-button class="btn-resers" :id="data.item.id+data.field.key">
                        Reservations
                  </b-button>
                  <b-popover :target="data.item.id+data.field.key" triggers="hover" placement="top">
                    <template #title>Users with reservation</template>
                        <ul v-if="data.item.getUsersReservByDay(4).length > 0">
                          <li v-for="(user,idx) in data.item.getUsersReservByDay(4)" :key="idx">{{user}}</li>
                        </ul>
                        <h4 v-else class="disabled">Without reservations</h4>
                  </b-popover>
              </div>
            </template>

            <template #cell(friday)="data">
               <div v-if="actualUser && actualUser.role==='user'"  class="role_user">
                <div v-if="data.item.getCantReservesByDay(5) < cantMaxReserv">
                  <h4>{{data.item.getCantReservesByDay(5)}}/{{cantMaxReserv}}</h4>
                  <button v-if="!data.item.getAtLeastOneReservationMatch(5,getActualUserReservation)" class = "btn-reser" @click="reserve(data.item.id,data.field.key)">Reserve</button>
                  <button v-else @click="cancel(data.item.id,data.field.key)" class="btn-disa">Cancel</button>
                </div>
                <div v-else>
                  <h4 class="disabled">No quotas</h4>
                </div>
              </div>
              <div v-else-if="actualUser && actualUser.role==='admin'">
                  <h4>{{data.item.getCantReservesByDay(5)}}/{{cantMaxReserv}}</h4>
                  <b-button class="btn-resers" :id="data.item.id+data.field.key">
                        Reservations
                  </b-button>
                  <b-popover :target="data.item.id+data.field.key" triggers="hover" placement="top">
                    <template #title>Users with reservation</template>
                        <ul v-if="data.item.getUsersReservByDay(5).length > 0">
                          <li v-for="(user,idx) in data.item.getUsersReservByDay(5)" :key="idx">{{user}}</li>
                        </ul>
                        <h4 v-else class="disabled">Without reservations</h4>
                  </b-popover>
              </div>
            </template>

          </b-table>
          </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container v-else class="py-ag">
      <b-row>
        <b-col>
          <h2 class="text-center text-uppercase fst-italic"><span>To schedule you must be logged in</span></h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>





<script>
import Schedule from "../classes/schedule";
import Reservation from "../classes/reservation";
import Table from "@/components/Table.vue";
import Add from "@/components/Add.vue";
import Editor from "@/components/Editor.vue";
import User from '../classes/user';
import { mapMutations, mapGetters, mapState, mapActions } from "vuex";
import Firebase from 'firebase'

export default {
    name: 'Schedule',
    data() {
      return {

        cantMaxReserv : 12,
        availablesDates: [],
        activaEditar: false,
        activarTablaPlanes: false,
        alertaAgreado: false,
        verTablaPlanes: false,
        tableItems : [
            new Schedule("0630","6:30am"),
            new Schedule("0745","7:45am"),
            new Schedule("0900","9:00am"),
            new Schedule("1830","6:30pm"),
            new Schedule("1915","7:15pm"),
        ],
        tableFields : [
          {key:'hours',label:' ',thStyle : {width: "12.5%",padding: "10px 5px",fontWeight: "700",textTransform: "uppercase",textAlign: "center",border: "1px solid #f30a46",backgroundColor:"#f30a46",color:"white"},tdClass : ['text-center','bold']},
          {key:'monday',label:'Monday',thStyle : {width: "12.5%",padding: "10px 5px",fontWeight: "700",textTransform: "uppercase",textAlign: "center",border: "1px solid #f30a46",backgroundColor:"#f30a46",color:"white"},thClass:["white-text"]},
          {key:'tuesday',label:'Tuesday',thStyle : {width: "12.5%",padding: "10px 5px",fontWeight: "700",textTransform: "uppercase",textAlign: "center",border: "1px solid #f30a46",backgroundColor:"#f30a46",color:"white"},thClass:["white-text"]},
          {key:'wednesday',label:'Wednesday',thStyle : {width: "12.5%",padding: "10px 5px",fontWeight: "700",textTransform: "uppercase",textAlign: "center",border: "1px solid #f30a46",backgroundColor:"#f30a46",color:"white"},thClass:["white-text"]},
          {key:'thursday',label:'Thursday',thStyle : {width: "12.5%",padding: "10px 5px",fontWeight: "700",textTransform: "uppercase",textAlign: "center",border: "1px solid #f30a46",backgroundColor:"#f30a46",color:"white"},thClass:["white-text"]},
          {key:'friday',label:'Friday',thStyle : {width: "12.5%",padding: "10px 5px",fontWeight: "700",textTransform: "uppercase",textAlign: "center",border: "1px solid #f30a46",backgroundColor:"#f30a46",color:"white"},thClass:["white-text"]}
        ]
      }
    },
     components: {
        Table,
        Editor,
        Add,
      },
    beforeRouteEnter(to,from,next){
    next( vm => {
        try{
          vm.loadReservas();
        }catch(error){
          console.error(error)
        }
      
    });
  },
    methods: {
      ...mapActions(['updateUser']),
      ...mapMutations(['addReservationToUser','deleteUserReservation']),
      getReservations: async () => {
              let db = Firebase.firestore();
              let usersDB = await db.collection("usuarios").get();
              let users =  usersDB.docs.map(userDB => User.mapUser(userDB.data()))
              console.log("Usuarios cargados");
              console.log(users)
              let reservations = users.flatMap(user => user.reservation ? user.reservation : []);
              return reservations;
      },
      reserve(hour,day){
        try{
          let dateIndex = this.getIndexByDayId(day);
          let reservation = new Reservation(hour,day,this.availablesDates[dateIndex],this.actualUser.name);
          this.addReservationToUser({reservation:reservation,dates:this.availablesDates});
          this.updateUser(this.actualUser).then(() => {this.loadReservas();}).catch(e => alert(e));
        }catch(e){
          alert(e);
        }
      },
      
      cancel(hour,day){
        let dateIndex = this.getIndexByDayId(day);
        let reservation = new Reservation(hour,day,this.availablesDates[dateIndex]);
        this.deleteUserReservation(reservation);
        this.updateUser(this.actualUser).then(() => {this.loadReservas();}).catch(e => alert(e));
      },
      getIndexByDayId(day){
        let dateIndex = 0;
          switch(day){
            case 'monday' : dateIndex = 0;break;
            case 'tuesday' : dateIndex = 1;break;
            case 'wednesday' : dateIndex = 2;break;
            case 'thursday' : dateIndex = 3;break;
            case 'friday' : dateIndex = 4;break;
          }
          return dateIndex;
      },
      loadReservas(){
              if(this.$refs.table){
                this.getReservations().then(reservations => {
                  for(let schedule of this.tableItems){
                    schedule.reservations = reservations ? reservations.filter(reserv => reserv.hour === schedule.id) : [];
                  }
                  this.$refs.table.refresh();
                });
              }
            },
      getAvailablesDates() {
        let fechas = [];
        for(let i = 1; i < 6;i++){
            let dateToAdd = new Date();
            dateToAdd.setDate(dateToAdd.getDate() - dateToAdd.getDay());
            dateToAdd.setDate(dateToAdd.getDate() + i);
            fechas.push(dateToAdd);
        }
        return fechas;
      },
      verPlanes() {
            this.activarTablaPlanes = true;
          },
          verAgregarPlanes() {
            this.verTablaPlanes = true;
          },
          guardarData(){
             this.alertaAgreado = true;
             setTimeout(() => { this.alertaAgreado = false } , 9000);
          }
    },
    computed: {
      ...mapState(["actualUser","titulos", "planes"]),
      ...mapGetters(['getActualUserReservation','infoUsers']),
      rangeDateToShow(){
        let initDate = this.availablesDates[0];
        let endDate = this.availablesDates[this.availablesDates.length - 1]
        let month = initDate.getMonth() + 1;
        let monthName = '';
        switch(month){
          case 1: monthName = 'January';break;
          case 2: monthName = 'February';break;
          case 3: monthName ='March';break;
          case 4: monthName ='April';break;
          case 5: monthName ='may';break;
          case 6: monthName ='June';break;
          case 7: monthName ='July';break;
          case 8: monthName ='August';break;
          case 9: monthName ='September';break;
          case 10: monthName ='October';break;
          case 11: monthName ='November';break;
          case 12: monthName ='December';break;
        }
        let anio = endDate.getFullYear();
        return `${initDate.getDate()}-${endDate.getDate()} ${monthName}, ${anio}`
      },
    },
    created () {
      this.availablesDates = this.getAvailablesDates();
    },
  
}
</script>







<style lang="scss" scoped>
.about-bg {
  padding: 170px 0 170px;
  position: relative;
  background-image: url("../assets/agendar.jpg");
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
.training-schedule-cover {
  margin: 0 auto;
  text-align: center;
}
.bin{
  color: #5e5e5e;
}
.color-car{
  color: #7ab0e3;
}
.training-schedule-top {
  border-top: 1px solid #f30b47;
  background-color: #082846;
  line-height: 60px;
  color: #fff;
}
.training-schedule-table table {
  width: 100%;
  background-color: #f8f8f8;
  font-size: 14px;
  border: 1px solid #f30a46;
}
.training-schedule-table thead {
  background-color: #f30a46;
  text-transform: uppercase;
}

.training-schedule-table tr:last-child {
  border-bottom: none;
}
.training-schedule-table th,
.training-schedule-table td {
  width: 12.5%;
  text-align: center;
  border-right: 1px solid #f30a46;
}
.training-schedule-table th {
  border-color: transparent;
  padding: 10px 5px 10px 5px;
  color: #fff;
  font-weight: 700;
}
.training-schedule-table tr {
  border-bottom: 1px solid #f30a46;
}
.training-schedule-table td:first-child {
  color: #999;
  font-weight: 700;
}
.training-schedule-table td {
  padding: 12px;
}
h4 {
  font-size: 15px;
}
.disabled {
  color: rgb(128, 128, 128);
}
.muscles{
  width: 130px;
  margin: 0 auto;
  display: block;
}
.py-ag {
  padding: 200px;
}

</style>
