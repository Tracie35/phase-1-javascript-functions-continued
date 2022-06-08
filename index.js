// code your solution here
const saturdayFun = (place ='roller-skate')=> `This Saturday, I want to ${place}!` ;
const mondayWork = (place = 'go to the office')=> `This Monday, I will ${place}.`;
function wrapAdjective(wrap){
    return function (def='special'){
        return `You are ${wrap}${def}${wrap}!`
    }
}
