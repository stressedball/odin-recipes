const dropDownMenu = document.getElementById('dropdownMenu');
const menu = document.getElementById('menu');

const ddmStyle = getComputedStyle(dropDownMenu);

document.addEventListener('mouseover', fixBorderRadius);

function fixBorderRadius (e) {
    if (ddmStyle.visibility === 'visible') {
        const magic = document.getElementById('magic');
        magic.style.borderBottomRightRadius = '0px';
    } else {
        magic.style.borderBottomRightRadius = '3px';
    }
}
