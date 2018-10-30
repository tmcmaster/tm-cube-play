import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax';

import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import 'tm-cube-image/tm-cube-image-top.js';
import 'tm-aspect-div/tm-aspect-div.js'
import './tm-cube-play-layout.js';

/**
 * @customElement
 * @polymer
 */
// TODO: need to sort out border-box sizing issue
class TmCubePlayPll extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    border: solid lightgray 1px;
                  display: inline-block;
                  box-sizing: border-box;
                  -webkit-user-select: none;
                    /* Chrome/Safari */
                    -moz-user-select: none;
                    /* Firefox */
                    -ms-user-select: none;
                    /* IE10+ */
                }
                tm-aspect-div {
                    //--tm-aspect-div-border: solid green 1px;
                    --tm-aspect-div-padding: 10px;
                    //border: solid purple 2px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                }
            </style>
            
            <iron-ajax id="data" auto
                url="../data/algs/pll.json"
                handle-as="json"
                last-response="{{cases}}"></iron-ajax>
                
            <tm-aspect-div id="a" aspect="1">
                <tm-cube-play-layout>
                
                    
                    <!-- Rotate Left -->
                    <tm-cube-image-top slot="top" on-select="_algSelected" no-move stickers="yyy yyy yyy | ooo ggg rrr bbb" arrows="1>7,7>9,9>3,3>1,2>4,4>8,8>6,6>2"></tm-cube-image-top>
                    <!-- J Perm - Left -->
                    <tm-cube-image-top slot="top" on-select="_algSelected" no-move stickers="yyy yyy yyy | boo ggg rbb orr" arrows="1>7, 7>1, 4>8, 8>4"></tm-cube-image-top>
                    <!-- T Perm -->
                    <tm-cube-image-top slot="top" on-select="_algSelected" no-move stickers="yyy yyy yyy | oog rbo grr bgb" arrows="3>9, 9>3, 6>4, 4>6"></tm-cube-image-top>
                    <!-- J Perm - Right -->
                    <tm-cube-image-top slot="top" on-select="_algSelected" no-move stickers="yyy yyy yyy | oog rro ggr bbb" arrows="3>9, 9>3, 6>8, 8>6"></tm-cube-image-top>
                    <!-- Rotate Right -->
                    <tm-cube-image-top slot="top" on-select="_algSelected" no-move stickers="yyy yyy yyy | ooo ggg rrr bbb" arrows="1>3,3>9,9>7,7>1,2>6,6>8,8>4,4>2"></tm-cube-image-top>
                
                    <!----------------------------------->
                    
                    
                    <!----------------------------------->
                    
                    <!-- Center -->
                    <tm-cube-image-top slot="center" no-arrows id="cube" stickers="yyy yyy yyy | ooo ggg rrr bbb" colors="{{colors}}"></tm-cube-image-top>
    
                    <!----------------------------------->
                    
                    
                    <!----------------------------------->
                    
                    <!-- A Perm - Left -->
                    <tm-cube-image-top slot="bottom" on-select="_algSelected" no-move stickers="yyy yyy yyy | gog rgb orr bbo" arrows="9>1,1>3,3>9"></tm-cube-image-top>
                    <!-- U Perm - Left -->
                    <tm-cube-image-top slot="bottom" on-select="_algSelected" no-move stickers="yyy yyy yyy | ooo gbg rgr brb" arrows="4>6, 6>8, 8>4"></tm-cube-image-top>
                    <!-- Opposite Edges -->
                    <tm-cube-image-top slot="bottom" on-select="_algSelected" no-move stickers="yyy yyy yyy | oro gbg ror bgb" arrows="2>8, 8>2, 4>6, 6>4"></tm-cube-image-top>
                    <!-- U Perm - Right -->
                    <tm-cube-image-top slot="bottom" on-select="_algSelected" no-move stickers="yyy yyy yyy | ooo grg rbr bgb" arrows="4>8, 8>6, 6>4"></tm-cube-image-top>
                    <!-- A Perm - Right -->
                    <tm-cube-image-top slot="bottom" on-select="_algSelected" no-move stickers="yyy yyy yyy | bob ogg rro gbr" arrows="7>3,3>1,1>7"></tm-cube-image-top>
                
                </tm-cube-play-layout>
            </tm-aspect-div>
           
        `;
    }

    static get properties() {
        return {
            colors: {
                type: Array,
                notify: true,
                observer: '_colorsChanged'
            },
            cases: {
                type: Array,
                value: [],
                observer: '_casesChanged'
            }
        };
    }

    _casesChanged(cases) {
        //console.log('--- PLL cases have changed: ', cases);
    }

    _colorsChanged(colors) {
        //console.log('--- PLL colors Changed: ', colors);
    }

    _algSelected(e)
    {
        //console.log('ALG SELECTED: ', e.detail);
        this.$.cube.arrows = e.detail.arrows;
        this.$.cube.flips = e.detail.flips;
        this.$.cube.move();
    }

    // refresh() {
    //     if (this.$ !== undefined) {
    //         this.$.a.resize();
    //     }
    // }
    connectedCallback() {
        super.connectedCallback();
        //console.log("------- tm-cube-play-view2 has been attached to the DOM.");
    }


    ready() {
        super.ready();

        //console.log('Good to go.');
    }
}

window.customElements.define('tm-cube-play-pll', TmCubePlayPll);
