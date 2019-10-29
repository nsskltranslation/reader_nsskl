function resolve_status(response) {
    return Promise.resolve(response)
	if (response.status >= 200 && response.status < 300) {
		return Promise.resolve(response)
	} else {
		return Promise.reject(new Error(response.statusText))
	}
}

function json_data(response) {
	return response.text();
}

function nssklParse(chid) {
	fetch('https://mangadex.org/api/?id=' + chid.toString() + '&server=null&type=chapter', {
        method: 'GET',
        referrer: '*client', // no-referrer, *client
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    })
	.then(resolve_status)
	.then(json_data)
	.then(function(data) {
        console.log(data)
        var div_data = document.getElementById("reader");
        var loading_elem = document.getElementById('reader-loading');
        var json_data = JSON.parse(data);

        var parsed_uri = [];
        var srv_ = json_data['server']
        var hash_ = json_data['hash']

        for (i in json_data['page_array']) {
            console.log(i);
        }
	}).catch(function(error) {
		console.log('Request failed', error);
	});
}