const apiurl='https://api.jikan.moe/v4/top/anime';

//const apiurl ='https://jsonplaceholder.typicode.com/users';

async function d(){ 
    const response = await fetch(apiurl)
    const anime = await response.json()
    
    let nmrk = 0;let nmrkj = 0;
    let nmrkjw = 0;
    anime.data.forEach(anime => {
//       rows
        const rows = document.createElement('a');
        rows.className = 'rows';
        rows.setAttribute('id',`rows${nmrk++}`)
 //       rows.textContent = nmrk;
        document.querySelector('.container').appendChild(rows)
        
 //      picture       
        const gmbr = document.createElement('img');
        gmbr.setAttribute('src',`${anime.images.jpg.image_url}`);
        
        document.getElementById(`rows${nmrkj++}`).appendChild(gmbr)
  
//       title

        const ttljd = document.createElement('p');
        ttljd.className = 'titles';
        ttljd.textContent = anime.title;
        document.getElementById(`rows${nmrkjw++}`).appendChild(ttljd)
        
        
        
        
    })
    
}
d()