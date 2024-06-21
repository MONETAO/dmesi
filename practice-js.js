document.addEventListener('DOMContentLoaded', function() {
    // 各スライドショーに対応する画像フォルダーと画像リスト


    var slideshows = {
        'slideshow-horizontal': {
            folder: 'image/DR/',
            images: [
                "DLR1.jpg", "DLR2.jpg", "DLR3.jpg", "DLR4.jpg", "DLR5.jpg",
                "DLR6.jpg", "DLR7.jpg", "DLR8.jpg", "DLR9.jpg", "DLR10.jpg",
                "DLR11.jpg", "DLR12.jpg", "DLR13.jpg", "DLR14.jpg", "DLR15.jpg",
                "DLR16.jpg", "DLR17.jpg", "DLR18.jpg", "DLR19.jpg", "DLR20.jpg",
                "DLR21.jpg", "DLR22.jpg", "DLR23.jpg", "DLR24.jpg", "DLR25.jpg",
                "DLR26.jpg", "DLR27.jpg", "DLR28.jpg", "DLR29.jpg", "DLR30.jpg",
                "DLR31.jpg", "DLR32.jpg", "DLR33.jpg", "DLR34.jpg", "DLR35.jpg",
                "DLR36.jpg", "DLR37.jpg", "DLR38.jpg",     "DSR1.jpg", "DSR2.jpg", "DSR3.jpg", "DSR4.jpg", "DSR5.jpg",
                "DSR6.jpg", "DSR7.jpg", "DSR8.jpg", "DSR9.jpg", "DSR10.jpg",
                "DSR11.jpg", "DSR12.jpg", "DSR13.jpg", "DSR14.jpg", "DSR15.jpg",
                "DSR16.jpg", "DSR17.jpg", "DSR18.jpg", "DSR19.jpg", "DSR20.jpg",
                "DSR21.jpg", "DSR22.jpg", "DSR23.jpg", "DSR24.jpg", "DSR25.jpg",
                "DSR26.jpg", "DSR27.jpg", "DSR28.jpg", "DSR29.jpg", "DSR30.jpg",
                "DSR31.jpg", "DSR32.jpg", "DSR33.jpg", "DSR34.jpg", "DSR35.jpg",
                "DSR36.jpg", "DSR37.jpg", "DSR38.jpg", "DSR39.jpg"
            ]
        },
        'slideshow-vertical-1': {
            folder: 'image/DS-food/',
            images: [
                "DS.R1.1.jpg", "DS.R1.2.jpg", "DS.R1.3.jpg", "DS.R1.4.jpg", "DS.R1.5.jpg",
                "DS.R1.6.jpg", "DS.R1.7.jpg", "DS.R1.8.jpg", "DS.R1.9.jpg", "DS.R1.10.jpg",
                "DS.R1.11.jpg", "DS.R1.12.jpg", "DS.R1.13.jpg", "DS.R1.14.jpg", "DS.R2.1.jpg",
                "DS.R2.2.jpg", "DS.R2.3.jpg", "DS.R2.4.jpg", "DS.R2.5.jpg", "DS.R3.1.jpg",
                "DS.R3.2.jpg", "DS.R3.3.jpg", "DS.R3.4.jpg", "DS.R3.5.jpg", "DS.R3.6.jpg",
                "DS.R3.7.jpg", "DS.R3.8.jpg", "DS.R4.1.jpg", "DS.R4.2.jpg", "DS.R4.3.jpg",
                "DS.R4.4.jpg", "DS.R5.1.jpg", "DS.R5.2.jpg", "DS.R5.3.jpg", "DS.R5.4.jpg",
                "DS.R5.5.jpg", "DS.R5.6.jpg", "DS.R5.7.jpg", "DS.R6.3.jpg", "DS.R6.4.jpg",
                "DS.R6.6.jpg", "DS.R6.7.jpg", "DS.R6.8.jpg", "DS.R6.9.jpg", "DS.R6.10.jpg",
                "DS.R6.11.jpg", "DS.R6.12.jpg", "DS.R7.1.jpg", "DS.R7.2.jpg", "DS.R7.3.jpg",
                "DS.R9.1.jpg", "DS.R9.2.jpg", "DS.R9.3.jpg", "DS.R9.4.jpg", "DS.R9.5.jpg",
                "DS.R9.6.jpg", "DS.R9.7.jpg", "DS.R10.1.jpg", "DS.R10.2.jpg", "DS.R11.1.jpg",
                "DS.R14.1.jpg", "DS.R14.2.jpg", "DS.R14.3.jpg", "DS.R14.4.jpg", "DS.R18.1.jpg",
                "DS.R19.1.jpg", "DS.R19.2.jpg", "DS.R19.3.jpg", "DS.R19.4.jpg", "DS.R19.5.jpg",
                "DS.R21.1.jpg", "DS.R22.1.jpg", "DS.R22.2.jpg", "DS.R23.1.jpg", "DS.R23.2.jpg",
                "DS.R23.3.jpg", "DS.R23.4.jpg", "DS.R23.5.jpg", "DS.R24.1.jpg", "DS.R25.1.jpg",
                "DS.R26.1.jpg", "DS.R26.2.jpg", "DS.R26.3.jpg", "DS.R26.4.jpg", "DS.R26.5.jpg",
                "DS.R26.6.jpg", "DS.R27.1.jpg", "DS.R27.2.jpg", "DS.R27.3.jpg", "DS.R27.4.jpg",
                "DS.R27.5.jpg", "DS.R27.6.jpg", "DS.R28.1.jpg", "DS.R28.2.jpg", "DS.R29.1.jpg",
                "DS.R30.1.jpg", "DS.R30.2.jpg", "DS.R30.3.jpg", "DS.R30.4.jpg", "DS.R30.5.jpg",
                "DS.R30.6.jpg", "DS.R30.7.jpg", "DS.R31.1.jpg", "DS.R31.2.jpg", "DS.R32.1.jpg",
                "DS.R32.2.jpg", "DS.R32.3.jpg", "DS.R33.1.jpg", "DS.R33.2.jpg", "DS.R33.3.jpg",
                "DS.R33.4.jpg", "DS.R33.5.jpg", "DS.R33.6.jpg", "DS.R33.7.jpg", "DS.R33.8.jpg",
                "DS.R33.9.jpg", "DS.R33.10.jpg", "DS.R34.1.jpg", "DS.R35.1.jpg", "DS.R36.1.jpg",
                "DS.R36.2.jpg", "DS.R37.1.jpg", "DS.R38.1.jpg", "DS.R38.2.jpg", "DS.R38.3.jpg",
                "DS.R38.4.jpg", "DS.R38.5.jpg", "DS.R38.6.jpg", "DS.R38.7.jpg", "DS.R39.1.jpg",
                "DS.R39.2.jpg", "DS.R39.3.jpg", "DS.R39.4.jpg"
            ]
        },
        'slideshow-vertical-2': {
            folder: 'image/DL-food/',
            images: [
                "DL.R1.1.jpg", "DL.R1.2.jpg", "DL.R2.1.jpg", "DL.R2.2.jpg", "DL.R2.3.jpg",
                "DL.R2.4.jpg", "DL.R2.5.jpg", "DL.R2.6.jpg", "DL.R2.7.jpg", "DL.R3.1.jpg",
                "DL.R4.1.jpg", "DL.R4.2.jpg", "DL.R4.3.jpg", "DL.R4.4.jpg", "DL.R4.5.jpg",
                "DL.R4.6.jpg", "DL.R4.7.jpg", "DL.R4.8.jpg", "DL.R4.9.jpg", "DL.R4.10.jpeg",
                "DL.R4.11.jpg", "DL.R4.12.jpg", "DL.R4.13.jpg", "DL.R4.14.jpg", "DL.R4.15.jpg",
                "DL.R5.1.jpg", "DL.R5.2.jpg", "DL.R5.3.jpg", "DL.R5.4.jpg", "DL.R5.5.jpg",
                "DL.R5.6.jpg", "DL.R5.7.jpg", "DL.R5.8.jpg", "DL.R6.1.jpg", "DL.R6.2.jpg",
                "DL.R6.3.jpg", "DL.R6.4.jpg", "DL.R7.1.jpg", "DL.R7.2.jpg", "DL.R7.3.jpg",
                "DL.R7.4.jpg", "DL.R7.5.jpg", "DL.R7.6.jpg", "DL.R8.1.jpg", "DL.R8.2.jpg",
                "DL.R8.3.jpg", "DL.R8.4.jpg", "DL.R9.1.jpg", "DL.R9.2.jpg", "DL.R10.1.jpg",
                "DL.R10.2.jpg", "DL.R11.1.jpg", "DL.R12.1.jpg", "DL.R12.2.jpg", "DL.R13.1.jpg",
                "DL.R13.2.jpg", "DL.R13.3.jpg", "DL.R13.4.jpg", "DL.R13.5.jpg", "DL.R14.1.jpg",
                "DL.R15.1.jpg", "DL.R16.1.jpg", "DL.R16.2.jpg", "DL.R16.3.jpg", "DL.R17.1.jpg",
                "DL.R18.1.jpg", "DL.R19.1.jpg", "DL.R20.1.jpg", "DL.R20.2.jpg", "DL.R20.3.jpg",
                "DL.R20.4.jpg", "DL.R20.5.jpg", "DL.R21.1.jpg", "DL.R22.1.jpg", "DL.R22.2.jpg",
                "DL.R22.3.jpg", "DL.R22.4.jpg", "DL.R22.5.jpg", "DL.R23.1.jpg", "DL.R23.2.jpg",
                "DL.R23.3.jpg", "DL.R23.4.jpg", "DL.R23.5.jpg", "DL.R23.6.jpg", "DL.R23.7.jpg",
                "DL.R23.8.jpg", "DL.R24.1.jpg", "DL.R25.1.jpg", "DL.R25.2.jpg", "DL.R25.3.jpg",
                "DL.R26.1.jpg", "DL.R26.2.jpg", "DL.R26.3.jpg", "DL.R26.4.jpg", "DL.R27.1.jpg",
                "DL.R27.2.jpg", "DL.R27.3.jpg", "DL.R27.4.jpg", "DL.R27.5.jpg", "DL.R27.6.jpg",
                "DL.R28.1.jpg", "DL.R28.2.jpg", "DL.R28.3.jpg", "DL.R28.4.jpg", "DL.R28.5.jpg",
                "DL.R28.6.jpg", "DL.R28.7.jpg", "DL.R28.8.jpg", "DL.R28.9.jpg", "DL.R28.10.jpg",
                "DL.R29.1.jpg", "DL.R29.2.jpg", "DL.R30.1.jpg", "DL.R32.1.jpg", "DL.R32.2.jpg",
                "DL.R32.3.jpg", "DL.R32.4.jpg", "DL.R32.5.jpg", "DL.R32.6.jpg", "DL.R32.7.jpg",
                "DL.R33.1.jpg", "DL.R35.1.jpg", "DL.R35.2.jpg", "DL.R35.3.jpg", "DL.R35.4.jpg",
                "DL.R35.5.jpg", "DL.R35.6.jpg", "DL.R36.1.jpg", "DL.R36.2.jpg", "DL.R36.3.jpg",
                "DL.R36.4.jpg", "DL.R37.1.jpg", "DL.R37.2.jpg", "DL.R37.3.jpg", "DL.R38.1.jpg",
                "DL.R38.2.jpg", "DL.R38.3.jpg", "DL.R38.4.jpg", "DL.R38.5.jpg"
            ]
        }
    };


    function addImagesToSlideshow(slideshowId, images, folder) {
        var slideshow = document.getElementById(slideshowId);
        images.forEach(function(imageName) {
            var li = document.createElement('li');
            li.className = 'content';
            var img = document.createElement('img');
            img.src = folder + imageName;
            img.alt = imageName;
            li.appendChild(img);
            slideshow.appendChild(li);
        });
        if (slideshowId === 'slideshow-horizontal') {
            images.forEach(function(imageName) {
                var li = document.createElement('li');
                li.className = 'content';
                var img = document.createElement('img');
                img.src = folder + imageName;
                img.alt = imageName;
                li.appendChild(img);
                slideshow.appendChild(li);
            });
        }
    }

    for (var slideshowId in slideshows) {
        var slideshow = slideshows[slideshowId];
        addImagesToSlideshow(slideshowId, slideshow.images, slideshow.folder);
    }

    document.querySelectorAll('.slideshow.vertical').forEach(slideshow => {
        slideshow.style.animationPlayState = 'running';
    });

    var wrap2Slideshow = document.getElementById('slideshow-horizontal');
    wrap2Slideshow.style.animationPlayState = 'running';

    // 縦方向のスクロールを防ぐ
    window.addEventListener('scroll', function() {
        window.scrollTo(window.scrollX, 0);
    });

    // 横スクロールをトリガー
    document.addEventListener('keydown', function(event) {
        const main = document.querySelector('main');
        const scrollAmount = window.innerWidth;

        if (event.key === 'ArrowRight') {
            main.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        } else if (event.key === 'ArrowLeft') {
            main.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    });

    // マウスホイールで横スクロール
    document.querySelector('main').addEventListener('wheel', function(event) {
        if (event.deltaY != 0) {
            event.preventDefault();
            this.scrollBy({
                left: event.deltaY < 0 ? -window.innerWidth : window.innerWidth,
                behavior: 'smooth'
            });
        }
    });
});