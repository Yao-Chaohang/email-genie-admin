import style from '@/components/Header/Header.module.scss'

export default function Header() {
    return (
        <div className={style.header}>
            <h2>Welcome back, Breeje</h2>
            <div className={style.avatar}>头像占位</div>
        </div>
    )
}