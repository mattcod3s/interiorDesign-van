window.onscroll = function () {
    console.log(window.scrollY); // Value of scroll Y in px
    if  (window.scrollY > 210) {
        document.getElementById('middle-the-box').style.animationName = 'theBoxAnim';
        document.getElementById('left-the-box').style.animationName = 'theBoxAnim';
        document.getElementById('right-the-box').style.animationName = 'theBoxAnim';
    }
    if  (window.scrollY > 630) {
        document.getElementById('bI1').style.animationName = 'box-image-anim';
        document.getElementById('bI2').style.animationName = 'box-image-anim';
    }
    if (window.scrollY > 1230) {
        document.getElementById('client-img').style.animationName = 'clientAnim';
        document.getElementById('client-img1').style.animationName = 'clientAnimOne';
    }
    if  (window.scrollY < 200) {
        document.getElementById('bottom-box').style.opacity = '1';
    }
    if  (window.scrollY > 100) {
        document.getElementById('bottom-box').style.opacity = '0';
    } 
    if (window.scrollY < 1258) {
        document.getElementById('home-link-1').classList.add('isActive');
        document.getElementById('home-link-2').classList.remove('isActive');
        document.getElementById('home-link-3').classList.remove('isActive');
        document.getElementById('home-link-4').classList.remove('isActive');
    } else if (window.scrollY > 1258  && window.scrollY <2277) {
        document.getElementById('home-link-2').classList.add('isActive');
        document.getElementById('home-link-3').classList.remove('isActive');
        document.getElementById('home-link-1').classList.remove('isActive');
        document.getElementById('home-link-4').classList.remove('isActive');
    } else if (window.scrollY > 2277 && window.scrollY < 3300) {
        document.getElementById('home-link-3').classList.add('isActive');
        document.getElementById('home-link-1').classList.remove('isActive');
        document.getElementById('home-link-2').classList.remove('isActive');
        document.getElementById('home-link-4').classList.remove('isActive');
    } else {
        document.getElementById('home-link-4').classList.add('isActive');
        document.getElementById('home-link-2').classList.remove('isActive');
        document.getElementById('home-link-3').classList.remove('isActive');
        document.getElementById('home-link-1').classList.remove('isActive');
    }
    

};

function myFunction01() {
    if (document.getElementById('home-link-1').classList.contains('isActive')) {
        console.log('no');
    } else {
        document.getElementById('home-link-1').classList.add('isActive');
        if (document.getElementById('home-link-2').classList.contains('isActive')) {
            document.getElementById('home-link-2').classList.remove('isActive');
        } else if (document.getElementById('home-link-3').classList.contains('isActive')) {
            document.getElementById('home-link-3').classList.remove('isActive');
        } else {
            document.getElementById('home-link-4').classList.remove('isActive');
        }
    }
}

function myFunction02() {
    if (document.getElementById('home-link-2').classList.contains('isActive')) {
        console.log('no');
    } else {
        document.getElementById('home-link-2').classList.add('isActive');
        if (document.getElementById('home-link-1').classList.contains('isActive')) {
            document.getElementById('home-link-1').classList.remove('isActive');
        } else if (document.getElementById('home-link-3').classList.contains('isActive')) {
            document.getElementById('home-link-3').classList.remove('isActive');
        } else {
            document.getElementById('home-link-4').classList.remove('isActive');
        }
    }
}

function myFunction03() {
    if (document.getElementById('home-link-3').classList.contains('isActive')) {
        console.log('no');
    } else {
        document.getElementById('home-link-3').classList.add('isActive');
        if (document.getElementById('home-link-1').classList.contains('isActive')) {
            document.getElementById('home-link-1').classList.remove('isActive');
        } else if (document.getElementById('home-link-2').classList.contains('isActive')) {
            document.getElementById('home-link-2').classList.remove('isActive');
        } else {
            document.getElementById('home-link-4').classList.remove('isActive');
        }
    }
}

function myFunction04() {
    if (document.getElementById('home-link-4').classList.contains('isActive')) {
        console.log('no');
    } else {
        document.getElementById('home-link-4').classList.add('isActive');
        if (document.getElementById('home-link-1').classList.contains('isActive')) {
            document.getElementById('home-link-1').classList.remove('isActive');
        } else if (document.getElementById('home-link-3').classList.contains('isActive')) {
            document.getElementById('home-link-3').classList.remove('isActive');
        } else {
            document.getElementById('home-link-2').classList.remove('isActive');
        }
    }
}

