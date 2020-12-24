import React, {Component} from 'react'
import { format } from 'date-fns';
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {
    //Estado é sempre um objeto
    //O método render sempre fica 'escutando' o estado 
    //e atualizando as infos nas tela automaticamente 

    constructor(props) {
        super(props);
        this.state = {
            bills: [],
            users: [],            
            userBills: [],

            id: '',
            userName: '', 
            motivo: '', 
            billDate: '', 
            value: ''  
        };    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    componentDidMount() {
        this.loadUserBills();
        this.loadUsers();
    }

    deleteBill = async (id) => {
        const response = await api.delete('/bills/'+id); 
        this.loadUserBills();
        console.log(response);         
        this.loadBillsByUser(response.data.userName);
    }

    editBill = async (idBill) => { 
        const response = await api.get('/userbills/'+idBill);
        const  id   =  response.data._id;
        const  userName=  response.data.userName;
        const  motivo  =  response.data.motivo;
        const  billDate=  response.data.billDate;
        const  value   =  response.data.value;             

        this.setState({
            id: id,
            userName: userName, 
            motivo: motivo, 
            billDate: billDate, 
            value: value
        });  

        console.log(billDate);
    }

    //Carrega os usuarios API JSONPlaceholder
    loadUsers = async () => {
        const response = await api.get('/users');
        this.setState({users: response.data});
        console.log({users: response.data});    
    }

    //Carrega as contas agrupadas para preenchimento dos cards
    loadUserBills = async () => {
        const response = await api.get('/userbills');
        this.setState({bills: response.data});
        console.log({bills: response.data});
    };

    //Carrega as contas agrupadas para preenchimento dos cards
    loadBillsByUser = async (userName) => {
        const response = await api.get('/bills/'+userName);     
        this.setState({userBills: response.data});
        console.log({userBills: response.data});

        this.setState({
            id: '',
            userName: '', 
            motivo: '', 
            billDate: '', 
            value: ''
        });
    };

    addBills = async (id, userName, motivo, billDate, value) =>{
        //insere as contas e recarrega a lista de usuarios
        if (userName === '' || motivo === '' || billDate === '' || value === 0 ) {

            alert('Ops, todos os campos devem ser preenchidos');

        } else {
            const response = await api.post('/bills', {id, userName, motivo, billDate, value});
            this.loadUserBills();
            this.loadBillsByUser(response.data.userName);
            console.log(response.data);  
        }                  
    }

    handleSubmit(event) { 
        event.preventDefault();   
        const {id, userName, motivo, billDate, value } = this.state;
            
        this.addBills(id, userName, motivo, billDate, value);
        
        this.setState({
            id: '',
            userName: '', 
            motivo: '', 
            billDate: '', 
            value: ''
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value});
    }

    formatDate = (date) => {
        const formattedDate = format(new Date(date), 'dd/MM/yyyy');
        return(formattedDate);
    }

    render() {
        const { bills } = this.state;
        const { users } = this.state;
        const { userBills } = this.state;
        const { id, userName, motivo, billDate, value } = this.state;
        return (
            <div className="container">
                <div className="mainDiv"> 
                    <div className="myDivCard"> 
                        <div className="billUser-list">
                            {bills.map(bill => (
                                <div  onClick={() => 
                                this.loadBillsByUser(bill.user)}>
                                    <article key={bill._id}>
                                        <strong> Usuario: </strong> {bill.user}
                                        <p> <strong>Saldo devedor: </strong> R$ {bill.valueSum} </p>
                                    </article> 
                                </div>                                         
                            ))}
                        </div>  
                    </div>
                    <div className="myDivContent"> 
                        <div className="myDivContentChildren"> 
                            <form onSubmit={this.handleSubmit}>
                                <label>Cliente:</label>    
                                <select id="userName" name="userName" value={userName} onChange={this.handleChange}>
                                    {users.map(user => (
                                        <option value={user.username}>{user.username}</option>      
                                    ))}
                                </select>
                                <br></br>
                                <br></br>
                                <div>
                                    <label>Motivo:</label><br></br>
                                    <input id="motivo" name="motivo" type="text" value={motivo} onChange={this.handleChange}></input> 
                                </div>

                                <br></br>
                                <div>
                                    <label> Data: </label><br></br>
                                    <input id="billDate" name="billDate" type="Date" value={billDate} onChange={this.handleChange}/>	
                                </div>
                                <br></br>

                                <div>
                                    <label> Valor: </label><br></br>
                                    <input id="value" name="value" type="number" value={value} onChange={this.handleChange}/>	
                                </div>
                                <br></br>
                                
                                <button className="buttonForm" type="submit" value="Enviar">Salvar/Editar</button> 
                            </form>
                        </div>
                        <div className="myDivContentTable"> 
                            <table className="table">
                                <thead>					
                                    <tr>
                                        <th>Usuario</th>
                                        <th>Motivo</th>
                                        <th>Data</th>
                                        <th>Valor</th>							
                                    </tr>
                                </thead>	
                                <tbody>
                                    {userBills.map(userBill =>(
                                        <tr id={userBill._id}>
                                            <td>{userBill.userName}</td>
                                            <td>{userBill.motivo}</td>
                                            <td>{this.formatDate(userBill.billDate)}</td>
                                            <td>{userBill.value}</td>                                            
                                            <td id={userBill._id}><button className="buttonTable" onClick={() => this.editBill(userBill._id)} > Editar </button></td>
                                            <td id={userBill._id}><button className="buttonTable" onClick={() => this.deleteBill(userBill._id)} > Delete </button></td>
                                        </tr>
                                    ))}                                    
                                </tbody>
                                													
                            </table>
					    </div>                
                    </div>
                </div>
            </div>                        
        )    
    }
}
