using Microsoft.AspNetCore.Mvc;
using System;

[ApiController]
[Route("[controller]")]

public class CheckoutController : ControllerBase {
    [HttpPost]
    public ActionResult Checkout([FromBody] CheckoutRequest request) {
        try {
            Cart userCart = RetrieveCartForUser(request.UserId);
            if (userCart == null || userCart.products.Count == 0) {
                return BadRequest("Cart Is Empty.");
            }

            Order newOrder = userCart.Checkout(request.ShippingDetails, request.PaymentDetails);
            
            
            
        } catch (Exception e) { //TODO: Fix this to a real thing
            return BadRequest(e.Message);
        }
    }
}