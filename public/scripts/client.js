/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// fetch("initial-tweets.json")
  // .then(res => res.json())
  // .then(data => {
    // console.log(data.user.name)
  // })

{/* <article class="tweet-container"> */}
{/* <header class="tweet--top"> */}
  {/* <div class="wrapper">  */}
    {/* <div class="profile"><img class="newton-pic" src="/public/images/73hZDYK.png"></div> */}
    {/* <div class="username">Newton</div> */}
  {/* </div> */}
  {/* <div class="userid">@SirIsaac</div> */}
{/* </header> */}
{/* <main class='tweet-content'> */}
 {/* <p class="tweet-line">I have seen further by standing on the shoulder of giants </p>  */}
{/* </main> */}
{/* <footer class="tweet--bottom"> */}
  {/* <div class="timestamp">10 days ago</div> */}
  {/* <div class="interactables"> */}
{/*  */}
    {/* <i class="fa fa-flag"></i> */}
    {/* <i class="fa fa-heart"></i> */}
    {/* <i class="fa fa-retweet"></i> */}
  {/* </div> */}
{/* </footer> */}
{/* </article> */}
{/*  */}

$(document).ready(function() {
const tweetData = [
 {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1639431742303
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1639518142303
  }
 
]
const renderTweets = function() {
    for (const input of tweetData) {
      const $tweet = createTweetElement(input);
      $(".tweet-container").append($tweet);
    }
  }


  const createTweetElement = function(input) {
    const userName = input['user']['name'];
    const avatars = input['user']['avatars'];
    const userHandle = input['user']['handle'];
    const tweetBody = input['content']['text'];
    const createdAt = input['created_at'];
    const $tweetComposer = `
    <article class="tweet-cage">
            <header class="tweet--top">
              <div class="wrapper"> 
                <div class="profile"><img class="newton-pic" src="${avatars}"></div>
                <div class="username">${userName}</div>
              </div>
              <div class="userid">${userHandle}</div>
            </header>
            <main class='tweet-content'>
             <p class="tweet-line">${tweetBody}</p> 
            </main>
            <footer class="tweet--bottom">
              <div class="timestamp">${timeago.format(createdAt)}</div>
              <div class="interactables">

                <i class="fa fa-flag"></i>
                <i class="fa fa-heart"></i>
                <i class="fa fa-retweet"></i>
              </div>
            </footer>
            </article>
          
  `;
  return $tweetComposer;
  }
  
  renderTweets();
})
