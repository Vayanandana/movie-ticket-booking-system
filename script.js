 // Sample Data
 const locations = [
    "Hyderabad", "Vijayawada", "Bangalore", "Chennai", "Mumbai", 
    "Delhi", "Kolkata", "Pune", "Ahmedabad", "Jaipur"
];

const movies = [
    {
        id: 1,
        title: "Avengers: Endgame",
        genre: "Action, Adventure, Sci-Fi",
        duration: "3h 1m",
        poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        rating: 4.5
    },
    {
        id: 2,
        title: "Joker",
        genre: "Crime, Drama, Thriller",
        duration: "2h 2m",
        poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        rating: 4.3
    },
    {
        id: 3,
        title: "The Dark Knight",
        genre: "Action, Crime, Drama",
        duration: "2h 32m",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        rating: 4.7
    },
    {
        id: 4,
        title: "Inception",
        genre: "Action, Adventure, Sci-Fi",
        duration: "2h 28m",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        rating: 4.5
    },
    {
        id: 5,
        title: "Interstellar",
        genre: "Adventure, Drama, Sci-Fi",
        duration: "2h 49m",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        rating: 4.6
    },
    {
        id: 6,
        title: "Parasite",
        genre: "Comedy, Drama, Thriller",
        duration: "2h 12m",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        rating: 4.8
    },
    {
        id: 7,
        title: "The Shawshank Redemption",
        genre: "Drama",
        duration: "2h 22m",
        poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        rating: 4.9
    },
    {
        id: 8,
        title: "Pulp Fiction",
        genre: "Crime, Drama",
        duration: "2h 34m",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        rating: 4.7
    },
    {
        id: 9,
        title: "The Godfather",
        genre: "Crime, Drama",
        duration: "2h 55m",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        rating: 4.9
    },
    {
        id: 10,
        title: "Fight Club",
        genre: "Drama",
        duration: "2h 19m",
        poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        rating: 4.7
    }
];

const theatres = [
    {
        id: 1,
        name: "PVR Cinemas",
        location: "Hyderabad",
        screens: 5,
        showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"]
    },
    {
        id: 2,
        name: "INOX",
        location: "Hyderabad",
        screens: 4,
        showtimes: ["10:30 AM", "2:00 PM", "5:30 PM", "9:00 PM"]
    },
    {
        id: 3,
        name: "Cinepolis",
        location: "Hyderabad",
        screens: 6,
        showtimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"]
    },
    {
        id: 4,
        name: "AMB Cinemas",
        location: "Hyderabad",
        screens: 3,
        showtimes: ["9:30 AM", "1:00 PM", "4:30 PM", "8:00 PM", "11:30 PM"]
    },
    {
        id: 5,
        name: "Satyam Cinemas",
        location: "Hyderabad",
        screens: 4,
        showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"]
    },
    {
        id: 6,
        name: "PVR ICON",
        location: "Hyderabad",
        screens: 7,
        showtimes: ["9:00 AM", "12:30 PM", "4:00 PM", "7:30 PM", "11:00 PM"]
    },
    {
        id: 7,
        name: "Asian Cinemas",
        location: "Hyderabad",
        screens: 2,
        showtimes: ["10:15 AM", "1:45 PM", "5:15 PM", "8:45 PM"]
    },
    {
        id: 8,
        name: "Miraj Cinemas",
        location: "Hyderabad",
        screens: 3,
        showtimes: ["11:30 AM", "3:00 PM", "6:30 PM", "10:00 PM"]
    },
    {
        id: 9,
        name: "Movie Time",
        location: "Hyderabad",
        screens: 4,
        showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"]
    },
    {
        id: 10,
        name: "Big Cinemas",
        location: "Hyderabad",
        screens: 5,
        showtimes: ["9:30 AM", "1:00 PM", "4:30 PM", "8:00 PM", "11:30 PM"]
    }
];

// App State
let currentUser = null;
let currentLocation = "Hyderabad";
let selectedMovie = null;
let selectedTheatre = null;
let selectedShowtime = null;
let selectedSeats = [];
let bookingHistory = [];
let paymentMethod = null;

