import { ContactList } from "../components/ContactList/ContactList.jsx";
import { ContactForm } from "../components/ContactForm/ContactForm.jsx";

const HomePage = () => {
    return (
        <div>
            <ContactForm />
            <ContactList />
        </div>
    );
};

export default HomePage;
