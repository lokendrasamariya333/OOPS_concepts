// class VideoPlayer {

//   // private steps — user ko nahi dikhne
//   #loadBuffer() {
//     console.log("Buffer load ho raha hai...");
//   }

//   #checkQuality() {
//     console.log("Quality check ho raha hai...");
//   }

//   #skipAds() {
//     console.log("Ads skip ho rahe hain...");
//   }

//   // public method — user sirf yahi use kare
//   play(videoName) {
//     this.#loadBuffer();
//     this.#checkQuality();
//     this.#skipAds();
//     console.log(videoName + " chal rahi hai! ");
//   }

// }

// const player = new VideoPlayer();
// player.play("Funny Cats");

class WashingMachine{
    #fillWater(){
        console.log("paani bhar raha hai")
    }
    #addSoap(){
        console.log("soap add ho raha hai")
    }
    #spin(){
        console.log("spin karna start karo")
    }

    wash(clothes){
        this.#fillWater();
        this.#addSoap();
        this.#spin();
        console.log(clothes+" Wash ho gaye");
    }
}
const washing = new WashingMachine();
washing.wash("pants");





















