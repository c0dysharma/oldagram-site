const posts = [
    {
        name: "Vincent van Gogh",
        usernames: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        usernames: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        usernames: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const userAvatars = document.getElementsByClassName("post-avatar");
const userNames = document.getElementsByClassName("user-info-name");
const userLocations = document.getElementsByClassName("user-info-location");
const userPostImgs = document.getElementsByClassName("user-post-img");
const likesCounts = document.getElementsByClassName("likes-count");
const commenterNames = document.getElementsByClassName("commenter");
const comments = document.getElementsByClassName("comment");

// Assuming length of all these class elements and posts are equal
for (let i = 0; i < posts.length; i++) {
    userAvatars[i].src = posts[i].avatar;
    userNames[i].textContent = posts[i].name;
    userLocations[i].textContent = posts[i].location;
    userPostImgs[i].src = posts[i].post;
    likesCounts[i].textContent = `${posts[i].likes} likes`;
    commenterNames[i].textContent = posts[i].usernames;
    comments[i].childNodes[2].textContent = " " + posts[i].comment;

}

// Increase likes count on heart btn and post dbclick
const heartBtns = document.getElementsByClassName("post-btn-heart");
const addClickListener = (i) => {
    const heartBtn = heartBtns[i]
    heartBtn.addEventListener('click', () => {
        posts[i].likes += 1;
        likesCounts[i].textContent = `${posts[i].likes} likes`;
        heartBtn.src = 'images/icon-heart-filled.png';
    })

    const userPostImg = userPostImgs[i]
    userPostImg.addEventListener('dblclick', () => {
        posts[i].likes += 1;
        likesCounts[i].textContent = `${posts[i].likes} likes`;1
    })
}
for (let i = 0; i < heartBtns.length; i++) {
    addClickListener(i)
}