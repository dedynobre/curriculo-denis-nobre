
// recebe os itens com os dados de ID_Barra
var itens

n = true

if(msg.payload.GetDataResponse.RowSets.RowSet[0].Rows === null) {
    
    n = false
    
} else {
    
    itens = msg.payload.GetDataResponse.RowSets.RowSet[0].Rows.Row
    
    
}


//variavel de controle
var x

// variavel para armazenar o valor do atributo ID_Barra
var car

// variavel que recece o numero digitado peelo operador
// e converte para numero
ref_barra = Number(global.get('ref-id-barra'))
var pes_barra = -1

/*
    verifica no array se a barra pesquisada (ref_barra) existe no array
    se existir ele retorna o atributo 'Peso_x0020_Barra' na variavel
    pes_barra

*/

if(n === true ){
    for(x in itens){
    
        // receber o codigo da barra
        car = itens[x].ID_Barra
        // separa o numero do codigo
        car = car.split('BA-')
        // converte o caracter numero para um numero
        car = Number(car[1])
        
        if(car === ref_barra){
            
            pes_barra = itens[x].Peso_x0020_Barra
     
        }
    }

}

msg.payload = Number(pes_barra)
  
return msg;
