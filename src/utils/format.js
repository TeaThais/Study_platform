const subjects = [
    "Arts",
    "Biology",
    "Science",
    "PE",
    "Physics",
    "Geography",
    "History",
    "Mathematics",
    "English",
    "Chemistry",
];

const weekdays = [
    "Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];


function getSubject(subjectNumber) {
    const position = +subjectNumber -1;
    return subjects[position];
}

function convertHoursToMinutes(time) {
     /*const hour = time.split(":")[0]
    const minute = time.split(":")[1]  */

    const [hour, minutes] = time.split(":");
    return Number ((hour * 60) + minutes);

}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
};