function weightedRandom(prob) {
    let i, sum=0, r=Math.random();
    for (i in prob) {
      sum += prob[i];
      if (r <= sum) {
        return i;
      }
    }
    console.log("error?")
  }

function testProbs(){
    const counts = [0,0,0,0,0,0];
    const iterations = 100000
    for (let i = 0; i <= iterations; i++) {
        res = parseInt(weightedRandom({0:0.3, 1:0.29, 2:0.28, 3:0.07, 4:0.03, 5:.03}))
        counts[res]++
    }
    console.log(`counts arr ${counts}`)
    console.log(`counts arr ${counts[0]/iterations}, ${counts[1]/iterations}, ${counts[2]/iterations}, ${counts[3]/iterations}, ${counts[4]/iterations}, ${counts[5]/iterations}`)

}

// weightedRandom({0:0.3, 1:0.29, 2:0.28, 3:0.03, 4:0.03, 5:.07})
testProbs()

/* Things to note on insecurity:
    This is insecure because Math.randon() is psuedo-random.
    With enough time someone could figure out the next number to be "randomly" picked.
    With that information they could choose at the perfect time to mint an ultra-rare bee
    Then we could assume they would own all the rarest bees and sell for potentially millions from owning the rarest NFTs in circulation

    Note: 
    This algo is not sophisticated, weights are not changing every iteration to actively control supply. 
    Ideally, we have a neural net that adjusts weights in a species-to-totalBeeSupply ratio.
    This algorithm would have to run every time a bee is minted or after every couple minted bees to make sure the endangered-level ratios are maintained closer to what they should be.
*/