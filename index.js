console.log("CV Screener");
const data = [
    {
        name: 'Saif Raza',
        age: 18,
        city: 'Chaibasa',
        language: 'C++',
        framework: 'React, Vue, Angular',
        image: 'https://randomuser.me/api/portraits/men/51.jpg'
    },

    {
        name: 'Shubham Sharma',
        age: 28,
        city: 'Bangalore',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Rahul Negi',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/women/55.jpg'
    },

    {
        name: 'Jass manak',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Rohit Sharma',
        age: 34,
        city: 'Jharkhand',
        language: 'Ruby',
        framework: 'React',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    }
]

function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
        }
    }
}

const candidates = cvIterator(data);
nextCv();

let next = document.getElementById('next');
next.addEventListener('click', nextCv);

function nextCv() {
    let currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate!=undefined){
    image.innerHTML = `<img src = '${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name      : ${currentCandidate.name}</li>
                            <li class="list-group-item">Age       : ${currentCandidate.age} years old</li>
                            <li class="list-group-item">Address   : ${currentCandidate.city}, India .</li>
                            <li class="list-group-item">Language  : ${currentCandidate.language}</li>
                            <li class="list-group-item">Framework : ${currentCandidate.framework}</li>
                        </ul>`;
    }
    else{
        alert("End of the Applicants. ");
        window.location.reload(); // For coming back to the first applicant.
    }
}