function Dubaifunction() {
    document.getElementById('box-1').style.backgroundImage = "url('img/dubai-image-1.jpg')";
    document.getElementById('box-1').style.backgroundSize = "cover";
    document.getElementById('box-1').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-2').style.backgroundImage = "url('img/dubai-image-2.jpg')";
    document.getElementById('box-2').style.backgroundSize = "cover";
    document.getElementById('box-2').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-3').style.backgroundImage = "url('img/dubai-image-3.jpg')";
    document.getElementById('box-3').style.backgroundSize = "cover";
    document.getElementById('box-3').style.backgroundRepeat = "no-repeat";


    document.getElementById('box-4').style.backgroundImage = "url('img/dubai-image-4.jpg')";
    document.getElementById('box-4').style.backgroundSize = "cover";
    document.getElementById('box-4').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-5').style.backgroundImage = "url('img/dubai-image-5.jpg')";
    document.getElementById('box-5').style.backgroundSize = "cover";
    document.getElementById('box-5').style.backgroundRepeat = "no-repeat";
    
    if (document.getElementById('dubai-links').classList.contains('isActive')) {
        console.log('hasClass');
    } else {
        document.getElementById('dubai-links').classList.add('isActive');
        document.getElementById('dubai-links').classList.remove('notActive');

        document.getElementById('LV-links').classList.remove('isActive');
        document.getElementById('LV-links').classList.add('notActive');

        document.getElementById('can-links').classList.remove('isActive');
        document.getElementById('can-links').classList.add('notActive');

        document.getElementById('ice-links').classList.remove('isActive');
        document.getElementById('ice-links').classList.add('notActive');
    }
}

function LVfunction() {
    document.getElementById('box-1').style.backgroundImage = "url('img/LA-photo-1.jpg')";
    document.getElementById('box-1').style.backgroundSize = "cover";
    document.getElementById('box-1').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-2').style.backgroundImage = "url('img/LA-photo-2.jpg')";
    document.getElementById('box-2').style.backgroundSize = "cover";
    document.getElementById('box-2').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-3').style.backgroundImage = "url('img/LA-photo-3.jpg')";
    document.getElementById('box-3').style.backgroundSize = "cover";
    document.getElementById('box-3').style.backgroundRepeat = "no-repeat";


    document.getElementById('box-4').style.backgroundImage = "url('img/LA-photo-4.jpg')";
    document.getElementById('box-4').style.backgroundSize = "cover";
    document.getElementById('box-4').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-5').style.backgroundImage = "url('img/LA-photo-5.jpg')";
    document.getElementById('box-5').style.backgroundSize = "cover";
    document.getElementById('box-5').style.backgroundRepeat = "no-repeat";
    
    if (document.getElementById('LV-links').classList.contains('isActive')) {
        console.log('hasClass');
    } else {
        document.getElementById('dubai-links').classList.remove('isActive');
        document.getElementById('dubai-links').classList.add('notActive');

        document.getElementById('LV-links').classList.add('isActive');
        document.getElementById('LV-links').classList.remove('notActive');

        document.getElementById('can-links').classList.remove('isActive');
        document.getElementById('can-links').classList.add('notActive');

        document.getElementById('ice-links').classList.remove('isActive');
        document.getElementById('ice-links').classList.add('notActive');
    }
}

function Canadafunction() {
    document.getElementById('box-1').style.backgroundImage = "url('img/canada-iamge-1.jpg')";
    document.getElementById('box-1').style.backgroundSize = "cover";
    document.getElementById('box-1').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-2').style.backgroundImage = "url('img/canada-image-2.jpg')";
    document.getElementById('box-2').style.backgroundSize = "cover";
    document.getElementById('box-2').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-3').style.backgroundImage = "url('img/canada-iamge-3.jpg')";
    document.getElementById('box-3').style.backgroundSize = "cover";
    document.getElementById('box-3').style.backgroundRepeat = "no-repeat";


    document.getElementById('box-4').style.backgroundImage = "url('img/canada-image-4.jpg')";
    document.getElementById('box-4').style.backgroundSize = "cover";
    document.getElementById('box-4').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-5').style.backgroundImage = "url('img/canada-image-5.jpg')";
    document.getElementById('box-5').style.backgroundSize = "cover";
    document.getElementById('box-5').style.backgroundRepeat = "no-repeat";
    
    if (document.getElementById('can-links').classList.contains('isActive')) {
        console.log('hasClass');
    } else {
        document.getElementById('dubai-links').classList.remove('isActive');
        document.getElementById('dubai-links').classList.add('notActive');

        document.getElementById('LV-links').classList.remove('isActive');
        document.getElementById('LV-links').classList.add('notActive');

        document.getElementById('can-links').classList.add('isActive');
        document.getElementById('can-links').classList.remove('notActive');

        document.getElementById('ice-links').classList.remove('isActive');
        document.getElementById('ice-links').classList.add('notActive');
    }
}

