


const getData = async () => {
    const res = await fetch("http://localhost:3000/api/auth/denemeee",{cache:"no-store"});
    const data = await res.json()

    return data
}



const Deneme = async () => {

    const data = await getData();
    console.log(data);

  return (
    <div>
        { data.map(item => (
            <div key={item._id} style={{padding : "60px",fontWeight:'bold'}}>
                id : {item._id} &nbsp;&nbsp;&nbsp;
                name : {item.name} &nbsp;&nbsp;&nbsp;
                password : {item.email}&nbsp;&nbsp;&nbsp;
                date : {item.date}&nbsp;&nbsp;&nbsp;
                address : {item?.address?.country}
            </div>
        ))}
        xd
    </div>
  )
}

export default Deneme