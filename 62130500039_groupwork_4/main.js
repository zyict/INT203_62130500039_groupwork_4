    class Member{
        constructor(text){
            this.text = text;
        }
    }
    
    const app = {
        data() {
            return {
                memberList: [{
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
                    this.memberList[index].like = !this.memberList[index].like
                    this.memberList[index].unlike = !this.memberList[index].unlike
            
            },
            showSearch(){
                this.search.clicked = !this.search.clicked
                this.search.notclick = !this.search.notclick
                this.searchText=''
            }
            
        },
        computed: {
            countLiked() {
                return this.memberList.filter( t => t.like ).length
            },
            searchMember(){
                return this.memberList.filter(member =>{
                    return member.text.toUpperCase().includes(this.searchText.toUpperCase())
                })
            }
        }
    }

    Vue.createApp(app).mount('#app')