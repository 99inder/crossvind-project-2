import Footer from './components/common/Footer/Footer.jsx'
import Header from './components/common/Header/Header.jsx'
import ProductPage from './pages/ProductPage.jsx'

function App() {

  return (
    <div className="p-8 pb-16 overflow-hidden min-h-screen relative">
      <Header />
      <main className="mt-[90px] max-w-7xl mx-auto">
        <ProductPage />
      </main>
      <Footer />
    </div>
  )
}

export default App