import styles from '@/template/DashboardPage.module.css';

function DashboardPage() {
  return (
    <div className={styles.container}>
        <h3>سلام</h3>
        <p>آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
         <div className={styles.createdAt}>
            <p>تاریخ عضویت:</p>
            <span>12345</span>
         </div>
    </div>
  )
}

export default DashboardPage