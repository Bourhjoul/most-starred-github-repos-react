import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { VscIssues } from 'react-icons/vsc'
import './cardrepo.css'
const Cardrepo = ({ repo }) => {
    const [todayDate, setTodayDate] = useState("")
    const [SubmittedOn, setSubmittedOn] = useState('')
    const createdon = repo.created_at.substring(0,10)
    function setDate() {
                const date = new Date()
                const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
                const month = (date.getMonth() + 1 ) < 10 ? `0${date.getMonth() +1 }` : date.getMonth() 
                const year = date.getFullYear()
                const today = [year, month, day].join("-")
                setTodayDate(today)
    }
    useEffect(() => {
        setDate()
        if (todayDate) {
            const date1 = new Date(createdon)
            const date2 = new Date(todayDate)
            const differnce_time = date2 - date1
            setSubmittedOn(differnce_time / (1000 * 3600 * 24))            
        }


        return () => {
            
        }
    }, [todayDate])
    return (
        <div className = 'card_container'>
            <img src={repo.owner.avatar_url} className='avatar_pic' alt='avatarpic' />
            <div className = 'content'>
                <h4>
                    <a target="_blank" href={repo.html_url} rel = 'noreferrer' >{repo.name} </a>
                    
                </h4>
                <p>{repo.description}</p>


                <div className = 'container_moreinfo'>
                    <div className = 'container_star_issue'>
                            <div className='container'><AiFillStar /> {repo.stargazers_count}</div>
                            <div className = 'container'><VscIssues /> {repo.open_issues}</div>
                    </div>
                    <div>Submitted {SubmittedOn} days ago by <b style={{ display : 'inline-block'}}>{repo.owner.login}</b></div>
                </div>



            </div>
        </div>
    )
}

export default Cardrepo
