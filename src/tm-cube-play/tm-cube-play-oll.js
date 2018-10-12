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
class TmCubePlayOll extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    border: solid lightgray 1px;
                  display: inline-block;
                  box-sizing: border-box;
                }
                tm-aspect-div {
                    --tm-aspect-div-border: solid green 1px;
                    --tm-aspect-div-padding: 10px;
                    //border: solid purple 2px;
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                }
                
                tm-cube-play-layout {
                    width:100%;
                    height:100%;
                }
                
            </style>
            
            <iron-ajax id="data" auto
                url="../data/algs/oll.json"
                handle-as="json"
                last-response="{{cases}}"></iron-ajax>
                
            <tm-aspect-div id="a" aspect="1">
                <tm-cube-play-layout>
                   <tm-cube-image-top slot="center" no-arrows id="cube" stickers="yyy yyy yyy | ooo ggg rrr bbb" colors="{{colors}}"></tm-cube-image-top>
        
                   <template is="dom-repeat" items="[[cases]]" as="case">
                        <tm-cube-image-top slot="[[case.slot]]" on-select="_algSelected" no-move stickers="[[case.stickers]]" arrows="[[case.arrows]]" flips="[[case.flips]]"></tm-cube-image-top>
                   </template>
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
        console.log('--- OLL cases have changed: ', cases);
    }

    _colorsChanged(colors) {
        console.log('--- OLL colors Changed: ', colors);
    }

    _algSelected(e)
    {
        console.log('ALG SELECTED: ', e.detail);
        this.$.cube.arrows = e.detail.arrows;
        this.$.cube.flips = e.detail.flips;
        this.$.cube.move();
    }


    connectedCallback() {
        super.connectedCallback();
        console.log("------- tm-cube-play-view2 has been attached to the DOM.");
    }


    ready() {
        super.ready();


        console.log('Good to go.');

    }
}

window.customElements.define('tm-cube-play-oll', TmCubePlayOll);
