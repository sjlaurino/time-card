let week1 = {
  mon: {
    hours: 0,
  },
  tue: {
    hours: 0,
  },
  wed: {
    hours: 0,
  },
  thurs: {
    hours: 0,
  },
  fri: {
    hours: 0,
  }
}

let hour = 0

function addHour(day) {
  let time = week1[day].hours += 1;
  console.log(time);
  return time;
}
function subHour(day) {
  let time = week1[day].hours -= 1;
  console.log(time);
  return time;
}

let monCounter = week1[day].hours
