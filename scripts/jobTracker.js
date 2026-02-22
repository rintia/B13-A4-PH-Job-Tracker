let interViewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// console.log(total, interviewCount, rejectedCount);

const allCardsSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');

console.log(mainContainer);

// console.log(allCardsSection.children);

interViewList.push({name: 'plant 1'}, {name: 'plat 2'})

function calculateCount(){
    total.innerText = allCardsSection.children.length;
    interviewCount.innerText = interViewList.length;
    rejectedCount.innerText = rejectedList.length
}


calculateCount();