function Icelandfunction() {
    document.getElementById('box-1').style.backgroundImage = "url('img/ice-image-1.jpg')";
    document.getElementById('box-1').style.backgroundSize = "cover";
    document.getElementById('box-1').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-2').style.backgroundImage = "url('img/ice-image-2.jpg')";
    document.getElementById('box-2').style.backgroundSize = "cover";
    document.getElementById('box-2').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-3').style.backgroundImage = "url('img/ice-iamge-3.jpg')";
    document.getElementById('box-3').style.backgroundSize = "cover";
    document.getElementById('box-3').style.backgroundRepeat = "no-repeat";


    document.getElementById('box-4').style.backgroundImage = "url('img/ice-image-4.jpg')";
    document.getElementById('box-4').style.backgroundSize = "cover";
    document.getElementById('box-4').style.backgroundRepeat = "no-repeat";

    document.getElementById('box-5').style.backgroundImage = "url('img/ice-image-5.jpg')";
    document.getElementById('box-5').style.backgroundSize = "cover";
    document.getElementById('box-5').style.backgroundRepeat = "no-repeat";
    
    if (document.getElementById('ice-links').classList.contains('isActive')) {
        console.log('hasClass');
    } else {
        document.getElementById('dubai-links').classList.remove('isActive');
        document.getElementById('dubai-links').classList.add('notActive');

        document.getElementById('LV-links').classList.remove('isActive');
        document.getElementById('LV-links').classList.add('notActive');

        document.getElementById('can-links').classList.remove('isActive');
        document.getElementById('can-links').classList.add('notActive');

        document.getElementById('ice-links').classList.add('isActive');
        document.getElementById('ice-links').classList.remove('notActive');
    }
}

document.getElementById('top-left-arrow').addEventListener('click', function() {
    var counter;
    if (document.getElementById('square-1').classList.contains('top-white')){
        counter = 1;
    } else if (document.getElementById('square-2').classList.contains('top-white')) {
        counter = 2;
    } else if(document.getElementById('square-3').classList.contains('top-white')) {
        counter = 3;
    } else {
        counter = 4;
    }

    if (counter == 1) {
        document.getElementById('square-'+counter).classList.remove('top-white');
        document.getElementById('square-4').classList.add('top-white');
        document.getElementById('edge').innerHTML = '04';
        document.getElementById('boxOne').style.backgroundImage = 'url(img/photo-41.jpg)';
        document.getElementById('boxTwo').style.backgroundImage = 'url(img/photo-42.jpg)';
        document.getElementById('boxThree').style.backgroundImage = 'url(img/photo-43.jpg)';
    } else {
        document.getElementById('square-'+counter).classList.remove('top-white');
        document.getElementById('square-'+(counter-1)).classList.add('top-white');
        document.getElementById('edge').innerHTML = '0'+(counter-1);
        
        if ((counter-1) === 1) {
            document.getElementById('boxOne').style.backgroundImage = 'url(img/photo-1.jpg)';
            document.getElementById('boxTwo').style.backgroundImage = 'url(img/photo-2.jpg)';
            document.getElementById('boxThree').style.backgroundImage = 'url(img/photo-3.jpg)';
        } else if ((counter-1) == 2) {
            document.getElementById('boxOne').style.backgroundImage = 'url(img/photo-21.jpg)';
            document.getElementById('boxTwo').style.backgroundImage = 'url(img/photo-22.jpg)';
            document.getElementById('boxThree').style.backgroundImage = 'url(img/photo-23.jpg)';
        } else {
            document.getElementById('boxOne').style.backgroundImage = 'url(img/photo-31.jpg)';
            document.getElementById('boxTwo').style.backgroundImage = 'url(img/photo-32.jpg)';
            document.getElementById('boxThree').style.backgroundImage = 'url(img/photo-33.jpg)';
        }

    }

    

});


