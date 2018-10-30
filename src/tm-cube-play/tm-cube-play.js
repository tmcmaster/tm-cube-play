import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'tm-cube-image';
import 'tm-cube-image/tm-cube-image-top';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';

import '/node_modules/tm-generic-app/tm-generic-app.js';
import '/node_modules/tm-cube-image/tm-cube-image.js';
import '/node_modules/tm-animated-cube/tm-animated-cube.js';

import '@vaadin/vaadin-combo-box/vaadin-combo-box.js';

import './tm-cube-play-cross.js';
import './tm-cube-play-f2l.js';
import './tm-cube-play-oll.js';
import './tm-cube-play-pll.js';
import './tm-cube-play-algs.js';

/**
 * @customElement
 * @polymer
 */
class TmCubePlay extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                  display: inline-block;
                  //border: solid red 1px;
                  box-sizing: border-box;
                  padding: 5px;
                  width: 100%;
                  height: 100%;
                  
                }

                tm-generic-app {
                    width: 100%;
                    height: 100%;
                }
                
                tm-generic-app > * {
                    display: inline-block;
                    box-sizing: border-box;
                    //border: solid blue 1px;
                    width:100%;
                    height:calc(100vh - 70px);
                }
                
                tm-cube-image {
                    display: inline-block;
                    border: solid red 1px;
                }
                
                tm-animated-cube {
                    width: 300px;
                    height: 300px;
                }
                
            </style>
            
            
                 <!--<tm-cube-image stickers="rbb rbb rrr | wwb wwb bbb | www rrw rrw"></tm-cube-image>-->

            <!--<tm-generic-app title="[[title]]" pages="[[pages]]" fullscreen login-required firebase-config="[[config]]">-->
            <tm-generic-app title="[[title]]" pages="[[pages]]" on-page-changed="_pageChanged">
                <div class="test" name="test" slot="page">
                    <!--<tm-animated-cube scramble="" moves="R U"></tm-animated-cube>-->
                     <!--<tm-cube-image stickers="rbb rbb rrr | wwb wwb bbb | www rrw rrw"></tm-cube-image>-->
                     Testing
                </div>
                <tm-cube-play-cross name="cross" slot="page"></tm-cube-play-cross>
                <tm-cube-play-f2l name="f2l" slot="page"></tm-cube-play-f2l>
                <tm-cube-play-oll name="oll" slot="page" colors="{{colors}}"></tm-cube-play-oll>
                <tm-cube-play-pll name="pll" slot="page" colors="{{colors}}"></tm-cube-play-pll>
                <tm-cube-play-algs name="algs" slot="page"></tm-cube-play-algs>
            </tm-generic-app>
            
            <paper-button toggles raised on-tap="_Selected"></paper-button>            
        `;
    }

    _pageChanged(e) {
        const page = e.detail.page;

        console.log('PAGE CHANGED: ', e.detail.page, this.shadowRoot.querySelectorAll('[name='+page));
        const elements = this.shadowRoot.querySelectorAll('[name='+page+']');
        elements.forEach(function(element) {
            if (element.refresh !== undefined) {
                element.refresh();
            }
        });
    }


    static get properties() {
        return {
            title: {
                type: String,
                value: 'Cube Play'
            },
            pages: {
                type: Array,
                value: [
                    {name: 'test', title: 'test'},
                    {name: 'cross', title: 'Cross'},
                    {name: 'f2l', title: 'F2L'},
                    {name: 'oll', title: 'OLL'},
                    {name: 'pll', title: 'PLL'},
                    {name: 'algs', title: 'Algs'}
                ]
            },
            config: {
                type: Object,
                value: {
                    apiKey: "AIzaSyBYHSuS_qzcYUnwAc3KG_LSzhSN9wXDewU",
                    authDomain: "stunt-hamster.firebaseapp.com",
                    databaseURL: "https://stunt-hamster.firebaseio.com",
                    projectId: "stunt-hamster",
                    storageBucket: "stunt-hamster.appspot.com",
                    messagingSenderId: "651006465873"
                }
            },
            colors: {
                type: String,
                value: 'yyy yyy yyy | ooo ggg rrr bbb',
                notify: true
            }
        };
    }
    ready() {
        super.ready();
    }
}

window.customElements.define('tm-cube-play', TmCubePlay);
