const Header = ({employee}) =>{
    return <div className='header'>
        <div className="header-navigator">
            <div className="backbtn">{"<"}</div></div>
        <div className="header-content">
            <div className="Employee-name">{employee.name}</div>
            <div className="Employee-Id">{employee.id}</div>
        </div>
        <div className="print-wrapper">
           <div className="printbtn"><button>Print</button></div> 
        </div>
    </div>
};

export default Header;