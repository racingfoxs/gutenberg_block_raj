//import from libary wordpress
const { registerBlockType } = wp.blocks;

registerBlockType('raj/custom-cta', {
    title: 'Call to Action',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        author: {
            type: 'string'
        }
    },
    // custom functions


    //build functions
    edit({ attributes, setAttributes }) {

        //jsx

        function updateAuthor(event) {
            setAttributes( { author: event.target.value } );
            // console.log(event.target.value);
        }

        return <input value={ attributes.author } onChange={ updateAuthor } type="text" />;
    },

    save({ attributes }) {
        return <p>Author Name: <i>{ attributes.author }</i></p>;
    }
});