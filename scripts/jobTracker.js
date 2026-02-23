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

const filteredSection = document.getElementById('filtered-section');

console.log(mainContainer);

// console.log(allCardsSection.children);



function calculateCount() {
    total.innerText = allCardsSection.children.length;
    interviewCount.innerText = interViewList.length;
    rejectedCount.innerText = rejectedList.length
}


calculateCount();

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');

    allFilterBtn.classList.add('bg-white', 'gray-text');
    interviewFilterBtn.classList.add('bg-white', 'gray-text');
    rejectedFilterBtn.classList.add('bg-white', 'gray-text');

    const selected = document.getElementById(id);

    selected.classList.remove('bg-white', 'gray-text');
    selected.classList.add('bg-blue-500', 'text-white');

    if(id == 'interview-filter-btn'){
        allCardsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
    }
    else if(id == 'all-filter-btn'){
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
}

mainContainer.addEventListener('click', function (event) {


    if (event.target.classList.contains('interview-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobDesignation = parentNode.querySelector('.job-designation').innerText;
        const jobBadge = parentNode.querySelector('.badge');
        const jobPlace = parentNode.querySelector('.job-place').innerText;
        const jobTime = parentNode.querySelector('.job-time').innerText;
        const jobMoney = parentNode.querySelector('.job-money').innerText;
        const jobDescription = parentNode.querySelector('.job-description').innerText;
        jobBadge.innerText = 'Interview';
        jobBadge.classList.add('bg-green-100')

        const cardInfo = {
            jobName,
            jobDesignation,
            jobBadge,
            jobPlace,
            jobTime,
            jobMoney,
            jobDescription
        }

        const jobExist = interViewList.find(item => item.jobName == cardInfo.jobName);

        if (!jobExist) {
            interViewList.push(cardInfo);
            calculateCount();
        }

        renderInterview();
    }

})

function renderInterview() {
    filteredSection.innerHTML = '';

    for (let interview of interViewList) {
        console.log(interview);
        let div = document.createElement('div');
        div.className = "bg-white rounded-lg p-7 space-y-4 mb-8";
        div.innerHTML = `
        <div>
        <div class="flex justify-between">
    <h1 class="job-name text-xl font-bold main-color mb-1">${interview.jobName}</h1>
            <!-- delete button -->
            <button class="btn border-none bg-white shadow-none p-0"><i
                    class="fa-regular fa-trash-can"></i></button>
        </div>

        <p class="job-designation gray-color">${interview.jobDesignation}</p>
    </div>
<p class="gray-color text-sm space-x-3"><span class="job-place">${interview.jobPlace} </span>• <span class="job-time">${interview.jobTime} </span> <span class="job-money">${interview.jobMoney}</span></p>
    <!-- badge -->
    <div class="badge badge-md bg-[#EEF4FF] main-color p-4 font-bold">${interview.jobBadge.innerText}</div>
    <p class="job-description">${interview.jobDescription}</p>


    <!-- buttons -->
    <div class="space-x-2">
        <button class="btn btn-outline text-[#10B981] hover:bg-[#10B981] hover:text-white">Interview</button>
        <button class="btn btn-outline text-[#EF4444] hover:bg-[#EF4444] hover:text-white">Rejected</button>
    </div>
        `
        filteredSection.appendChild(div);
    }
}