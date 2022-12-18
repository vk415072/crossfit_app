export default class Schedule {
  constructor(id, hour) {
    this.id = id;
    this.hour = hour;
    this.reservations = [];
  }

  addReservation(reservarion) {
    this.reservations.push(reservarion);
  }

  /**
   * The day of the week indicated according to the date date will spend
   * @param {*} day
   */
  getCantReservesByDay(day) {
    let reservations = this.getReservasByDay(day);
    return reservations.length;
  }

  getUsersReservByDay(day) {
    let reservations = this.getReservasByDay(day);
    return reservations.map((reservation) => reservation.username);
  }

  getReservasByDay(day) {
    return this.reservations.filter(
      (reserv) => reserv.date.getDay() === day && reserv.hour === this.id
    );
  }

  getAtLeastOneReservationMatch(day, userReservations) {
    let reservations = this.reservations.filter(
      (reserv) => reserv.date.getDay() === day && reserv.hour === this.id
    );
    let founded = false;
    let i = 0;
    while (i < reservations.length && !founded) {
      let scheduleReservation = reservations[i];
      founded = this.hasScheduleReservation(
        scheduleReservation,
        userReservations
      )
        ? true
        : false;
      i++;
    }
    return founded;
  }

  hasScheduleReservation(scheduleReservation, userReservations) {
    return userReservations.find((reserv) =>
      scheduleReservation.sameReservation(reserv)
    );
  }
}
