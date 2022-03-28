function formate(dateObj, formateStr) {
	if (!formateStr) {
		formateStr = "yyyy-MM-dd"
	}
	var result = formateStr.replace('yyyy', dateObj.getFullYear()).replace('MM', dateObj.getMonth() + 1).replace('dd', dateObj.getDate());
	return result;
}
