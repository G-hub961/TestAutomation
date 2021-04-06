package com.app.pageHelper;

import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class AlertModalPageHelper {

	WebDriver driver;

	public AlertModalPageHelper(WebDriver driver) {
		this.driver = driver;
	}

	public void clickOnAlertModelMenu() throws InterruptedException {
		driver.findElement(By.xpath("(//a[contains(text(),'Alerts & Modals')])[2]")).click();
		Thread.sleep(2000);
	}

	public void clickOnBootstrapAlertSubMenu() {

		if ((driver.findElements(By.xpath("(//a[contains(text(),'Bootstrap Alerts')])[2]")).size() > 0)) {
			driver.findElement(By.xpath("(//a[contains(text(),'Bootstrap Alerts')])[2]")).click();
			System.out.println("Button is  displayed...");
		} else {
			System.out.println("Button is not displayed...");
		}

	}

	public void clickOnDemoWebsite() {
		driver.findElement(By.xpath("//a[contains(text(),'Demo Website!')]")).click();
	}

	public boolean VerifyUserOnDempApp() {

		boolean result = driver.findElement(By.xpath("//a[contains(text(),'Demo Home')]")).isDisplayed();
		return result;
	}

	public void clickOnWindowPopUpModalSubMenu() {
		driver.findElement(By.xpath("(//a[contains(text(),'Window Popup Modal')])[2]")).click();

	}

	public void performActionOnFacebookWindow() throws InterruptedException {
		// Get base window ID

		String baseWindowId = driver.getWindowHandle();
		driver.findElement(By.linkText("Follow Twitter & Facebook")).click();
		Thread.sleep(10000);
		Set<String> windowIds = driver.getWindowHandles();
		for (String windowId : windowIds) {
			driver.switchTo().window(windowId);

			if (driver.getTitle().equalsIgnoreCase("Selenium Easy - Home | Facebook")) {
				// perform some action and get back to orignal window;
				System.out.println("Yes... I am inside the selenium Easy popup : " + windowId);
				this.getMessageFromFacebookPage();

			}
		}

		driver.switchTo().window(baseWindowId);

		for (String windowId : windowIds) {
			driver.switchTo().window(windowId);

			if (!(windowId.equals(baseWindowId))) {
				System.out.println("Window ID: " + windowId);
				driver.close();

			}
		}

		driver.switchTo().window(baseWindowId);

		driver.switchTo().window(baseWindowId);

	}

	public void getMessageFromFacebookPage() {

		String str = driver.findElement(By.xpath("//u[contains(text(),'Facebook')]")).getText();
		System.out.println("String is : " + str);
	}

	public void clickOnAutoCloseMessageButton() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.id("autoclosable-btn-success")).click();
		Thread.sleep(2000);
		// alert alert-success alert-autocloseable-success
	}

	public boolean VerifyMessageIsDisplayed() {
		boolean result = driver.findElement(By.xpath("//div[contains(@class,'alert-autocloseable-success')]"))
				.isDisplayed();
		// alert alert-success alert-autocloseable-success
		return result;
	}

	// At input form check the functionality of check box

	public void checkTheCheckBox() throws InterruptedException {
		JavascriptExecutor js = (JavascriptExecutor) (driver);
		js.executeScript("window.scrollBy(0,200)", "");
		driver.findElement(By.xpath("(//a[contains(text(),'Input Forms')])[2]")).click();
		Thread.sleep(2000);

		driver.findElement(By.xpath("(//a[contains(text(),'Checkbox Demo')])[2]")).click();
		Thread.sleep(5000);

		for (int i = 1; i < 4; i++) {

			driver.findElement(By.xpath("(//input[@type='checkbox'])[3]")).click();
			System.out.println("Print : " + ("(//input[@type='checkbox'])['" + i + "']"));
			Thread.sleep(5000);
		}
	}

}
