import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';

/**
 * @customElement
 * @polymer
 */
class TmCubePlayLayout extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    display:flex;
                    flex-direction: column;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                }
                
                div {
                    display: inline-block;
                    box-sizing: border-box;
                    flow:left;
                }
                .top, .bottom, .middle {
                    display:flex;
                    flex-direction: row;
                    width:100%;
                }
                .top, .bottom {
                    height: 20%;
                }
                .middle {
                    height: 60%;
                }
                
                .left, .center, .right {
                    height: 100%;
                }
                
                .left, .right {
                    width:20%;
                }
                .center {
                    width: 60%;
                }
                
                /*:host { border: solid black 1px; }*/
                /*.top { border: solid red 1px; }*/
                /*.middle { border: solid yellow 1px; }*/
                /*.bottom {  border: solid blue 1px; }*/
                /*.left {  border: solid purple 1px; }*/
                /*.center {  border: solid orange 1px; }*/
                /*.right {  border: solid green 1px; }*/
                
               ::slotted([slot="left"]), ::slotted([slot="right"]) {
                    width:100%;
                    height:33.33%;
                }
                
                ::slotted([slot="center"]) {
                    width:100%;
                    height:100%;
                }
                
                ::slotted([slot="top"]),::slotted([slot="bottom"]) {
                    width:20%;
                    height:100%;
                }
            </style>
            
            <div class="top">
                <slot name="top"></slot>
            </div>
            <div class="middle">
                <div class="left">
                    <slot name="left"></slot>
                </div>
                <div class="center">
                    <slot name="center"></slot>
                </div>
                <div class="right">
                    <slot name="right"></slot>
                </div>
            </div>
            <div class="bottom">
                <slot name="bottom"></slot>
            </div>
        `;
    }

    static get properties() {
        return {
            name: {
                type: String,
                value: 'tm-cube-play-layout'
            }
        };
    }

    ready() {
        super.ready();
    }
}

window.customElements.define('tm-cube-play-layout', TmCubePlayLayout);
