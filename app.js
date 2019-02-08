let payPeriod = {
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
    }
  },
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
    }
  }
}
let hour = 0

function addHour(day) {
  let time = payPeriod.week1[day].hours += 1;
  document.getElementById(day + 'Counter').innerHTML = time;
  console.log(time);
  return time;
}
function subHour(day) {
  let time = payPeriod.week1[day].hours -= 1;
  document.getElementById(day + 'Counter').innerHTML = time.toString();
  console.log(time);
  return time;
}
function addHour2(day) {
  let time = payPeriod.week2[day].hours += 1;
  document.getElementById(day + 'Counter2').innerHTML = time;
  console.log(time);
  return time;
}
function subHour2(day) {
  let time = payPeriod.week2[day].hours -= 1;
  document.getElementById(day + 'Counter2').innerHTML = time.toString();
  console.log(time);
  return time;
}
