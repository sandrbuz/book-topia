import React from "react";
import styles from './Preloader.module.css'
import preloaderMultiColor from '../../../assets/images/preloaderMultiColor.svg'; 


const Preloader = (props) => {
return(
    <div>
        <img alt="preloader"  style={props.customStyles} className={styles.preloader} src={preloaderMultiColor}/>
    </div>
    )
}

export default Preloader;