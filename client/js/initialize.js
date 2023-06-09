const state = {
    depots: [],
    comments: [],
    // loggedInUser: ''
}

fetch('/api/sessions')
    .then(res => res.json())
    .then(data => {
      if (data.result === 'successful') {
        state.loggedInUser = ({email: data.email})
        // state.userId = something
      }
  })

fetch('/api/depots')
    .then(res => res.json())
    .then(depots => {
        state.depots = depots
        renderDepotList()
        renderNav()
    })

fetch('/api/comments')
  .then(res => res.json())
  .then(comments => {
    state.comments = comments
    console.log(state.comments)
})

