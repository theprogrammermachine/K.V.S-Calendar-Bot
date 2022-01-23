
var jalaali = require('jalaali-js');

let clockWidgetInitGui = {
  type: 'Box',
  id: 'clockBox',
  width: 'calc(100% - 32px)',
  height: 'auto',
  borderRadius: 32,
  paddingTop: 48,
  paddingLeft: 48,
  paddingRight: 48,
  display: 'flex',
  position: 'relative',
  flexWrap: 'wrap',
  background: 'rgba(255, 255, 255, 1)',
  children: [],
};

let jalaaliDate = jalaali.toJalaali(new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate());
let firstDayGeog = jalaali.toGregorian(jalaaliDate.jy, jalaaliDate.jm, 1);
let firstDayDate = new Date(firstDayGeog.gy, firstDayGeog.gm - 1, firstDayGeog.gd);
let firstDayName = firstDayDate.toLocaleDateString("en-US", { weekday: 'long' });

let firstDayIndex = 0;
if (firstDayName === 'Saturday') {
  firstDayIndex = 0;
}
else if (firstDayName === 'Sunday') {
  firstDayIndex = 1;
}
else if (firstDayName === 'Monday') {
  firstDayIndex = 2;
}
else if (firstDayName === 'Tuesday') {
  firstDayIndex = 3;
}
else if (firstDayName === 'Wednesday') {
  firstDayIndex = 4;
}
else if (firstDayName === 'Thursday') {
  firstDayIndex = 5;
}
else if (firstDayName === 'Friday') {
  firstDayIndex = 6;
}

let days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];

for (let i = 0; i < 7; i++) {
  clockWidgetInitGui.children.push({
    type: 'Text',
    text: days[i],
    color: '#393',
    fontSize: 12,
    width: '14.2%',
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  });
}

for (let i = 0; i < firstDayIndex; i++) {
  clockWidgetInitGui.children.push({
    type: 'Text',
    text: '-',
    color: '#393',
    fontSize: 12,
    width: '14.2%',
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  });
}

for (let i = 1; i <= jalaali.jalaaliMonthLength(jalaaliDate.jy, jalaaliDate.jm); i ++) {
  clockWidgetInitGui.children.push({
    type: 'Text',
    text: i,
    color: jalaaliDate.jd === i ? '#393' : '#333',
    width: '14.2%',
    height: 48,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  });
}

module.exports = {
  clockWidgetInitGui: clockWidgetInitGui
};
