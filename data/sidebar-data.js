/* sidebar data */
const sidebarData = [
    {
        title: 'Vestibulum id turpis porttitor sapien facilisis scelerisque',
        link: 'post-details.html',
        createDate: 'May 31, 2022'
    },
    {
        title: 'Suspendisse et metus nec libero ultrices varius eget in risus',
        link: 'post-details.html',
        createDate: 'May 28, 2022'
    },
    {
        title: 'Swag hella echo park leggings, shaman cornhole ethical coloring',
        link: 'post-details.html',
        createDate: 'May 14, 2022'
    },
    {
        title: 'Swag hella echo park leggings, shaman cornhole ethical coloring',
        link: 'post-details.html',
        createDate: 'May 14, 2022'
    },
];

let myPosts = document.querySelector('.my-posts');

for (let i = 0; i < sidebarData.length; i++) {
    let listSidebar = document.createElement('li');
    listSidebar.innerHTML = `<a href="${sidebarData[i].link}">
                                <h5>${sidebarData[i].title}</h5>
                                <span>${sidebarData[i].createDate}</span>
                            </a>`;
    myPosts.append(listSidebar);
}