document.getElementById('top-right-arrow').addEventListener('click', function() {
    var counter;
    if (document.getElementById('square-1').classList.contains('top-white')){
        counter = 1;
    } else if (document.getElementById('square-2').classList.contains('top-white')) {
        counter = 2;
    } else if(document.getElementById('square-3').classList.contains('top-white')) {
        counter = 3;
    } else {
        counter = 4;
    }

    if (counter == 4) {
        document.getElementById('square-'+counter).classList.remove('top-white');
        document.getElementById('square-1').classList.add('top-white');
        document.getElementById('edge').innerHTML = '01';
        document.getElementById('boxOne').style.backgroundImage = 'url(img/photo-1.jpg)';
        document.getElementById('boxTwo').style.backgroundImage = 'url(img/photo-2.jpg)';
        document.getElementById('boxThree').style.backgroundImage = 'url(img/photo-3.jpg)';
    } else {
        document.getElementById('square-'+counter).classList.remove('top-white');
        document.getElementById('square-'+(counter+1)).classList.add('top-white');
        document.getElementById('edge').innerHTML = '0'+(counter+1);

        if ((counter+1) === 2) {
            document.getElementById('boxOne').style.backgroundImage = 'url(img/photo-21.jpg)';
            document.getElementById('boxTwo').style.backgroundImage = 'url(img/photo-22.jpg)';
            document.getElementById('boxThree').style.backgroundImage = 'url(img/photo-23.jpg)';
        } else if ((counter+1) == 3) {
            document.getElementById('boxOne').style.backgroundImage = 'url(img/photo-31.jpg)';
            document.getElementById('boxTwo').style.backgroundImage = 'url(img/photo-32.jpg)';
            document.getElementById('boxThree').style.backgroundImage = 'url(img/photo-33.jpg)';
        } else {
            document.getElementById('boxOne').style.backgroundImage = 'url(img/photo-41.jpg)';
            document.getElementById('boxTwo').style.backgroundImage = 'url(img/photo-42.jpg)';
            document.getElementById('boxThree').style.backgroundImage = 'url(img/photo-43.jpg)';
        }

    }

    

});







document.getElementById('bottom-left-arrow').addEventListener('click', function() {
    if (document.getElementById('user-pic').classList.contains('user-pic-1')) {
        document.getElementById('user-pic').classList.remove('user-pic-1');
        document.getElementById('user-pic').classList.add('user-pic-2');
        document.getElementById('user-name').innerHTML = 'Sean Coy';
        document.getElementById('rev-counter').innerHTML = 'Review <span>2</span> of <span>3</span>';
        document.getElementById('rev').innerHTML = 'A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained ';
    } else if (document.getElementById('user-pic').classList.contains('user-pic-2')) {
        document.getElementById('user-pic').classList.remove('user-pic-2');
        document.getElementById('user-pic').classList.add('user-pic-3');
        document.getElementById('user-name').innerHTML = 'James Avery';
        document.getElementById('rev-counter').innerHTML = 'Review <span>3</span> of <span>3</span>';
        document.getElementById('rev').innerHTML = 'A dictionary definition is "an invented prose narrative shorter than a novel usually dealing with a few characters a';
    } else if (document.getElementById('user-pic').classList.contains('user-pic-3')) {
        document.getElementById('user-pic').classList.remove('user-pic-3');
        document.getElementById('user-pic').classList.add('user-pic-1');
        document.getElementById('user-name').innerHTML = 'Joe Santiago';
        document.getElementById('rev-counter').innerHTML = 'Review <span>1</span> of <span>3</span>';
        document.getElementById('rev').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime odit quaerat,Lorem ipsum dolor sit amet consectetur';
    }
    
});


