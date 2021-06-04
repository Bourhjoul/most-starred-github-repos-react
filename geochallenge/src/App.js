import 'antd/dist/antd.css';
import './App.css';
import React, { useEffect, useState } from "react";
import { Input } from 'antd';
import { MdNavigateNext, MdNavigateBefore, AiFillHome } from 'react-icons/all'
import { useDispatch, useSelector } from 'react-redux'
import {listRepos} from './redux/Actions/Reposactions'


function App() {
  const [todayDate, setTodayDate] = useState("")
  const [page, setPage] = useState(1)
  const [Searchinput, setSearchinput] = useState("")
  const { Search } = Input;
  const dispatch = useDispatch()
  const listRepos = useSelector((state) => state.listRepos)
  const {loading,repos,error} = listRepos
  function setDate() {
      // this function sets the date of todayday in the last month.
    const date = new Date()
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    // in the month field we are gonna put the last month so we will get just the repos that were created in the last 30 days
    const month = (date.getMonth()) < 10 ? `0${date.getMonth()}` : date.getMonth()
    const year = date.getFullYear()
    const today = [year, month, day].join("-")
    setTodayDate(today)
    }
  useEffect(() => {
    setDate()
    dispatch(listRepos(todayDate, 1))
    console.log(repos)
    return () => {
    }
  }, [todayDate])

  return (
      <nav>
            <h3>Trending Repos</h3>
            <Search     placeholder="input search text"
                        allowClear
                        enterButton
                        size="large" />
            <div className='right_buttons' >
              <AiFillHome size='30' className='home_btn' />
              <div className = 'navigateBtns'>
                      <MdNavigateBefore className ='prev_btn' size = '35' />
                      <MdNavigateNext className = 'next_btn' size = '35'/>
              </div>
  
            </div>
      </nav>
  );
}

export default App;
