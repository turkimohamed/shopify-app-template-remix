import axios from 'axios';

const SATIM_API_URL = 'https://test.satim.dz/payment/rest/register.do';

export async function createSatimPaymentSession(orderNumber, amount, returnUrl, failUrl) {
  try {
    const response = await axios.get(SATIM_API_URL, {
      params: {
        userName: process.env.MERCHANT_USERNAME,
        password: process.env.MERCHANT_PASSWORD,
        orderNumber,
        amount,
        currency: '012',
        returnUrl,
        failUrl,
        language: 'FR',
        jsonParams: JSON.stringify({ force_terminal_id: 'E010901319' })
      },
    });

    if (response.data.formUrl) {
      return response.data.formUrl;
    } else {
      throw new Error(response.data.errorMessage);
    }
  } catch (error) {
    throw new Error('Error creating SATIM payment link: ' + error.message);
  }
}
