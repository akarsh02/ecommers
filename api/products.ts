const API_URL =process.env.EXPO_PUBLIC_API_URL;
export async function listProducts(){
 const res = await fetch(`${API_URL}/products`)
 const data = await res.json()
 if(!res.ok){
  throw new Error("Error")
 }
 console.log(data)
 return data;
}

export async function fetchProductByd(id:number){
 const res = await fetch(`${API_URL}/products/${id}`)
 const data = await res.json()
 if(!res.ok){
  throw new Error("Error")
 }
 else{
  return data 
 }

}