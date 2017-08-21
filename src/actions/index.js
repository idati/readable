const api="http://localhost:5001"

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)


const headers = {
  'Accept': 'application/json',
  'Authorization': token,
}

// export function getAllCategories() {
//   const res={categories:[]}
//    const promise = getCategories()
//   console.log(promise)
//   promise.then(
//     function(value){
//       if (value !== undefined){// && status==='resolved'){
//         console.log(value)
//         // console.log(value, PromiseStatus)
//         for (var j=0; j<value.categories.length; j++){
//           //  console.log(value.categories[j].name)
//           res.categories.push(value.categories[j].name)
//         }
//         return  res//, console.log(res)
//       }
//       }
//     )}


export const getCategories = () =>
    fetch(`${api}/categories/`,{headers})
    .then(res => res.json())
    .then( value => {
      return value})
    // .then(
      // function(response){
        // return response
      // })
export const getPosts = () =>
    fetch(`${api}/posts/`,{headers})
    .then(res => res.json())
    .then( value => {
    return value})

export const getCategoriePosts = (cat) =>
    fetch(`${api}/${cat}/posts/`,{headers})
    .then(res => res.json())
    .then( value => {
    return value})

export const getPost = (id) =>
    fetch(`${api}/posts/${id}`,{headers})
    .then(res => res.json())
    .then( value => {
    return value})

export const getComment = (id) =>
    fetch(`${api}/comments/${id}`,{headers})
    .then(res => res.json())
    .then( value => {
    return value})

export const getAllCommentsFromPost = (id) =>
  fetch(`${api}/posts/${id}/comments/`, {headers})
  .then(res => res.json())
  .then( value => { return value })

export const newPost = (id, timestamp, title, body, author, category) =>
    fetch(`${api}/posts/`,{
      method:'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      // id: JSON.stringify(id),
      // timestamp: JSON.stringify(timestamp),
      // title: JSON.stringify(title),
      body: JSON.stringify({id, timestamp, title,body,author,category}),
      // author: JSON.stringify(author),
      // categories: JSON.stringify(author)
    }).then(res=>res.json())
      .then(res=>console.log(res))

export const newComment = (id, timestamp, body, author, parentId) =>
    fetch(`${api}/comments/`,{
    method:'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
            // id: JSON.stringify(id),
            // timestamp: JSON.stringify(timestamp),
            // title: JSON.stringify(title),
    body: JSON.stringify({id, timestamp, body, author, parentId}),
            // author: JSON.stringify(author),
            // categories: JSON.stringify(author)
  }).then(res=>res.json())
    .then(res=>console.log(res))

export const editComment = (id, timestamp, body) =>
    fetch(`${api}/comments/${id}`,{
    method:'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
            // id: JSON.stringify(id),
            // timestamp: JSON.stringify(timestamp),
            // title: JSON.stringify(title),
    body: JSON.stringify({id, timestamp, body}),
            // author: JSON.stringify(author),
            // categories: JSON.stringify(author)
  }).then(res=>res.json())
    .then(res=>console.log(res))


export const editPost = (id, title, body) =>
    fetch(`${api}/posts/${id}`,{
    method:'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
            // id: JSON.stringify(id),
            // timestamp: JSON.stringify(timestamp),
            // title: JSON.stringify(title),
    body: JSON.stringify({id, title, body}),
            // author: JSON.stringify(author),
            // categories: JSON.stringify(author)
  }).then(res=>res.json())
    .then(res=>console.log(res))


export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`,{
    method:'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
            // id: JSON.stringify(id),
            // timestamp: JSON.stringify(timestamp),
            // title: JSON.stringify(title),
    deleted: JSON.stringify(true),
            // author: JSON.stringify(author),
            // categories: JSON.stringify(author)
  }).then(res=>res.json())
    .then(res=>console.log(res))


export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`,{
    method:'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
            // id: JSON.stringify(id),
            // timestamp: JSON.stringify(timestamp),
            // title: JSON.stringify(title),
    deleted: JSON.stringify(true),
            // author: JSON.stringify(author),
            // categories: JSON.stringify(author)
  }).then(getAllCommentsFromPost(id).then(
    value =>{
    for(let j=0; j<value.length; j++){
        value[j].parentDeleted=true
    }
    console.log(value)
  }
  ))//.map((res) => res.parentDeleted: true))
    .then(res=>res.json())
    .then(res=>console.log(res))


export const vodeComment = (id, option) =>
    fetch(`${api}/comments/${id}`,{
    method:'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // console.log(option);
            // id: JSON.stringify(id),
            // timestamp: JSON.stringify(timestamp),
            // title: JSON.stringify(title),
    body: JSON.stringify({id, option}),
    // console.log(vode)
            // author: JSON.stringify(author),
            // categories: JSON.stringify(author)
  }).then(res=>res.json())
    .then(res=>console.log(res, option))


export const vodePost = (id, option) =>
    fetch(`${api}/posts/${id}`,{
    method:'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    // console.log(option);
            // id: JSON.stringify(id),
            // timestamp: JSON.stringify(timestamp),
            //  body: JSON.stringify({vote}),
            //  console.log(vote);
            // vote
     body:JSON.stringify({id, option}),

    // console.log(vode)
            // author: JSON.stringify(author),
            // categories: JSON.stringify(author)
  }).then(res=>res.json())
    .then(res=>console.log(res, option))

//-----------------L E A R N     C O D E-----------------------

      export const ADD_RECIPE = 'ADD_RECIPE'
      export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

      export function addRecipe ({ day, recipe, meal }) {
        return {
          type: ADD_RECIPE,
          recipe,
          day,
          meal,
        }
      }

      export function removeFromCalendar ({ day, meal }) {
        return {
          type: REMOVE_FROM_CALENDAR,
          day,
          meal,
        }
      }
//---------------------T H E  E N D----------------------------
