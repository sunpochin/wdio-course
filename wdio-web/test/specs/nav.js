describe('Navigation menu', () => {
	it('Get the text of all menu items & assert them', async () => {
		//
		await browser.url('/');

		// const navLinks = await $('#primary-menu').$$('li[id*=menu]');
		const navLinks = await $$('#primary-menu li[id*=menu]');

		const expectedLinks = [
			'Home',
			'About',
			'Shop',
			'Blog',
			'Contact',
			'My account',
		];

		const actualLinks = [];
		for (const link of navLinks) {
			const linkText = await link.getText();
			actualLinks.push(linkText);
		}

		await expect(expectedLinks).toEqual(actualLinks);
	});
});

// #primary-menu li[id*=menu]
