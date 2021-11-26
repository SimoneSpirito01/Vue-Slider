const app = new Vue({
    el: '#root',
    data: {
        images: [
            {
                title: 'Svezia',
                url: 'img/01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                title: 'Svizzera',
                url: 'img/02.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Gran Bretagna',
                url: 'img/03.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                title: 'Germania',
                url: 'img/04.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Paradise',
                url: 'img/05.jpg',
                text: 'Lorem ipsum',
            }
        ],
        activeImage : 0,
        autoPlayId: ''
    },
    methods: {
        prevImage : function(){
            (this.activeImage == 0) ? this.activeImage = this.images.length - 1 : this.activeImage--
        },
        nextImage : function(){
            (this.activeImage == this.images.length - 1) ? this.activeImage = 0 : this.activeImage++
        },
        autoPlay: function(){
            this.autoPlayId = setInterval(this.nextImage, 1000);
        },
        pauseAutoPlay: function(){
            clearInterval(this.autoPlayId);
        }
    },
    mounted() {
        this.autoPlay()
    }
})