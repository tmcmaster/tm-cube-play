import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import 'tm-cube-image/tm-cube-image-top.js';

/**
 * @customElement
 * @polymer
 */
class TmCubePlayView1 extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                  display: inline-block;
                  border: solid lightgray 1px;
                }
                h3 {
                    text-align: center;
                }
            </style>
            <h3>view one</h3>
        `;
    }

    static get properties() {
        return {
        };
    }


    ready() {
        super.ready();
    }
}

window.customElements.define('tm-cube-play-view1', TmCubePlayView1);
