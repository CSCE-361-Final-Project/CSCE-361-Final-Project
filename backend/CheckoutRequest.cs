public class CheckoutRequest {
    public int UserId { get; set; }
    public string ShippingDetails { get; set; }
    public string PaymentDetails { get; set; }
    public List<Product> Products { get; set; }
}