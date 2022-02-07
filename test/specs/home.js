// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe('Home', () => {
	it('Open URL and assert title', () => {
		// open URL
		browser.url('https://practice.automationbro.com/');
		// assert title
		expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
	});
});
