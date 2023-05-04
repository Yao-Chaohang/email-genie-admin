import style from './Logo.module.scss'

export default function Logo() {
    return (
        <div className={style.logo}>
            <h1>EmailGenie</h1>
            <div className={style.bg}></div>
        </div>
    )
}