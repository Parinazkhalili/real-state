

import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

function Layout({children}) {
  const style={minHight: "700px"}
  return (
 <>
 <Header/>
 <div style={style}>{children}</div>
 <Footer />
 </>
  )
}

export default Layout