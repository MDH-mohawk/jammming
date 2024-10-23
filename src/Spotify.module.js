
let accessToken;

const Spotify = {

  getGrantFlow(){
    const client_id = 'f4d833223c5440cdb2b33bcff0c8c3a4';
    const redirect_uri = 'http://localhost:3000/';
    const url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    return url
    },

  getAccessToken(){
      if (accessToken) return accessToken;
      const tokeninURL = window.location.href.match(/access_token=([^&]*)/);
      const expiredTime = window.location.href.match(/expires_in=([^&]*)/);
        if(tokeninURL && expiredTime){
          accessToken = tokeninURL[1];
          expiresIn = Number(expiredTime);

          windows.setTimeout(() =>(accessToken =""), expiresIn * 1000);
            
          window.history.pushState("Acces token", null, "");
          return accessToken;
        } else{
            const accessUrl = url;
        }
      },

  search(){

  }
}

export {Spotify};