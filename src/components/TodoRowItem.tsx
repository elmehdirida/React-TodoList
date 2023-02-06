import React from "react"

 export const  TodoRowItem : React.FC<{
  rowNumber : number,
  rowDesc : string ,
  rowAssigned : string,
  deleteTodo : Function}> =(props ) =>{

    return (
        <tr onClick={()=> props.deleteTodo(props.rowNumber)}>
        <th scope='row'>{props.rowNumber}</th>
        <td>{props.rowDesc}</td>
        <td>{props.rowAssigned}</td>
      </tr>
    )
}

