import styles from '@/pages/Home/Home.module.css';
function Home(){
  return (
    <div className={styles.homeWrapper}>
      <div className={`${styles.blockWrapper} ${styles.helloBlock}`}>
        <div className={styles.helloBlock__leftSide}>
          <div className={styles.helloBlock__leftSide_headline}>
            Привіт, Олег!
          </div>
          <div className={styles.helloBlock__leftSide_description}>
            Радий бачити тебе знову
          </div>
        </div>
        <div>
          <img src="/images/human.png" alt="human" className={styles.helloBlock__photo}/>
        </div>
      </div>
      <div className={`${styles.blockWrapper} ${styles.infoBlock}`}>

      </div>
      <div className={`${styles.blockWrapper} ${styles.activeCoursesBlock}`}>

      </div>
      <div className={`${styles.blockWrapper} ${styles.arrowsBlock}`}>

      </div>
      <div className={`${styles.blockWrapper} ${styles.findCoursesBlock}`}>

      </div>
      <div className={`${styles.blockWrapper} ${styles.statsTopBlock}`}>

      </div>
      <div className={`${styles.blockWrapper} ${styles.statsGraphBlock}`}>

      </div>
      <div className={`${styles.blockWrapper} ${styles.learnMoreBlock}`}>

      </div>
    </div>
  )
}
export default Home
