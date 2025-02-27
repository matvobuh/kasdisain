document.addEventListener("DOMContentLoaded", function () {
    const steps = document.querySelectorAll(".step");
    const stepContents = document.querySelectorAll(".step-content");
    let currentStep = 0;

    function updateSteps() {
        // Update the progress bar
        steps.forEach((step, index) => {
            step.classList.toggle("completed", index <= currentStep);
        });

        // Show the current step content
        stepContents.forEach((content, index) => {
            content.classList.toggle("active", index === currentStep);
        });
    }

    // Handle "Next" buttons
    document.querySelectorAll(".btn-next").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                updateSteps();
            }
        });
    });

    // Handle "Back" buttons
    document.querySelectorAll(".btn-back").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                updateSteps();
            }
        });
    });

    // Handle "Final" button
    document.querySelector(".btn-final").addEventListener("click", () => {
        alert("Tellimus kinnitatud!");
        // Optionally, you can reset the form or redirect the user
    });

    // Display the default domain dynamically
    const defaultDomain = "domenivaalimine.com";
    document.querySelector(".default-domain").textContent = defaultDomain;

    updateSteps();
});