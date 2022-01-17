const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: '1lb16mcn',
    dataset: 'production',
    useCdn: true // `false` if you want to ensure fresh data
})