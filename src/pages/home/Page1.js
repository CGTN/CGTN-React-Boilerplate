/*
 * @Author: Nokey 
 * @Date: 2017-08-16 15:01:10 
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-10-12 16:04:13
 */
'use strict'; 

// Plugins
import { TimelineLite } from 'gsap'
import SplitText from 'split-text'
import styles from './css.styl'

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
                className={[
                    'fullpage-slide',
                    styles.page1,
                    styles['bg-cover']
                ].join(' ')}
                data-id="page1">

                <img src={require('../../images/mobile.jpg')} alt="Me"/>

            </section>
        );
    }
}

export default Page1;