import css from "components/ContactList/ContactList.module.css";
import PropTypes from "prop-types";

import { useSelector , useDispatch} from "react-redux";
import {getFilteredContact} from 'Redux/Contacts/contacts-selector'
import { deleteContacts } from "Redux/Contacts/contacts-slice"

const ContactList=()=>{

  const contacts = useSelector(getFilteredContact)
  const dispatch= useDispatch()

  const deleteContact = id => {
   const action= deleteContacts(id)
   dispatch(action)
    console.log(action)
  }
  
	const contactList=contacts.map(({id,name,number})=>
	<li className={css.contactItem} key={id}>
	<span className={css.contactSpan}>{name}</span><span className={css.contactSpam}>{number}</span> 
	<button className={css.contactButton} type="button" onClick={()=>deleteContact(id)}>delete</button></li>)
  return(
	
	  <ol className={css.contactList}> {contactList}</ol>
	
	
  )
}
ContactList.prototype={
  deleteContact:PropTypes.func.isRequired,
	contacts:PropTypes.arrayOf(PropTypes.shape({
		id:PropTypes.string.isRequired ,
		name:PropTypes.string.isRequired,
		number:PropTypes.string.isRequired,
	})),
 }
export default ContactList


// тут фсю логіку ми робили в експортованій функці  {getFilteredContact} 'Redux/Contacts/contacts-selector'
// ми визвали useSelector який дає доступ до глобального стейту і передали функцію яка має доступ до всії контактів і фільтрів якщо фільтр пустий вона повнртає всі контакти з глобального стейту б якшо ні то фільтрує по імені і повертає ті контакти одфільтровані і ми перебираємо і одмалювуємо всі контакти якшо шукаємо по фільтру воно одмалює одфільтровані контакти 