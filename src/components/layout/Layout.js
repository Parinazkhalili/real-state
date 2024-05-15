

import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

function Layout({children}) {
  return (
 <>
 <Header/>
 <div style={{minHight: "700px"}}>{children}</div>
 <Footer />
 </>
  )
}

export default Layout