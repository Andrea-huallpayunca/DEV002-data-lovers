/*filterData(data, condition): esta función filter o filtrar recibiría la data,
 y nos retornaría aquellos datos que sí cumplan con la condición.*/


const filtros = {
    filterData: function(data,condition){
        
        return data.filter(elemento=> elemento.type.includes(condition)

        )

    },
}

export default filtros;