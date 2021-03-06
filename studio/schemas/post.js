export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // // will be ignored if slugify is set
                slugify: input => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200),
                isUnique: proposedSlug => true,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishDate',
      title: 'Published Date',
      type: 'date',
      options: {
        dataeFormat: 'YYYY-MM-DD',
        calendarTodayLabel: 'today',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'body',
      title: 'Post Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