// DOM Elements
const loginPage = document.getElementById('login-page');
const signupPage = document.getElementById('signup-page');
const locationPage = document.getElementById('location-page');
const mainPage = document.getElementById('main-page');
const theatrePage = document.getElementById('theatre-page');
const seatsPage = document.getElementById('seats-page');
const paymentPage = document.getElementById('payment-page');
const ticketPage = document.getElementById('ticket-page');
const historyPage = document.getElementById('history-page');
const profilePage = document.getElementById('profile-page');

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const backToLogin = document.getElementById('back-to-login');
const locationGrid = document.getElementById('location-grid');
const moviesGrid = document.getElementById('movies-grid');
const currentLocationSpan = document.getElementById('current-location');
const changeLocationBtn = document.getElementById('change-location');
const theatreList = document.getElementById('theatre-list');
const theatrePoster = document.getElementById('theatre-poster');
const selectedMovieTitle = document.getElementById('selected-movie-title');
const selectedMovieGenre = document.getElementById('selected-movie-genre');
const selectedMovieDuration = document.getElementById('selected-movie-duration');
const seatsGrid = document.getElementById('seats-grid');
const selectedSeatsDisplay = document.getElementById('selected-seats');
const totalPriceDisplay = document.getElementById('total-price');
const proceedToPaymentBtn = document.getElementById('proceed-to-payment');
const seatsMovieTitle = document.getElementById('seats-movie-title');
const seatsTheatreName = document.getElementById('seats-theatre-name');
const seatsShowtime = document.getElementById('seats-showtime');
const seatsScreen = document.getElementById('seats-screen');
const paymentMethods = document.querySelectorAll('.payment-method');
const makePaymentBtn = document.getElementById('make-payment');
const ticketPoster = document.getElementById('ticket-poster');
const ticketMovieTitle = document.getElementById('ticket-movie-title');
const ticketTheatre = document.getElementById('ticket-theatre');
const ticketLocation = document.getElementById('ticket-location');
const ticketDate = document.getElementById('ticket-date');
const ticketTime = document.getElementById('ticket-time');
const ticketScreen = document.getElementById('ticket-screen');
const ticketSeats = document.getElementById('ticket-seats');
const backToMoviesBtn = document.getElementById('back-to-movies');
const historyList = document.getElementById('history-list');
const profileAvatar = document.getElementById('profile-avatar');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const profileUsername = document.getElementById('profile-username');
const profilePhone = document.getElementById('profile-phone');
const profileDob = document.getElementById('profile-dob');
const profileAddress = document.getElementById('profile-address');
const updateProfileBtn = document.getElementById('update-profile');
const deleteAccountBtn = document.getElementById('delete-account');
const navHome = document.getElementById('nav-home');
const navBookings = document.getElementById('nav-bookings');
const navHistory = document.getElementById('nav-history');
const navProfile = document.getElementById('nav-profile');
const homeLink = document.getElementById('home-link');
const profileLink = document.getElementById('profile-link');
const logoutLink = document.getElementById('logout-link');
const paymentMovie = document.getElementById('payment-movie');
const paymentTheatre = document.getElementById('payment-theatre');
const paymentShowtime = document.getElementById('payment-showtime');
const paymentSeats = document.getElementById('payment-seats');
const paymentTotal = document.getElementById('payment-total');

// Initialize App
function initApp() {
    // Check if user is logged in
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        showMainPage();
    } else {
        showLoginPage();
    }

    // Load locations
    renderLocations();

    // Load movies
    renderMovies();

    // Load sample booking history
    loadSampleHistory();
}

// Page Navigation Functions
function showLoginPage() {
    loginPage.style.display = 'flex';
    signupPage.style.display = 'none';
    locationPage.style.display = 'none';
    mainPage.style.display = 'none';
    theatrePage.style.display = 'none';
    seatsPage.style.display = 'none';
    paymentPage.style.display = 'none';
    ticketPage.style.display = 'none';
    historyPage.style.display = 'none';
    profilePage.style.display = 'none';
    document.querySelector('header').style.display = 'none';
    document.querySelector('.bottom-nav').style.display = 'none';
}

function showSignupPage() {
    loginPage.style.display = 'none';
    signupPage.style.display = 'flex';
    document.querySelector('header').style.display = 'none';
    document.querySelector('.bottom-nav').style.display = 'none';
}

function showLocationPage() {
    loginPage.style.display = 'none';
    signupPage.style.display = 'none';
    locationPage.style.display = 'block';
    mainPage.style.display = 'none';
    theatrePage.style.display = 'none';
    seatsPage.style.display = 'none';
    paymentPage.style.display = 'none';
    ticketPage.style.display = 'none';
    historyPage.style.display = 'none';
    profilePage.style.display = 'none';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('.bottom-nav').style.display = 'flex';
}

