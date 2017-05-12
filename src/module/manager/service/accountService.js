import api from '../lib/axios/api';
const Service = {
	login: (detail) => {
        return api
            .post('/login', {
                data: detail,
            })
            .then((res) => {
                return res;
            }, (error) => {
                console.log('error ', error);
                throw error;
            });
    },
    getAccounts:()=>{
        return api.get('/manager/accounts').then((res)=>{
            return res
        },(error)=>{
            throw error
        })
    },
    getPassword:(data)=>{
    	return api.get('/manager/password',{
    		params:{
    			id:data.id
    		}
    	}).then((res)=>{
    		return res
    	},(error)=>{
    		throw error
    	})
    }
}
export default Service