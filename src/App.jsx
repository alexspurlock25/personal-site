import Header from './components/Header'
import Nav from './components/Nav'
import PageFooter from './components/PageFooter'

const App = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Header/>
            <Nav />
            <PageFooter />
        </div>
    )
}

export default App