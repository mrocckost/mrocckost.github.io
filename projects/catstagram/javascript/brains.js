var likeCount = [0, 0, 0, 0, 0];
function likePhoto(num){
    likeCount[num]++;
    console.log(likeCount); 
    document.getElementById("likeCount" + num).innerHTML = 
    likeCount[num];
}

var user = {
    name: "BagheeraTheMenace", 
    name_last: " ",
    followers: ["MopeyMi", "StormPsycho", "raccooninthegarage0", "seth_squatch", "johnbruner336", "Xhenn"],
    profile_pic: "https://i.pinimg.com/236x/0f/24/cc/0f24cc9dabfb4ea2382daff2a343ecf0.jpg", 
    Bio: "I am the cat of someone who can't decide their hair color. I enjoy long naps on my heating pad and annoying my owners until they feed me.",
}; 

setTimeout(function(){ document.getElementById("name").innerHTML = user.name;}, 3000);
setTimeout(function(){ document.getElementById("name_last").innerHTML = user.name_last;}, 3000);
setTimeout(function(){ document.getElementById("followers").innerHTML = "Followers: " + user.followers.length;}, 3000);
setTimeout(function(){ $("#profile_pic").attr("src", user.profile_pic);}, 3000);
setTimeout(function(){ document.getElementById("Bio").innerHTML = user.Bio;}, 3000);

// comment to be deleted later

