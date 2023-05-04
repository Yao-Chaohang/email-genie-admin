import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import MenuComponent from '@/components/MenuComponent/MenuComponent'

export default function Layout({children}: any) {
    return (
        <div className='flex'>
            <div>
                <MenuComponent />
            </div>
            <div style={{width: '100%', position: 'relative'}}>
                <Header />
                <main style={{height: 'calc(100% - 80px - 30px)', background: '#2C2C2C'}}>{children}</main>
                <Footer />
            </div>
        </div>
    )
}