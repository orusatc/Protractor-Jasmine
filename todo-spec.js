//ECHO is on.
describe('JS Test Task', function() {
  it('Check if selected item price is less than 10000', async function() {
	  
	// Angular could not be found on the page, that is why is needed the line of code below
	browser.waitForAngularEnabled(false);
	// to maximize browser window
	browser.driver.manage().window().maximize();
	
	
	//1. Open https://hotline.ua/ 
    await browser.get('https://hotline.ua/');
	
	//2. Click login 
	await element(by.css('div.item-login')).click();
	
	//3. Enter valid credentials and login 
	await element(by.css("input[type='email']")).sendKeys('orysia.rusanovska@eleks.com');
	await element(by.css("input[type='password']")).sendKeys('1234');
	await element(by.css("input.btn-graphite.btn-cell")).click();
	
	//4. Search for some product
	browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().implicitlyWait(45000);
	
	await  element(by.css("#searchbox")).sendKeys('капелюх');
	await element(by.id("doSearch")).click();
	
	//5. Click on the 5th product from search reslut list
	browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().implicitlyWait(45000);
	
	await element.all(by.css("li.product-item > div.item-info > p > a")).get(4).click();
	
	//6. Check if price is less than 10000
	browser.manage().timeouts().pageLoadTimeout(40000);
    browser.manage().timeouts().implicitlyWait(25000);
	
	var price = await element(by.css("a > span.price-format > span.value")).getText();
	await element(by.css("a > span.price-format > span.value"));
	var priceNum = parseInt(price, 10);

	expect(priceNum).toBeLessThan(10000);
  });
});