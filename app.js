let payPeriod = {
  week1total: 0,
  week1: {
    mon: {
      hours: 0,
    },
    tue: {
      hours: 0,
    },
    wed: {
      hours: 0,
    },
    thur: {
      hours: 0,
    },
    fri: {
      hours: 0,
    },
  },
  week2total: 0,
  week2: {
    mon: {
      hours: 0,
    },
    tue: {
      hours: 0,
    },
    wed: {
      hours: 0,
    },
    thur: {
      hours: 0,
    },
    fri: {
      hours: 0,
    },
  }
}
let hour = 0

function addHour(day) {
  let time = payPeriod.week1[day].hours += 1;
  document.getElementById(day + 'Counter').innerHTML = time;
  console.log("added:", time);
  hoursWorked1()
  return time;
}
function subHour(day) {
  let time = payPeriod.week1[day].hours -= 1;
  document.getElementById(day + 'Counter').innerHTML = time.toString();
  console.log(time);
  hoursWorked1()
  return time;
}
function addHour2(day) {
  let time = payPeriod.week2[day].hours += 1;
  document.getElementById(day + 'Counter2').innerHTML = time;
  console.log("added:", time);
  hoursWorked2()
  return time;
}
function subHour2(day) {
  let time = payPeriod.week2[day].hours -= 1;
  document.getElementById(day + 'Counter2').innerHTML = time.toString();
  console.log(time);
  hoursWorked2()
  return time;
}
function hoursWorked1() {
  payPeriod.week1total = 0
  for (let key in payPeriod.week1) {
    if (payPeriod.week1.hasOwnProperty(key)) {
      let hours = payPeriod.week1[key].hours;
      payPeriod.week1total += hours;
    }
  }
  console.log("week1total:", payPeriod.week1total);
  let totalHours = payPeriod.week1total + payPeriod.week2total;

}

function hoursWorked2() {
  payPeriod.week2total = 0
  for (let key in payPeriod.week2) {
    if (payPeriod.week2.hasOwnProperty(key)) {
      let week2Hours = payPeriod.week2[key].hours;
      payPeriod.week2total += week2Hours;
    }
  }
  console.log("week2total:", payPeriod.week2total);
  let totalHours = payPeriod.week1total + payPeriod.week2total;
}



