//import from libary wordpress
const { registerBlockType } = wp.blocks;

registerBlockType('raj/custom-cta', {
    title: 'Call to Action',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {},

    // custom functions


    //build functions
    edit() {
        //jsx
        return <div>Hello WOrld</div>;
    },

    save() {}
});