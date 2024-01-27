import { useEffect, useState } from "react";
import "./App.css"

function App() {
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((err) => console.error(err));
  }, []);
  const handlePrev = ()=>{
    if(page>1){
      setPage((prevPage)=>prevPage-1);
    }
  }
  const handleNext =()=>{
    if(page < Math.floor(allData.length)/10){
      console.log(page,allData.length);
      setPage((prevPage)=>prevPage+1);
    }
  }
  const containerStyle ={
    display:"felx",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center"
  }
  const tableContainer ={
    marginTop:"10px",
    marginBottom:"10px",
    padding:"5px"
  }
  
  const tableHeadStyle ={
    backgroundColor:"#009879",
    color:"white",

  }
  const tableRowStyle={
    borderTop:"1px solid #eaeaea"
  }
  const tableStyle={
    width:"100%",
    borderBottom:"1px solid green",
    backgroundColor:"white",
    borderCollapse:"collapse",
  }
  const buttonContainer={
    display:"flex",
    justifyContent:"center"
  }
  const pageStyle={
    backgroundColor:"#009879",
    width:"20px",
    height:"60px",
    padding: "8px 12px 8px 12px",
    borderRadius:"10px",
    color:"white"
    
  }
  return <>
    <div style={containerStyle}>
      <h1>Eployee Data Table</h1>
      
        <div style={tableContainer}>
          <table style={tableStyle}>
            <thead >
                <tr style={tableHeadStyle}>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              
            </thead>
            <tbody>
            {allData.slice(10*(page-1),10*page).map((data)=>(
              <tr key={data.id} style={tableRowStyle}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.role}</td>
              </tr>))}
            </tbody>
          </table>
        </div>
      
      <div style={buttonContainer}>
        <button onClick={handlePrev}>Previous</button>
        <div style={pageStyle}><h2>{page}</h2></div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  </>;
}

export default App;
