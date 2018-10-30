import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-bind';
import '@polymer/iron-ajax';

import 'tm-cube-image/tm-cube-image.js';
import 'tm-cube-image/tm-cube-image-top.js';
import 'tm-aspect-div/tm-aspect-div.js'
import './tm-cube-play-layout.js';
import 'tm-animated-cube/tm-animated-cube.js';

/**
 * @customElement
 * @polymer
 */
class TmCubePlayAlgs extends PolymerElement {
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
                div.cube {
                    display:flex;
                    flex-direction: column;
                    justify-content: center;
                    flex-
                    //border: solid red 1px;
                    box-sizing: border-box;
                }
                h4 {
                    margin:0;
                    margin-top:1.5vmin;
                    padding:0;
                    font-size: 1.2vmin;
                    text-align: center;
                }
                tm-cube-image-top {
                    display: inline-block;
                    width:10vmin;
                    height: 10vmin;
                    width:100%;
                }
                
                /*div[name="oll-headlights"] {*/
                    /*margin-left: 20%;*/
                /*}*/
                
                /*div[name="oll-chameleon"], div[name="oll-bow-tie"] {*/
                    /*margin-top: 40%;*/
                /*}*/
            </style>
             <iron-ajax id="data" auto
                url="../data/algs/algorithms.json"
                handle-as="json"
                on-response="_algorithmsLoaded"></iron-ajax>
                
            <!--<iron-ajax id="data" auto-->
                <!--url="../data/algs/algs.json"-->
                <!--handle-as="json"-->
                <!--last-response="{{algs}}"></iron-ajax>-->
                
            <tm-aspect-div id="a" aspect="1" fullscreen>
                <tm-cube-play-layout>
                    <template is="dom-if" if="[[_algsLoaded(algorithms)]]">
                        <template is="dom-repeat" items="[[algs]]" as="alg">
                            <div name$="[[alg.name]]" slot="[[alg.slot]]" class="cube" style$="[[_getStyle(alg)]]">
                                <h4>[[_getTitle(algorithms, alg.name)]]</h4>
                                <tm-cube-image-top 
                                                    stickers="[[_getTopStickers(algorithms, alg.name)]]" 
                                                    payload="[[_getAlgorithm(algorithms,alg.name)]]" 
                                                    on-select="_algSelected" ></tm-cube-image-top>
                            </div>
                        </template>
                    </template>
                    <tm-animated-cube id="cube" slot="center" duration="1000" delay="3000"></tm-animated-cube>
                </tm-cube-play-layout>
            </tm-aspect-div>
        `;
    }

    _getStyle(alg) {
        return (alg.style ? alg.style : '');
    }

    _algSelected(e) {
        const alg = e.detail;
        console.log('Alg: ', alg);

        this.$.cube.update(alg.scramble, alg.moves);
    }

    static get properties() {
        return {
            algorithms: {
                type: Object
            },
            algs: {
                type: Array,
                value: [
                    {name:'oll-headlights', slot:"top", style:"margin-left: 20%"},
                    {name:'oll-bruno', slot:"top"},
                    {name:'oll-double-sune', slot:"top"},
                    {name:'oll-chameleon', slot:"left", style:"margin-top: 40%"},
                    {name:'oll-bow-tie', slot:"right", style:"margin-top: 40%"},
                    {name:'oll-sune', slot:"right"},
                    {name:'oll-anti-sune', slot:"left"},
                    {name:'oll-121', slot:"bottom", style:"margin-left: 20%"},
                    {name:'oll-mum', slot:"bottom"},
                    {name:'oll-22122', slot:"bottom"}
                ]
            }
        };
    }

    _algsLoaded(algorithms) {

        return algorithms !== undefined;
    }

    _getTopStickers(algorithms, algName) {
        if (algorithms !== undefined && algName in algorithms ) {
            return algorithms[algName].top.stickers;
        } else {
            return undefined;
        }
    }

    _getTitle(algorithms, algName) {
        if (algorithms !== undefined && algName in algorithms ) {
            return algorithms[algName].title;
        } else {
            return undefined;
        }
    }

    _getAlgorithm(algorithms, algName) {
        if (algorithms !== undefined && algName in algorithms ) {
            return algorithms[algName];
        } else {
            return undefined;
        }
    }

    _algorithmsLoaded(response) {
        const algorithms = response.detail.__data.response;
        const algMap = {};
        console.log('Response: ', algorithms);
        algorithms.forEach((algorithm) => {
            algorithm.moves = this.createMoves(algorithm.alg);
            algorithm.scramble = this.createScramble(algorithm.moves);
            algMap[algorithm.name] = algorithm;
        });
        this.set('algorithms', algMap);

    }

    // _algorithmsChanged(algorithms) {
    //     if (algorithms === null) return;
    //
    //     console.log('Algorithms Changed: ', algorithms);
    //     algorithms.forEach((algorithm) => {
    //         algorithm.moves = this.createMoves(algorithm.alg);
    //         algorithm.scramble = this.createScramble(algorithm.moves);
    //     });
    //     console.log('Algorithms Moves and Scramble generated: ', algorithms);
    //     this.set('algorithms', algorithms);
    // }

    createMoves(alg) {
        return alg.map(a => this.expand(a))
                                .join(' ')
                                .split(' ')
                                .filter(c => c !== ' ' && c !== '')
                                .join(' ');
    }

    createScramble(moves) {
        const scramble = moves.split(' ')
                            .filter(c => c !== ' ' && c !== '')
                            .reverse()
                            .map(m => m.endsWith("'") ? m[0] : m+"'")
                            .join(' ');
        //console.log('Scramble: ', scramble);
        return scramble;
    }

    expand(moveSet) {
        if (/ x\d$/.test(moveSet)) {
            var match = moveSet.match(/(.*) x(\d)/);
            //console.log('Match 1', match[1]);
            //console.log('Match 2', match[2]);
            return match[1].split('').filter(c => c !== '(' && c !== ')').join('').repeat(match[2]);
        } else {
            //console.log('Match 0', moveSet);
            return moveSet;
        }
    }

    ready() {
        super.ready();
    }
}

window.customElements.define('tm-cube-play-algs', TmCubePlayAlgs);
