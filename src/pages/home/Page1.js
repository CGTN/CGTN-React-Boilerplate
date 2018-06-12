/*
 * @Author: Nokey 
 * @Date: 2017-08-16 15:01:10 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-06-08 19:04:21
 */
'use strict'; 

// Plugins
import { TimelineLite } from 'gsap'
import SplitText from 'split-text'

// Style
import classNames from 'classnames/bind'
import styles from './page1-css'
let _s = classNames.bind(styles)

// Components

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        
        this.TL = null
    }
    
    initAni(){
        console.warn('Start Page1 Animation')
        let _me = this

        _me.TL = new TimelineLite()

        _me.TL
            .to('.page1 .logo', 0.7, {opacity: 1})
            .to('.page1 .title', 0.7, {opacity: 1})
            .to('.page1 .sub-title', 0.7, {opacity: 1})
            .call(()=>{
                $(window).trigger('scroll-fullpage', 
                    {type: 'SET-ALLOW-SCROLL', payload: {
                        swipe_arrow_show: true,
                        allow_scroll: true
                    }}
                );
            })
                
    }

    resetAni(){
        console.warn('Clear Page1 Animation')
        if(this.TL){
            this.TL.play().seek(0).clear()
            this.TL = null
        }
    }

    render() {
        return (
            <section 
                className={_s('page1', 'bg-cover') + ' fullpage-slide'}
                data-id="page1">

                <img src={require('../../images/mobile.jpg')} alt="Me"/>

            </section>
        );
    }
}

export default Page1;