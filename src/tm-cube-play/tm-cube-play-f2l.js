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
class TmCubePlayF2l extends PolymerElement {
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
                url="../data/algs/f2l.json"
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
        console.log('F2L cases hava changed: ', cases);
    }
    _colorsChanged(colors) {
        console.log('--- F2L Colors Changed: ', colors);
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

window.customElements.define('tm-cube-play-f2l', TmCubePlayF2l);


/**
 * [
 {name:'', slot:'top', stickers: '___ rr_ rrr | _b_ _bb bbb | ___ _y_ _r_'},
 {name:'', slot:'top', stickers: '_r_ rr_ rrr | ___ _bb bbb | ___ by_ ___'},
 {name:'', slot:'top', stickers: '___ rrb rrr | ___ rbb bbb | ___ _y_ ___'},
 {name:'', slot:'top', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'top', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'left', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'left', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'left', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'center', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'right', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'right', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'right', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'bottom', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'bottom', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'bottom', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'bottom', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'},
 {name:'', slot:'bottom', stickers: '___ rrr rrr | ___ bbb bbb | ___ _y_ ___'}
 ]
 */
