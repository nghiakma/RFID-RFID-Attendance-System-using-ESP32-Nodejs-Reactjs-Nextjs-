import Image from 'next/image'
import logo from '../images/logo.png'
import styles from '../styles/tab-info.module.css'

const TabInfo = () => {
    return (
        <div className={styles.containerTabInfo}>
            <div className={styles.contentTabInfo}>
                <div className={styles.containerLogo}>
                    <Image
                        alt='logo'
                        src={logo}
                        width={200}
                        height={'auto'}
                    />
                    <h1>TRƯỜNG ĐẠI HỌC NÔNG LÂM THÀNH PHỐ HỒ CHÍ MINH</h1>
                </div>
            </div>
            <br />
            <h1>ĐỀ TÀI: THIẾT KẾ CHẾ TẠO MÔ HÌNH ĐIỂM DANH SINH VIÊN ỨNG DỤNG IOT</h1>
            <div className={styles.des}>
                <h3>Họ và tên: Nguyễn Tấn Thành</h3>
                <h3>Lớp: DH19CD</h3>
                <h3>GVHH: ThS.Nguyễn Tấn Phúc</h3>
                <h3>GVHH: KS.Hồ Văn Nghĩa</h3>
            </div>
        </div>
    )
}

export default TabInfo