import { useEffect, useState } from "react"
import Products from "./Products"
import { Skeleton } from "antd"
import { Button, Modal } from 'antd';

function SecondProject(){
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    const [refresh,setRefresh]=useState(true)
    async function getProducts(){
        let elements= await fetch('https://dummyjson.com/products?limit=194').then(res => res.json())
        setProducts(elements.products)
        setLoading(false)

    }
    useEffect(()=>{
        setLoading(true)
        getProducts()
        
    },[refresh])//dependency verməmək o deməkdir ki, bu sadəcə bir dəfə işləyəcək.

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  

  return (
    <div>
        <button onClick={()=>setRefresh(prev=>!prev)}>Refresh</button>
        <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
        <Skeleton active loading={loading}></Skeleton>
        <Skeleton active loading={loading}></Skeleton>
        <Skeleton active loading={loading}></Skeleton>
        {!loading&&<Products products={products}></Products>}
    </div> 
  )
}

export default SecondProject