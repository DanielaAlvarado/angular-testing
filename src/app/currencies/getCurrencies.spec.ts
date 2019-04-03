import { getCurrencies } from './getCurrencies';

describe('currencies', ()=> { // currencies suite
	it ('should return the suported currencies', ()=> {
		const result = getCurrencies();
		expect(result).toContain('USD');
		expect(result).toContain('AUD');
		expect(result).toContain('EUR');
	})
})
