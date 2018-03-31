function setCookieKeyValue(cookieKey, cookieValue) {
    const date = new Date();
    date.setTime(date.getTime() + (365*24*60*60*1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cookieKey + "=" + cookieValue + ";" + expires + "; path=/";
}


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
  

function getRandomBinary() {
    return Math.random() < 0.5 ? 0 : 1;
}


function getColor() {
    let color = getCookieValue('color')
    if (color === null) {
        color = getRandomBinary() ? 'red' : 'blue';
        setCookieKeyValue('color', color);
    };
    // color = color === 'red' ? "https://bit.ly/2pVMtxh": "https://bit.ly/2GoM1Si";
    return color;   
}
 
// const img = new Image();
// img.src = getColor();



function incrementColorCount(color) {
    let count = getCookieValue('count');
    count ? count++ : count = 1;
    setCookieKeyValue('count', count);
    return count;
}


const displayedColor = document.getElementById('displayedColor');
const displayedCount = document.getElementById('displayedCount');

displayedColor.innerHTML = `${getColor()}`;
displayedCount.innerHTML = `You have viewed ${getColor()} ${incrementColorCount()} times`;
// displayedCount.appendChild(img)


// TODO: show color as a picture (have both images, hide both, only show one)
// TODO: display count in html. Add nice styling lol
// TODO: README
// TODO IF TIME: if count = 1 => 'time'. Else => 'times'
