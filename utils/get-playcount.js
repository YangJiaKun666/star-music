function getPlayCount(number) {
    if (!number) return 0
    number = String(number)
    let playStr = ''
    switch (number) {
        case number.length == 5:
            return (playStr = `${number.slice(0, 1)}万`)
        case number.length == 6:
            return (playStr = `${number.slice(0, 2)}万`)
        case number.length == 7:
            return (playStr = `${number.slice(0, 3)}万`)
        case number.length == 8:
            return (playStr = `${number.slice(0, 4)}万`)
        case number.length == 9:
            return (playStr = `${number.slice(0, 1)}亿`)
        case number.length == 10:
            return (playStr = `${number.slice(0, 2)}亿`)
        default:
            return (playStr = 0)
    }
}

export default {
    getPlayCount,
}
