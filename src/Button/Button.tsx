import styles from '@/Button/Button.module.css'

function Button(){

  const componentStyles = {
    background: 'red',
    width: '200px',
    height: '50px',
    borderRadius: '5px'
  }

  return(
    <button className={styles.button} style={componentStyles}>Click me</button>
  )
}
export default Button
