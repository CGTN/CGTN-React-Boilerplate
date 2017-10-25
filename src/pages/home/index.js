/*
 * @Author: Nokey 
 * @Date: 2017-07-13 18:03:17 
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-10-24 14:42:32
 */
'use strict';

// Utils
import { TimelineLite } from 'gsap'

// Style
import '../../fonts/roboto-thin.styl'
import '../../styles/home.styl'

// Components
import Jeep from '../../modules/home/Jeep'

class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // Loading
            loading: true
        }
        
        this.TL = null
    }

    componentDidMount() {
        console.log('%c' + 'CGTN', 'font-family: "courier new"; color:#000; font-size:24px; font-weight:bold; text-shadow:0 0 6px #22ff22;');

        let _me = this

        _me.TL = new TimelineLite()

        _me.TL
            .to('.home img', 0.5, {scale: 0.5, opacity: 0})
            .to('.home img', 0.5, {scale: 1, opacity: 1})

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
    }
    
    render() {
        return (
            <section className="home">
                <img src={require('../../images/mobile.jpg')} alt="Me"/>
                <Jeep />
            </section>
        );
    }
}

ReactDOM.render(<MyComponent /> , document.getElementById('app'));