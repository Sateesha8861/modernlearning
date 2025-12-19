
function toggleChat() {
    const panel = document.getElementById("chatbotPanel");
    panel.classList.toggle("active");
}

function loadSubQuestions(type) {
    const answerBox = document.getElementById("chatAnswer");

    if (type === "enroll") {
        answerBox.innerHTML = `
            <strong>Choose an option:</strong><br><br>
            <div class="chat-sub" onclick="showFinalAnswer('enroll_online')">
                Online enrollment
            </div>
            <div class="chat-sub" onclick="showFinalAnswer('enroll_course')">
                Course-wise enrollment
            </div>
            <div class="chat-sub" onclick="showFinalAnswer('enroll_support')">
                Contact support
            </div>
        `;
    }

    if (type === "certificate") {
        answerBox.innerHTML = `
            <div class="chat-sub" onclick="showFinalAnswer('cert_issue')">
                How do I get the certificate?
            </div>
            <div class="chat-sub" onclick="showFinalAnswer('cert_valid')">
                Is the certificate valid?
            </div>
        `;
    }

    if (type === "videos") {
        answerBox.innerHTML = `
            <div class="chat-sub" onclick="showFinalAnswer('video_access')">
                How can I access videos?
            </div>
            <div class="chat-sub" onclick="showFinalAnswer('video_count')">
                How many videos are included?
            </div>
        `;
    }

    if (type === "beginner") {
        showFinalAnswer("beginner_info");
    }

    if (type === "contact") {
        showFinalAnswer("contact_info");
    }
}

function showFinalAnswer(key) {
    const answers = {
        enroll_online:
            "You can enroll online by clicking the Enroll Now button available on each course page.",

        enroll_course:
            "Each course has its own enrollment option with clear instructions.",

        enroll_support:
            "You can contact our support team from the Contact page for enrollment assistance.",

        cert_issue:
            "Certificates are provided after successful completion of the course.",

        cert_valid:
            "Certificates are issued for learning and academic purposes.",

        video_access:
            "Course videos are available inside each course under the Recommended Videos section.",

        video_count:
            "Each course includes 2 to 5 carefully selected learning videos.",

        beginner_info:
            "Yes, all courses are beginner-friendly and explained step by step.",

        contact_info:
            "You can reach us through the Contact page or email support@modernlearning.com."
    };

    document.getElementById("chatAnswer").innerHTML =
        `<p>${answers[key]}</p>`;
}

document.addEventListener("click", function (event) {
    const panel = document.getElementById("chatbotPanel");
    const chatbotBtn = document.querySelector(".chatbot");

    if (
        panel.classList.contains("active") &&
        !panel.contains(event.target) &&
        !chatbotBtn.contains(event.target)
    ) {
        panel.classList.remove("active");
    }
});