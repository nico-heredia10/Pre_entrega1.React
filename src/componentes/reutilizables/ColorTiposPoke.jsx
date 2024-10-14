

function Color (tipo){

    return tipo === 'fire' ? '#FF4500' : (tipo === 'water') ? '#6890F0' : (tipo === 'grass') ? '#78C850' : (tipo === 'electric') ? '#F8D030' : (tipo === 'ice') ? '#ADD8E6' : (tipo === 'fighting') ? '#C03028' : (tipo == 'psychic') ? '#9932CC' : (tipo == 'rock') ? '#B8A038' :(tipo == 'ground') ? '#E0C068' :(tipo == 'bug') ? '#A8B820' :(tipo == 'poison') ? '#A040A0' :(tipo == 'ghost') ? '#705898' : (tipo == 'steel') ? '#B8B8D0' : (tipo == 'flying') ? '#A890F0' : (tipo == 'fairy') ? '#FFC0CB' : (tipo == 'dark') ? '#705848' : 'white'
}

export default Color;