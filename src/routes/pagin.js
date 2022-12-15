function Blog (){
    // let path = 'blog';
    let path = window.location.pathname;

    // if(page!==1)path = path + '/page=' + page;
    // console.log(path)
    return (path);
};

export default Blog;