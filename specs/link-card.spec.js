// import I18n from '../../src/i18n';
describe('Sign in', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
    it ('should link card details', async () => {
        const testEmailAddress = 'test05@test.com';
        const otpCode = '123456';
        const acountName = 'Any name';
        const creditCardNumber = '4005550000000001';
        const expiryDate = '0922';
        const cvv = '898';

        await element(by.id('onboarding-button')).tap();

        await expect(element(by.id('signupScreenContainer'))).toBeVisible();

        await expect(element(by.id('loginButtonContainer'))).toBeVisible();

        await expect(element(by.id('loginScreenButton'))).toBeVisible();
        await element(by.id('loginScreenButton')).tap();

        await expect(element(by.id('txt-sign-in-email'))).toBeVisible();
        await element(by.id('txt-sign-in-email')).typeText(testEmailAddress);

        await expect(element(by.id('login-button'))).toBeVisible();
        await element(by.id('login-button')).tap();

        await expect(element(by.id('otp-code'))).toBeVisible();
        await element(by.id('otp-code')).typeText(otpCode);

        await element(by.id('otp-submit-button')).tap();

        await expect(element(by.id('alert-button'))).toBeVisible();
        await element(by.id('alert-button')).tap();
        
        await element(by.id('profile')).tap();

        await expect(element(by.id('nav-list-item-1'))).toBeVisible();
        await element(by.id('nav-list-item-1')).tap();

        await element(by.id('link-my-card-button-for-money-in')).tap();

        await expect(element(by.id('acount-holder-name-input'))).toBeVisible();
        await element(by.id('acount-holder-name-input')).typeText(acountName);

        await element(by.id('card-number-input')).typeText(creditCardNumber);

        await element(by.id('expiry-date-input')).typeText(expiryDate);

        await element(by.id('cvv-input')).typeText(cvv);

        await element(by.id('screen')).swipe('up', 'slow', 0.5);
        await element(by.id('screen')).tap();

        await element(by.id('set-me-up-button')).tap();
        
        await expect(element(by.label('Submit'))).toBeVisible();
        await element(by.label('Submit')).tap();
    });
    it ('should logout', async () => {
        await expect(element(by.id('today'))).toBeVisible();
        await element(by.id('profile')).tap();
        await element(by.id('nav-list-item-2')).tap();
        await element(by.id('screen')).swipe('up', 'slow', 0.5);
        await element(by.id('logout-button')).tap();
        await element(by.label('Yes').and(by.type('_UIAlertControllerActionView'))).tap();
    });
    it ('should not link card details outside of singapore', async () => {
        const testEmailAddress = 'test6@gmail.com';
        const otpCode = '123456';
        const acountName = 'Any name';
        const creditCardNumber = '4462030000000000';
        const expiryDate = '0922';
        const cvv = '898';

        await element(by.id('onboarding-button')).tap();

        await expect(element(by.id('signupScreenContainer'))).toBeVisible();

        await expect(element(by.id('loginButtonContainer'))).toBeVisible();

        await expect(element(by.id('loginScreenButton'))).toBeVisible();
        await element(by.id('loginScreenButton')).tap();

        await expect(element(by.id('txt-sign-in-email'))).toBeVisible();
        await element(by.id('txt-sign-in-email')).typeText(testEmailAddress);

        await expect(element(by.id('login-button'))).toBeVisible();
        await element(by.id('login-button')).tap();

        await expect(element(by.id('otp-code'))).toBeVisible();
        await element(by.id('otp-code')).typeText(otpCode);

        await element(by.id('otp-submit-button')).tap();

        await expect(element(by.id('alert-button'))).toBeVisible();
        await element(by.id('alert-button')).tap();
        
        await element(by.id('profile')).tap();

        await expect(element(by.id('nav-list-item-1'))).toBeVisible();
        await element(by.id('nav-list-item-1')).tap();

        await element(by.id('link-my-card-button-for-money-in')).tap();

        await expect(element(by.id('acount-holder-name-input'))).toBeVisible();
        await element(by.id('acount-holder-name-input')).typeText(acountName);

        await element(by.id('card-number-input')).typeText(creditCardNumber);

        await element(by.id('expiry-date-input')).typeText(expiryDate);

        await element(by.id('cvv-input')).typeText(cvv);

        await element(by.id('screen')).swipe('up', 'slow', 0.5);
        await element(by.id('screen')).tap();

        await element(by.id('set-me-up-button')).tap();
        
        await expect(element(by.label('Only Singaporean debit cards are accepted'))).toBeVisible();
    });
});
