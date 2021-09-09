class AlarmClock {
  constructor() {
    (this.alarmCollection = []), (this.timerId = null);
  }
  addClock(time, fn, id) {
    if (!id) {
      throw new Error('Не передан id будильника');
    }
    if (this.alarmCollection.some((alarm) => alarm.id === id)) {
      console.error('Будильник с таким id уже существует');
      return;
    }
    this.alarmCollection.push({ id, time, fn });
  }
  removeClock(id) {
    const arr = this.alarmCollection.slice();
    this.alarmCollection = this.alarmCollection.filter(
      (alarm) => alarm.id !== id
    );
    return arr.some((alarm) => alarm.id === id) ? true : false;
  }
  getCurrentFormattedTime() {
    let currentDate = new Date();
    let currentDateHours =
      currentDate.getHours() < 10
        ? `0${currentDate.getHours()}`
        : `${currentDate.getHours()}`;
    let currentDateMinutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : `${currentDate.getMinutes()}`;
    return `${currentDateHours}:${currentDateMinutes}`;
  }
  start() {
    /*
    let obj = this;
    function checkClock() {
      obj.alarmCollection.forEach((element) => {
        if (element.time === obj.getCurrentFormattedTime()) {
          element.fn();
        }
      });
    }
    if (!this.timerId) {
      this.timerId = setInterval(checkClock, 2000);
    }
    */
    let obj = this;
    function checkClock(clock) {
      if (clock.time === obj.getCurrentFormattedTime()) {
        clock.fn();
      }
    }
    if (!this.timerId) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach((clock) => checkClock(clock));
      }, 2000);
    }
  }
  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  printAlarms() {
    console.log(
      `Печать всех будильников в количестве ${this.alarmCollection.length}`
    );
    this.alarmCollection.forEach((alarm) => {
      console.log(`Будильник №${alarm.id} заведен на ${alarm.time}`);
    });
  }
  clearAlarms() {
    clearInterval(this.timerId);
    this.alarmCollection = [];
  }
}
//Ввод будильников
const clockOne = new AlarmClock();
console.log(clockOne);
clockOne.addClock('19:19', () => console.log('1й будильник'), 1);
console.log(clockOne.alarmCollection);
clockOne.addClock('19:43', () => console.log('2й будильник'), 1);
console.log(clockOne.alarmCollection);
clockOne.addClock('19:43', () => console.log('3й будильник'), '');
lockOne.addClock('19:20', () => console.log('4й будильник'), 4);
clockOne.addClock('19:20', () => console.log('5й будильник'), 5);

console.log(clockOne.removeClock(2));
console.log(clockOne.removeClock(1));
console.log(clockOne.alarmCollection);
console.log(clockOne.getCurrentFormattedTime());
console.log(clockOne.start());
console.log(clockOne.stop());
console.log(clockOne.printAlarms());
