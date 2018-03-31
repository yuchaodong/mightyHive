function getCookieValue(cookieKey) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.indexOf(cookieKey + '=') === 0) {
            const cookieValue = cookie.split('=')[1];
            return cookieValue;
        }
    }
    return null;
}

  
function setCookieKeyValue(cookieKey, cookieValue) {
    const date = new Date();
    date.setTime(date.getTime() + (365*24*60*60*1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cookieKey + "=" + cookieValue + ";" + expires + "; path=/";
}
  

function getRandomBinary() {
    return Math.random() < 0.5 ? 0 : 1;
}


function incrementColorCount(color) {
    //TODO: using cookie
    // store 'count'
    let count = getCookieValue('count');
    count ? count++ : count = 1;
    setCookieKeyValue('count', count);
    return count;
}


function getColor() {
    let color = getCookieValue('color')
    if (color === null) {
        color = getRandomBinary() ? 'red' : 'blue';
        setCookieKeyValue('color', color);
    }
    // create a div/button that says 'you've viewed this color x times!'
    // incrementColorCount(color)
    return color;
}

// const displayedColor = document.
// const displayedCount = document.getElementById('displayedCount');

// document.getElementById('displayedColor').innerHTML = getColor();
// incrementColorCount();
displayedCount.innerHTML = `You have viewed ${getColor()} ${incrementColorCount()} time(s)` ;
// TODO: create web server using node/express
// TODO: show color as a picture (have both images, hide both, only show one)
// TODO: display count in html. Add nice styling lol
