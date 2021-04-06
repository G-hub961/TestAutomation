package TestRunners;

import java.io.File;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)
//String chromePath= System.getProperty("user.dir")+ File.separator + "Drivers" + File.separator + "chromedriver.exe";

@CucumberOptions(features= {"src\\test\\java\\com\\app\\features\\CreateUser.feature"}
        , monochrome = true
        , format = { "pretty", "html:target/htmlReport/","json:target/JsonReport.json",
		"com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html"}
        , glue = { "Scenarios" }
        , strict = true
        , dryRun= false
       
)

public class TestRunner extends AbstractTestNGCucumberTests
{
	
}