function showMainPage() {
    loginPage.style.display = 'none';
    signupPage.style.display = 'none';
    locationPage.style.display = 'none';
    mainPage.style.display = 'block';
    theatrePage.style.display = 'none';
    seatsPage.style.display = 'none';
    paymentPage.style.display = 'none';
    ticketPage.style.display = 'none';
    historyPage.style.display = 'none';
    profilePage.style.display = 'none';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('.bottom-nav').style.display = 'flex';
    updateActiveNav('home');
}

function showTheatrePage() {
    loginPage.style.display = 'none';
    signupPage.style.display = 'none';
    locationPage.style.display = 'none';
    mainPage.style.display = 'none';
    theatrePage.style.display = 'block';
    seatsPage.style.display = 'none';
    paymentPage.style.display = 'none';
    ticketPage.style.display = 'none';
    historyPage.style.display = 'none';
    profilePage.style.display = 'none';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('.bottom-nav').style.display = 'flex';
    updateActiveNav('home');
}

function showSeatsPage() {
    loginPage.style.display = 'none';
    signupPage.style.display = 'none';
    locationPage.style.display = 'none';
    mainPage.style.display = 'none';
    theatrePage.style.display = 'none';
    seatsPage.style.display = 'block';
    paymentPage.style.display = 'none';
    ticketPage.style.display = 'none';
    historyPage.style.display = 'none';
    profilePage.style.display = 'none';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('.bottom-nav').style.display = 'flex';
    updateActiveNav('home');
}

function showPaymentPage() {
    loginPage.style.display = 'none';
    signupPage.style.display = 'none';
    locationPage.style.display = 'none';
    mainPage.style.display = 'none';
    theatrePage.style.display = 'none';
    seatsPage.style.display = 'none';
    paymentPage.style.display = 'block';
    ticketPage.style.display = 'none';
    historyPage.style.display = 'none';
    profilePage.style.display = 'none';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('.bottom-nav').style.display = 'flex';
    updateActiveNav('home');
}

function showTicketPage() {
    loginPage.style.display = 'none';
    signupPage.style.display = 'none';
    locationPage.style.display = 'none';
    mainPage.style.display = 'none';
    theatrePage.style.display = 'none';
    seatsPage.style.display = 'none';
    paymentPage.style.display = 'none';
    ticketPage.style.display = 'block';
    historyPage.style.display = 'none';
    profilePage.style.display = 'none';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('.bottom-nav').style.display = 'flex';
    updateActiveNav('home');
}

function showHistoryPage() {
    loginPage.style.display = 'none';
    signupPage.style.display = 'none';
    locationPage.style.display = 'none';
    mainPage.style.display = 'none';
    theatrePage.style.display = 'none';
    seatsPage.style.display = 'none';
    paymentPage.style.display = 'none';
    ticketPage.style.display = 'none';
    historyPage.style.display = 'block';
    profilePage.style.display = 'none';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('.bottom-nav').style.display = 'flex';
    updateActiveNav('history');
}

function showProfilePage() {
    loginPage.style.display = 'none';
    signupPage.style.display = 'none';
    locationPage.style.display = 'none';
    mainPage.style.display = 'none';
    theatrePage.style.display = 'none';
    seatsPage.style.display = 'none';
    paymentPage.style.display = 'none';
    ticketPage.style.display = 'none';
    historyPage.style.display = 'none';
    profilePage.style.display = 'block';
    document.querySelector('header').style.display = 'flex';
    document.querySelector('.bottom-nav').style.display = 'flex';
    updateActiveNav('profile');
    loadProfileData();
}

function updateActiveNav(active) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    if (active === 'home') {
        navHome.classList.add('active');
    } else if (active === 'bookings') {
        navBookings.classList.add('active');
    } else if (active === 'history') {
        navHistory.classList.add('active');
    } else if (active === 'profile') {
        navProfile.classList.add('active');
    }
}

// Render Functions
function renderLocations() {
    locationGrid.innerHTML = '';
    locations.forEach(location => {
        const locationCard = document.createElement('div');
        locationCard.className = 'location-card';
        locationCard.textContent = location;
        locationCard.addEventListener('click', () => {
            currentLocation = location;
            currentLocationSpan.textContent = location;
            showMainPage();
        });
        locationGrid.appendChild(locationCard);
    });
}

