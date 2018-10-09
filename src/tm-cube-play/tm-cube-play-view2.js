import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {} from '@polymer/polymer/lib/elements/dom-repeat.js';
import 'tm-cube-image/tm-cube-image-top.js';
import 'tm-aspect-div/tm-aspect-div.js'

/**
 * @customElement
 * @polymer
 */
// TODO: need to sort out border-box sizing issue
class TmCubePlayView2 extends PolymerElement {
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
                h3 {
                    text-align: center;
                }
                tm-cube-image-top {
                    width: 19%;
                    height: 19%;
                    box-sizing: border-box;
                }

                #cube {
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    clear:both;
                    float: left;
                }
                div {
                    //border: solid red 1px;
                    display: inline-block;
                    float:top;
                    vertical-align: top;
                    box-sizing: border-box;
                }
                div.center {
                    width: 60%;
                    height: 60%;
                    float: left;
                }
                
                div.left, div.right {
                    width: 20%;
                    height: 60%;
                    float:left;
                }
                .left > *, .right > * {
                    clear: both;
                    float: left;
                    width: 100%;
                    height: 33.33%;
                }
            </style>
            <tm-aspect-div id="a" aspect="1">
                <div class="top">
                    <!-- Rotate Left -->
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="yyy yyy yyy | oog rro ggr bbb" arrows="1>7,7>9,9>3,3>1,2>4,4>8,8>6,6>2"></tm-cube-image-top>
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="y_y _yy yyy | _y_ ___ ___ _y_" arrows="" flips="19>1,3>10 | 13>19,5>3 | 10>5,1>13"></tm-cube-image-top>
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="y_y yyy y_y | _y_ ___ _y_ ___" arrows="" flips="1>10,10>1 | 16>7,7>16"></tm-cube-image-top>
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="y_y _y_ y_y | _y_ _y_ _y_ _y_" arrows="" flips="1>10,10>1 | 16>7,7>16 | 5>13,13>5 | 3>19,19>3"></tm-cube-image-top>
                    <!-- Rotate Right -->
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="yyy yyy yyy | oog rro ggr bbb" arrows="1>3,3>9,9>7,7>1,2>6,6>8,8>4,4>2"></tm-cube-image-top>
                </div>
                <div class="left">
                    <!-- J Perm - Left -->
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="yyy yyy yyy | boo ggg rbb orr" arrows="1>7, 7>1, 4>8, 8>4"></tm-cube-image-top>
                </div>
                <div class="center">
                    <tm-cube-image-top no-arrows id="cube" stickers="yyy yyy yyy | ooo ggg rrr bbb"></tm-cube-image-top>
                </div>
    
                <div class="right">
                    <!-- J Perm - Right -->
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="yyy yyy yyy | oog rro ggr bbb" arrows="3>9, 9>3, 6>8, 8>6"></tm-cube-image-top>
                    <!-- T Perm -->
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="yyy yyy yyy | oog rbo grr bgb" arrows="3>9, 9>3, 6>4, 4>6"></tm-cube-image-top>
                </div>
                <div class="bottom">
                    <!-- A Perm - Left -->
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="yyy yyy yyy | gog rgb orr bbo" arrows="9>1,1>3,3>9"></tm-cube-image-top>
                    <!-- U Perm - Left -->
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="yyy yyy yyy | ooo gbg rgr brb" arrows="4>6, 6>8, 8>4"></tm-cube-image-top>
                    <!-- Opposite Edges -->
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="yyy yyy yyy | oro gbg ror bgb" arrows="2>8, 8>2, 4>6, 6>4"></tm-cube-image-top>
                    <!-- U Perm - Right -->
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="yyy yyy yyy | ooo grg rbr bgb" arrows="4>8, 8>6, 6>4"></tm-cube-image-top>
                    <!-- A Perm - Right -->
                    <tm-cube-image-top on-select="_algSelected" no-move stickers="yyy yyy yyy | bob ogg rro gbr" arrows="7>3,3>1,1>7"></tm-cube-image-top>
                </div>
            </tm-aspect-div>
           
        `;
    }

    static get properties() {
        return {
            name: {
                type: String,
                value: 'tm-cube-play-view2'
            }
        };
    }

    _algSelected(e)
    {
        console.log('ALG SELECTED: ', e.detail);
        this.$.cube.arrows = e.detail.arrows;
        this.$.cube.flips = e.detail.flips;
        this.$.cube.move();
    }

    refresh() {
        if (this.$ !== undefined) {
            this.$.a.resize();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        console.log("------- tm-cube-play-view2 has been attached to the DOM.");
    }

    // testing() {
    //     console.log('-------------  View2 YAY!!!!  ------------')
    // }
    ready() {
        super.ready();
        //const self = this;
        // setTimeout(function() {
        //     console.log('My Size:', self.clientWidth, self.clientHeight);
        //     self.$.a._resize(self.clientWidth, self.clientHeight);
        // }, 1000);

        // this.shadowRoot.querySelectorAll('#a').forEach(function(el) {
        //     el.addEventListener('click', function(e) {
        //         console.log('-------- FFFFFFFFFFFFFFFFFFFFFFFFFFFFF  ---------');
        //     });
        // });
        //
        // self.onclick = function() {
        //     console.log('-------FOCUS: MY SIZE:',self.clientWidth,self.clientHeight);
        // }

        // for(var key in this){
        //     if(key.startsWith('on') && key.indexOf('mouse') < 0 && key.indexOf('pointer') < 0) {
        //         let event = key.slice(2);
        //         console.log('---- Registering event listener: ' + event);
        //         this.addEventListener(event, function(e) {
        //             console.log('-------------  YAY!!!!  ------------', e);
        //         })
        //     }
        // }


        //window.addEventListener('resize', () => this.testing());

        console.log('Good to go.');

    }
}

window.customElements.define('tm-cube-play-view2', TmCubePlayView2);
