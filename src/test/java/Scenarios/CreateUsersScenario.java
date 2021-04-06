package Scenarios;

import static org.junit.Assert.assertThat;
import static org.testng.Assert.assertTrue;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.app.pageHelper.AlertModalPageHelper;
import com.app.pageHelper.SignUpPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateUsersScenario {

	
	BasePage basePage;
	AlertModalPageHelper alertModal;
	SignUpPage signUpPage;
	WebDriver driver;

	static boolean msgResultNew;

	public CreateUsersScenario(BasePage baseRef) {
		basePage = new BasePage();
		alertModal = new AlertModalPageHelper(basePage.getWebDriver());
		signUpPage = new SignUpPage(basePage.getWebDriver());

	}
	
	@Given("^User is on Sign Up screen$")
	public void moveToSignUpPage() throws Throwable {
		signUpPage.clickOnCreateAccountLink();
	}

	@When("^Enter email \"([^\"]*)\" username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void enterUserDetail(String emailAddress, String username, String password) throws Throwable {
		String randomString= basePage.randomString(12);
		
		if(!(emailAddress.contains("validUser")))	{
			signUpPage.enterUserDetails(emailAddress, username, password);
			}
		else {
			String randomEmailString= randomString+"@gmail.com";
			signUpPage.enterUserDetails(randomEmailString, randomEmailString, password);
		}
		
	}

	@When("^Click on Sign Up button$")
	public void clickOnSignUpButton() throws Throwable {
		signUpPage.clickOnSignUpButton();
	}

	@Then("^Verify the validation \"([^\"]*)\" message$")
	public void verifySuccessAndValidationMessage(String actualMessage) throws Throwable {
		
		if(!(actualMessage.contains("Check your email")))
		{
			String expectedValidationMsg= signUpPage.getValidationMessage();
			System.out.println("Expected: " + expectedValidationMsg);
			System.out.println("Actual: " + actualMessage);
			assertTrue(expectedValidationMsg.contains(actualMessage), "Validation Message should be displayed" );
			
		}
		else {
			String expectedSuccessMsg= signUpPage.getSuccessMessage();
			System.out.println("Success: " + expectedSuccessMsg);
			assertTrue(expectedSuccessMsg.contains(actualMessage), "Success Message should be displayed" );
			
		}
		
		
		
		
	}
	



}
