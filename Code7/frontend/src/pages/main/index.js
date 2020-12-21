import React, {Component} from 'react'
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {
    //Estado é sempre um objeto
    //O método render sempre fica 'escutando' o estado 
    //e atualizando as infos nas tela automaticamente  
    state = {
        bills: []
    }
    componentDidMount() {
        this.loadBills();
    }

    loadBills = async () => {
        const response = await api.get('/bills/userbills');
        this.setState({bills: response.data});
        console.log({bills: response.data});
    };

    calcTotals() {

    }

    render() {
        const { bills } = this.state;
        return (
            <div className="billUser-list">
                 {bills.map(bill => (
                    <article key={bill._id}>
                        <strong> Usuario: </strong> {bill.userName}
                        <p> <strong>Saldo devedor: </strong> R$ {bill.value} </p>
                        <p> <strong>Data: </strong> {bill.billDate} </p>
                    </article>               
                ))}
            </div>              
        )    
    }
}
