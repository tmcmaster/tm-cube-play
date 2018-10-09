import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'tm-cube-image';
import 'tm-cube-image/tm-cube-image-top';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';

import '/node_modules/tm-generic-app/tm-generic-app.js';

import '@vaadin/vaadin-combo-box/vaadin-combo-box.js';

import './tm-cube-play-view1.js';
import './tm-cube-play-view2.js';

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
            </style>
            
            <!--<tm-generic-app title="[[title]]" pages="[[pages]]" fullscreen login-required firebase-config="[[config]]">-->
            <tm-generic-app title="[[title]]" pages="[[pages]]" on-page-changed="_pageChanged">
                  <tm-cube-play-view1 name="view1" slot="page"></tm-cube-play-view1>
                  <tm-cube-play-view2 name="view2" slot="page"></tm-cube-play-view2>
            </tm-generic-app>
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
                    {name: 'view1', title: 'F2L'},
                    {name: 'view2', title: 'OLL / PLL'}
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
            }
        };
    }
    testing() {
        console.log('-------------  YAY!!!!  ------------')
    }
    ready() {
        super.ready();

        window.addEventListener('show', () => this.testing());
    }
}

window.customElements.define('tm-cube-play', TmCubePlay);
