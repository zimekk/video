import React, { useEffect, useRef } from "react";

// https://stackoverflow.com/questions/43139461/display-canvas-as-gif-for-video-preview
export default function Thumbnails() {
  const thumbs = useRef(null);

  useEffect(() => {
    var thumbsList = []; // we will save our frames as canvas in here
    var delay = 500; // the speed of the animation (ms)

    function generateThumbnail() {
      var c = document.createElement("canvas");
      var ctx = c.getContext("2d");
      c.width = 480;
      c.height = 270;
      ctx.drawImage(video, 0, 0, 480, 270);
      thumbsList.push(c); // store this frame in our list
      if (thumbsList.length === 1) {
        // displayThumbs(); // start animating as soon as we got a frame
      }
    }
    // initialises the display canvas, and starts the animation loop
    function displayThumbs() {
      var c = document.createElement("canvas");
      var ctx = c.getContext("2d");
      c.width = 480;
      c.height = 270;
      thumbs.current.appendChild(c);
      startAnim(ctx); // pass our visible canvas' context
    }

    function startAnim(ctx) {
      var currentFrame = 0;
      // here is the actual loop
      function anim() {
        ctx.drawImage(thumbsList[currentFrame], 0, 0); // draw the currentFrame
        // increase our counter, and set it to 0 if too large
        currentFrame = (currentFrame + 1) % thumbsList.length;
        setTimeout(anim, delay); // do it again in x ms
      }
      anim(); // let's go !
    }
    var i = 0;
    var video = document.createElement("video");
    // var thumbs = document.getElementById("thumbs");

    /* OP's code */
    video.addEventListener(
      "loadeddata",
      function () {
        thumbs.current.innerHTML = "";
        video.currentTime = i;
      },
      false
    );

    video.addEventListener(
      "seeked",
      function () {
        var j = video.duration;
        var u = j / 4;
        // now video has seeked and current frames will show
        // at the time as we expect
        generateThumbnail(i);
        // when frame is captured, increase
        i += u;

        // if we are not passed end, seek to next interval
        if (i <= video.duration) {
          // this will trigger another seeked event
          video.currentTime = i;
        } else {
          displayThumbs();
          //      displayFrame(); // wait for all images to be parsed before animating
        }
      },
      false
    );

    video.preload = "auto";
    video.src =
      "https://www.html5rocks.com/en/tutorials/video/basics/devstories.webm";

    return () => {};
  }, [thumbs]);

  return <div ref={thumbs} />;
}
