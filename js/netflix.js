$(document).ready(function() {
    var container = $("<div>", { class: "netflix-container-background", id: "netflix-container-bg"});
    var usedNumbers = [];
    for (var i = 0; i < 10; i++) {
        var box = $("<div>", { class: "netflix-box" });
        for (var j = 0; j < 10; j++) {
            var randomNumber = Math.floor(Math.random() * 100) + 1;
            while (usedNumbers.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * 100) + 1;
            }
            usedNumbers.push(randomNumber);
            var thumbnail = $("<div>", {
                class: "netflix-thumbnail",
                style: "background-image:url(/netflix/assets/images/samples/marco/" + randomNumber + ".png);format=auto;fit=cover;width=128;height=128;quality=25",
            });
            box.append(thumbnail);
        }
        container.append(box);
    }
    $("aki").append(container);
});