!function(){"use strict";var e={};function t(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,{a:o}),o},e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o=window.blocksyCustomizerSync,n=window.ctEvents;function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e.n(n)().on("ct:customizer:sync:collect-variable-descriptors",(function(e){e.result=i(i(i(i(i(i(i({trending_block_thumbnails_width:{selector:".ct-trending-block-item",variable:"trending-block-image-width",responsive:!0,unit:"px"},trendingItemsVerticalAlignment:{selector:".ct-trending-block-item",variable:"vertical-alignment",responsive:!0,unit:""}},(0,o.typographyOption)({id:"trendingBlockHeadingFont",selector:".ct-trending-block .ct-module-title"})),{},{trendingBlockHeadingFontColor:{selector:".ct-trending-block .ct-module-title",variable:"theme-heading-color",type:"color",responsive:!0}},(0,o.typographyOption)({id:"trendingBlockPostsFont",selector:".ct-trending-block-item .ct-post-title"})),{},{trendingBlockFontColor:[{selector:".ct-trending-block-item .ct-post-title",variable:"theme-link-initial-color",type:"color:default",responsive:!0},{selector:".ct-trending-block-item .ct-post-title",variable:"theme-link-hover-color",type:"color:hover",responsive:!0}]},(0,o.typographyOption)({id:"trendingBlockTaxonomyFont",selector:".ct-trending-block-item-content .entry-meta"})),{},{trending_categories_font_colors:[{selector:".ct-trending-block-item-content .entry-meta",variable:"theme-link-initial-color",type:"color:default",responsive:!0},{selector:".ct-trending-block-item-content .entry-meta",variable:"theme-link-hover-color",type:"color:hover",responsive:!0}],trending_categories_button_type_font_colors:[{selector:'.ct-trending-block-item-content [data-type="pill"]',variable:"theme-button-text-initial-color",type:"color:default",responsive:!0},{selector:'.ct-trending-block-item-content [data-type="pill"]',variable:"theme-button-text-hover-color",type:"color:hover",responsive:!0}],trending_categories_button_type_background_colors:[{selector:'.ct-trending-block-item-content [data-type="pill"]',variable:"theme-button-background-initial-color",type:"color:default",responsive:!0},{selector:'.ct-trending-block-item-content [data-type="pill"]',variable:"theme-button-background-hover-color",type:"color:hover",responsive:!0}]},(0,o.typographyOption)({id:"trendingBlockPriceFont",selector:".ct-trending-block-item-content .price"})),{},{trendingBlockPriceFontColor:{selector:".ct-trending-block-item-content .price",variable:"theme-text-color",type:"color",responsive:!0},trendingBlockImageRadius:{selector:".ct-trending-block-item",type:"spacing",variable:"trending-block-image-radius",responsive:!0},trendingBlockArrowsColor:[{selector:'.ct-trending-block [class*="ct-arrow"]',variable:"theme-text-color",type:"color:default",responsive:!0},{selector:'.ct-trending-block [class*="ct-arrow"]',variable:"theme-link-hover-color",type:"color:hover",responsive:!0}]},(0,o.handleBackgroundOptionFor)({id:"trending_block_background",selector:".ct-trending-block",responsive:!0})),e.result),{},{trendingBlockContainerSpacing:{selector:".ct-trending-block",variable:"padding",responsive:!0,unit:""}})})),wp.customize("trending_block_visibility",(function(e){return e.bind((function(e){return(0,o.responsiveClassesFor)("trending_block_visibility",document.querySelector(".ct-trending-block"))}))})),wp.customize("trending_block_label",(function(e){return e.bind((function(e){var t=document.querySelector(".ct-trending-block .ct-module-title");if(t){var o=t.innerHTML.split("<svg");o[0]=e,t.innerHTML=o.join("<svg")}}))}))}();