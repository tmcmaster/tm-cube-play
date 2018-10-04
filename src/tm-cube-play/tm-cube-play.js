import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'tm-cube-image';
import 'tm-cube-image/tm-cube-image-top';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';

/**
 * @customElement
 * @polymer
 */
class TmCubePlay extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                  display: block;
                }
                div {
                    display: inline-block;
                }
                h3 {
                    text-align: center;
                }
            </style>
            <dom-repeat is="dom-repeat" items="[[algs]]" as="alg">
                <template>
                    <div>
                        <h3>[[alg.title]]</h3>
                        <tm-cube-image-top stickers="[[alg.stickers]]" arrows="[[alg.arrows]]"></tm-cube-image-top>
                    </div>
                </template>
            </dom-repeat>
            <tm-cube-image stickers="rbb rbb rrr | wwb wwb bbb | www rrw rrw"></tm-cube-image>
            <tm-cube-image-top stickers="yyy yyy yyy | oog rro ggr bbb" arrows="3>9, 9>3, 6>8, 8>6"></tm-cube-image-top>
        `;
    }

    static get properties() {
        return {
            algs: {
                type: Array,
                value: [
                    {
                        title: 'J Perm - Right',
                        stickers: 'yyy yyy yyy | oog rro ggr bbb',
                        arrows: '3>9, 9>3, 6>8, 8>6'
                    },
                    {
                        title: 'J Perm - Left',
                        stickers: 'yyy yyy yyy | boo ggg rbb orr',
                        arrows: '1>7, 7>1, 4>8, 8>4'
                    }
                ]
            }
        };
    }
}

window.customElements.define('tm-cube-play', TmCubePlay);
