export const fetchPostList = () => {
    return fetch('https://tj-blog-1eff5.firebaseio.com/posts.json')
        .then(response => { return response.json(); })
        .catch(e => console.log(e.message));
}

export const fetchPhotos = (id) => {
    return fetch('https://tj-blog-1eff5.firebaseio.com/user.json')
        .then(response => { return response.json(); })
        .catch(e => console.log(e.message));
}


