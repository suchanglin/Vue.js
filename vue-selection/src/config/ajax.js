export default (type='GET', url='', data={}, async=true) => {
	return new Promise((resolve, reject) => { // 定义一个promise
		type = type.toUpperCase();

		let requestObj;
		if (window.XMLHttpRequest) {
			requestObj = new XMLHttpRequest();
		} else {
			requestObj = new ActiveXObject;
		}

		if (type == 'GET') {
			let dataStr = ''; // 数据拼接字符串
			Object.keys(data).forEach(key => {  // Object.keys()为属性数组，即仅有键
				dataStr += key + '=' + data[key] + '&';
			})
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&')); // 去掉最后一个&
			url = url + '?' + dataStr;
			requestObj.open(type, url, async);
			requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			requestObj.send();
		}else if (type == 'POST') {
			requestObj.open(type, url, async);
			requestObj.setRequestHeader("Content-type", "application/json");
			requestObj.send(JSON.stringify(data));
		}else {
			reject('error type');
		}

		requestObj.onreadystatechange = () => {
			if (requestObj.readyState == 4) {
				if (requestObj.status == 200) {
					let obj = requestObj.response
					if (typeof obj !== 'object') {     // 字符串转为对象
						obj = JSON.parse(obj);
					}
					resolve(obj);
				}else {
					reject(requestObj);
				}
			}
		}
	})
}
