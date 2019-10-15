// this is the code which will be injected into a given page...

;(function () {
  const FILTERS = ['russia', 'ukraine', 'brexit', 'biden', 'nazi']
  const SIDEBAR_LABEL = 'Timeline: Trending now'

  const trendingDiv = document.querySelector(`[aria-label="${SIDEBAR_LABEL}"]`)
  const tweets = document.querySelectorAll('article')

  if (trendingDiv !== null) trendingDiv.remove()

  for (const tweet of tweets) {
    FILTERS.some(filter => {
      if (tweet.innerText.toLowerCase().includes(filter)) {
        tweet.remove()
      }
    })
  }
})()
