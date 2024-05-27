export const API_KEY = 'AIzaSyAixP0PvT7lUuKo4Lwqtzsb7B-81crsr2g';


export const value_converter = (value)=>{
 if(value>=100000){
    return Math.floor(value/100000 )+ "M"
 }
 else if(value>=1000){
    return Math.floor(value/1000)  + "K"
 }
 else{
    return value
 }
}