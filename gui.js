
let clockWidgetInitGui = {
    type: 'Box',
    id: 'clockBox',
    width: 'calc(100% - 32px)',
    height: 'calc(100% - 32px)',
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

let days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'];

for (let i = 0; i < 7; i++) {
  clockWidgetInitGui.children.push({
    type: 'Text',
    text: days[i],
    color: '#393',
    fontSize: 12,
    width: '14.2%',
    height: '17%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  });
}

for (let i = 1; i <= 31; i ++) {
  clockWidgetInitGui.children.push({
    type: 'Text',
    text: i,
    color: '#333',
    width: '12.5%',
    height: '17%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  });
}

module.exports = {
  clockWidgetInitGui: clockWidgetInitGui
};
