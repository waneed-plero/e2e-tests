describe('Sign up', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
    it('should not save email address for sign up', async () => {
        const testEmailAddress = 'waneed1@gmail.com';

        await element(by.id('onboarding-button')).tap();

        await expect(element(by.id('txt-sign-up-email'))).toBeVisible();
        await expect(element(by.id('txt-sign-up-email'))).toBeVisible();
        await element(by.id('txt-sign-up-email')).typeText(testEmailAddress);

        await expect(element(by.text('Email is already in use'))).toBeVisible();
    });
    it('should signup and receive otp code', async () => {
        const testEmailAddress = 'test11@test.com';
    
        await element(by.id('onboarding-button')).tap();
    
        await expect(element(by.id('txt-sign-up-email'))).toBeVisible();
        await element(by.id('txt-sign-up-email')).typeText(testEmailAddress);
    
        await expect(element(by.id('signup-button'))).toBeVisible();
        await element(by.id('signup-button')).tap();
    
        await expect(element(by.id('phone-number-text'))).toBeVisible();
        await element(by.id('phone-number-text')).typeText('12121212');
    
        await expect(element(by.id('submit-number'))).toBeVisible();
        await element(by.id('submit-number')).tap();
    
        await expect(element(by.id('verify-signup'))).toBeVisible();
    });
});
