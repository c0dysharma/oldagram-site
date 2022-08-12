const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const userAvatar = document.getElementsByClassName("post-avatar");
const userName = document.getElementsByClassName("user-info-name");
const userLocation = document.getElementsByClassName("user-info-location");
const userPostImg = document.getElementsByClassName("user-post-img");
const likesCount = document.getElementsByClassName("likes-count");
const commenterName = document.getElementsByClassName("commenter");
const comment = document.getElementsByClassName("comment");

// Assuming length of all these class elements and posts are equal
for(let i=0; i<posts.length; i++){
    userAvatar[i].src = posts[i].avatar;
    userName[i].textContent = posts[i].name;
    userLocation[i].textContent = posts[i].location;
    userPostImg[i].src = posts[i].post;
    likesCount[i].textContent = `${posts[i].likes} likes`;
    commenterName[i].textContent = posts[i].username;
    comment[i].childNodes[2].textContent = " " + posts[i].comment;

}