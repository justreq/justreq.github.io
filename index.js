AOS.init();

const getJsonData = (localPath) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", localPath, false);
    xhr.send();

    return xhr.status === 200 ? JSON.parse(xhr.responseText) : "";
}

const Data = getJsonData("./data.json");
const homeExperienceGridElements = Array.from(document.getElementById("home-experience-grid").children);

homeExperienceGridElements.forEach(e => {
    e.addEventListener("mouseover", (event) => {
        const target = event.currentTarget;

        if (!target.firstElementChild.classList.contains("aos-animate")) return;

        const experience = Data.experience[target.firstChild.alt];

        homeExperienceGridElements.forEach(x => {
            x.style.backgroundColor = x == target ? "rgb(31 41 55)" : "transparent";
        });

        document.getElementById("home-experience-proficiency-bar").lastElementChild.style.width = `${10 - experience.proficiency}0%`;
        document.getElementById("home-experience-started-using-text").innerText =
            `Started using ${moment(experience.startedUsing, "MM-YYYY").fromNow()}\n\nI've used ${experience.name} for:\n• ${experience.uses.join("\n• ")}`;
    });

    e.addEventListener("mouseout", (event) => {
        homeExperienceGridElements.forEach(x => {
            x.style.backgroundColor = "transparent";
        });

        document.getElementById("home-experience-proficiency-bar").lastElementChild.style.width = `100%`;
        document.getElementById("home-experience-started-using-text").innerText = "Hover over an icon to learn more";
    });
});