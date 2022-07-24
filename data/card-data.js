/* Card data */
const cardData = [
    {
        img: 'assets/images/blog-thumb-01.jpg',
        link: 'post-details.html',
        title: 'Donec tincidunt leo',
        author: 'Andriy Fedevych',
        desc: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
        date: 'May 28, 2022'
    },
    {
        img: 'assets/images/blog-thumb-03.jpg',
        link: 'post-details.html',
        title: 'Donec tincidunt leo',
        author: 'Andriy Fedevych',
        desc: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
        date: 'May 28, 2022'
    },
    {
        img: 'assets/images/blog-thumb-05.jpg',
        link: 'post-details.html',
        title: 'Donec tincidunt leo',
        author: 'Andriy Fedevych',
        desc: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
        date: 'May 28, 2022'
    },
    {
        img: 'assets/images/blog-thumb-06.jpg',
        link: 'post-details.html',
        title: 'Donec tincidunt leo',
        author: 'Andriy Fedevych',
        desc: 'Nullam nibh mi, tincidunt sed sapien ut, rutrum hendrerit velit. Integer auctor a mauris sit amet eleifend.',
        date: 'May 28, 2022'
    },
];

let cardBlogPosts = document.querySelector('.card-blog-posts');


for (let i = 0; i < cardData.length; i++) {
    let card = document.createElement('div');
    card.classList.add('col-lg-6');
    card.innerHTML = `<div class="blog-post">
                        <div class="blog-thumb">
                        <img src="${cardData[i].img}" alt="">
                        </div>
                        <div class="down-content">  
                        <a href="${cardData[i].link}">
                            <h4>Donec tincidunt leo</h4>
                        </a>
                        <ul class="post-info">
                            <li><a href="#">${cardData[i].author}</a></li>
                            <li><a href="#">${cardData[i].date}</a></li>
                        </ul>
                        <p>${cardData[i].desc}</p>   
                        </div>
                    </div>`;
    cardBlogPosts.append(card);
}