function renderMovies() {
    moviesGrid.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-genre">${movie.genre} • ${movie.duration}</p>
                <div class="movie-actions">
                    <span>⭐ ${movie.rating}/5</span>
                    <button class="btn btn-primary book-btn">Book Now</button>
                </div>
            </div>
        `;
        
        movieCard.querySelector('.book-btn').addEventListener('click', () => {
            selectedMovie = movie;
            showTheatrePage();
            renderTheatres();
        });
        
        moviesGrid.appendChild(movieCard);
    });
}

function renderTheatres() {
    theatrePoster.src = selectedMovie.poster;
    selectedMovieTitle.textContent = selectedMovie.title;
    selectedMovieGenre.textContent = selectedMovie.genre;
    selectedMovieDuration.textContent = selectedMovie.duration;
    
    theatreList.innerHTML = '';
    theatres.forEach(theatre => {
        if (theatre.location === currentLocation) {
            const theatreItem = document.createElement('div');
            theatreItem.className = 'theatre-item';
            
            theatreItem.innerHTML = `
                <div class="theatre-name">${theatre.name}</div>
                <div>Screens: ${theatre.screens}</div>
                <div class="showtimes">
                    ${theatre.showtimes.map(time => `<div class="showtime">${time}</div>`).join('')}
                </div>
            `;
            
            theatreItem.querySelectorAll('.showtime').forEach(showtime => {
                showtime.addEventListener('click', () => {
                    selectedTheatre = theatre;
                    selectedShowtime = showtime.textContent;
                    showSeatsPage();
                    renderSeats();
                });
            });
            
            theatreList.appendChild(theatreItem);
        }
    });
}

function renderSeats() {
    seatsMovieTitle.textContent = selectedMovie.title;
    seatsTheatreName.textContent = selectedTheatre.name;
    seatsShowtime.textContent = `Showtime: ${selectedShowtime}`;
    seatsScreen.textContent = `Screen: ${Math.floor(Math.random() * selectedTheatre.screens) + 1}`;
    
    seatsGrid.innerHTML = '';
    selectedSeats = [];
    updateSeatSelection();
    
    // Generate seats (10 rows A-J, 10 seats per row 1-10)
    for (let row = 0; row < 10; row++) {
        const rowLetter = String.fromCharCode(65 + row); // A-J
        
        for (let seatNum = 1; seatNum <= 10; seatNum++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            seat.textContent = `${rowLetter}${seatNum}`;
            
            // Randomly mark some seats as occupied (20% chance)
            if (Math.random() < 0.2) {
                seat.classList.add('occupied');
            } else {
                seat.addEventListener('click', () => toggleSeatSelection(seat));
            }
            
            seatsGrid.appendChild(seat);
        }
    }
}

function renderPaymentDetails() {
    paymentMovie.textContent = selectedMovie.title;
    paymentTheatre.textContent = selectedTheatre.name;
    paymentShowtime.textContent = selectedShowtime;
    paymentSeats.textContent = selectedSeats.join(', ');
    paymentTotal.textContent = `₹${selectedSeats.length * 180}`;
}

function renderTicket() {
    ticketPoster.src = selectedMovie.poster;
    ticketMovieTitle.textContent = selectedMovie.title;
    ticketTheatre.textContent = selectedTheatre.name;
    ticketLocation.textContent = currentLocation;
    
    // Set ticket date to today
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    ticketDate.textContent = dateStr;
    
    ticketTime.textContent = selectedShowtime;
    ticketScreen.textContent = seatsScreen.textContent;
    ticketSeats.textContent = selectedSeats.join(', ');
}

function loadSampleHistory() {
    // Create sample history for demo
    bookingHistory = [
        {
            id: 1,
            movie: movies[0],
            theatre: theatres[0],
            showtime: "10:00 AM",
            seats: ["A1", "A2", "A3"],
            date: "2023-10-10",
            price: 540
        },
        {
            id: 2,
            movie: movies[1],
            theatre: theatres[1],
            showtime: "2:00 PM",
            seats: ["B5", "B6"],
            date: "2023-10-05",
            price: 360
        },
        {
            id: 3,
            movie: movies[2],
            theatre: theatres[2],
            showtime: "6:00 PM",
            seats: ["C7", "C8"],
            date: "2023-09-28",
            price: 360
        }
    ];
}

function renderHistory() {
    historyList.innerHTML = '';
    
    bookingHistory.forEach(booking => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        historyItem.innerHTML = `
            <img src="${booking.movie.poster}" alt="${booking.movie.title}" class="history-poster">
            <div class="history-details">
                <h3>${booking.movie.title}</h3>
                <div class="history-info">
                    <span>Theatre:</span> ${booking.theatre.name}
                </div>
                <div class="history-info">
                    <span>Date:</span> ${booking.date}
                </div>
                <div class="history-info">
                    <span>Time:</span> ${booking.showtime}
                </div>
                <div class="history-info">
                    <span>Seats:</span> ${booking.seats.join(', ')}
                </div>
                <div class="history-info">
                    <span>Price:</span> ₹${booking.price}
                </div>
            </div>
        `;
        
        historyList.appendChild(historyItem);
    });
}

function loadProfileData() {
    if (currentUser) {
        profileAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
        profileName.textContent = currentUser.name;
        profileEmail.textContent = currentUser.email;
        profileUsername.value = currentUser.username;
        profilePhone.value = currentUser.phone || '';
        profileDob.value = currentUser.dob || '';
        profileAddress.value = currentUser.address || '';
    }
}

// Helper Functions
function toggleSeatSelection(seat) {
    seat.classList.toggle('selected');
    
    const seatNumber = seat.textContent;
    const index = selectedSeats.indexOf(seatNumber);
    
    if (index === -1) {
        selectedSeats.push(seatNumber);
    } else {
        selectedSeats.splice(index, 1);
    }
    
    updateSeatSelection();
}

function updateSeatSelection() {
    if (selectedSeats.length > 0) {
        selectedSeatsDisplay.textContent = selectedSeats.join(', ');
        totalPriceDisplay.textContent = `₹${selectedSeats.length * 180}`;
        proceedToPaymentBtn.disabled = false;
    } else {
        selectedSeatsDisplay.textContent = 'None';
        totalPriceDisplay.textContent = '₹0';
        proceedToPaymentBtn.disabled = true;
    }
}

function addToHistory() {
    const newBooking = {
        id: bookingHistory.length + 1,
        movie: selectedMovie,
        theatre: selectedTheatre,
        showtime: selectedShowtime,
        seats: selectedSeats,
        date: new Date().toISOString().split('T')[0],
        price: selectedSeats.length * 180
    };
    
    bookingHistory.unshift(newBooking);
}

// Event Listeners
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    // Simple validation (in a real app, this would check against a database)
    if (username && password) {
        currentUser = {
            name: "Demo User",
            email: "demo@example.com",
            username: username,
            phone: "9876543210",
            dob: "1990-01-01",
            address: "123 Movie Street, Film City"
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showLocationPage();
    } else {
        alert('Please enter both username and password');
    }
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    if (password !== confirm) {
        alert('Passwords do not match');
        return;
    }
    
    if (name && email && username && password) {
        currentUser = {
            name: name,
            email: email,
            username: username,
            phone: "",
            dob: "",
            address: ""
        };
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        alert('Account created successfully! Please login.');
        showLoginPage();
    } else {
        alert('Please fill in all fields');
    }
});

showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    showSignupPage();
});

backToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showLoginPage();
});

changeLocationBtn.addEventListener('click', () => {
    showLocationPage();
});

proceedToPaymentBtn.addEventListener('click', () => {
    if (selectedSeats.length > 0) {
        renderPaymentDetails();
        showPaymentPage();
    }
});

paymentMethods.forEach(method => {
    method.addEventListener('click', () => {
        paymentMethods.forEach(m => m.classList.remove('selected'));
        method.classList.add('selected');
        paymentMethod = method.getAttribute('data-method');
    });
});

makePaymentBtn.addEventListener('click', () => {
    if (!paymentMethod) {
        alert('Please select a payment method');
        return;
    }
    
    // In a real app, this would process the payment
    addToHistory();
    showTicketPage();
    renderTicket();
});

backToMoviesBtn.addEventListener('click', () => {
    showMainPage();
});

navHome.addEventListener('click', (e) => {
    e.preventDefault();
    showMainPage();
});

navBookings.addEventListener('click', (e) => {
    e.preventDefault();
    // In a complete app, this would show current bookings
    showMainPage();
});

navHistory.addEventListener('click', (e) => {
    e.preventDefault();
    renderHistory();
    showHistoryPage();
});

navProfile.addEventListener('click', (e) => {
    e.preventDefault();
    showProfilePage();
});

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showMainPage();
});

profileLink.addEventListener('click', (e) => {
    e.preventDefault();
    showProfilePage();
});

logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    currentUser = null;
    localStorage.removeItem('currentUser');
    showLoginPage();
});

updateProfileBtn.addEventListener('click', () => {
    if (currentUser) {
        currentUser.phone = profilePhone.value;
        currentUser.dob = profileDob.value;
        currentUser.address = profileAddress.value;
        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        alert('Profile updated successfully!');
    }
});

deleteAccountBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete your account? This cannot be undone.')) {
        currentUser = null;
        localStorage.removeItem('currentUser');
        showLoginPage();
    }
});

// Initialize the app
initApp();