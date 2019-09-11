const squareThemes = {
    red: 'red',
    blue: 'blue',
    green: 'green',
    yellow: 'yellow',
    pink: 'pink',
    orange: 'orange',
    purple: 'purple'
}

const randomProperty = function (obj) {
    var keys = Object.keys(obj)
    return obj[keys[ keys.length * Math.random() << 0]];
};

const pickRandomTheme = function() {
    return randomProperty(squareThemes);
}

export default pickRandomTheme;
