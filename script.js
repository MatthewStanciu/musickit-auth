const music = MusicKit.configure({
  developerToken: 'MY_DEVELOPER_TOKEN', // replace
  app: {
    name: 'AppleMusicKitExample',
    build: '1978.4.1'
  }
})

document.getElementById('auth').addEventListener('click', () => {
  music.authorize().then(musicUserToken => {
    console.log(`Authorized, music user token: ${musicUserToken}`)
  })
})