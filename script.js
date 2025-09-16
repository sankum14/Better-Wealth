document.addEventListener('DOMContentLoaded', () => {
    
    const AppDB = {
        get: (key) => JSON.parse(localStorage.getItem(key)),
        set: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
    };

    function seedInitialData() {
        if (!AppDB.get('advisors')) {
            const sampleAdvisors = [
                { id: 'adv_001', name: 'Priya Sharma', email: 'priya.s@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/women/67.jpg', title: 'SEBI Registered (RIA)', experience: '12+ years of experience.', specialties: ['Retirement Planning', 'Mutual Funds', 'Stock Advisory'], bio: 'Priya is a seasoned financial advisor dedicated to helping clients in their 40s and 50s achieve their long-term retirement goals. She believes in creating diversified, low-cost portfolios.', price: 2499, appointments: [], reviews: [ { userName: 'Amit Kumar', rating: 5, comment: 'Priya was extremely knowledgeable and helped me create a solid retirement plan. Highly recommended!', date: '2025-08-20' } ] },
                { id: 'adv_002', name: 'Rohan Mehra', email: 'rohan.m@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/67.jpg', title: 'Certified Financial Planner (CFP)', experience: '8 years of experience.', specialties: ['Tax Planning', 'Equity Advisory', 'Goal Planning'], bio: 'Rohan specializes in tax-efficient investment strategies for salaried professionals and high-net-worth individuals. His approach is data-driven and client-focused.', price: 1999, appointments: [], reviews: [] },
                { id: 'adv_003', name: 'Anjali Desai', email: 'anjali.d@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/women/68.jpg', title: 'Chartered Accountant (CA)', experience: '15+ years of experience.', specialties: ['Entrepreneur Finance', 'NRI Investments', 'Estate Planning'], bio: 'Anjali provides comprehensive financial planning for business owners and NRIs. She helps navigate the complexities of international finance and business growth.', price: 2999, appointments: [], reviews: [] },
                { id: 'adv_004', name: 'Vikram Singh Rathore', email: 'vikram.r@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/68.jpg', title: 'NISM Certified Professional', experience: '6 years of experience.', specialties: ['Mutual Funds', 'SIP Planning', 'Beginner Investing'], bio: 'Vikram is passionate about helping young professionals start their investment journey. He simplifies complex topics and focuses on building long-term wealth through SIPs.', price: 999, appointments: [], reviews: [ { userName: 'Sneha Gupta', rating: 5, comment: 'Vikram explained everything so clearly! I finally understand how to start investing. Great for beginners.', date: '2025-09-01' } ] },
                { id: 'adv_005', name: 'Dr. Meera Krishnan', email: 'meera.k@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/women/65.jpg', title: 'Ph.D. in Economics, CFA Charterholder', experience: '18 years of experience.', specialties: ['Wealth Management', 'Global Investments', 'HNIs'], bio: 'Dr. Krishnan offers bespoke wealth management solutions for High Net-worth Individuals (HNIs). Her academic background provides a unique, research-based approach to portfolio construction.', price: 4999, appointments: [], reviews: [] },
                { id: 'adv_006', name: 'Arjun Reddy', email: 'arjun.r@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/65.jpg', title: 'Stock Market Analyst', experience: '7 years of experience.', specialties: ['Direct Equity', 'Technical Analysis', 'Futures & Options'], bio: 'Arjun is a stock market expert, helping clients build wealth through direct equity. He focuses on fundamental and technical analysis to identify growth opportunities.', price: 2250, appointments: [], reviews: [] },
                { id: 'adv_007', name: 'Sunita Rao', email: 'sunita.r@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/women/62.jpg', title: 'SEBI Registered (RIA)', experience: '10 years of experience.', specialties: ['Financial Planning for Women', 'Goal Planning', 'Child\'s Future'], bio: 'Sunita is dedicated to empowering women financially. She creates personalized financial plans for women from all walks of life, helping them achieve independence and security.', price: 1799, appointments: [], reviews: [] },
                { id: 'adv_008', name: 'Karthik Iyer', email: 'karthik.i@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/62.jpg', title: 'Insurance & Risk Management Expert', experience: '14 years of experience.', specialties: ['Insurance Planning', 'Risk Management', 'Estate Planning'], bio: 'Karthik helps families protect their financial future by creating a robust safety net with the right insurance and risk management strategies.', price: 1599, appointments: [], reviews: [] },
                { id: 'adv_009', name: 'Nisha Patel', email: 'nisha.p@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/women/59.jpg', title: 'Certified Financial Planner (CFP)', experience: '9 years of experience.', specialties: ['Retirement Planning', 'NPS', 'Senior Citizen Schemes'], bio: 'Nisha focuses on creating comfortable post-retirement lifestyles for her clients. She has deep knowledge of government schemes like NPS and SCSS.', price: 1899, appointments: [], reviews: [] },
                { id: 'adv_010', name: 'Sameer Khanna', email: 'sameer.k@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/59.jpg', title: 'Real Estate Investment Advisor', experience: '16 years of experience.', specialties: ['Real Estate', 'REITs', 'Property Investment'], bio: 'Sameer is a veteran in the real estate market. He advises clients on building wealth through property, including commercial, residential, and REIT investments.', price: 3499, appointments: [], reviews: [] },
                { id: 'adv_011', name: 'Divya Matthews', email: 'divya.m@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/women/58.jpg', title: 'SEBI Registered (RIA)', experience: '5 years of experience.', specialties: ['Mutual Funds', 'ELSS (Tax Saving)', 'SIP Planning'], bio: 'Divya helps tech professionals and millennials optimize their tax savings and investments through a disciplined, goal-oriented approach using mutual funds and ELSS.', price: 1299, appointments: [], reviews: [] },
                { id: 'adv_012', name: 'Rajesh Tiwari', email: 'rajesh.t@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/58.jpg', title: 'Fixed Income & Bonds Specialist', experience: '20+ years of experience.', specialties: ['Bonds', 'Fixed Deposits', 'Debt Funds'], bio: 'With over two decades in finance, Rajesh is an expert in creating stable, low-risk income streams for conservative investors and retirees through fixed-income instruments.', price: 2799, appointments: [], reviews: [] },
                { id: 'adv_013', name: 'Dr. Aisha Khan', email: 'aisha.k@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/women/57.jpg', title: 'Financial Planner for Doctors', experience: '11+ years of experience.', specialties: ['Wealth Management', 'Insurance Planning', 'Medical Professionals'], bio: 'Dr. Khan, a former medical professional herself, now provides specialized financial planning services exclusively for doctors and healthcare practitioners.', price: 3200, appointments: [], reviews: [] },
                { id: 'adv_014', name: 'Aditya Verma', email: 'aditya.v@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/57.jpg', title: 'ESG & Impact Investing Specialist', experience: '6 years of experience.', specialties: ['ESG Investing', 'Mutual Funds', 'Beginner Investing'], bio: 'Aditya helps millennial and Gen-Z investors align their portfolios with their values by focusing on sustainable and ethical (ESG) investment opportunities.', price: 1499, appointments: [], reviews: [] },
                { id: 'adv_015', name: 'Harish Gupta', email: 'harish.g@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/56.jpg', title: 'Chartered Accountant (CA)', experience: '19 years of experience.', specialties: ['SME & Business Finance', 'Tax Planning', 'Entrepreneur Finance'], bio: 'Harish is a trusted advisor for Small and Medium Enterprises (SMEs), providing expert guidance on business finance, corporate tax, and fundraising.', price: 3800, appointments: [], reviews: [] },
                { id: 'adv_016', name: 'Siddharth Menon', email: 'sid.m@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/55.jpg', title: 'Startup Equity Advisor (ESOPs)', experience: '7+ years of experience.', specialties: ['Startup Equity', 'ESOPs', 'Angel Investing'], bio: 'Siddharth specializes in helping startup employees make the most of their stock options (ESOPs) and advises on early-stage investment opportunities.', price: 2999, appointments: [], reviews: [] },
                { id: 'adv_017', name: 'Kavita Iyer', email: 'kavita.i@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/women/55.jpg', title: 'Financial Literacy Coach', experience: '5 years of experience.', specialties: ['Beginner Investing', 'Financial Planning for Women', 'SIP Planning'], bio: 'Kavita focuses on educating young adults and women on the fundamentals of personal finance, empowering them to take their first steps towards investing.', price: 899, appointments: [], reviews: [] },
                { id: 'adv_018', name: 'Ravi Chandran', email: 'ravi.c@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/54.jpg', title: 'NRI & International Tax Expert', experience: '16 years of experience.', specialties: ['NRI Investments', 'Global Investments', 'International Taxation'], bio: 'Ravi is an expert in FEMA and international tax laws, providing specialized advisory for Non-Resident Indians (NRIs) on managing their investments in India.', price: 4500, appointments: [], reviews: [] },
                { id: 'adv_019', name: 'Pooja Singh', email: 'pooja.s@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/women/54.jpg', title: 'Debt Management Consultant', experience: '9 years of experience.', specialties: ['Debt Management', 'Credit Score Improvement', 'Goal Planning'], bio: 'Pooja helps individuals create actionable plans to manage and eliminate debt, improve their credit scores, and get back on the path to financial freedom.', price: 1699, appointments: [], reviews: [] },
                { id: 'adv_020', name: 'Anand Pillai', email: 'anand.p@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/men/52.jpg', title: 'Passive Income Strategist', experience: '13 years of experience.', specialties: ['Passive Income', 'Real Estate', 'Dividend Investing'], bio: 'Anand specializes in building diversified passive income streams for his clients through a combination of real estate (REITs), dividend stocks, and bonds.', price: 2699, appointments: [], reviews: [] },
                { id: 'adv_021', name: 'Geetha Murthy', email: 'geetha.m@example.com', password: 'password123', role: 'advisor', image: 'https://randomuser.me/api/portraits/women/52.jpg', title: 'Govt. Employee Finance Specialist', experience: '22 years of experience.', specialties: ['NPS', 'Retirement Planning', 'Senior Citizen Schemes'], bio: 'Geetha has extensive experience in advising government and public sector employees on how to maximize benefits from schemes like NPS, PPF, and other government savings instruments.', price: 2199, appointments: [], reviews: [] }
            ];
            AppDB.set('advisors', sampleAdvisors);
        }
        if (!AppDB.get('users')) { AppDB.set('users', []); }
    }

    let currentUser = null;
    let callTimerInterval = null;
    const pages = document.querySelectorAll('.page');
    
    function showPage(pageId) {
        pages.forEach(page => page.classList.remove('page-active'));
        const activePage = document.getElementById(pageId);
        if (activePage) activePage.classList.add('page-active');
        window.scrollTo(0, 0);
    }

    const infoModal = document.getElementById('info-modal');
    function showInfoModal(title, message) {
        infoModal.querySelector('#info-modal-title').textContent = title;
        infoModal.querySelector('#info-modal-message').textContent = message;
        infoModal.classList.remove('hidden');
    }
    document.getElementById('close-info-modal').addEventListener('click', () => infoModal.classList.add('hidden'));

    function updateNav() {
        const userIsLoggedIn = !!currentUser;
        document.getElementById('user-session-desktop').style.display = userIsLoggedIn ? 'flex' : 'none';
        document.getElementById('auth-buttons-desktop').style.display = userIsLoggedIn ? 'none' : 'flex';
        document.getElementById('user-session-mobile').style.display = userIsLoggedIn ? 'block' : 'none';
        document.getElementById('auth-buttons-mobile').style.display = userIsLoggedIn ? 'none' : 'block';
    }

    function renderAdvisorList() {
        let advisors = AppDB.get('advisors');
        const container = document.getElementById('advisor-list-container');
        container.innerHTML = '';

        const specialtyFilter = document.getElementById('filter-specialty');
        if (specialtyFilter.options.length <= 1) { // Populate only once
            const allSpecialties = [...new Set(advisors.flatMap(a => a.specialties))].sort();
            specialtyFilter.innerHTML = '<option value="all">All Specialties</option>'; // Reset
            allSpecialties.forEach(s => {
                const option = document.createElement('option');
                option.value = s;
                option.textContent = s;
                specialtyFilter.appendChild(option);
            });
        }

        const selectedSpecialty = specialtyFilter.value;
        if (selectedSpecialty !== 'all') {
            advisors = advisors.filter(a => a.specialties.includes(selectedSpecialty));
        }

        const sortValue = document.getElementById('sort-price').value;
        if (sortValue === 'asc') {
            advisors.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'desc') {
            advisors.sort((a, b) => b.price - a.price);
        }

        if (advisors.length === 0) {
            container.innerHTML = `<p class="text-gray-600 col-span-full text-center">No advisors match your criteria.</p>`;
            return;
        }

        advisors.forEach(advisor => {
            const avgRating = advisor.reviews.length ? (advisor.reviews.reduce((acc, r) => acc + r.rating, 0) / advisor.reviews.length).toFixed(1) : 'No reviews';
            const starIcon = `<svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;

            const card = `
                <div class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:-translate-y-1">
                    <img src="${advisor.image}" alt="${advisor.name}" class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-teal-200">
                    <h3 class="text-xl font-bold">${advisor.name}</h3>
                    <p class="text-teal-600 font-semibold">${advisor.title}</p>
                    <div class="flex items-center gap-1 my-2">
                       ${avgRating !== 'No reviews' ? `${starIcon} <span class="font-bold">${avgRating}</span> <span class="text-gray-500 text-sm">(${advisor.reviews.length} reviews)</span>` : `<span class="text-gray-500 text-sm">No reviews yet</span>`}
                    </div>
                    <p class="text-gray-500 mt-2 text-sm flex-grow h-16">${advisor.bio.substring(0, 100)}...</p>
                    <p class="text-2xl font-bold my-3">₹${advisor.price} <span class="text-sm font-normal text-gray-500">/ 45 min session</span></p>
                    <button class="view-profile-btn mt-4 w-full bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-900" data-id="${advisor.id}">View Profile & Book</button>
                </div>
            `;
            container.innerHTML += card;
        });

        document.querySelectorAll('.view-profile-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                renderAdvisorDetail(btn.dataset.id);
                showPage('page-advisor-detail');
            });
        });
    }
    
    function renderAdvisorDetail(advisorId) {
        const container = document.getElementById('advisor-detail-container');
        const advisor = AppDB.get('advisors').find(a => a.id === advisorId);
        const avgRating = advisor.reviews.length ? (advisor.reviews.reduce((acc, r) => acc + r.rating, 0) / advisor.reviews.length).toFixed(1) : null;
        const starIcon = `<svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;
        let ratingHTML = `<p class="text-gray-500">No reviews yet.</p>`;
        if(avgRating) {
            ratingHTML = `<div class="flex items-center gap-2"><div class="flex items-center">${starIcon}</div><span class="text-2xl font-bold">${avgRating}</span> <span class="text-gray-500">/ 5 (${advisor.reviews.length} reviews)</span></div>`;
        }

        let reviewsHTML = `<p class="text-gray-600">This advisor has not received any reviews yet.</p>`;
        if (advisor.reviews.length > 0) {
            reviewsHTML = advisor.reviews.map(review => {
                let stars = Array(5).fill(0).map((_, i) => `<svg class="w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`).join('');
                return `<div class="border-t py-4"><div class="flex items-center mb-1"><p class="font-semibold">${review.userName}</p><div class="flex ml-auto">${stars}</div></div><p class="text-gray-600">"${review.comment}"</p></div>`;
            }).join('');
        }
        
        let slotsHTML = '';
        for (let i = 0; i < 5; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i + 1);
            const dayString = date.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short' });
            
            slotsHTML += `<div class="mb-4">
                <h4 class="font-semibold text-gray-700 mb-2">${dayString}</h4>
                <div class="flex flex-wrap gap-2">
                    <button class="book-slot-btn bg-teal-50 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-100" data-advisor-id="${advisor.id}" data-slot="${date.toISOString().split('T')[0]}T10:00:00.000Z">10:00 AM</button>
                    <button class="book-slot-btn bg-teal-50 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-100" data-advisor-id="${advisor.id}" data-slot="${date.toISOString().split('T')[0]}T11:00:00.000Z">11:00 AM</button>
                    <button class="book-slot-btn bg-teal-50 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-100" data-advisor-id="${advisor.id}" data-slot="${date.toISOString().split('T')[0]}T14:00:00.000Z">02:00 PM</button>
                    <button class="book-slot-btn bg-teal-50 text-teal-700 px-4 py-2 rounded-lg hover:bg-teal-100" data-advisor-id="${advisor.id}" data-slot="${date.toISOString().split('T')[0]}T15:00:00.000Z">03:00 PM</button>
                </div>
            </div>`;
        }

        container.innerHTML = `
             <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
                    <div class="flex flex-col sm:flex-row items-start gap-6 mb-6">
                       <img src="${advisor.image}" alt="${advisor.name}" class="w-32 h-32 rounded-full border-4 border-teal-300">
                        <div>
                            <h2 class="text-4xl font-bold">${advisor.name}</h2>
                            <p class="text-teal-600 font-semibold text-lg">${advisor.title}</p>
                            <p class="text-gray-500 mt-1">${advisor.experience}</p>
                            <div class="mt-2">${ratingHTML}</div>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold border-b pb-2 mb-4">About Me</h3>
                    <p class="text-gray-600 leading-relaxed">${advisor.bio}</p>
                    
                    <h3 class="text-xl font-bold border-b pb-2 mb-4 mt-8">Specialties</h3>
                    <div class="flex flex-wrap gap-3">${advisor.specialties.map(s => `<span class="bg-gray-100 text-gray-800 font-medium px-4 py-2 rounded-lg">${s}</span>`).join('')}</div>
                    
                    <h3 class="text-xl font-bold border-b pb-2 mb-4 mt-8">Client Reviews</h3>
                    <div class="space-y-4">${reviewsHTML}</div>
                </div>
                <div class="lg:col-span-1">
                     <div class="bg-white p-6 rounded-lg shadow-lg sticky top-24">
                        <p class="text-3xl font-bold text-center">₹${advisor.price}</p>
                        <p class="text-gray-500 text-center mb-4">per 45 minute session</p>
                        <h3 class="text-lg font-bold mb-4">Book a Session</h3>
                        <div id="booking-slots">${slotsHTML}</div>
                        <p class="text-xs text-center text-gray-500 mt-2">All times are in IST (Indian Standard Time)</p>
                    </div>
                </div>
            </div>
        `;
        
        document.querySelectorAll('.book-slot-btn').forEach(btn => btn.addEventListener('click', handleBooking));
    }

    function renderDashboard() {
        if (!currentUser) return;
        
        if (currentUser.role === 'investor') {
            document.getElementById('investor-welcome-message').innerText = `Welcome back, ${currentUser.name}!`;
            document.getElementById('profile-completion-prompt').classList.toggle('hidden', !!currentUser.profile);
            
            const appointments = currentUser.appointments || [];
            const container = document.getElementById('investor-appointments');
            
            if (appointments.length === 0) {
                container.innerHTML = `<div class="bg-white p-6 rounded-lg shadow-md text-center"><p class="text-gray-600">You have no upcoming appointments.</p><a href="#" class="mt-4 inline-block text-teal-600 font-semibold" id="dashboard-to-advisors">Find an advisor to get started!</a></div>`;
                document.getElementById('dashboard-to-advisors').addEventListener('click', (e) => { e.preventDefault(); showPage('page-advisors-list'); renderAdvisorList(); });
            } else {
                const now = new Date();
                const fiveMinutes = 5 * 60 * 1000;
                const sessionDuration = 45 * 60 * 1000;
                let appointmentsHTML = '<div class="space-y-4">';
                appointments.sort((a,b) => new Date(a.slot) - new Date(b.slot)).forEach(appt => {
                    const advisor = AppDB.get('advisors').find(a => a.id === appt.advisorId);
                    const appointmentTime = new Date(appt.slot);
                    const timeDifference = appointmentTime.getTime() - now.getTime();
                    const isOver = (now.getTime() > appointmentTime.getTime() + sessionDuration);
                    const hasReviewed = advisor.reviews.some(r => r.userEmail === currentUser.email && r.appointmentSlot === appt.slot);

                    let actionButton = '';
                    if (isOver) {
                        actionButton = hasReviewed ? `<span class="text-sm text-green-600 font-semibold">Review Submitted</span>` : `<button class="leave-review-btn bg-gray-700 text-white text-sm px-3 py-1 rounded-md hover:bg-gray-800" data-advisor-id="${appt.advisorId}" data-slot="${appt.slot}">Leave Review</button>`;
                    } else if (timeDifference <= fiveMinutes) {
                        actionButton = `<button class="join-call-btn bg-teal-500 text-white text-sm px-3 py-1 rounded-md hover:bg-teal-600" data-advisor-id="${appt.advisorId}" data-slot="${appt.slot}">Join Call</button>`;
                    } else {
                        actionButton = `<button class="bg-gray-300 text-gray-500 text-sm px-3 py-1 rounded-md cursor-not-allowed" title="You can join 5 minutes before the start time">Join Call</button>`;
                    }

                    appointmentsHTML += `<div class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"><div><p class="font-bold">With ${advisor.name}</p><p class="text-gray-600">${appointmentTime.toLocaleDateString('en-IN', { dateStyle: 'full' })} at ${appointmentTime.toLocaleTimeString('en-IN', { timeStyle: 'short' })}</p></div>${actionButton}</div>`;
                });
                container.innerHTML = appointmentsHTML + '</div>';
            }
            
            container.addEventListener('click', e => {
                if (e.target.classList.contains('leave-review-btn')) openReviewModal(e.target.dataset.advisorId, e.target.dataset.slot);
                if (e.target.classList.contains('join-call-btn')) handleJoinCall(e.target.dataset.advisorId, e.target.dataset.slot);
            });
            renderInvestorProfilePage();
        } else if (currentUser.role === 'advisor') {
             // Advisor dashboard logic here
        }
    }
    
    function renderInvestorProfilePage() {
        const formContainer = document.getElementById('investor-profile-form');
        const userProfile = currentUser.profile || {};
        
        let questionsHTML = `<div class="space-y-8">`;
        investorProfileQuestions.forEach((q, index) => {
            questionsHTML += `
                <div>
                    <label class="block text-md font-semibold text-gray-800 mb-3">${index + 1}. ${q.question}</label>
                    <div class="space-y-2">
                        ${q.options.map((option, oIndex) => `
                            <label class="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input type="radio" name="q${index}" value="${oIndex}" class="form-radio h-5 w-5 text-teal-600" ${userProfile[`q${index}`] == oIndex ? 'checked' : ''} required>
                                <span class="ml-3 text-gray-700">${option}</span>
                            </label>
                        `).join('')}
                    </div>
                </div>
            `;
        });
        questionsHTML += `</div><button type="submit" class="mt-8 w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition">Save Profile</button>`;
        formContainer.innerHTML = questionsHTML;
    }

    function renderProfileSummary() {
        if (!currentUser || !currentUser.profile) return;
        const container = document.getElementById('profile-summary-content');
        const profileData = currentUser.profile;
        const generationDate = new Date().toLocaleDateString('en-IN', { dateStyle: 'long' });

        let summaryHTML = `
            <div class="flex justify-between items-start border-b-2 border-gray-100 pb-6 mb-8">
                 <div>
                     <h2 class="text-3xl font-extrabold text-gray-900">Investor Profile Summary</h2>
                     <p class="text-xl font-semibold text-gray-700 mt-1">${currentUser.name}</p>
                 </div>
                 <div class="text-right">
                    <p class="font-bold text-teal-600">Better Wealth</p>
                    <p class="text-xs text-gray-500">Generated on: ${generationDate}</p>
                 </div>
            </div>
            <div class="grid md:grid-cols-2 gap-x-12 gap-y-8">
        `;
        
        investorProfileQuestions.forEach((q, index) => {
            const answerIndex = profileData[`q${index}`];
            const answerText = answerIndex !== undefined ? q.options[answerIndex] : 'Not answered';
            summaryHTML += `<div class="border-t border-gray-100 pt-4"><p class="font-semibold text-gray-500 text-sm">${index + 1}. ${q.question}</p><p class="text-gray-900 font-bold text-lg mt-1">${answerText}</p></div>`;
        });

        summaryHTML += `</div>`;
        container.innerHTML = summaryHTML;
        showPage('page-profile-summary');
    }

    function handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const role = document.querySelector('input[name="role"]:checked').value;
        const errorEl = document.getElementById('register-error');
        errorEl.textContent = '';
        
        if (role === 'advisor') {
            errorEl.textContent = 'Advisor registration is invite-only.';
            return;
        }

        const allUsers = [...AppDB.get('users'), ...AppDB.get('advisors')];
        if (allUsers.find(u => u.email === email)) {
            errorEl.textContent = 'An account with this email already exists.';
            return;
        }
        
        const newUser = { name, email, password, role, appointments: [], profile: null };
        const users = AppDB.get('users');
        users.push(newUser);
        AppDB.set('users', users);

        currentUser = newUser;
        AppDB.set('currentUser', currentUser);
        updateNav();
        renderDashboard();
        showPage('page-investor-dashboard');
    }

    function handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const errorEl = document.getElementById('login-error');

        const allUsers = [...AppDB.get('users'), ...AppDB.get('advisors')];
        const user = allUsers.find(u => u.email === email && u.password === password);

        if (user) {
            currentUser = user;
            AppDB.set('currentUser', currentUser);
            errorEl.textContent = '';
            updateNav();
            renderDashboard();
            showPage(user.role === 'investor' ? 'page-investor-dashboard' : 'page-advisor-dashboard');
        } else {
            errorEl.textContent = 'Invalid email or password.';
        }
    }

    function handleLogout() {
        currentUser = null;
        AppDB.set('currentUser', null);
        updateNav();
        showPage('page-landing');
    }

    function handleBooking(e) {
        if (!currentUser) {
            showInfoModal('Login Required', 'Please log in or create an account to book a session.');
            showPage('page-login');
            return;
        }
        if (currentUser.role === 'advisor') {
            showInfoModal('Action Not Allowed', 'Advisors cannot book appointments.');
            return;
        }

        const advisorId = e.target.dataset.advisorId;
        const slot = e.target.dataset.slot;

        const users = AppDB.get('users');
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (!users[userIndex].appointments) users[userIndex].appointments = [];
        users[userIndex].appointments.push({ advisorId, slot });
        AppDB.set('users', users);
        
        currentUser.appointments = users[userIndex].appointments;
        AppDB.set('currentUser', currentUser);

        const advisors = AppDB.get('advisors');
        const advisorIndex = advisors.findIndex(a => a.id === advisorId);
        if (!advisors[advisorIndex].appointments) advisors[advisorIndex].appointments = [];
        advisors[advisorIndex].appointments.push({ userEmail: currentUser.email, slot });
        AppDB.set('advisors', advisors);

        const advisor = advisors[advisorIndex];
        const date = new Date(slot);
        document.getElementById('confirmation-message').innerHTML = `Your appointment with <strong>${advisor.name}</strong> on <strong>${date.toLocaleDateString('en-IN', { dateStyle: 'long' })} at ${date.toLocaleTimeString('en-IN', { timeStyle: 'short' })}</strong> is confirmed.`;
        showPage('page-booking-confirmation');
    }
    
    function handleReviewSubmit(e) {
        e.preventDefault();
        const advisorId = document.getElementById('review-advisor-id').value;
        const appointmentSlot = document.getElementById('review-appointment-slot').value;
        const ratingInput = document.querySelector('#review-form input[name="rating"]:checked');
        if (!ratingInput) {
            showInfoModal('Rating Required', 'Please select a star rating before submitting.');
            return;
        }
        const rating = parseInt(ratingInput.value, 10);
        const comment = document.getElementById('review-comment').value;

        const newReview = {
            userName: currentUser.name,
            userEmail: currentUser.email,
            appointmentSlot,
            rating,
            comment,
            date: new Date().toISOString().split('T')[0]
        };

        const advisors = AppDB.get('advisors');
        const advisorIndex = advisors.findIndex(a => a.id === advisorId);
        advisors[advisorIndex].reviews.push(newReview);
        AppDB.set('advisors', advisors);

        closeReviewModal();
        renderDashboard();
    }

    function handleProfileSave(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const profileData = {};
        for (let [key, value] of formData.entries()) {
            profileData[key] = value;
        }
        
        currentUser.profile = profileData;
        
        const users = AppDB.get('users');
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if(userIndex !== -1) {
            users[userIndex].profile = profileData;
            AppDB.set('users', users);
        }
        
        AppDB.set('currentUser', currentUser);
        renderProfileSummary();
    }
    
    function handleJoinCall(advisorId, slot, userEmail) { /* ... same as before ... */ }
    function startCallTimer(slot) { /* ... same as before ... */ }
    function endCall() { /* ... same as before, with modal ... */ }
    function openReviewModal(advisorId, slot) { /* ... same as before ... */ }
    function closeReviewModal() { /* ... same as before ... */ }
    function showWelcomeModal() { /* ... same as before ... */ }
    function closeWelcomeModal() { /* ... same as before ... */ }
    
    const investorProfileQuestions = [
         { question: "What is your primary financial goal for seeking advice?", options: ["Wealth creation for the long term", "Planning for a specific goal (e.g., retirement, child's education)", "Generating a regular income from investments", "Saving taxes"] },
         { question: "What is your age group?", options: ["Below 25", "25 - 35", "36 - 50", "Above 50"] },
         { question: "How would you describe your knowledge of investments?", options: ["Beginner: I'm new to this", "Intermediate: I know the basics of mutual funds, stocks", "Advanced: I'm comfortable with complex financial products"] },
         { question: "What is your approximate annual income (in INR)?", options: ["Below ₹5 Lakhs", "₹5 Lakhs - ₹15 Lakhs", "₹15 Lakhs - ₹30 Lakhs", "Above ₹30 Lakhs"] },
         { question: "How much of your monthly income are you able to save/invest?", options: ["Less than 10%", "10% - 25%", "25% - 50%", "More than 50%"] },
         { question: "Imagine the stock market falls by 20%. What is your most likely reaction?", options: ["Panic and sell all my investments", "Sell some investments to cut losses", "Hold my investments and wait for recovery", "Invest more, as it's a good buying opportunity"] },
         { question: "What is your investment time horizon for your major financial goals?", options: ["Short-term (Less than 3 years)", "Medium-term (3 to 7 years)", "Long-term (More than 7 years)"] },
         { question: "Which of these investment options are you most comfortable with?", options: ["Fixed Deposits, PPF (Low risk, guaranteed returns)", "Mutual Funds (Balanced risk and return)", "Direct Stocks (High risk, high potential return)", "A mix of all the above"] },
         { question: "Do you have an emergency fund that can cover at least 6 months of your expenses?", options: ["Yes, fully covered", "Partially covered", "No, I don't have one yet"] },
         { question: "How many dependents do you have financially?", options: ["None", "1 - 2", "3 or more"] },
         { question: "Have you taken any loans (Home, Car, Personal)?", options: ["No, I am debt-free", "Yes, I have a home loan", "Yes, I have other loans (car, personal, etc.)"] },
         { question: "How important is liquidity to you (the ability to convert investments to cash quickly)?", options: ["Very important, I need access to my money anytime", "Somewhat important", "Not very important, I am investing for the long term"] },
         { question: "Which statement best describes your investment philosophy?", options: ["'Slow and steady wins the race' - I prefer safe, stable growth.", "'No risk, no reward' - I am willing to take risks for higher returns.", "I want a balanced approach."] },
         { question: "Are you the primary decision-maker for your family's finances?", options: ["Yes, I make all the decisions", "No, I decide jointly with my spouse/family", "No, someone else manages the finances"] },
         { question: "What is your current health insurance coverage (in INR)?", options: ["No coverage", "Less than ₹5 Lakhs", "₹5 Lakhs to ₹15 Lakhs", "More than ₹15 Lakhs"] },
         { question: "Do you have a term life insurance policy?", options: ["Yes", "No", "I'm not sure what that is"] },
         { question: "How often do you track your investment portfolio?", options: ["Daily", "Weekly", "Monthly", "Once or twice a year"] },
         { question: "If you received a large sum of money (e.g., bonus, inheritance), what would you do?", options: ["Spend most of it", "Keep it safe in a bank account", "Invest it immediately after some research", "Consult a financial advisor before deciding"] },
         { question: "Are you familiar with asset allocation?", options: ["Yes, I understand it well", "I've heard of it but don't know the details", "No, I'm not familiar with it"] },
         { question: "What do you expect from a financial advisor?", options: ["To manage my entire portfolio for me", "To provide a financial plan which I can execute myself", "To validate my own investment ideas", "To educate me about different investment options"] }
    ];

    function init() {
        seedInitialData();
        currentUser = AppDB.get('currentUser');
        updateNav();
        renderFeaturedAdvisor();
        showPage('page-landing');
        setTimeout(showWelcomeModal, 1500);
    }
    
    function renderFeaturedAdvisor() { 
         const advisors = AppDB.get('advisors');
        const featuredAdvisor = advisors[Math.floor(Math.random() * advisors.length)];
        const container = document.getElementById('featured-advisor-container');
        const avgRating = featuredAdvisor.reviews.length ? (featuredAdvisor.reviews.reduce((acc, r) => acc + r.rating, 0) / featuredAdvisor.reviews.length).toFixed(1) : null;
        const starIcon = `<svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`;

        container.innerHTML = `
            <div class="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
                <img src="${featuredAdvisor.image}" alt="${featuredAdvisor.name}" class="w-32 h-32 rounded-full border-4 border-teal-300 flex-shrink-0">
                <div class="text-center md:text-left">
                    <h3 class="text-2xl font-bold">${featuredAdvisor.name}</h3>
                    <p class="text-teal-600 font-semibold">${featuredAdvisor.title}</p>
                    ${avgRating ? `<div class="flex items-center justify-center md:justify-start gap-1 my-2">${starIcon} <span class="font-bold">${avgRating}</span> <span class="text-gray-500 text-sm">(${featuredAdvisor.reviews.length} reviews)</span></div>` : ''}
                    <p class="text-gray-600 mt-2">${featuredAdvisor.bio}</p>
                    <button class="view-profile-btn mt-4 bg-teal-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-teal-700" data-id="${featuredAdvisor.id}">View Profile</button>
                </div>
            </div>
        `;
        container.querySelector('.view-profile-btn').addEventListener('click', (e) => {
            renderAdvisorDetail(e.target.dataset.id);
            showPage('page-advisor-detail');
        });
     }

    // All event listeners setup
    document.getElementById('logo-link').addEventListener('click', (e) => { e.preventDefault(); showPage('page-landing'); });
    const navLinks = ['nav-find-advisor', 'mobile-nav-find-advisor', 'cta-find-advisor'];
    navLinks.forEach(id => document.getElementById(id).addEventListener('click', (e) => { e.preventDefault(); renderAdvisorList(); showPage('page-advisors-list'); }));
    ['nav-for-advisors', 'mobile-nav-for-advisors'].forEach(id => document.getElementById(id).addEventListener('click', (e) => { e.preventDefault(); showPage('page-for-advisors'); }));
    ['nav-login', 'mobile-nav-login', 'register-to-login'].forEach(id => document.getElementById(id).addEventListener('click', (e) => { e.preventDefault(); showPage('page-login'); }));
    ['nav-register', 'mobile-nav-register', 'login-to-register'].forEach(id => document.getElementById(id).addEventListener('click', (e) => { e.preventDefault(); showPage('page-register'); }));
    ['nav-logout', 'mobile-nav-logout'].forEach(id => document.getElementById(id).addEventListener('click', (e) => { e.preventDefault(); handleLogout(); }));
    const dashboardLinks = ['nav-dashboard', 'mobile-nav-dashboard', 'confirmation-to-dashboard', 'summary-back-btn'];
    dashboardLinks.forEach(id => document.getElementById(id).addEventListener('click', (e) => {
        e.preventDefault();
        if (currentUser) {
            renderDashboard();
            showPage(currentUser.role === 'investor' ? 'page-investor-dashboard' : 'page-advisor-dashboard');
        }
    }));
    document.getElementById('login-form').addEventListener('submit', handleLogin);
    document.getElementById('register-form').addEventListener('submit', handleRegister);
    document.getElementById('review-form').addEventListener('submit', handleReviewSubmit);
    document.getElementById('investor-profile-form').addEventListener('submit', handleProfileSave);
    document.getElementById('end-call-btn').addEventListener('click', endCall);
    document.getElementById('summary-print-btn').addEventListener('click', () => window.print());
    document.getElementById('filter-specialty').addEventListener('change', renderAdvisorList);
    document.getElementById('sort-price').addEventListener('change', renderAdvisorList);
    document.getElementById('close-welcome-modal').addEventListener('click', closeWelcomeModal);
    document.getElementById('close-review-modal').addEventListener('click', closeReviewModal);
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.addEventListener('click', (e) => { if (e.target.tagName === 'A') mobileMenu.classList.add('hidden'); });
    
    const dashboardTabs = document.getElementById('dashboard-tabs');
    if (dashboardTabs) {
        dashboardTabs.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.tagName !== 'A') return;
            const tabName = e.target.dataset.tab;
            document.querySelectorAll('.dashboard-tab').forEach(tab => tab.classList.remove('active'));
            e.target.classList.add('active');
            document.querySelectorAll('.dashboard-content').forEach(content => {
                content.classList.remove('active');
                if(content.id === `tab-content-${tabName}`) content.classList.add('active');
            });
        });
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });

    init();
});