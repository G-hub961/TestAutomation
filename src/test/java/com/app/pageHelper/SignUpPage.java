package com.app.pageHelper;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SignUpPage {

	WebDriver driver;

	public SignUpPage(WebDriver driver) {
		this.driver = driver;
	}

	public void clickOnCreateAccountLink() throws InterruptedException {
		WebElement createAccountLink = driver.findElement(By.xpath("//a[contains(text(),' Create an account')]"));
		createAccountLink.click();
	}

	public void enterEmailAddress(String emailAddress) {
		WebElement email = driver.findElement(By.id("email"));
		email.clear();
		email.sendKeys(emailAddress);
	}

	public void enterUserName(String username) {
		WebElement user = driver.findElement(By.id("new_username"));
		user.clear();
		user.sendKeys(username);
	}

	public void enterPassword(String password) {
		WebElement pass = driver.findElement(By.id("new_password"));
		pass.clear();
		pass.sendKeys(password);
	}

	public void enterUserDetails(String email, String username, String password) {

		enterEmailAddress(email);
		enterUserName(username);
		enterPassword(password);
	}

	public void clickOnSignUpButton() throws InterruptedException {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,250)", "");
		WebElement SignUpButton = driver.findElement(By.id("create-account"));
		WebDriverWait wait= new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOf(SignUpButton));
		wait.until(ExpectedConditions.elementToBeClickable(SignUpButton));
		SignUpButton.click();
		Thread.sleep(2000);

	}
	
	
	public String getValidationMessage() {
		WebElement validationMsg = driver.findElement(By.xpath("//span[@class='invalid-error']"));
		String str= validationMsg.getText();
		return str;
	}
	
	public String getSuccessMessage() {
		WebElement successMsg = driver.findElement(By.xpath("//div[contains(@class,'lastUnit')]/h1[contains(text(),'Check your email')]"));
		String str= successMsg.getText();
		return str;
	}
	
	
	
	
}
