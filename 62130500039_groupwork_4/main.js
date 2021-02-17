    const app = {
        data() {
            return {
                members: [{
                        image: './images/miyeon.jpg',
                        text: 'MIYEON',
                        done: false
                    },
                    {
                        image: './images/minnie.jpg',
                        text: 'MINNIE',
                        done: false
                    },
                    {
                        image: './images/soojin.jpg',
                        text: 'SOOJIN',
                        done: false
                    },
                    {
                        image: './images/soyeon.jpg',
                        text: 'SOYEON',
                        done: false
                    },
                    {
                        image: './images/yuqi.jpg',
                        text: 'YUQI',
                        done: false
                    },
                    {
                        image: './images/shuhua.jpg',
                        text: 'SHUHUA',
                        done: false
                    }
                ],
                search: {clicked: false, notclick: true}
                
            }
        },
        methods: {
            toggleDone(index) {
                this.members[index].done = !this.members[index].done
            },
            showSearch(){
                this.search.clicked = !this.search.clicked
                this.search.notclick = !this.search.notclick
            },
            searchMember(){

            }
        },
        computed: {
            countUndone() {
                return this.members.filter( t => t.done ).length
            }
        }
    }

    Vue.createApp(app).mount('#app')