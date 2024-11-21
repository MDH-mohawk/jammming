const clientId = 'f4d833223c5440cdb2b33bcff0c8c3a4';
const redirectUri= 'https://jamitup.netlify.app/'
let accessToken;

const Spotify = {

  getAccessToken(){
      if (accessToken) {
        return accessToken;
      }
      const tokeninURL = window.location.href.match(/access_token=([^&]*)/);
      const expiredTime = window.location.href.match(/expires_in=([^&]*)/);
      if(tokeninURL && expiredTime){
          accessToken = tokeninURL[1];  
          const  expiresIn = Number(expiredTime[1]);
          window.setTimeout(() =>(accessToken = "" ), expiresIn * 1000);
          window.history.pushState("Acces token", null, "/");
          return accessToken;
      }
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
      window.location = accessUrl;
      },

  search(term){
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}&limit=5`, {
      headers:{
        Authorization: `Bearer ${Spotify.getAccessToken()}`
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
  },

  savePlaylist(name,uriList){
    const headers = { Authorization: `Bearer ${Spotify.getAccessToken()}` };
    let userId;
    return fetch('https://api.spotify.com/v1/me',{
      headers:{
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response =>{
      return response.json();
    }).then(jsonResponse =>{
      userId = jsonResponse.id;
      console.log(userId);
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,{
        headers:headers,
          method:'POST',
          body: JSON.stringify({name:name})
      }).then(response =>{
        return response.json()
      }).then(jsonResponse =>{
        const playlistId = jsonResponse.id;
        console.log(jsonResponse);
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,{
          headers:headers,
          method:"POST",
          body:JSON.stringify({uris:uriList})
        });
      })
    })

  }
}

export default Spotify;