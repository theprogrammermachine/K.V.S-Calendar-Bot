
let timeSecMirror = {
  elId: 'secondHand',
  property: 'transform',
  value: 'rotate(calc(((@timeSec + 1) * 6deg) - 90deg))',
  variable: { id: 'timeSec', from: 'time.now.seconds' },
};
let timeMinMirror = {
  elId: 'minuteHand',
  property: 'transform',
  value: 'rotate(calc((@timeMin * 6deg) - 90deg))',
  variable: { id: 'timeMin', from: 'time.now.minutes' },
};
let timeHourMirror = {
  elId: 'hourHand',
  property: 'transform',
  value: 'rotate(calc((@timeHour * 30deg) + 18deg - 90deg))',
  variable: { id: 'timeHour', from: 'time.now.hours' },
};
let clockTypeMemory = {
  memoryId: 'clockType',
  value: 'clock'
};
let onClockBoxClick = {
  elId: 'clockBox',
  codes: [
    {
      type: 'conditionList',
      conditions: [
        {
          item1: {
            type: 'memory',
            memoryId: 'clockType'
          },
          item2: {
            type: 'constant',
            constant: 'clock'
          },
          type: 'e',
          then: [
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'clockBox',
              property: 'transform',
              newValue: 'rotateY(-360deg)'
            },
            {
              type: 'straight',
              updateType: 'memory',
              memoryId: 'clockType',
              value: 'weather'
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'clockBackImage',
              property: 'display',
              newValue: 'none',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'clockBackShadow',
              property: 'display',
              newValue: 'none',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'secondHand',
              property: 'display',
              newValue: 'none',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'minuteHand',
              property: 'display',
              newValue: 'none',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'hourHand',
              property: 'display',
              newValue: 'none',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'clockMsg',
              property: 'display',
              newValue: 'block',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'weather',
              property: 'display',
              newValue: 'block',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'weatherMsg',
              property: 'display',
              newValue: 'block',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'humidity',
              property: 'display',
              newValue: 'block',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'weatherHumidity',
              property: 'display',
              newValue: 'block',
              delay: 240
            }
          ]
        },
        {
          item1: {
            type: 'memory',
            memoryId: 'clockType'
          },
          item2: {
            type: 'constant',
            constant: 'weather'
          },
          type: 'e',
          then: [
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'clockBox',
              property: 'transform',
              newValue: 'rotateY(0deg)'
            },
            {
              type: 'straight',
              updateType: 'memory',
              memoryId: 'clockType',
              value: 'clock'
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'clockBackImage',
              property: 'display',
              newValue: 'block',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'clockBackShadow',
              property: 'display',
              newValue: 'block',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'secondHand',
              property: 'display',
              newValue: 'block',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'minuteHand',
              property: 'display',
              newValue: 'block',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'hourHand',
              property: 'display',
              newValue: 'block',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'clockMsg',
              property: 'display',
              newValue: 'none',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'weather',
              property: 'display',
              newValue: 'none',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'weatherMsg',
              property: 'display',
              newValue: 'none',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'humidity',
              property: 'display',
              newValue: 'none',
              delay: 240
            },
            {
              type: 'straight',
              updateType: 'gui',
              elId: 'weatherHumidity',
              property: 'display',
              newValue: 'none',
              delay: 240
            }
          ]
        },
      ]
    }
  ]
};
let weatherTempUpdate = {
  elId: 'weatherMsg',
  property: 'styledContent',
  newValue: '-',
};
let weatherHumidityUpdate = {
  elId: 'weatherHumidity',
  property: 'styledContent',
  newValue: '-',
};

