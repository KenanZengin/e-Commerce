import React from 'react'


const getData = async () => {
    const res = await fetch("http://localhost:3000/api/auth/deneme");
    const data = res.json()

    return data
}



const Deneme = async () => {

    const data = await getData();
    console.log(data);

  return (
    <div>
        {data && data.map(item => (
            <div key={item._id} style={{padding : "60px",fontWeight:'bold'}}>
                id : {item._id} &nbsp;&nbsp;&nbsp;
                name : {item.name} &nbsp;&nbsp;&nbsp;
                password : {item.password}&nbsp;&nbsp;&nbsp;
            </div>
        ))}
        xd
    </div>
  )
}

export default Deneme