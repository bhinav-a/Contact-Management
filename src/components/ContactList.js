import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
    console.log(props);

    const deleteContact = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) =>{
        return(
            <ContactCard contact={contact} clickhandler = {deleteContact} key={contact.id}/>
        );
    });
    return (
      <div className="ui celled list">
        Contact List
        {renderContactList}
      </div>  
    );
}
export default ContactList;