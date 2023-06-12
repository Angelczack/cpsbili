var ip = uni.getStorageSync('serverIp');
var baseUrl = 'https://api.uomg.com/api/rand.avatar';

export function getUsers(imgurl) {
	return //uni.request(`${baseUrl}?sort=男&format=json`);
	uni.request({
		url:baseUrl
	}).then(res) {
		
	}
}




export default { getUsers };