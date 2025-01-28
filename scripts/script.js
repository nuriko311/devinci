{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u35821 \u35328 \u20999 \u25442 \u36923 \u36753 \
const languageData = \{\
    zh: \{\
        welcomeTitle: "\uc0\u27426 \u36814 \u26469 \u21040  DevVinci Studio",\
        welcomeText: "\uc0\u25105 \u20204 \u19987 \u27880 \u20110 \u20154 \u20687 \u25668 \u24433 \u12289 \u35270 \u39057 \u21098 \u36753 \u21644 \u25554 \u30011 \u21019 \u20316 \u12290 ",\
        youtubeLink: "YouTube",\
        contactLink: "\uc0\u32852 \u31995 \u26041 \u24335 ",\
        portraitLink: "\uc0\u20154 \u20687 \u25668 \u24433 ",\
        videoLink: "\uc0\u35270 \u39057 \u21098 \u36753 ",\
        illustrationLink: "\uc0\u25554 \u30011 \u20998 \u20139 ",\
        contactTitle: "\uc0\u32852 \u31995 \u26041 \u24335 ",\
        contactText: "\uc0\u35831 \u36890 \u36807 \u20197 \u19979 \u26041 \u24335 \u32852 \u31995 \u25105 \u20204 \u65306 "\
    \},\
    en: \{\
        welcomeTitle: "Welcome to DevVinci Studio",\
        welcomeText: "We specialize in portrait photography, video editing, and illustration.",\
        youtubeLink: "YouTube",\
        contactLink: "Contact",\
        portraitLink: "Portrait Photography",\
        videoLink: "Video Editing",\
        illustrationLink: "Illustration",\
        contactTitle: "Contact",\
        contactText: "Please contact us via:"\
    \}\
\};\
\
function updateLanguage(lang) \{\
    document.getElementById("welcome-title").textContent = languageData[lang].welcomeTitle;\
    document.getElementById("welcome-text").textContent = languageData[lang].welcomeText;\
    document.getElementById("youtube-link").textContent = languageData[lang].youtubeLink;\
    document.getElementById("contact-link").textContent = languageData[lang].contactLink;\
    document.getElementById("portrait-link").textContent = languageData[lang].portraitLink;\
    document.getElementById("video-link").textContent = languageData[lang].videoLink;\
    document.getElementById("illustration-link").textContent = languageData[lang].illustrationLink;\
    document.getElementById("contact-title").textContent = languageData[lang].contactTitle;\
    document.getElementById("contact-text").textContent = languageData[lang].contactText;\
\}\
\
document.getElementById("lang-zh").addEventListener("click", () => updateLanguage("zh"));\
document.getElementById("lang-en").addEventListener("click", () => updateLanguage("en"));\
\
// \uc0\u21021 \u22987 \u21270 \u36718 \u25773 \u22270 \
const swiper = new Swiper('.swiper-container', \{\
    loop: true,\
    pagination: \{\
        el: '.swiper-pagination',\
        clickable: true,\
    \},\
\});}