let clockWidgetInitGui = {
    type: 'Box',
    id: 'clockBox',
    width: '100%',
    height: '100%',
    transition: 'transform 1s',
    position: 'relative',
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 1)',
    children: [
      {
        type: 'Image',
        id: 'clockBackImage',
        width: '100%',
        height: '100%',
        borderRadius: 1000,
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 1,
        src:
          'https://i.pinimg.com/originals/eb/ad/bc/ebadbc481c675e0f2dea0cc665f72497.jpg',
      },
      {
        type: 'Box',
        id: 'clockBackShadow',
        width: '100%',
        height: '100%',
        borderRadius: 1000,
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 2,
        background: 'rgba(255, 255, 255, 0.5)',
      },
      {
        type: 'Text',
        id: 'clockMsg',
        width: '100%',
        height: 'auto',
        position: 'absolute',
        alignChildren: 'center',
        top: 56,
        zIndex: 3,
        text: 'سلام کیهان',
        display: 'none',
        color: '#333',
        fontSize: 27
      },
      {
        type: 'Image',
        id: 'weather',
        width: '40%',
        height: '40%',
        top: '25%',
        left: '7.5%',
        position: 'absolute',
        alignChildren: 'center',
        borderRadius: '50%',
        zIndex: 3,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRZ2vclesoWZ4DOCjXPzbAvg5VEFEn7OiHQ&usqp=CAU',
        display: 'none',
      },
      {
        type: 'Text',
        id: 'weatherMsg',
        width: '100%',
        height: 'auto',
        position: 'absolute',
        alignChildren: 'right',
        alignText: 'right',
        justifyContent: 'right',
        top: 112 + 40 + 24,
        right: 48,
        fontSize: 22,
        zIndex: 3,
        display: 'none',
        color: '#333'
      },
      {
        type: 'Image',
        id: 'humidity',
        width: '25%',
        height: '25%',
        top: 'calc(25% + 176px)',
        left: '22.5%',
        position: 'absolute',
        alignChildren: 'center',
        borderRadius: '50%',
        zIndex: 3,
        src:
          'https://download.flaticon.com/download/icon/3262966?icon_id=3262966&author=355&team=355&keyword=Humidity&pack=3262902&style=Lineal+Color&style_id=1128&format=png&color=%23000000&colored=2&size=512&selection=1&premium=0&type=standard&token=03AGdBq243AKIAXV82ouKUaJoqJ_UEXbFBR_C4QyjRllX5C8-m0C98qjj1hBkFa9wv3WZZ0TR32PZrsIRm-_7c9a8mKscBectkcvkdRxHkfHOuQtgOaoMtZuALXTV981RTJdbiselZohV_xqxqc2fr8abskTO49fDp90RGxkp4dlqzI4hVgEOEOw2NaAvTpbZpEzbQ1fs0MjL1_xC2H3DAbxyVA-BKe0v3a18PzIngMma5TATR24_uAwE5SfojHZBzpGkIxNmhBZCWWZJFCcz6HlQ33dbGC_ISrYodm75Eg8MI-AWt2oQ7snvjHIWHyGsfhJ_IIzo2s8Ba1sfszFraNe0k-nNMmZulLEGwJVDvJFgPg00_cNwl646rf-vG1utx4Z6ID2Cp46v6GUMkOelcGnEmvbPz5zGjA7_RINMg43Wq6uE4cAxtr_GtozDwcbEbUWPbO2_aMqdG0zyjxAkUUm7dTwfuC_eJEk6FRr5K2TlCbGeOPnFODZkH1s-sJu6dbJL2HiJYcH1l8tgTaA0x3BUzYeQUPm_1nT55BLhTTWUrEiU9p66V5uhbJjZWpdHjVVIhCoWN9HBgItExgHJjR4OVTv-dnVmxTf5XgPKWtuto7ngLRwV0kBZRjik_5WVh-Hi1ap3Qvr79Y8XcmptCBiyg-AOQJN-kUfiHgHgrVH-HHmR8X9hohn3bBoV0S1K8e5leKTdI7FZzoR-cY4Z1p11PsvvxMzlnSqDTzbfS-v9cIUhV5fFBn06Adt3Nq8d_GVfVm5igwP2i4Tet7DskpVjBTz2IBi-JeLf_aNFFqvgQ2yefIn0dns_kuHoYzqWyPqEhiVygS0oqC2Ke168fMABs9notgzUaSyp6Gj3WvYd1tYhFbuTt1DHCJ5Q-fsn0eRxrm3eSopTDRCLzYktCQ2cQkZ1Jt19ofDVJMe8RR1KZrw4Gasm1-5ub2S_j2-20P3W5WTISzrV1mv7duLYxjaWJzQKAztaAMUAlj2dW1sexC5BkchxQost6Sq4Tp-3gq9SsgZsYw8-QtIoeZPf1G1jxKvfLv7DKaBQaIUn_3paUYCwYJWMK-OScq-H-n-jYgEkPYQbysbqhf1Qk4uCCWyl_Zvx6Xe5FLFljIAfWktJLYneqesTgs9nUmqfvLJc24mGBrgTfFqNKlAvL4AtZNvOxQoAlCbAswwRdzE2h5KU5xqt5Cm6aO080_EO3nKWPfdlaUN1vRWKLNZ4QQ_ugmD6fL5tLJB8MJTWu6CnOgP2VN2gM8w-BM2AHDl-ovqiqBl3h1C7b2fbcK-_OjDNgztacsfEbcfhKjC-KAw7bT0jX6nSzxkKFg-BLpGfk-lwraON7oKAMadz577J8a0N1wVEmF4sUD1CAbsaNGbWnuVAt929AFlAzejZs4z4SaYbgJgUa0s-PBltj0GM8jJhul7Nntk5AJyALQmYo-dCD1GGyjLWx_UjSFGAYy252r_kh4EldoTSb-gIngRrgtEWWMKMy-xjZgk7rszdP3EPYiaG4cyvrxOiAJerVZ2yKHJDNzLQEgmozvRyNeKgTmDSOwKPvaTAVadpzSg&search=humidity&_gl=1*a6mkqb*test_ga*MjA2MTc5MzM2OS4xNjQwNTAyNDIx*test_ga_523JXC6VL7*MTY0MTMxODE1My4zLjEuMTY0MTMxODcyOC41Nw..*fp_ga*MjA2MTc5MzM2OS4xNjQwNTAyNDIx*fp_ga_1ZY8468CQB*MTY0MTMxODYwOC4zLjEuMTY0MTMxODcyOC41Nw..*_ga*MjA2MTc5MzM2OS4xNjQwNTAyNDIx*_ga_3Q8LH3P0VP*MTY0MTMxODYwOC4zLjEuMTY0MTMxODcyNS4w&search=humidity',
        display: 'none',
      },
      {
        type: 'Text',
        id: 'weatherHumidity',
        width: '100%',
        height: 'auto',
        position: 'absolute',
        alignChildren: 'right',
        alignText: 'right',
        justifyContent: 'right',
        top: 112 + 40 + 8 + 176,
        right: 112,
        zIndex: 3,
        display: 'none',
        color: '#333',
        fontSize: 27
      },
      {
        type: 'Box',
        id: 'secondHand',
        width: '100%',
        height: 25,
        position: 'absolute',
        left: 0,
        top: 'calc(50% - 12.5px)',
        transform: 'rotate(75deg)',
        transition: 'transform 1s',
        zIndex: 3,
        children: [
          {
            type: 'Box',
            id: 'secondImage',
            width: '50%',
            height: '100%',
            position: 'absolute',
            left: '50%',
            background: 'rgba(0, 0, 0, 0.75)',
            borderRadius: '50%'
          },
        ],
      },
      {
        type: 'Box',
        id: 'minuteHand',
        width: '100%',
        height: 25,
        position: 'absolute',
        left: 0,
        top: 'calc(50% - 12.5px)',
        transform: 'rotate(-135deg)',
        transition: 'transform 1s',
        zIndex: 3,
        children: [
          {
            type: 'Box',
            id: 'minuteImage',
            width: '40%',
            height: '100%',
            position: 'absolute',
            left: '50%',
            background: 'rgba(0, 0, 0, 0.75)',
            borderRadius: '50%'
          },
        ],
      },
      {
        type: 'Box',
        id: 'hourHand',
        width: '100%',
        height: 25,
        position: 'absolute',
        left: 0,
        top: 'calc(50% - 12.5px)',
        transform: 'rotate(295deg)',
        transition: 'transform 1s',
        zIndex: 3,
        children: [
          {
            type: 'Box',
            id: 'hourImage',
            width: '30%',
            height: '100%',
            position: 'absolute',
            left: '50%',
            background: 'rgba(0, 0, 0, 0.75)',
            borderRadius: '50%'
          },
        ],
      },
    ],
};

module.exports = {
  weatherHumidityUpdate: weatherHumidityUpdate,
  weatherTempUpdate: weatherTempUpdate,
  clockTypeMemory: clockTypeMemory,
  onClockBoxClick: onClockBoxClick,
  timeHourMirror: timeHourMirror,
  timeMinMirror: timeMinMirror,
  timeSecMirror: timeSecMirror,
  clockWidgetInitGui: clockWidgetInitGui
};
