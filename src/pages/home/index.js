/*
 * @Author: Nokey 
 * @Date: 2017-07-13 18:03:17 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-06-08 18:24:12
 */
'use strict';

// Plugins
import 'fullpage.js'

// Utils
import { TimelineLite } from 'gsap'
import Util from 'utils'

// Style
import 'roboto-thin.styl'
import 'style/reset.styl'
import classNames from 'classnames/bind'
import styles from './index-css'
let _s = classNames.bind(styles)

// Pages
import Page1 from './Page1'
import Page2 from './Page2'

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Loading
            loading: true
        }
        
        this.TL = null

        this._app = null
        this.fullpage_sections = null
    }

    componentDidMount() {
        console.log('%c' + 'CGTN', 'font-family: "courier new"; color:#000; font-size:24px; font-weight:bold; text-shadow:0 0 6px #22ff22;');

        let _me = this

        _me.TL = new TimelineLite()

        _me.TL
            .to('.home img', 0.5, {scale: 0.5, opacity: 0})
            .to('.home img', 0.5, {scale: 1, opacity: 1})

        /**
         * Config
         */
        _me._app = $('#app')
        _me.fullpage_sections = $('.fullpage-slide');

        /**
         * Register global eventlistener
         */
        $(window).on('GLOBAL-ACT', (e, action)=>{
            /**
             * Usage:
             * action:{
             *     type: 'TYPE',
             *     payload: {}
             * }
             */
            switch (action.type) {
                case 'SWIPE':
                    _me.setState({
                        swipe_show: action.payload.show,
                        swipe_color: action.payload.color
                    })
                    break;

                case 'START-PAGE1-ANIMATE':
                    _me.page1.initAni()
                    break;

                case 'LOADING':
                    _me.setState({
                        loading: action.payload.loading
                    })
                    break;

                case 'SET-ALLOW-SCROLL':
                    _me.setState({
                        swipe_show: action.payload.swipe_arrow_show
                    })
                    $.fn.fullpage.setAllowScrolling(action.payload.allow_scroll)
                    break;
            
                default:
                    console.warn('No implementation for this action!')
                    break;
            }
        })

        /**
         * Init fullpage
         * 
         * Fragment code:
         * $.fn.fullpage.setAllowScrolling(false)
         */
        $('#fullpage').fullpage({
            sectionSelector: '.fullpage-slide',
            normalScrollElements: '.fp-normal-scroll',
            touchSensitivity: 15,
            scrollingSpeed: Util.isIE() ? 1300 : 800,
            scrollHorizontally: true,
            loopHorizontal: false,
            controlArrows: false,

            // Events
            afterLoad: (anchorLink, index)=>{
                // $(window).trigger('scroll-fullpage', 
                //     {type: 'SWIPE', payload: {
                //         show: true,
                //         color: 'red'
                //     }}
                // );

                let current_page = _me.fullpage_sections.eq(index - 1)

                // Start every page animation
                !this.state.loading && _me[current_page.data('id')].initAni()

            },
            onLeave: (index, nextIndex, dir)=>{
                console.log('Leave', index, nextIndex, dir)

                let next_page = _me.fullpage_sections.eq(nextIndex-1);

                // Clear page animation
                _me[next_page.data('id')].resetAni()
            },
            afterRender: ()=>{
                // DOM is ready
                console.log('fp render')

            }
        });
    }
    
    render() {
        return (
            <section className={_s('home')}>
                {/* Full Page */}
                <div id="fullpage">
                    {/* Story 1 */}
                    <Page1 ref={_this => this.page1 = _this} />

                    <Page2 ref={_this => this.page2 = _this} />
                </div>
            </section>
        );
    }
}

ReactDOM.render(<MyComponent /> , document.getElementById('app'));