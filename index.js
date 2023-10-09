const getJsonData = (localPath) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", localPath, false);
    xhr.send();

    return xhr.status === 200 ? JSON.parse(xhr.responseText) : "";
}

const Data = getJsonData("./data.json");
const homeExperienceGridElements = Array.from(document.getElementById("home-experience-grid").children);

homeExperienceGridElements.forEach(x => {
    x.addEventListener("mouseover", (event) => {
        const target = event.currentTarget;
        const experience = Data.experience[target.firstChild.alt];

        homeExperienceGridElements.forEach(y => {
            y.style.backgroundColor = y == target ? "rgb(31 41 55)" : "transparent";
        });

        document.getElementById("home-experience-proficiency-bar").lastElementChild.style.width = `${10 - experience.proficiency}0%`;
        document.getElementById("home-experience-started-using-text").innerText =
            `Started using ${moment(experience.startedUsing, "MM-YYYY").fromNow()}\n\nI've used ${experience.name} for:\n• ${experience.uses.join("\n• ")}`;
    });
});