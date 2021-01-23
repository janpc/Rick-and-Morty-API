const backgrounds=[
    'https://i.pinimg.com/originals/e2/97/8c/e2978ca3d3a608d8f3e3dac5c083f3cb.jpg',
    'https://www.hdwallpaper.nu/wp-content/uploads/2018/11/rick_and_morty-2-660x330.jpg',
    'https://www.denofgeek.com/wp-content/uploads/2020/04/Rick-and-Morty-Zoom-Backgrounds-Garage-1.png?fit=1920%2C1080',
    'https://wallpaperaccess.com/full/401057.jpg',
    'https://i.pinimg.com/originals/e2/fb/0b/e2fb0b2ac9b7e82275eacc8c2ee9c846.jpg',
    'https://wallpapercave.com/wp/wp6360955.jpg',
    'https://vignette.wikia.nocookie.net/rickandmorty/images/9/98/S2e3_mount_morty_and_summer.png/revision/latest?cb=20160923231412',
    'https://virtualbg-brandstudio.netdna-ssl.com/wp-content/uploads/2020/06/rick-and-morty-bedroom-background.png',
    'https://wallpaper.dog/large/17236342.jpg',
    'https://images6.alphacoders.com/633/thumb-1920-633232.jpg'
]

function showRandomBackground(){
    const pos = Math.floor(Math.random() * backgrounds.length);
    document.querySelector('body').setAttribute('style', 'background-image: url('+backgrounds[pos]+')');
}

export { showRandomBackground };