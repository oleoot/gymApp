import styles from '@/Header/Header.module.css';
import Svg from '@/GlobalComponents/Svg.tsx';



function Header(){
    return(
      <>
        <div className={styles.headerWrapper}>
          <div className={styles.headerLeft}>
            <Svg
              width='100'
              height='100'
              fill='#000'
              iconName='wallet'
              iconClass='headerLogo'
            />
          </div>
        </div>
      </>
    )
}

export default Header
