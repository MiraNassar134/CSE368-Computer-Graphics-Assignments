var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox2.png')
    }    
    else if(mySrc === 'images/firefox2.png') {
        myImage.setAttribute('src','images/cover.jpg')
    }
    else {
        myImage.setAttribute('src','images/firefox-icon.png')
    }
}