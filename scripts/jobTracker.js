let interViewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
let jobNumber = document.getElementById('job-number');

// console.log(total, interviewCount, rejectedCount);

const allCardsSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const filteredSection = document.getElementById('filtered-section');
const rejectSection = document.getElementById('reject-section');
const noCardSection = document.getElementById('no-card-section');

// console.log(mainContainer);

// console.log(allCardsSection.children);



function calculateCount() {
    total.innerText = allCardsSection.children.length;
    interviewCount.innerText = interViewList.length;
    rejectedCount.innerText = rejectedList.length;
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
    currentStatus = id;

    selected.classList.remove('bg-white', 'gray-text');
    selected.classList.add('bg-blue-500', 'text-white');

    if(id == 'interview-filter-btn'){
        noCardSection.classList.add('hidden')
        allCardsSection.classList.add('hidden');
        rejectSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview();
        jobNumber.innerText = interViewList.length;
        if(interViewList.length == 0){
            noCardSection.classList.remove('hidden')
        }
       
    }
    else if(id == 'all-filter-btn'){
        noCardSection.classList.add('hidden')
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
        rejectSection.classList.add('hidden');
        jobNumber.innerText = allCardsSection.children.length;
        if(allCardsSection.children.length == 0){
            noCardSection.classList.remove('hidden')
        }
    }
    else if(id == 'rejected-filter-btn'){
        allCardsSection.classList.add('hidden');
        filteredSection.classList.add('hidden');
        rejectSection.classList.remove('hidden');
        renderReject();
        jobNumber.innerText = rejectedList.length;
        noCardSection.classList.add('hidden');
        if(rejectedList.length == 0){
            noCardSection.classList.remove('hidden');
        }
        
    }
}

function deleteCard(id){
    const card = document.getElementById(id);
    console.log(card);
    card.remove();
}

mainContainer.addEventListener('click', function (event) {


    if (event.target.classList.contains('interview-btn')) {

        console.log('interview');
        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobDesignation = parentNode.querySelector('.job-designation').innerText;
        const jobBadge = parentNode.querySelector('.badge');
        const jobPlace = parentNode.querySelector('.job-place').innerText;
        const jobTime = parentNode.querySelector('.job-time').innerText;
        const jobMoney = parentNode.querySelector('.job-money').innerText;
        const jobDescription = parentNode.querySelector('.job-description').innerText;
        jobBadge.innerText = 'Interview';
        jobBadge.classList.add('bg-green-100');
        jobBadge.classList.remove('bg-red-100');

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
           
        }


        rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName);

        if(currentStatus == 'rejected-filter-btn'){
            renderReject();
            jobNumber.innerText = rejectedList.length;
            if(rejectedList.length == 0){
                noCardSection.classList.remove('hidden')
            }
        }
        
        calculateCount();
        
    }

    else if (event.target.classList.contains('rejected-btn')) {

        const parentNode = event.target.parentNode.parentNode;
        const jobName = parentNode.querySelector('.job-name').innerText;
        const jobDesignation = parentNode.querySelector('.job-designation').innerText;
        const jobBadge = parentNode.querySelector('.badge');
        const jobPlace = parentNode.querySelector('.job-place').innerText;
        const jobTime = parentNode.querySelector('.job-time').innerText;
        const jobMoney = parentNode.querySelector('.job-money').innerText;
        const jobDescription = parentNode.querySelector('.job-description').innerText;
        jobBadge.innerText = 'Rejected';
        jobBadge.classList.add('bg-red-100')

        const cardInfo = {
            jobName,
            jobDesignation,
            jobBadge,
            jobPlace,
            jobTime,
            jobMoney,
            jobDescription
        }

        const jobExist = rejectedList.find(item => item.jobName == cardInfo.jobName);

        if (!jobExist) {
            rejectedList.push(cardInfo);
        }

        interViewList = interViewList.filter(item => item.jobName != cardInfo.jobName)

        

        if(currentStatus == 'interview-filter-btn'){
            renderInterview();
            jobNumber.innerText = interViewList.length;
             if(interViewList.length == 0){
                noCardSection.classList.remove('hidden')
            }
        }
        calculateCount();

        
    }

    
   else if(event.target.closest('.delete-btn')){
        const deleteBtn = event.target.closest('.delete-btn')
        const jobCard = deleteBtn.closest('.job-card');
        const jobName = jobCard.querySelector('.job-name').innerText;
        if(currentStatus == 'interview-filter-btn'){
            interViewList = interViewList.filter(item => item.jobName != jobName);
            jobNumber.innerText = interViewList.length;
            console.log('interview-filter');
            if(interViewList.length == 0){
                noCardSection.classList.remove('hidden')
            }
        }
        else if(currentStatus == 'rejected-filter-btn'){
            rejectedList = rejectedList.filter(item => item.jobName != jobName);
            jobNumber.innerText = rejectedList.length;
            console.log('rejected-filter');
            if(rejectedList.length == 0){
                noCardSection.classList.remove('hidden')
            }
        }
        else if(currentStatus == 'all' || currentStatus == 'all-filter-btn'){
            jobCard.remove();
            console.log(allCardsSection, allCardsSection.children.length);
            jobNumber.innerText = allCardsSection.children.length;
            if(allCardsSection.children.length == 0){
                noCardSection.classList.remove('hidden')
            }
        }

        jobCard.remove();
        console.log(interViewList);
        console.log(rejectedList);
        calculateCount();
   }

    

})

