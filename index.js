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

function getColor() {
    let color = getCookieValue('color')
    if (color === null) {
        color = getRandomBinary() ? 'red' : 'blue';
        setCookieKeyValue('color', color);
    }
    return color;
}

document.getElementById('displayedColor').innerHTML = getColor();