catchGif()
    .then(response => {
        console.log('Successful!');
    })
    .catch(error => {
        console.log('error!');
        console.error(error);
    });
    
    async function catchGif(){
        const response = await fetch('https://media.giphy.com/media/1gQyguEWnle8OsSzT0/giphy.gif');
        const blob = await response.blob();
        document.getElementById('underoathGif').src = URL.createObjectURL(blob);
    }