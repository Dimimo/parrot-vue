import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '68da1411711cebd59e0d',
    cluster: 'ap1',
    encrypted: true,
    forceTLS: true,
})
