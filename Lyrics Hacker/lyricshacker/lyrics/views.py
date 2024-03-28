from django.shortcuts import render
from . lyrc import GetLyrics

def home(request):
    se = request.GET.get('serc')
    try:
        sse = se.split(' ',1)
        artist_name = sse[0]
        song_name = sse[1]
        print(artist_name,song_name)
        try:
            prt = sse[1].split(' ',2)
            artist_name = sse[0]+prt[0]
            song_name = prt[1]+prt[2]
            print(song_name,artist_name)
        except:
            resu = GetLyrics.fetch_lyrics(artist_name,song_name)
        
    except :
        resu = ""
    return render(
        request,
        'home.html',
        {
            'resl': resu
        }
    )