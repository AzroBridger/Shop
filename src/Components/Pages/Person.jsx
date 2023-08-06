import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setID, setNames, setSurnames, setCountries, setCities, setAdresses } from '../../store/usersSlice'
import { setUser } from '../../store/userSlice';




const Person = ({id}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const users = useSelector(state => state.users.users)
    const [name_place, setName_place] = useState(user[0].name)
    const [surname_place, setSurname_place] = useState(user[0].surname)
    const [country_place, setCountry_place] = useState(user[0].country)
    const [city_place, setCity_place] = useState(user[0].city)
    const [adress_place, setAdress_place] = useState(user[0].adress)
    const [bool, setBool] = useState()
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
      setModalOpen(false);
    };
  
    const confirmAction = () => {
        confirm()
        closeModal();
    };

    const openModal = () => {
        setModalOpen(true);
      };
    
    
    useEffect(() => {
        dispatch(setID({id}))
    }, [user]);

    useEffect(() => {
        dispatch(setUser(users.filter(el => el.id === id)))
    }, [bool]);

    const confirm = () => {
        setBool(!bool)
        dispatch(setNames(name_place))
        dispatch(setSurnames(surname_place))
        dispatch(setCountries(country_place))
        dispatch(setCities(city_place))
        dispatch(setAdresses(adress_place))
      }
    
    
    
  return (
    <div className='right_side_person'>
        <h2>Мой профиль</h2>
        <div className='right_person_img'>
            <img className='right_side_image' src="https://pictures.pibig.info/uploads/posts/2023-04/1682098148_pictures-pibig-info-p-chelovek-illyustratsiya-vkontakte-3.png" alt="" />
        </div>
        <div className='profile_main_text'>
            <div>
                <div className='profile_set_box'>
                    <p>Имя</p>
                    <input type="text" value={name_place} onChange={(e) => setName_place(e.target.value)}/>
                </div>
                <div className='profile_set_box'>
                    <p>Login</p>
                    <input type="text" value={user[0].login} disabled/>
                </div>
            </div>
            <div>
                <div className='profile_set_box'>
                    <p>Фамилия</p>
                    <input type="text" value={surname_place} onChange={(e) => setSurname_place(e.target.value)}/>
                </div>
                <div className='profile_set_box'>
                    <p>E-mail</p>
                    <input type="text" value={user[0].email} disabled/>
                </div>
            </div>
        </div>
        <div className='profile_second_box'>
            <h2>Информация для доставки</h2>
            <div className='profile_second_text'>
                <div>
                    <div className='profile_set_box'>
                        <p>Страна</p>
                        <input type="text" value={country_place} onChange={(e) => setCountry_place(e.target.value)}/>
                    </div>
                    <div className='profile_set_box'>
                        <p>Город</p>
                        <input type="text" value={city_place} onChange={(e) => setCity_place(e.target.value)}/>
                    </div>
                </div>
                <div className='profile_set_box'>
                    <p>Адрес доставки</p>
                    <input type="text" value={adress_place} onChange={(e) => setAdress_place(e.target.value)}/>
                </div>
            </div>
            <button className='profile_button_accept' onClick={() => openModal()}>Сохранить изменения</button>
        </div>
        {modalOpen && (
          <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Подтверждение</h2>
            <p>Вы уверены, что хотите продолжить?</p>
            <div className="button-container">
              <button onClick={confirmAction}>Да</button>
              <button onClick={closeModal}>Нет</button>
            </div>
          </div>
        </div>
        )}
        
    </div>
  )
}

export default Person
