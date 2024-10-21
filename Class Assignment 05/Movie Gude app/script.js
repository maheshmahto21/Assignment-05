const movieTitleDiv = document.getElementById('movie-title');
const movieCastDiv = document.getElementById('movie-cast');
const movieDescriptionDiv = document.getElementById('movie-description');
const loadMovieButton = document.getElementById('loadMovieButton');

let currentMovieIndex = 0;


const indianSuperhitMovies = [
    {
        title: "Sholay",
        year: 1975,
        description: "A timeless classic, 'Sholay' tells the story of two criminals, Veeru and Jai, who are hired by a retired police officer to capture the notorious bandit, Gabbar Singh.",
        cast: "Dharmendra, Amitabh Bachchan, Hema Malini, Amjad Khan"
    },
    {
        title: "Dilwale Dulhania Le Jayenge",
        year: 1995,
        description: "A romantic drama that follows Raj and Simran, who meet on a trip to Europe. They fall in love but must navigate the challenges posed by their families.",
        cast: "Shah Rukh Khan, Kajol, Amrish Puri, Farida Jalal"
    },
    {
        title: "Lagaan",
        year: 2001,
        description: "Set in the late 19th century, villagers challenge British officers to a cricket match to avoid paying taxes, showcasing the spirit of resistance and unity.",
        cast: "Aamir Khan, Gracy Singh, Rachel Shelley, Paul Blackthorne"
    },
    {
        title: "3 Idiots",
        year: 2009,
        description: "A comedy-drama exploring the lives of three engineering students, challenging the traditional education system and celebrating friendship and creativity.",
        cast: "Aamir Khan, R. Madhavan, Sharman Joshi, Kareena Kapoor"
    },
    {
        title: "Kabhi Khushi Kabhie Gham",
        year: 2001,
        description: "This family drama revolves around love, sacrifice, and the values that hold families together, showcasing the importance of relationships.",
        cast: "Shah Rukh Khan, Kajol, Amitabh Bachchan, Jaya Bachchan"
    },
    {
        title: "Dangal",
        year: 2016,
        description: "Based on the true story of wrestler Mahavir Singh Phogat, who trains his daughters to become world-class wrestlers, highlighting themes of empowerment and determination.",
        cast: "Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh, Sanya Malhotra"
    },
    {
        title: "Baahubali: The Beginning",
        year: 2015,
        description: "An epic historical drama that tells the story of two brothers vying for the throne of the ancient kingdom of Mahishmati, filled with action and grandeur.",
        cast: "Prabhas, Rana Daggubati, Anushka Shetty, Tamannah Bhatia"
    },
    {
        title: "Queen",
        year: 2014,
        description: "A young woman embarks on a solo honeymoon trip to Europe after her wedding is called off, leading to self-discovery and empowerment.",
        cast: "Kangana Ranaut, Rajkummar Rao, Lisa Haydon, Chhavi Mittal"
    },
    {
        title: "Gully Boy",
        year: 2019,
        description: "Inspired by the lives of street rappers in Mumbai, this film follows an aspiring rapper's journey as he finds his voice and battles against societal odds.",
        cast: "Ranveer Singh, Alia Bhatt, Siddhant Chaturvedi, Vijay Varma"
    },
    {
        title: "Andhadhun",
        year: 2018,
        description: "A blind pianist unknowingly becomes embroiled in a series of mysterious events, leading to unexpected twists and turns.",
        cast: "Ayushmann Khurrana, Tabu, Radhika Apte, Anil Dhawan"
    },
    {
        title: "PK",
        year: 2014,
        description: "An alien arrives on Earth and questions religious beliefs and societal norms, creating a thought-provoking narrative.",
        cast: "Aamir Khan, Anushka Sharma, Sushant Singh Rajput, Boman Irani"
    },
    {
        title: "Zindagi Na Milegi Dobara",
        year: 2011,
        description: "Three friends embark on a road trip in Spain that leads to self-discovery, adventure, and understanding the meaning of life.",
        cast: "Hrithik Roshan, Farhan Akhtar, Abhay Deol, Katrina Kaif"
    },
    {
        title: "Chennai Express",
        year: 2013,
        description: "A man's journey on a train leads him to unexpected adventures and romance, blending action and comedy.",
        cast: "Shah Rukh Khan, Deepika Padukone, Sathyaraj, Priyamani"
    },
    {
        title: "Bajrangi Bhaijaan",
        year: 2015,
        description: "A man's quest to reunite a mute Pakistani girl with her family in her homeland becomes a heartwarming journey of compassion.",
        cast: "Salman Khan, Harshaali Malhotra, Kareena Kapoor Khan, Nawazuddin Siddiqui"
    },
    {
        title: "Tumbbad",
        year: 2018,
        description: "A visually stunning horror film exploring greed and folklore in a small village, centered around a hidden treasure.",
        cast: "Sohum Shah, Jyoti Malhotra, and others"
    }
];

function loadMovie() {
    const movie = indianSuperhitMovies[currentMovieIndex];
    movieTitleDiv.innerHTML = `${movie.title} (${movie.year})`;
    movieCastDiv.innerHTML = `<strong>Cast:</strong> ${movie.cast}`;
    movieDescriptionDiv.innerHTML = movie.description;

   
    if (currentMovieIndex >= indianSuperhitMovies.length - 1) {
        loadMovieButton.style.display = 'none';
    } else {
        loadMovieButton.style.display = 'block';
    }
}

 
loadMovieButton.addEventListener('click', () => {
    currentMovieIndex++;
    loadMovie();
});

 
loadMovie();
