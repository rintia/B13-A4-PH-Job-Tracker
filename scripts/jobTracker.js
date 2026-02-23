let interViewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

// console.log(total, interviewCount, rejectedCount);

const allCardsSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

console.log(mainContainer);

// console.log(allCardsSection.children);



function calculateCount(){
    total.innerText = allCardsSection.children.length;
    interviewCount.innerText = interViewList.length;
    rejectedCount.innerText = rejectedList.length
}


calculateCount();

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

    allFilterBtn.classList.add('bg-white', 'gray-text');
    interviewFilterBtn.classList.add('bg-white', 'gray-text');
    rejectedFilterBtn.classList.add('bg-white', 'gray-text');

    const selected = document.getElementById(id);

    selected.classList.remove('bg-white', 'gray-text');
    selected.classList.add('bg-blue-500', 'text-white');
}