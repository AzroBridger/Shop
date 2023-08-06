import React, { useState } from 'react'
import Header from './Header';
import Items from './Items';
import Categories from './Categories';
import FullItem from './FullItem';
import Footer from './Footer';
import './styles/Main.css';
import { useSelector } from 'react-redux';




const App = () => {
  const [fullItem, setfullItem] = useState(false)
  const [state, setState] = useState({
    fullItems : [],
    items: [
      {
        id: '1',
        title: 'Стул серый',
        img: 'chair-grey.jpg',
        desc: 'Wonderful product',
        category:'chairs',
        price:'49.99'
      },
      {
        id: '2',
        title: 'Кресло серое',
        img: 'armchair-grey.jpg',
        desc: 'Wonderful product',
        category:'chairs',
        price:'69.99'
      },
      {
        id: '3',
        title: 'Шкаф для кухни',
        img: 'kitchens wardrobe.jpg',
        desc: 'Wonderful product',
        category:'closets',
        price:'59.99'
      },
      {
        id: '4',
        title: 'Диван серый',
        img: 'grey sofa.jpg',
        desc: 'Wonderful product',
        category:'sofas',
        price:'499.99'
      }, 
      {
        id: '5',
        title: 'Стул Чёрный',
        img: 'black-chair.jpg',
        desc: 'Wonderful product',
        category:'chairs',
        price:'29.99'
      }, 
      {
        id: '6',
        title: 'Диван синий',
        img: 'blue-sofa.jpg',
        desc: 'Wonderful product',
        category:'sofas',
        price:'299.99'
      }, 
      {
        id: '7',
        title: 'Диван коричневый',
        img: 'brown-sofa.jpeg',
        desc: 'Wonderful product',
        category:'sofas',
        price:'359.99'
      }, 
      {
        id: '8',
        title: 'Стол белый',
        img: 'white-table.jpg',
        desc: 'Wonderful product',
        category:'tables',
        price:'159.99'
      }, 
      {
        id: '9',
        title: 'Шкаф белый',
        img: 'white-wardrobe.jpeg',
        desc: 'Wonderful product',
        category:'closets',
        price:'249.99'
      }, 


    ],
    categories : [
      {
          key: 'all',
          name : 'Всё',

      },
      {
          key: 'chairs',
          name : 'Стулья',

      },
      {
          key: 'closets',
          name : 'Шкафы',

      },
      {
          key: 'sofas',
          name : 'Диваны',

      },
      {
        key: 'tables',
        name : 'Столы',

    },
    ]})
  const [currentItems, setItems] = useState(state.items)
  const [walp, setWalp] = useState(true)
  const [err, setErr] = useState(false)
  const orders = useSelector(state => state.order.order)
  

  
  
  const toShowItem = (item) => {
    setState((prev) => {
      let state = prev
      state.fullItems = (item)
      return state
      })
    setfullItem((prev) => {
      let fullItem = prev
      fullItem = (!fullItem)
      return fullItem
      })
  }

  const chooseCategory =(category) => {
    if (category === 'all'){
      setItems((prev) => {
        let currentItems = prev
        currentItems = state.items
        return currentItems
        })
      return}                                                    
       setItems((prev) => {
         let currentItems = prev
         currentItems = state.items.filter(el => el.category === category)
         return currentItems
         })
         
     }
     
  const search_filter = (value) => {
    switch (state.items.map((el) => el.title.toLowerCase()).includes(value.toLowerCase())) {
      case true:
        setItems(state.items.filter((el) => el.title.toLowerCase().includes(value.toLowerCase())))
        setWalp(false)
        setErr(false)
        break;
        
      case false:
        setItems(state.items)
        setWalp(true)
        setErr(true)
        break

      default:
        break;
    }
    
  }
  const defaul = () => {
    setItems(state.items)
    setWalp(true)
    setErr(false)
    
  }

    const defaul2 = (setItem) => {
      setItems(state.items)
      setWalp(true)
      setErr(false)
      setItem('')
    }
  
  return (
    <div >
      <Header orders={orders} key = {orders.id}  toSearch = {search_filter} err = {setErr} walp = {setWalp} defaul = {defaul} defaul2 = {defaul2}/>
      {walp && <div className='presentation_header_header'></div>}
      {walp && <Categories categories = {state.categories} chooseCategory = {chooseCategory}/>}
      {walp === false ? <h3 className='walpaper'>Результаты Поиска:</h3>: null} 
      {err && <div><h2>Ничего не было найдено!</h2></div>}
      {!err && <Items items = {currentItems} toShow = {toShowItem}/>}
      {fullItem && <FullItem toShow = {toShowItem} item = {state.fullItems}/>}
      <Footer/>
    </div>
  )
  
  }


export default App
