export default class RedrawAboutTeaArticle {
    constructor(draw) {
        this.draw = draw;

        this.pictureList = this.draw.querySelector('.mod-t-art__img-bottom-list');
        this.images = null;
        this.imgAmount = null;

        this.videoList = this.draw.querySelector('.mod-t-art__wr-video');
        this.videos = null;
        this.videosAmount = null;
    }

    initMedia() {
        // инициализация видео и картинок
        this.initPicture();
        this.initVideo();
    }

    initPicture() {
        this.images = this.pictureList.children;
        this.imgAmount = this.images.length;

        // если нет потомков дективируем
        if(this.imgAmount === 0) {
            this.pictureList.classList.add('mod-t-art__img-bottom-list_unactive');
            return;
        }

        this.setSizesImg();
    }

    initVideo() {
        this.videos = this.videoList.children;
        this.videosAmount = this.videos.length;

        // если нет потомков дективируем
        if(this.videosAmount === 0) {
            this.videoList.classList.add('mod-t-art__wr-video_unactive');
            return;
        }

        this.setSizesVideo();
    }

    setSizesVideo() {
        // если видео одно оставляем настройки по умолчанию
        if(this.videosAmount === 1) {
            return;
        }

        // если видео больше одного
        if(this.videosAmount > 1) {
            this.videoList.classList.add('mod-t-art__wr-video_more');

            [...this.videos].forEach( item => {
                item.classList.add('mod-t-art__video_more');
            })
        }

        // если видео четное количество
        if(this.videosAmount % 2 === 0) {
            this.videoList.classList.add('mod-t-art__wr-video_even');
        }

        // если видео не четное количество
        if(this.videosAmount % 2 === 1) {
            this.videoList.classList.add('mod-t-art__wr-video_odd');
        }
    }

    setSizesImg() {
        // если изображение одно
        if(this.imgAmount === 1) {
            this.images[0].classList.add('mod-t-art__wr-img-bottom-item_one');

            return;
        }

        // все что ниже если изображений больше одного
        this.pictureList.classList.add('mod-t-art__img-bottom-list_more');

        [...this.images].forEach( item => {
            item.classList.add('mod-t-art__wr-img-bottom-item_more');
        })

        // по необходимости можно добавить распознавание четного и не четного количества изображений
    }
}

