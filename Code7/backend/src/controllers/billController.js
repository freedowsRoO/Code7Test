import Bill from '../models/bill'

class billController {
    //lista todos as contas
    async index(req, res) {
        const bills = await Bill.find();
        return res.json(bills);
    }

    //busca as contas filtrando o ID da conta
    async showBillById(req, res) {
        console.log(req.params.id);
        const bill = await Bill.findById(req.params.id);
        return res.json(bill);
    }

    //busca todas as contas do usuario
    async show(req, res) {
        const bill = await Bill.find({ userName: req.params.userName});
        return res.json(bill);
    }

    //busca as contas e retorna o total devedor para cada usuario
    async showbill(req, res) {
        const bill = await Bill.find();
       
        var userBills = bill;
        var sumBills = bill;
        var arr = [];
        var valueSum = 0;
        var user = '';
        var bFind = false;

        for (var i = 0; i < userBills.length; i++) {    
            //Se o usuario do array for diferente da variavel entra no laço             
           for (var x = 0; x < arr.length; x++) {
                
                if (arr[x].user == userBills[i].userName) {
                    bFind = true;
                    break;          
                } else { bFind = false }                
            } 

           if (!bFind) { 
                //se entrou aqui é pq o usuario ja foi somado e nao precisa
                //mais entrar no for abaixo
                for (var x = 0; x < sumBills.length; x++) { 
                
                    if (sumBills[x].userName == userBills[i].userName) {
                        valueSum += parseFloat(sumBills[x].value);       
                    }                                                            
                }                

                user = userBills[i].userName;    
                arr.push({user, valueSum});
                valueSum = 0;
            }                               
        }       
        return res.json(arr);
    }

    //salva ou edita conta
    //Caso a API receba o ID como parametro, o sistema busca
    //o usuario pela ID e caso encontra edita as informações
    //caso não encontre insere um novo registro.
    async store(req, res) {
        const idBill = req.body.id;
        var bill = [];

        if (idBill != '' ) {
            const bExists = await Bill.findById(idBill); 
                   
            if (bExists === null) {
                bill = await Bill.create(req.body);       
            } else {
                bill = await Bill.findByIdAndUpdate(idBill, req.body, { new: true });
            } 
        } else {
            bill = await Bill.create(req.body);    
        }
              
        return res.json(bill);
    }

    //Edita a conta 
    async update(req, res) {
        const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(bill);
    }
    //Deleta a consta do usuario
    async destroy(req, res) {
        const bill = await Bill.findByIdAndRemove(req.params.id);
        return res.json(bill);
    } 
}
export default new billController;
