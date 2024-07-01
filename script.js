async function getMatchData() {
    try {
        const response = await fetch("https://api.cricapi.com/v1/currentMatches?apikey=80429265-58a4-49c8-aeeb-21d363628926&offset=0");
        const data = await response.json();

        if (data.status !== "success") return;

        const matchesList = data.data;
        if (!matchesList) return [];

        const relevantData = matchesList.map(match => ({
            name: match.name,
            status: match.status
        }));
        
        console.log({ relevantData });

        document.getElementById('matches').innerHTML = relevantData.map(match => 
            `<li><span class="match-name">${match.name}</span><span class="match-status">${match.status}</span></li>`
        ).join('');

        return relevantData;

    } catch (e) {
        console.log(e);
    }
}

getMatchData();

