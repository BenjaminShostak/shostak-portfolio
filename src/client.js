import sanityClient from '@sanity/client'

export default sanityClient({
    projectId:"425f4oxi",
    dataset: "production",
    useCdn: true
});