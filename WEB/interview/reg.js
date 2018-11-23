var regs = {
	/**
	 * 通过传入正则表达式字符串数组regs，以及长度上限和下限；可得到无序（必须regs中的每一项匹配规则都能够验证成功至少一次）的验证正则表达式（oMin值最小默认为regs的长度）
	 * @param  {[type]} regs 正则表达式字符串数组
	 * @param  {[type]} oMin 最小长度限制
	 * @param  {[type]} oMax 最大长度限制
	 * @return {[type]}       返回正则表达式
	 * 如：regs:['\\d', 'a-z', '!@'], 					返回：/^(?=.*?[\d]+)(?=.*?[a-z]+)(?=.*?[!@]+)[\da-z!@]{3,}$/
	 * 如：regs:['\\d', 'a-z', '!@'], oMin: 4, oMax: 8,	返回：/^(?=.*?[\d]+)(?=.*?[a-z]+)(?=.*?[!@]+)[\da-z!@]{4,8}$/
	 * 如：regs:['\\d', 'a-z', '!@'], oMin: 8, oMax: 4,	返回：/^(?=.*?[\d]+)(?=.*?[a-z]+)(?=.*?[!@]+)[\da-z!@]{4,8}$/
	 * 如：regs:['\\d', 'a-z', '!@'], oMin: 8, 			返回：/^(?=.*?[\d]+)(?=.*?[a-z]+)(?=.*?[!@]+)[\da-z!@]{8,}$/
	 * 如：regs:['\\d', 'a-z', '!@'], oMin: 2, 			返回：/^(?=.*?[\d]+)(?=.*?[a-z]+)(?=.*?[!@]+)[\da-z!@]{3,}$/
	 * 如：不传任何参数,									返回：/^(?=.*?[.]+)[.]*$/
	 */
	getUnorderedMatchReg: function (regs, oMin, oMax) {
		var rlt = ['^'], max, min, len;

		regs = regs || ['.'];
		(!((regs instanceof Array) || regs.length)) && (regs = ['.']);
		len = regs.length;

		for (var i = 0; i < len; i++) {
			rlt.push('(?=.*?[' + regs[i] + ']+)');
		}
		oMax = oMax || 0;
		oMin = oMin || 0;
		max = Math.max(oMax, oMin, len);
		min = len === 1 && regs[0] === '.' ? 1 : Math.min(oMax, Math.max(oMin, len));
		rlt.push('[' + regs.join('') + ']');
		rlt.push(max > min ? ['{', min || max, min ? max : '', '}'].join(',') : '*');
		rlt.push('$');

		return new RegExp(rlt.join(''));
	}
};