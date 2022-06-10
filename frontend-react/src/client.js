import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: '6gy48rtv', // find this at manage.sanity.io or in your sanity.json
    dataset: 'production', // this is from those question during 'sanity init'
    apiVersion: '2022-06-10', // use a UTC date string
    useCdn: true,
});
