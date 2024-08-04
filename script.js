document.addEventListener("DOMContentLoaded", () => {
    // Animate hero section text
    const heroText = document.querySelector(".welcome_img h1")
    heroText.style.opacity = 0

    heroText.style.transform = "translateY(50px)"

    setTimeout(() => {
        heroText.style.transition = "opacity 1s, transform 1s"
        heroText.style.opacity = 1
        heroText.style.transform = "translateY(0)"
    }, 500)

    const heroText2 = document.querySelector("section")
    heroText2.style.opacity = 0
    heroText2.style.transform = "translateY(50px)"

    setTimeout(() => {
        heroText2.style.transition = "opacity 1s, transform 1s"
        heroText2.style.opacity = 1
        heroText2.style.transform = "translateY(0)"
    }, 500)

    // Scroll animations for sections
    const sections = document.querySelectorAll("section")
    const options = {
        threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible")
                observer.unobserve(entry.target)
            }
        })
    }, options)

    sections.forEach((section) => {
        observer.observe(section)
    })
})

function openNav() {
    document.getElementById("mySidepanel").style.width = "50%"
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0"
}

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item")

    faqItems.forEach((item) => {
        item.querySelector(".question").addEventListener("click", () => {
            // Hide all other answers
            faqItems.forEach((i) => {
                if (i !== item) {
                    i.querySelector(".answer").style.display = "none"
                }
            })

            // Toggle the clicked answer
            const answer = item.querySelector(".answer")
            if (answer.style.display === "block") {
                answer.style.display = "none"
            } else {
                answer.style.display = "block"
            }
        })
    })
})
