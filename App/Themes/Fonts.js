const type = {
    base: 'Avenir-Book',
    bold: 'Avenir-Black',
    emphasis: 'HelveticaNeue-Italic'
}

const size = {
    h1: 38,
    h2: 34,
    h3: 30,
    h4: 26,
    h5: 20,
    h6: 19,
    input: 18,
    regular: 17,
    medium: 14,
    small: 12,
    tiny: 8.5
}

const style = {   
    title:{
        fontFamily: type.bold,        
        fontSize: size.h5
    },
    normal: {
        fontFamily: type.base,
        fontSize: size.regular
    },
    description: {
        fontFamily: type.base,
        fontSize: size.medium
    }
}

export default {
    type,
    size,
    style
}
