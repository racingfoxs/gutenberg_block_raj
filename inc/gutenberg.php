<?php

/*
    Raj Guternberg Functios
*/


function rp_gutenberg_default_colors()
{
    add_theme_support(
        'editor-color-palette',
        array(
            array(
                'name' => 'White',
                'slug' => 'white',
                'color' => '#ffffff'
            ),
            array(
                'name' => 'Black',
                'slug' => 'black',
                'color' => '#000000'
            ),
            array(
                'name' => 'Pink',
                'slug' => 'pink',
                'color' => '#ff4444'
            )
        )
    );
}

add_action( 'init', 'rp_gutenberg_default_colors', 11 );

function rp_gutenberg_blocks()
{
    wp_register_script( 'custom-cta-js', get_template_directory_uri() . '/build/index.js', array( 'wp-blocks' ));

    register_block_type( 'raj/custom-cta', array(
        'editor_script' => 'custom-cta-js'
    ) );
}
add_action( 'init', 'rp_gutenberg_blocks' );