
const {login} = require('./kasper-toolbox/auth');
const {getWorkerships} = require('./kasper-toolbox/room');
const {createTextMessage} = require('./kasper-toolbox/chat');
const {setBotId, setAuthToken} = require('./kasper-toolbox/data/auth');
const {connectSocket, registerEvent} = require('./kasper-toolbox/realtime');
const {
    clockWidgetInitGui
} = require('./gui');
const {gui} = require('./kasper-toolbox/gui');

setBotId('7296009f-a790-44c4-9ea7-bfb56daa8d25-1642873302698');
setAuthToken('OMMoK1VAKBSsGPE4entO72XKxrCro5jjK2v9JO35QUNopoI3TYABNn4NJ2N6sfVr');

(async () => {

    console.log('starting bot...');
    let {bot, botSecret, session, status} = await login();
    if (status === 'error') throw new Error('Could not login.');
    console.log('logged in succesfully');

    connectSocket(async user => {

        registerEvent('request_initial_gui', async ({widgetId, userId, roomId, preview, widgetWorkerId}) => {
            console.log('user::' + userId + ' requested init-gui of widget::' + widgetId + (preview ? ' in preview mode.' : '.'));
            let {status2} = await gui('init', clockWidgetInitGui, userId, widgetId, widgetWorkerId, preview, roomId);
            if (status2 === 'error') throw new Error('Could not init gui.');
            console.log('initialized gui succesfully');
        });
        registerEvent('gui_initialized', async ({widgetId, userId, roomId, widgetWorkerId, preview}) => {
            console.log('user::' + userId + ' notified init-gui of widget::' + widgetId + ' activated.');
            console.log('resuscitated widget-worker succesfully');
        });
        registerEvent('user_joined', async ({user, room}) => {
            console.log(user.firstName + ' joined room.');
            let {message, status4} = await createTextMessage(room.id, 'سلام ' + user.firstName + ' ' + user.lastName + ' . به روم ما خوش آمدید .');
            if (status4 === 'error') throw new Error('Could not create message.');
            console.log('created message succesfully');
        });
    });
})();
