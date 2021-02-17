    const app = {
        data() {
            return {
                members: [{
                        image: './images/miyeon.jpg',
                        text: 'MIYEON',
                        like: false,
                        unlike: true
                    },
                    {
                        image: './images/minnie.jpg',
                        text: 'MINNIE',
                        like: false,
                        unlike: true
                    },
                    {
                        image: './images/soojin.jpg',
                        text: 'SOOJIN',
                        like: false,
                        unlike: true
                    },
                    {
                        image: './images/soyeon.jpg',
                        text: 'SOYEON',
                        like: false,
                        unlike: true
                    },
                    {
                        image: './images/yuqi.jpg',
                        text: 'YUQI',
                        like: false,
                        unlike: true
                    },
                    {
                        image: './images/shuhua.jpg',
                        text: 'SHUHUA',
                        like: false,
                        unlike: true
                    }
                ],
                search: {clicked: false, notclick: true},
                searchText: ''
                
            }
        },
        methods: {
            toggleLike(index) {
                    this.members[index].like = !this.members[index].like
                    this.members[index].unlike = !this.members[index].unlike
            
            },
            showSearch(){
                this.search.clicked = !this.search.clicked
                this.search.notclick = !this.search.notclick
            },
            searchMember(){
    
            }
        },
        computed: {
            countLiked() {
                return this.members.filter( t => t.like ).length
            }
        }
    }

    Vue.createApp(app).mount('#app')