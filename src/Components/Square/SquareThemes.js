export const squareThemes = {
    red: 'red',
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    pink: 'pink',
    orange: 'orange'
}

const randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

export const pickRandomTheme = function() {
    return randomProperty(squareThemes);
}
