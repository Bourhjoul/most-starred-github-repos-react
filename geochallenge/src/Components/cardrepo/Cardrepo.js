import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { VscIssues } from 'react-icons/vsc'
import './cardrepo.css'
const Cardrepo = ({repo}) => {
    return (
        <div className = 'card_container'>
            <img src={repo.owner.avatar_url} className='avatar_pic' alt='avatarpic' />
            <div className = 'content'>
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>


                <div className = 'container_moreinfo'>
                    <div className = 'container_star_issue'>
                            <div className='container'><AiFillStar /> 300</div>
                            <div className = 'container'><VscIssues /> 300</div>
                    </div>
                    <div>Submitted 30 days ago by <b style={{ display : 'inline-block'}}>{repo.owner.login}</b></div>
                </div>



            </div>
        </div>
    )
}

export default Cardrepo
