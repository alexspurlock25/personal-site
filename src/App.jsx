import Header from './components/Header'
import Nav from './components/Nav'
import PageFooter from './components/PageFooter'

const App = () => {
    return (
        <div>
            <div className='flex flex-col min-h-screen'>
                <Header/>
                <Nav />
                <PageFooter />
            </div>
        </div>
        
    )
}

export default App