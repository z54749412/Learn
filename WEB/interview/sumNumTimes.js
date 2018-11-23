/**
 * 计算0-n中出现多少次num
 */
var sumNumTimes = {
	sumNumTimesA: function (n, num) {
		var sum = 0;

		for (var i = 1; i <= n; i ++) {
			for (var j = i; j > 0;) {
				if (j % 10 == num) {
					sum ++;
				}
				j = parseInt(j / 10);
			}
		}
		return sum;
	},
	sumNumTimesB: function (n, num) {
		function a (n) {
			if(n < num) {
				return 0;
			}
			var nStr = n.toString();
			var len = nStr.length;
			var high, low, sum;

			if (len == 1) {
				return 1;
			}
			high = parseInt(nStr[0]);
			low = parseInt(nStr[len - 1]);
			sum = high;

			if (high > num) {
				sum += 10;
			} else if (high == num) {
				sum += low + 1;
			}
			sum += low >= num ? 1 : 0;
			return sum;
		}
		function b () {
			function c (bPow) {
				var bt = bPow * 10;
				var s = 0;
				var bn = parseInt(n / bPow);
				var dn = bn % 10;
				var minNum = num * bPow;
				var pn = dn >= num ? (bn - dn) * bPow + minNum : n;

				for (var i = minNum; i < pn; i += bt) {
					s++;
				}
				return s * bPow + (i == pn ? (dn == num ? 1 + n % bPow : bPow) : 0);
			}
			function d () {
				var sum = 0;

				for (var i = 2; i < len; i++) {
					sum += c(Math.pow(10, i));
				}
				return sum;
			}
			return 20 * parseInt(n / 100) + d() + a(n % 100);
		}

		var len = n.toString().length;
		if(n < num) {
			return 0;
		}
		if (len == 1) {
			return 1;
		}
		if (len == 2) {
			return a(n);
		}
		if (n >= 100) {
			return b();
		}
	},
	sumNumTimesC: function (n, num) {
		function a (n) {
			if(n < num) {
				return 0;
			}
			var nStr = n.toString();
			var len = nStr.length;
			var high, low, sum;

			if (len == 1) {
				return 1;
			}

			high = parseInt(nStr[0]);
			low = parseInt(nStr[len - 1]);
			sum = high;

			if (high > num) {
				sum += 10;
			} else if (high == num) {
				sum += low + 1;
			}
			sum += low >= num ? 1 : 0;
			return sum;
		}
		function b () {
			function f () {
				function a (n) {
					var arr = [];
					var b = 0;
					do {
						b = n % 10;
						n = (n - b) / 10;
						arr.push([n, b]);
					} while(n > 0);
					return arr;
				}
				var sum = 0;
				var arr = a(bn);
				var len = arr.length;
				var temp;
				var pow;

				for (var i = 0; i < len; i++) {
					temp = arr[i];
					pow = Math.pow(10, 2 + i);
					sum += temp[0] * pow + (temp[1] > num ? pow : (temp[1] === num ? 1 + n % pow : 0));
				}
				return sum;
			}
			var bn = parseInt(n / 100);

			return 20 * bn + f() + a(n % 100);
		}

		var len = n.toString().length;
		if(n < num) {
			return 0;
		}
		if (len == 1) {
			return 1;
		}
		if (len == 2) {
			return a(n);
		}
		if (n >= 100) {
			return b();
		}
	}
};
console.log(sumNumTimes.sumNumTimesA(2000, 5))
console.log(sumNumTimes.sumNumTimesB(2000, 5))
console.log(sumNumTimes.sumNumTimesC(2000, 5))
