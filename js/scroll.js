$(function() {
    var controller = new ScrollMagic.Controller();
    var poofLeftCloud = new ScrollMagic.Scene({
        offset:0,
        duration: 150
    })
    .setTween("#left-cloud1", {left: "-200px"})
    .addTo(controller);
    var poofRightCloud = new ScrollMagic.Scene({
        offset:200,
        duration:300
    })
    .setTween("#right-cloud1", {right: "-200px"})
    .addTo(controller);
    var poofLeftCloud2 = new ScrollMagic.Scene({
        offset:500,
        duration: 300
    })
    .setTween("#left-cloud2", {left: "-200px"})
    .addTo(controller);
    var poofRightCloud2 = new ScrollMagic.Scene({
        offset:800,
        duration: 300
    })
    .setTween("#right-cloud2", {right: "-200px"})
    .addTo(controller);
    var poofLeftCloud3 = new ScrollMagic.Scene({
        offset:1100,
        duration: 300
    })
    .setTween("#left-cloud3", {left: "-200px"})
    .addTo(controller);
});