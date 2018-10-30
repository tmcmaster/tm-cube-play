import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax';

import 'tm-cube-image/tm-cube-image.js';
import 'tm-cube-image/tm-cube-image-top.js';
import 'tm-aspect-div/tm-aspect-div.js'
import './tm-cube-play-layout.js';

/**
 * @customElement
 * @polymer
 */
class TmCubePlayCross extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                  display: inline-block;
                  border: solid lightgray 1px;
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
                url="../data/algs/cross.json"
                handle-as="json"
                last-response="{{cases}}"></iron-ajax>
                
            <tm-aspect-div id="a" aspect="1" fullscreen>
                <tm-cube-play-layout>
                
                    <template is="dom-repeat" items="[[cases]]" as="case">
                        <tm-cube-image slot="[[case.slot]]" stickers="[[case.stickers]]"></tm-cube-image>
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
        //console.log('--- CROSS cases have changed: ', cases);
    }
    _colorsChanged(colors) {
        //console.log('--- F2L Colors Changed: ', colors);
    }

    // refresh() {
    //     if (this.$ !== undefined) {
    //         this.$.a.resize();
    //     }
    // }

    ready() {
        super.ready();
    }
}

window.customElements.define('tm-cube-play-cross', TmCubePlayCross);
