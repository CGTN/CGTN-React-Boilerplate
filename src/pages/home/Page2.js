/*
 * @Author: Nokey 
 * @Date: 2017-08-16 15:13:19 
 * @Last Modified by: Nokey
 * @Last Modified time: 2017-08-23 21:19:44
 */
'use strict';

import { TimelineLite } from 'gsap'
// Style
import classNames from 'classnames/bind'
import styles from './page2-css'
let _s = classNames.bind(styles)

class Page2 extends React.Component {
    constructor(props) {
        super(props);
        
        this.TL = null
    }
    
    initAni(){
        console.warn('Start Page2 Animation')
        let _me = this
        
        _me.TL = new TimelineLite()

        _me.TL
            .to('.page2 .top-box', 0.7, {opacity: 1})
            .to('.page2 .btn-1', 0.7, {opacity: 1})
            .to('.page2 .btn-2', 0.7, {opacity: 1})
            .to('.page2 .bottom-box', 0.3, {opacity: 1})
            .to('.page2 .txt-3', 0.7, {opacity: 1})
            .to('.page2 .chart', 0.7, {opacity: 1})
            .to('.page2 .txt-4', 0.7, {opacity: 1})

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
        console.warn('Clear Page2 Animation')
        if(this.TL){
            this.TL.play().seek(0).clear()
            this.TL = null
        }
    }

    componentDidMount() {
        let _me = this

        $(_me.btn1).click(()=>{
            $(_me.txt1).css('opacity', '1')
        })

        $(_me.btn2).click(()=>{
            $(_me.txt2).css('opacity', '1')
        })
    }

    render() {
        return (
            <section 
                className={_s('page2', 'bg-cover', 'component') + ' fullpage-slide preload-img'}
                data-id="page2">

                <h1>Page2</h1>
                
            </section>
        );
    }
}

export default Page2;