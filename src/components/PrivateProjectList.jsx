import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import ProjectListItem from './ProjectListItem'

import { db } from '../firebase.config'

const styles = {
	grid: 'md:my-5 md:grid md:grid-cols-2 mx-auto w-max md:gap-2'
}
const PrivateProjectList = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const colRef = collection(db, 'portfolio')
        const allDocs = await getDocs(colRef)
        const docList = allDocs.docs.map((doc) => doc.data())

        setData(docList)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className={ styles.grid }>
        {
            data.map((item) => 
                <ProjectListItem 
                    title={ item.title } 
                    desc={ item.desc } 
                    link={ item['log-link'] } 
                    key={ item.title } 
                />
            )
        }           
        </div>
    )
}

export default PrivateProjectList
