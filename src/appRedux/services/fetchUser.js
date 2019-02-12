export default async () => {
    try {
        const res = await fetch("http://18.195.238.14:3000/api/users");
        const data = await res.json()
        return data;
    }catch(err){
        console.log(err);
    }
}