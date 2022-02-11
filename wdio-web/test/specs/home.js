// Practice E-Commerce Site – Automation Bro
// https://practice.automationbro.com/

describe('Home', () => {
	it('Open URL and assert title', async () => {
		// open URL
		await browser.url('https://practice.automationbro.com/');
		// assert title
		await expect(browser).toHaveTitle(
			'Practice E-Commerce Site – Automation Bro'
		);
		// // FAIL test case
		// await expect(browser).toHaveTitle(
		// 	'TYPO!! Practice E-Commerce Site – Automation Bro'
		// );
	});

	it('navigate to about page', async () => {
		// open about page
		await browser.url('https://practice.automationbro.com/about/');
		// assert URL
		await expect(browser).toHaveUrl(
			'https://practice.automationbro.com/about/'
		);
	});

	it('Click get started button & assert url contains get-started text', async () => {
		// open about page
		await browser.url('https://practice.automationbro.com/');
		// Click get-started button
		await $('#get-started').click();
		// assert URL
		await expect(browser).toHaveUrlContaining('get-started');
	});

	it('Click logo and assert url DOES NOT contains get-started text', async () => {
		// Open Home page
		await browser.url('https://practice.automationbro.com/');
		// Click logo
		await $('//img[@alt="Practice E-Commerce Site"]').click();
		// Assert url doesn't contain get-started text
		await expect(browser).not.toHaveUrlContaining('get-started');
	});

	it('Find heading element and assert the text', async () => {
		// Open Home page
		await browser.url('https://practice.automationbro.com/');

		// Find heading element
		const headingEl = $('.elementor-widget-container  h1');

		// get the text from the element
		const headingText = await headingEl.getText();

		// assert the text
		await expect(headingText).toEqual('Think different. Make different.');
		// assert the text
		await expect(headingEl).toHaveText('Think different. Make different.');
	});

  
});

//#get-started
// describe('About', () => {});
//img[@alt="Practice E-Commerce Site"]
// custom - logo;
