import axios from 'axios';

const baseURL = "https://crud.teamrabbil.com/api";

//read
export async function ReadRequest(){
    let result = await axios.get(baseURL+"/v1/ReadProduct");
    if(result){
        return result.data['data'];
    }
    else{
        console.log('error');
    }
    //return result.data['data']; //etar ortho holo shudhu data take dhora status ba onno kichuke noe

}


//create
export async function CreateRequest(JSONBody){
    let result = await axios.post(baseURL+"/v1/CreateProduct", JSONBody);
    return result.data['status'];
}