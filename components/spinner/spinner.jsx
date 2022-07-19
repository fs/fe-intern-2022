import Image from 'next/image'
import img from '/components/spinner/188987.png'
import styles from './spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.pokemon}>
      <Image src={img} width={40} height={40} alt="spinner" />
    </div>
  )
}

export default Spinner
