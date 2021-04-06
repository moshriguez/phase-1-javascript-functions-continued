function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = (activity='go to the office') => {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
    return function(arg='special') {
        return `You are ${flair}${arg}${flair}!`
    }
}

console.log(wrapAdjective('!!!')());