import React from "react";
import styles from './Preloader.module.css'
import preloaderBlue from '../../../assets/images/PreloaderBlue.svg'; 
import preloaderMultiColor from '../../../assets/images/preloaderMultiColor.svg'; 


const Preloader = (props) => {
return(
    // <div className={styles.preloader}>loading</div>
    <div>
        <img alt="preloader"  style={props.customStyles} className={styles.preloader} src={preloaderMultiColor}/>
    </div>
    )
}

export default Preloader;