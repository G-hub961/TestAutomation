package Scenarios;

import junit.framework.Assert;
import org.openqa.selenium.WebDriver;
import com.app.pageHelper.AlertModalPageHelper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AlertModalScenario {

	BasePage basePage;
	AlertModalPageHelper alertModal;
	WebDriver driver;

	static boolean msgResultNew;

	public AlertModalScenario(BasePage baseRef) {
		System.out.println("AlertModal Constructor...");
		basePage = new BasePage();
		alertModal = new AlertModalPageHelper(basePage.getWebDriver());

	}

	@When("^User is on bootstrap alert page$")
	public void user_is_on_bootstrap_alert_page() throws Throwable {

		alertModal.clickOnAlertModelMenu();
		alertModal.clickOnBootstrapAlertSubMenu();

	}
	

	@Given("^User is on demo home screen test$")
	public void user_is_on_demo_home_screen() throws Throwable {
		
	}

	@When("^Click on alert buttons$")
	public void click_on_alert_buttons() throws Throwable {
		alertModal.clickOnAutoCloseMessageButton();

	}

	@Then("^Verify the bootstrap messages$")
	public void verify_the_bootstrap_messages() throws Throwable {
		boolean result = alertModal.VerifyMessageIsDisplayed();
		Assert.assertTrue(result);

	}

	@When("^User is on Window popup model page$")
	public void user_is_on_Window_popup_model_page() throws Throwable {
		alertModal.clickOnAlertModelMenu();
		alertModal.clickOnWindowPopUpModalSubMenu();
	}

	@Then("^Perform action and return back to original window$")
	public void perform_action_and_return_back_to_original_window()
			throws Throwable {
		alertModal.performActionOnFacebookWindow();
	}

}
