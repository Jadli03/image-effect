async function init() { 
    let rustApp = null;
    try {
        rustApp = await import('../pkg')
    }catch(e) { 
        console.error(e);
        return;
    }

    const input = document.getElementById('upload');
    const fileReader = new FileReader();
    fileReader.onloadend = () => { 
        let base64 = fileReader.result.replace(
            /^data:image\/(png|jpeg|jpg);base64,/, ''
          )
        let image_data_url = rustApp.grayScale(base64)
        document.getElementById('new-img').setAttribute(
        'src', image_data_url
        )
    }
    input.addEventListener('change', () => { 
        fileReader.readAsDataURL(input.files[0]);
    })
}

init()