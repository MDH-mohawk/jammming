const clientId = 'f4d833223c5440cdb2b33bcff0c8c3a4';
const redirectUri= 'http://localhost:3000/'
let accessToken;

const Spotify = {

  getAccessToken(){
      if (accessToken) {
        console.log(accessToken)
        return accessToken;
      }
      const tokeninURL = window.location.href.match(/access_token=([^&]*)/);
      const expiredTime = window.location.href.match(/expires_in=([^&]*)/);
        if(tokeninURL && expiredTime){
          accessToken = tokeninURL[1];
          const  expiresIn = Number(expiredTime[1]);
          window.setTimeout(() =>(accessToken =""), expiresIn * 1000);
          window.history.pushState("Acces token", null, "/");
          return accessToken;
        } else{
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location= accessUrl;
        }
      },

  search(term){
    const accesstoken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}&limit=5`, {
      headers:{
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response =>
      {
        return response.json();
      }
    ).then(jsonResponse => {
        if(!jsonResponse.tracks){
          return [];
        }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  }
}

export default Spotify;