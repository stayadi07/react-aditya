import { ContactInfo } from "./ContactInfo";
import { RoleInfo } from "./RoleInfo";
import { Status } from "./Status";
const Content = ({employee}) =>{
    return (
        <div className="content">
            <ContactInfo employee={employee}/>
            <Status employee={employee}/>
            <RoleInfo employee={employee}/>
            

    </div>
    )};

export default Content;