document.getElementById('bottom-right-arrow').addEventListener('click', function() {
    if (document.getElementById('user-pic').classList.contains('user-pic-1')) {
        document.getElementById('user-pic').classList.remove('user-pic-1');
        document.getElementById('user-pic').classList.add('user-pic-2');
        document.getElementById('user-name').innerHTML = 'Sean Coy';
        document.getElementById('rev-counter').innerHTML = 'Review <span>2</span> of <span>3</span>';
        document.getElementById('rev').innerHTML = 'A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained ';
    } else if (document.getElementById('user-pic').classList.contains('user-pic-2')) {
        document.getElementById('user-pic').classList.remove('user-pic-2');
        document.getElementById('user-pic').classList.add('user-pic-3');
        document.getElementById('user-name').innerHTML = 'James Avery';
        document.getElementById('rev-counter').innerHTML = 'Review <span>3</span> of <span>3</span>';
        document.getElementById('rev').innerHTML = 'A dictionary definition is "an invented prose narrative shorter than a novel usually dealing with a few characters  ';
    } else if (document.getElementById('user-pic').classList.contains('user-pic-3')) {
        document.getElementById('user-pic').classList.remove('user-pic-3');
        document.getElementById('user-pic').classList.add('user-pic-1');
        document.getElementById('user-name').innerHTML = 'Joe Santiago';
        document.getElementById('rev-counter').innerHTML = 'Review <span>1</span> of <span>3</span>';
        document.getElementById('rev').innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime odit quaerat,Lorem ipsum dolor sit amet consectetur';
    }
});

function whiteArrowFunc() {
    document.getElementById('white-arrow').style.color = 'white';
}

function orangeArrowFunc() {
    document.getElementById('white-arrow').style.color = '#D68F5D';
}

document.getElementById('view-more-button').addEventListener('click', function() {
    if(document.getElementById('learnMore-bottom-wrapper').style.display == 'none') {
        document.getElementById('learnMore-bottom-wrapper').style.display = 'flex';
        document.getElementById('view-more-button').innerHTML = 'View Less';
        document.getElementById('learnMore-bottom-wrapper').style.visibility = 'visible';
        document.getElementById('learnMore-bottom-wrapper').style.maxHeight = '26vw';
        document.getElementById('learnMore-bottom-wrapper').style.transition = '1s';
    } else {
        document.getElementById('learnMore-bottom-wrapper').style.display ='none';
        document.getElementById('view-more-button').innerHTML = 'View More';
        document.getElementById('learnMore-bottom-wrapper').style.visibility = 'hidden';
    }
    
})



document.getElementById('top-mini-box-1').addEventListener('mouseover', function() {
    document.getElementById('top-mini-box-1').style.opacity = '1';
    document.getElementById('top-mini-box-1').style.transition = '0.3s';
    document.getElementById('top-mini-box-1-text').innerHTML = 'Bedroom Design';
})
document.getElementById('top-mini-box-1').addEventListener('mouseleave', function() {
    document.getElementById('top-mini-box-1').style.opacity = '0';
    document.getElementById('top-mini-box-1').style.transition = '0.3s';
    document.getElementById('top-mini-box-1-text').innerHTML = '';
})



document.getElementById('top-mini-box-2').addEventListener('mouseover', function() {
    document.getElementById('top-mini-box-2').style.opacity = '1';
    document.getElementById('top-mini-box-2').style.transition = '0.3s';
    document.getElementById('top-mini-box-2-text').innerHTML = 'Living Room Design';
})
document.getElementById('top-mini-box-2').addEventListener('mouseleave', function() {
    document.getElementById('top-mini-box-2').style.opacity = '0';
    document.getElementById('top-mini-box-2').style.transition = '0.3s';
    document.getElementById('top-mini-box-2-text').innerHTML = '';
})



document.getElementById('top-mini-box-3').addEventListener('mouseover', function() {
    document.getElementById('top-mini-box-3').style.opacity = '1';
    document.getElementById('top-mini-box-3').style.transition = '0.3s';
    document.getElementById('top-mini-box-3-text').innerHTML = 'Kitchen Design';
})
document.getElementById('top-mini-box-3').addEventListener('mouseleave', function() {
    document.getElementById('top-mini-box-3').style.opacity = '0';
    document.getElementById('top-mini-box-3').style.transition = '0.3s';
    document.getElementById('top-mini-box-3-text').innerHTML = '';
})



document.getElementById('top-mini-box-4').addEventListener('mouseover', function() {
    document.getElementById('top-mini-box-4').style.opacity = '1';
    document.getElementById('top-mini-box-4').style.transition = '0.3s';
    document.getElementById('top-mini-box-4-text').innerHTML = 'Outdoor Design';
})
document.getElementById('top-mini-box-4').addEventListener('mouseleave', function() {
    document.getElementById('top-mini-box-4').style.opacity = '0';
    document.getElementById('top-mini-box-4').style.transition = '0.3s';
    document.getElementById('top-mini-box-4-text').innerHTML = '';
})