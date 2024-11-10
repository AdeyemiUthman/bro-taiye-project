// Navigation Toggle for Mobile
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("nav-hidden");
}

// About Modal Functionality
function openAboutModal() {
    document.getElementById("about-modal").style.display = "block";
}

function closeAboutModal() {
    document.getElementById("about-modal").style.display = "none";
}

// Close Modal if Click Outside Content
window.onclick = function(event) {
    const modal = document.getElementById("about-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Claim Tokens Function with Feedback
function claimTokens() {
    const walletInput = document.getElementById("wallet").value;
    const claimMessage = document.getElementById("message");

    if (!walletInput) {
        claimMessage.textContent = "Please enter your wallet address.";
        claimMessage.style.color = "red";
        return;
    }

    claimMessage.textContent = "Processing your claim...";
    claimMessage.style.color = "black";

    setTimeout(() => {
        claimMessage.textContent = "Success! Your tokens are on the way.";
        claimMessage.style.color = "green";
    }, 1500);
}
