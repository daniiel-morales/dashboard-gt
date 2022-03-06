import Link from 'next/link'
import entity_list from './__data__/entity-list'
import styles from './navbar.module.css'

const entities = entity_list.map((entity) => (
    <Link href={`/${entity[2].toString().toLowerCase()}`}>
        <a className={styles.aclass}>{entity[2]}</a>
    </Link>
))

const NavBar = () => (
    <div className={styles.navbar}>
        <div className={styles.subnav}>
            <div className={styles.menu}>
                <a className={styles.aclass}>MENU</a>
            </div>
            <div className={styles.subnavcontent}>
                <Link href='/'>
                    <a className={styles.aclass}>HOME</a>
                </Link>
                {entities}
            </div>
        </div>
        <div className={styles.full}>
            <Link href='/'>
                <a className={styles.aclass}>HOME</a>
            </Link>
            {entities}
        </div>
    </div>
)

export default NavBar
