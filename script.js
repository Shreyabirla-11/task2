// FAQ Data
const faqData = [
    {
        question: "How do I create an account?",
        answer: "To create an account, click on the 'Sign Up' button in the top right corner of the page. Fill in your details including your name, email address, and a secure password. Once submitted, you'll receive a confirmation email to verify your account.",
        category: "account"
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoice payments with net 30 terms.",
        category: "billing"
    },
    {
        question: "How can I reset my password?",
        answer: "If you've forgotten your password, click on the 'Forgot Password' link on the login page. Enter your email address and we'll send you a link to reset your password. The link will expire in 24 hours for security reasons.",
        category: "account"
    },
    {
        question: "Why is my payment failing?",
        answer: "Payment failures can occur for several reasons: insufficient funds, incorrect card details, or your bank may be blocking the transaction. Please verify your payment information and try again. If the problem persists, contact your bank or try an alternative payment method.",
        category: "billing"
    },
    {
        question: "How do I update my billing information?",
        answer: "You can update your billing information by logging into your account and navigating to the 'Billing' section. From there, click on 'Payment Methods' to add or update your credit card details or other payment information.",
        category: "billing"
    },
    {
        question: "What browsers are supported?",
        answer: "Our platform works best with the latest versions of Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated to the latest version for optimal performance and security.",
        category: "technical"
    },
    {
        question: "How can I contact customer support?",
        answer: "Our customer support team is available 24/7. You can reach us by email at support@example.com, through the live chat feature on our website, or by phone at 1-800-123-4567 during business hours (9am-5pm EST).",
        category: "other"
    },
    {
        question: "Is my data secure?",
        answer: "Yes, we take data security very seriously. All data is encrypted in transit and at rest using industry-standard protocols. We regularly undergo security audits and comply with all relevant data protection regulations.",
        category: "technical"
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel your subscription at any time without penalty. After cancellation, you'll continue to have access to the service until the end of your current billing period. No further charges will be applied.",
        category: "account"
    },
    {
        question: "How do I download my invoices?",
        answer: "You can download your invoices by going to the 'Billing' section of your account and clicking on 'Invoice History'. From there, you can view and download PDF copies of all your past invoices.",
        category: "billing"
    }
];

// DOM Elements
const faqContainer = document.getElementById('faqContainer');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize FAQ items
function initFAQ() {
    faqContainer.innerHTML = '';
    faqData.forEach((item, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.dataset.category = item.category;
        
        faqItem.innerHTML = `
            <div class="faq-item-header">
                <h3>${item.question}</h3>
                <span>+</span>
            </div>
            <div class="faq-item-content">
                <p>${item.answer}</p>
                <span class="faq-item-category category-${item.category}">${item.category}</span>
            </div>
        `;
        
        faqContainer.appendChild(faqItem);
    });

    // Add click event to FAQ items
    document.querySelectorAll('.faq-item-header').forEach(header => {
        header.addEventListener('click', () => {
            const faqItem = header.parentElement;
            faqItem.classList.toggle('active');
        });
    });
}

// Filter FAQ by category
function filterFAQ(category) {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Search FAQ
function searchFAQ() {
    const searchTerm = searchInput.value.toLowerCase();
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3').textContent.toLowerCase();
        const answer = item.querySelector('p').textContent.toLowerCase();
        
        if (question.includes(searchTerm) || answer.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Event Listeners
searchInput.addEventListener('input', searchFAQ);

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter FAQ
        filterFAQ(button.dataset.category);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Initialize the FAQ on page load
document.addEventListener('DOMContentLoaded', initFAQ);
