"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

const year = "2025";
const resolution = "Get a job in coding websites."
const will_meet_resolution = "God willing."

function updateYear() {
yearElement.innerText = year;

}

function updateResolution() {
 resolutionElement.innerText = resolution;
}

function updateWillMeetResolution() {
willMeetResolutionElement.innerText = will_meet_resolution;
}

function render() {
    // Update this function

}

submissionBtn.addEventListener("click", function () {
updateYear();
updateResolution();
updateWillMeetResolution();
})
