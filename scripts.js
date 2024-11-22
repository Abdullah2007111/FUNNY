let points = 0;

// النصوص باللغتين
const languageTexts = {
    en: {
        mainTitle: "Earn $FUNNY Cryptocurrency",
        introText: "Tap the screen, complete tasks, or invite friends to earn $FUNNY",
        tapButton: "Tap here to earn points!",
        tasksButton: "Complete tasks",
        inviteButton: "Invite friends",
        pointsText: "Points",
        footerText: "© 2024 All rights reserved"
    },
    ar: {
        mainTitle: "ربح عملة $FUNNY الرقمية",
        introText: "اضغط على الشاشة أو أكمل المهام أو دعوة الأصدقاء لربح عملة $FUNNY",
        tapButton: "اضغط هنا لربح نقاط!",
        tasksButton: "إتمام المهام",
        inviteButton: "دعوة الأصدقاء",
        pointsText: "النقاط",
        footerText: "© 2024 جميع الحقوق محفوظة"
    }
};

// تغيير النصوص حسب اللغة المختارة
function changeLanguage(language) {
    document.getElementById("main-title").textContent = languageTexts[language].mainTitle;
    document.getElementById("intro-text").textContent = languageTexts[language].introText;
    document.getElementById("tap-button").textContent = languageTexts[language].tapButton;
    document.getElementById("tasks-button").textContent = languageTexts[language].tasksButton;
    document.getElementById("invite-button").textContent = languageTexts[language].inviteButton;
    document.getElementById("points-text").textContent = languageTexts[language].pointsText;
    document.getElementById("footer-text").textContent = languageTexts[language].footerText;
}

// الاستماع لتغيير اللغة
document.getElementById("language-dropdown").addEventListener("change", function() {
    const selectedLanguage = this.value;
    changeLanguage(selectedLanguage);
});

// بداية الموقع باللغة الإنجليزية
changeLanguage("en");

// التفاعل مع الأزرار
document.getElementById('tap-button').addEventListener('click', function() {
    points += 1; 
    document.getElementById('points-count').textContent = points;
});

document.getElementById('tasks-button').addEventListener('click', function() {
    alert('Complete tasks to earn points!');
    points += 5; 
    document.getElementById('points-count').textContent = points;
});

document.getElementById('invite-button').addEventListener('click', function() {
    alert('Invite friends to earn points!');
    points += 10; 
    document.getElementById('points-count').textContent = points;
});