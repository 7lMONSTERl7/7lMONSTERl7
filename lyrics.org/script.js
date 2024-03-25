function searchLyrics() {
    let artist = document.getElementById("artist").value;
    let title = document.getElementById("title").value;
    let url = "https://api.lyrics.ovh/v1/" + artist + "/" + title;
    
    if (artist.length > 0 && title.length > 0) {
        try {
            $.get(url, function(data) {
                if (data.lyrics) {
                    document.getElementById("lyrics").innerHTML = data.lyrics.replace(new RegExp("\n","g"),"<br>");
                } else {
                    // If Lyrics.ovh doesn't return lyrics, try fetching from Genius
                    searchGenius(artist, title);
                    if (document.getElementById("lyrics").length < 1){
                        document.getElementById("lyrics").innerHTML = "Lyrics not found on Lyrics.ovh.";
                    }
                }
            });
        } catch (error) {
            console.error("Error fetching lyrics:", error);
        }
    } else {
        document.getElementById("lyrics").innerHTML = "Please enter an artist and title.";
    }
}


function searchGenius(artist, title) {
    let url = "https://api.genius.com/search?q=" + encodeURIComponent(artist + " " + title);
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: "G99puDIJ1NDUS_xBJiK-32sPdGhwha4Sy--0HYXRShK30qnv2mZlYv2cMVVcMCVgubr-sBP4sKKQzww5Pq3r9Q",
            }
        });
        const data = await response.json();
        if (data.response.hits.length > 0) {
            const songUrl = data.response.hits[0].result.url;
            fetch(songUrl)
                .then(response => response.text())
                .then(html => {
                    // Extract lyrics from the HTML response
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, "text/html");
                    const lyricsElement = doc.querySelector(".lyrics");
                    if (lyricsElement) {
                        document.getElementById("lyrics").innerHTML = lyricsElement.innerText;
                    } else {
                        document.getElementById("lyrics").innerHTML = "Lyrics not found on Genius.";
                    }
                });
        } else {
            document.getElementById("lyrics").innerHTML = "Lyrics not found on Genius.";
        }
    } catch (error) {
        console.error("Error fetching lyrics from Genius:", error);
    }
}