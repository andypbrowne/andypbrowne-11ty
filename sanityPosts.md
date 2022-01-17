---js
{
    pagination: {
        data: "posts", 
        size: 1, 
        alias: "post",
        addAllPagesToCollections: true
    },
    tags: ['post'],
    layout: "base.html",
    eleventyComputed: {
        title: data => data.post.title,
        description: data => data.post.descripiton,
        permalink: data => `/blog/${data.post.slug.current}/index.html`, 
    }
}
---

{{ post.body }}
