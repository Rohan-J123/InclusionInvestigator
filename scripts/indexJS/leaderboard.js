function addEntry(number, name, score, timeTaken) {
    const ol = document.getElementById('leaderboard-results');
    const li = document.createElement('li');
    li.style.display = "flex";

    switch(number){
        case 0:
            li.innerHTML = `<div class="cursive-regular" style="text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 2;">&nbsp;&nbsp;${number + 1}. ${name} 🥇</div><div class="cursive-regular" style="text-align: center; flex: 1;">${timeTaken[0]}:${timeTaken[1]}:${timeTaken[2]}</div><div class="cursive-regular" style="text-align: right; margin-right: 20px; width: 80px;">${score}</div>`;
            break;
        case 1:
            li.innerHTML = `<div class="cursive-regular" style="text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 2;">&nbsp;&nbsp;${number + 1}. ${name} 🥈</div><div class="cursive-regular" style="text-align: center; flex: 1;">${timeTaken[0]}:${timeTaken[1]}:${timeTaken[2]}</div><div class="cursive-regular" style="text-align: right; margin-right: 20px; width: 80px;">${score}</div>`;
            break;
        case 2:
            li.innerHTML = `<div class="cursive-regular" style="text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 2;">&nbsp;&nbsp;${number + 1}. ${name} 🥉</div><div class="cursive-regular" style="text-align: center; flex: 1;">${timeTaken[0]}:${timeTaken[1]}:${timeTaken[2]}</div><div class="cursive-regular" style="text-align: right; margin-right: 20px; width: 80px;">${score}</div>`;
            break;
        case 9:
            li.innerHTML = `<div class="cursive-regular" style="text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 2;">${number + 1}. ${name}</div><div class="cursive-regular" style="text-align: center; flex: 1;">${timeTaken[0]}:${timeTaken[1]}:${timeTaken[2]}</div><div class="cursive-regular" style="text-align: right; margin-right: 20px; width: 80px;">${score}</div>`;
            break;
        default:
            li.innerHTML = `<div class="cursive-regular" style="text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 2;">&nbsp;&nbsp;${number + 1}. ${name}</div><div class="cursive-regular" style="text-align: center; flex: 1;">${timeTaken[0]}:${timeTaken[1]}:${timeTaken[2]}</div><div class="cursive-regular" style="text-align: right; margin-right: 20px; width: 80px;">${score}</div>`;
            break;
    }
    ol.appendChild(li);
}

function removeLastWord(str) {
    const lastSpaceIndex = str.lastIndexOf(' ');
    if (lastSpaceIndex === -1) {
        return str;
    }
    return str.slice(0, lastSpaceIndex);
}

function writeIntoLeaderboard(players){
    document.getElementById('leaderboard-results').innerHTML = "";
    for(let i = 0; i < Math.min(10, players.length); i++){
        addEntry(i, players[i][0], players[i][1], players[i][2]);
    }
    for(let i = Math.min(10, players.length); i < 10; i++){
        addEntry(i, "-", "-" ,["-", "-", "-"]);
    }
}

let allPlayers = JSON.parse(sessionStorage.getItem('allPlayers'));
writeIntoLeaderboard(allPlayers);


function filterPlayersPlayedToday(players) {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    return players.filter(player => {
        const playDate = player[3].split('T')[0];
        return playDate === todayString;
    });
}

function filterPlayersPlayedPastWeek(players) {
    const today = new Date();
    const pastWeek = new Date(today);
    pastWeek.setDate(today.getDate() - 7);

    return players.filter(player => {
        const playDate = new Date(player[3]);
        return playDate >= pastWeek && playDate <= today;
    });
}

function filterPlayersPlayedPastMonth(players) {
    const today = new Date();
    const pastMonth = new Date(today);
    pastMonth.setMonth(today.getMonth() - 1);

    return players.filter(player => {
        const playDate = new Date(player[3]);
        return playDate >= pastMonth && playDate <= today;
    });
}

function filterPlayersPlayedPastSixMonths(players) {
    const today = new Date();
    const pastSixMonths = new Date(today);
    pastSixMonths.setMonth(today.getMonth() - 6);

    return players.filter(player => {
        const playDate = new Date(player[3]);
        return playDate >= pastSixMonths && playDate <= today;
    });
}

function filterPlayersPlayedPastYear(players) {
    const today = new Date();
    const pastYear = new Date(today);
    pastYear.setFullYear(today.getFullYear() - 1);

    return players.filter(player => {
        const playDate = new Date(player[3]);
        return playDate >= pastYear && playDate <= today;
    });
}

let leaderboardFilterRadioSelected = "AllUsersRadio";
let leaderboardFilterOptionSelected = "All Time Field";

const leaderboardFilterField = document.getElementById('leaderboard-filter-field');

leaderboardFilterField.addEventListener('change', function() {
    const selectedleaderboardFilterField = leaderboardFilterField.value;
    leaderboardFilterOptionSelected = selectedleaderboardFilterField;
    changeLeaderBoard(leaderboardFilterOptionSelected, leaderboardFilterRadioSelected);
});

const radioButtonsInLeaderboardFilter = document.querySelectorAll('input[name="leaderboardFilter"]');
radioButtonsInLeaderboardFilter.forEach(radio => {
    radio.addEventListener('change', (event) => {
        if (event.target.checked) {
            const selectedOption = removeLastWord(event.target.id);
            leaderboardFilterRadioSelected = selectedOption;
            changeLeaderBoard(leaderboardFilterOptionSelected, leaderboardFilterRadioSelected);
        }
    });
});

function filterBasedOnTime(selectedleaderboardFilterField){
    switch (selectedleaderboardFilterField) {
        case "Today Field":
            return filterPlayersPlayedToday(allPlayers);
        case "Past Week Field":
            return filterPlayersPlayedPastWeek(allPlayers);
        case "Past Month Field":
            return filterPlayersPlayedPastMonth(allPlayers);
        case "Past 6 Months Field":
            return filterPlayersPlayedPastSixMonths(allPlayers);
        case "Past Year Field":
            return filterPlayersPlayedPastYear(allPlayers);
        default:
            return allPlayers
    }
}

function filterBasedOnRadio(players, radioChosen){
    if(radioChosen == "AllUsersRadio"){
        return players;
    }
    if(radioChosen.split(" ").length == 1){
        return players.filter(player => player[4] === radioChosen);
    } else {
        if(radioChosen == "Working Professional"){
            return players.filter(player => player[5] === radioChosen || player[5] === null);
        }
        return players.filter(player => player[5] === radioChosen);
    }
}


function changeLeaderBoard(fieldOptionChosen, radioChosen){
    playersFilteredAfterTime = filterBasedOnTime(fieldOptionChosen);
    playersFilteredOnRadio = filterBasedOnRadio(playersFilteredAfterTime, radioChosen);
    writeIntoLeaderboard(playersFilteredOnRadio);
}