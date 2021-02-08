export default{
    state: {
        news: [{
            id : 1,
            imgName : 'news1.jpg',
            imgAlt : 'Notice 1',
            newsTitle : "Begin the training for season",
            newsContent : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint possimus laudantium sequi adipisci vitae sit ipsa reiciendis repellendus laboriosam quibusdam cum ducimus mollitia, itaque magni porro molestiae quos facilis!"
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolorum cupiditate facilis temporibus distinctio alias. Iure, iusto in porro magni, eaque eum doloribus molestias eveniet facere eos nemo quam doloremque?`,
            newsDate : '2020-02-06'
        },
        {
            id : 2,
            imgName : 'news2.jpg',
            imgAlt : 'Notice 2',
            newsTitle : "Incredible tips for play FIFA 2021 (UPDATED)",
            newsContent : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint possimus laudantium sequi adipisci vitae sit ipsa reiciendis repellendus laboriosam quibusdam cum ducimus mollitia, itaque magni porro molestiae quos facilis!"
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolorum cupiditate facilis temporibus distinctio alias. Iure, iusto in porro magni, eaque eum doloribus molestias eveniet facere eos nemo quam doloremque?`,
            newsDate : '2020-02-02'
        },
        {
            id: 3,
            imgName : 'news3.jpg',
            imgAlt : 'Notice 3',
            newsTitle : "Check now the score of Champions League",
            newsContent : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint possimus laudantium sequi adipisci vitae sit ipsa reiciendis repellendus laboriosam quibusdam cum ducimus mollitia, itaque magni porro molestiae quos facilis!"
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat dolorum cupiditate facilis temporibus distinctio alias. Iure, iusto in porro magni, eaque eum doloribus molestias eveniet facere eos nemo quam doloremque?`,
            newsDate : '2020-02-01'
        }]
    },

    getters: {
        getNews(state){
            return state.news
        },
        getNewsFromId: state => id => {
            let notice = state.news.find(item => {
                return (item.id == id)
            });
            return notice;

        }
    }
    }
