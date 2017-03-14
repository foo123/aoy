import { toArray, isArray } from '../util/index'
import { createVdom } from './index'

export function el(){
		const arg = toArray(arguments);

		if(arg.length === 0){
			error('el初始化参数不能为空')
			return;
		}
		if(isArray(arg) && arg.length > 0) {
			return createVdom.call(this, arg);
		}	
	}