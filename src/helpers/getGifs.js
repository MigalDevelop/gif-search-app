
export const getGifs = async( category ) => {

    const apiKey = 'vBcwj47ioieLN2GmkjRtRzjfrVzoCVGC';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=1`;

    const respTotal = await fetch( url );
    const { dataTotal, pagination } = await respTotal.json();

    if ( dataTotal != [] ) {
        const offset = Math.floor( Math.random() * pagination.total_count );
        const urlGetGifs = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&offset=${offset}&limit=3`;
        
        const resp = await fetch( urlGetGifs );
        const { data } = await resp.json();

        const gifs = data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.fixed_height.url
        }));

        return gifs;
    } else {
        return [];
    }
}