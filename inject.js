// this is the code which will be injected into a given page...

(function() {
    const FILTERS = ['russia', 'ukraine']

    const trending_div = document.querySelector('[aria-label="Timeline: Trending now"]')
    const tweets = document.querySelectorAll('article')

    if (trending_div !== null)
        trending_div.remove()
   

    for (const tweet of tweets) {
        FILTERS.some(filter=> {
          
            tweet.innerText.includes(filter); tweet.remove()
            })
    }


})();