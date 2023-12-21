import Footer from './components/common/Footer/Footer.jsx'
import Header from './components/common/Header/Header.jsx'
import ProductPage from './pages/ProductPage.jsx'

function App() {

  return (
    <div className="max-w-7xl mx-auto p-8">
      <Header />
      <main className="mt-[90px]">
        <ProductPage />
      </main>
      <Footer />
    </div>
  )
}

export default App