function renderInterview() {
    filteredSection.innerHTML = '';

    for (let interview of interViewList) {
        // console.log(interview);
        let div = document.createElement('div');
        div.className = "job-card bg-white rounded-lg p-7 space-y-4 mb-8";
        div.innerHTML = `
        <div>
        <div class="flex justify-between">
    <h1 class="job-name text-xl font-bold main-color mb-1">${interview.jobName}</h1>
            <!-- delete button -->
            <button class="btn border-gray-300 rounded-full  delete-btn p-2 shadow-none"><i
                    class="fa-regular fa-trash-can"></i></button>
        </div>

        <p class="job-designation gray-color">${interview.jobDesignation}</p>
    </div>
<p class="gray-color text-sm space-x-3"><span class="job-place">${interview.jobPlace} </span>• <span class="job-time">${interview.jobTime} </span> <span class="job-money">${interview.jobMoney}</span></p>
    <!-- badge -->
    <div class="badge badge-md bg-green-100 main-color p-4 font-bold">${interview.jobBadge.innerText}</div>
    <p class="job-description">${interview.jobDescription}</p>


    <!-- buttons -->
    <div class="space-x-2">
        <button class="interview-btn btn btn-outline text-[#10B981] hover:bg-[#10B981] hover:text-white">Interview</button>
        <button class="rejected-btn btn btn-outline text-[#EF4444] hover:bg-[#EF4444] hover:text-white">Rejected</button>
    </div>
        `
        filteredSection.appendChild(div);
    }
}

function renderReject() {
    rejectSection.innerHTML = '';

    for (let reject of rejectedList) {
        console.log(reject);
        let div = document.createElement('div');
        div.className = "job-card bg-white rounded-lg p-7 space-y-4 mb-8";
        div.innerHTML = `
        <div>
        <div class="flex justify-between">
    <h1 class="job-name text-xl font-bold main-color mb-1">${reject.jobName}</h1>
            <!-- delete button -->
            <button class="btn border-gray-300 rounded-full  delete-btn p-2 shadow-none"><i
                    class="fa-regular fa-trash-can"></i></button>
        </div>

        <p class="job-designation gray-color">${reject.jobDesignation}</p>
    </div>
<p class="gray-color text-sm space-x-3"><span class="job-place">${reject.jobPlace} </span>• <span class="job-time">${reject.jobTime} </span> <span class="job-money">${reject.jobMoney}</span></p>
    <!-- badge -->
    <div class="badge badge-md bg-red-100 main-color p-4 font-bold">${reject.jobBadge.innerText}</div>
    <p class="job-description">${reject.jobDescription}</p>


    <!-- buttons -->
    <div class="space-x-2">
        <button class="interview-btn btn btn-outline text-[#10B981] hover:bg-[#10B981] hover:text-white">Interview</button>
        <button class="rejected-btn btn btn-outline text-[#EF4444] hover:bg-[#EF4444] hover:text-white">Rejected</button>
    </div>
        `
        rejectSection.appendChild(div);
    }
}