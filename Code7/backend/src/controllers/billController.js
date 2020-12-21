import Bill from '../models/bill'

class billController {
    //lista todos as contas
    async index(req, res) {
        const bills = await Bill.find();
        return res.json(bills);
    }

    //busca uma unica conta
    async show(req, res) {
        const bill = await Bill.findById(req.params.id);
        return res.json(bill);
    }

    //busca as contas e agrupa para cada usuario
    async showbill(req, res) {
        console.log('teste') 
        const bill = await Bill.find();
       
        var userBills = bill;
        var sumBills = bill;
        var arr = [];
        var valueSum = 0;
        var user = '';

        for (var i = 0; i < userBills.length; i++) {    
            //Se o usuario do array for diferente da variavel entra no laço  
            
           if (userBills[i].userName != user) {               

               for (var x = 0; x < sumBills.length; x++) { 
                   
                   if (sumBills[x].userName = user) {
                       valueSum += parseFloat(sumBills[x].value);       
                    }                                                            
               } 
               arr.push({user, valueSum}); 
               user= userBills[i].userName; 
               valueSum = 0;                
            }  
       }       
        return res.json(arr);
    }

    //salva a conta
    async store(req, res) {
        const bill = await Bill.create(req.body);
        return res.json(bill);
    }

    //Edita a conta 
    async update(req, res) {
        const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(bill);
    }

    async destroy(req, res) {
        const bill = await Bill.findByIdAndRemove(req.params.id);
        return res.send();
    } 
}
export default new billController;