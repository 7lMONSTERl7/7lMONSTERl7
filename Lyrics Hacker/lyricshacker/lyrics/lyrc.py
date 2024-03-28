import lyricsgenius

class GetLyrics:
    @staticmethod
    def fetch_lyrics(artist_name, song_name):
        genius = lyricsgenius.Genius("udETmZciiPFhdTPS-N1czxRp2dxmrMrp2MJC4WURb3qM3SOVlFOsGX3okBvCpqhk")
        
        # Search for the song
        song = genius.search_song(song_name, artist_name)

        if song:
            return f"\nLyrics:\n{song.lyrics}"
        else:
            return f"Lyrics not found for the song '{song_name}' by '{artist_name}'."
