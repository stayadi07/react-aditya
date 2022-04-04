import Content from './Content';
import Header from './header';
const Employee = ({employee}) =>{
    return <div className='Employee'>
        <Header employee={employee}/>
        <Content employee={employee}/>
    </div>
};

export default Employee;