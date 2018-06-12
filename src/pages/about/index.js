/*
 * @Author: Mr.B 
 * @Date: 2017-12-08 13:36:43 
 * @Last Modified by: Mr.B
 * @Last Modified time: 2018-03-16 15:17:35
 */
'use strict'; 

// Style
import classNames from 'classnames/bind'
import styles from './index-css'
let _s = classNames.bind(styles)

class About extends React.Component {
    render() {
        return (
            <div className={styles['about-page']}>
                About...
            </div>
        );
    }
}

ReactDOM.render(<About /> , document.getElementById('app'));