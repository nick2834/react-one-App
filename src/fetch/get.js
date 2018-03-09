import 'whatwg-fetch'  
import 'es6-promise'  
export function get(url,params){
    if (params) {
        let paramsArray = [];
        //encodeURIComponent
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        } else {
            url += '&' + paramsArray.join('&')
        }
    }
    return new Promise(function(resolve,reject){
        fetch(url,{
            method: 'get',
            mode: "cors",  
            headers: {  
                'Accept': 'application/json, text/plain, */*',  
                'Content-Type': 'application/x-www-form-urlencoded'  
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                reject({status:response.status})
            }
        })
        .then((response) => {
            resolve(response);
        })
        .catch((err)=> {
            reject({status:-1});
        })
    })
}